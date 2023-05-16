// SPDX-License-Identifier: GPL-3.0

/// @title The Nouns ERC-721 token

/*********************************
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 * ░░░░░░█████████░░█████████░░░ *
 * ░░░░░░██░░░████░░██░░░████░░░ *
 * ░░██████░░░████████░░░████░░░ *
 * ░░██░░██░░░████░░██░░░████░░░ *
 * ░░██░░██░░░████░░██░░░████░░░ *
 * ░░░░░░█████████░░█████████░░░ *
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 *********************************/

pragma solidity ^0.8.6;

import { OwnableUpgradeable } from '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import { ERC721Checkpointable } from './base/ERC721Checkpointable.sol';
import { INounsDescriptorMinimal } from '../../../../interfaces/INounsDescriptorMinimal.sol';
import { INounsSeeder } from '../../../../interfaces/INounsSeeder.sol';
import { INounsToken } from '../../../../interfaces/INounsToken.sol';
import { ERC721 } from './base/ERC721.sol';
import { IERC721 } from '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import { UUPSUpgradeable } from '@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol';
import { INounsDAOForkEscrow } from '../../../NounsDAOInterfaces.sol';

contract NounsTokenFork is INounsToken, OwnableUpgradeable, ERC721Checkpointable, UUPSUpgradeable {
    error OnlyOwner();
    error OnlyTokenOwnerCanClaim();
    error OnlyOriginalDAO();
    error NoundersCannotBeAddressZero();
    error OnlyDuringForkingPeriod();

    // An address who has permissions to mint Nouns
    address public minter;

    // The Nouns token URI descriptor
    INounsDescriptorMinimal public descriptor;

    // The Nouns token seeder
    INounsSeeder public seeder;

    INounsDAOForkEscrow public escrow;

    uint32 public forkId;

    uint256 public remainingTokensToClaim;

    uint256 public forkingPeriodEndTimestamp;

    // Whether the minter can be updated
    bool public isMinterLocked;

    // Whether the descriptor can be updated
    bool public isDescriptorLocked;

    // Whether the seeder can be updated
    bool public isSeederLocked;

    // The noun seeds
    mapping(uint256 => INounsSeeder.Seed) public seeds;

    // The internal noun ID tracker
    uint256 private _currentNounId;

    // IPFS content hash of contract-level metadata
    string private _contractURIHash = 'QmZi1n79FqWt2tTLwCqiy6nLM6xLGRsEPQ5JmReJQKNNzX';

    /**
     * @notice Require that the minter has not been locked.
     */
    modifier whenMinterNotLocked() {
        require(!isMinterLocked, 'Minter is locked');
        _;
    }

    /**
     * @notice Require that the descriptor has not been locked.
     */
    modifier whenDescriptorNotLocked() {
        require(!isDescriptorLocked, 'Descriptor is locked');
        _;
    }

    /**
     * @notice Require that the seeder has not been locked.
     */
    modifier whenSeederNotLocked() {
        require(!isSeederLocked, 'Seeder is locked');
        _;
    }

    /**
     * @notice Require that the sender is the minter.
     */
    modifier onlyMinter() {
        require(msg.sender == minter, 'Sender is not the minter');
        _;
    }

    function initialize(
        address _owner,
        address _minter,
        INounsDAOForkEscrow _escrow,
        uint32 _forkId,
        uint256 startNounId,
        uint256 tokensToClaim,
        uint256 _forkingPeriodEndTimestamp
    ) external initializer {
        __ERC721_init('Nouns', 'NOUN');
        _transferOwnership(_owner);
        minter = _minter;
        escrow = _escrow;
        forkId = _forkId;
        _currentNounId = startNounId;
        remainingTokensToClaim = tokensToClaim;
        forkingPeriodEndTimestamp = _forkingPeriodEndTimestamp;

        NounsTokenFork originalToken = NounsTokenFork(address(escrow.nounsToken()));
        descriptor = originalToken.descriptor();
        seeder = originalToken.seeder();
    }

    function claimFromEscrow(uint256[] calldata tokenIds) external {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 nounId = tokenIds[i];
            if (escrow.ownerOfEscrowedToken(forkId, nounId) != msg.sender) revert OnlyTokenOwnerCanClaim();

            _mintWithOriginalSeed(msg.sender, nounId);
        }

        remainingTokensToClaim -= tokenIds.length;
    }

    function claimDuringForkPeriod(address to, uint256[] calldata tokenIds) external {
        if (msg.sender != escrow.dao()) revert OnlyOriginalDAO();
        if (block.timestamp > forkingPeriodEndTimestamp) revert OnlyDuringForkingPeriod();

        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 nounId = tokenIds[i];
            _mintWithOriginalSeed(to, nounId);
        }
    }

    function _mintWithOriginalSeed(address to, uint256 nounId) internal {
        (uint48 background, uint48 body, uint48 accessory, uint48 head, uint48 glasses) = NounsTokenFork(
            address(escrow.nounsToken())
        ).seeds(nounId);
        INounsSeeder.Seed memory seed = INounsSeeder.Seed(background, body, accessory, head, glasses);

        seeds[nounId] = seed;
        _mint(owner(), to, nounId);

        emit NounCreated(nounId, seed);
    }

    /**
     * @notice The IPFS URI of contract-level metadata.
     */
    function contractURI() public view returns (string memory) {
        return string(abi.encodePacked('ipfs://', _contractURIHash));
    }

    /**
     * @notice Set the _contractURIHash.
     * @dev Only callable by the owner.
     */
    function setContractURIHash(string memory newContractURIHash) external onlyOwner {
        _contractURIHash = newContractURIHash;
    }

    /**
     * @notice Mint a Noun to the minter, along with a possible nounders reward
     * Noun. Nounders reward Nouns are minted every 10 Nouns, starting at 0,
     * until 183 nounder Nouns have been minted (5 years w/ 24 hour auctions).
     * @dev Call _mintTo with the to address(es).
     */
    function mint() public override onlyMinter returns (uint256) {
        return _mintTo(minter, _currentNounId++);
    }

    /**
     * @notice Burn a noun.
     */
    function burn(uint256 nounId) public override onlyMinter {
        _burn(nounId);
        emit NounBurned(nounId);
    }

    /**
     * @notice A distinct Uniform Resource Identifier (URI) for a given asset.
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), 'NounsToken: URI query for nonexistent token');
        return descriptor.tokenURI(tokenId, seeds[tokenId]);
    }

    /**
     * @notice Similar to `tokenURI`, but always serves a base64 encoded data URI
     * with the JSON contents directly inlined.
     */
    function dataURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), 'NounsToken: URI query for nonexistent token');
        return descriptor.dataURI(tokenId, seeds[tokenId]);
    }

    /**
     * @notice Set the token minter.
     * @dev Only callable by the owner when not locked.
     */
    function setMinter(address _minter) external override onlyOwner whenMinterNotLocked {
        minter = _minter;

        emit MinterUpdated(_minter);
    }

    /**
     * @notice Lock the minter.
     * @dev This cannot be reversed and is only callable by the owner when not locked.
     */
    function lockMinter() external override onlyOwner whenMinterNotLocked {
        isMinterLocked = true;

        emit MinterLocked();
    }

    /**
     * @notice Set the token URI descriptor.
     * @dev Only callable by the owner when not locked.
     */
    function setDescriptor(INounsDescriptorMinimal _descriptor) external override onlyOwner whenDescriptorNotLocked {
        descriptor = _descriptor;

        emit DescriptorUpdated(_descriptor);
    }

    /**
     * @notice Lock the descriptor.
     * @dev This cannot be reversed and is only callable by the owner when not locked.
     */
    function lockDescriptor() external override onlyOwner whenDescriptorNotLocked {
        isDescriptorLocked = true;

        emit DescriptorLocked();
    }

    /**
     * @notice Set the token seeder.
     * @dev Only callable by the owner when not locked.
     */
    function setSeeder(INounsSeeder _seeder) external override onlyOwner whenSeederNotLocked {
        seeder = _seeder;

        emit SeederUpdated(_seeder);
    }

    /**
     * @notice Lock the seeder.
     * @dev This cannot be reversed and is only callable by the owner when not locked.
     */
    function lockSeeder() external override onlyOwner whenSeederNotLocked {
        isSeederLocked = true;

        emit SeederLocked();
    }

    /**
     * @notice Mint a Noun with `nounId` to the provided `to` address.
     */
    function _mintTo(address to, uint256 nounId) internal returns (uint256) {
        INounsSeeder.Seed memory seed = seeds[nounId] = seeder.generateSeed(nounId, descriptor);

        _mint(owner(), to, nounId);
        emit NounCreated(nounId, seed);

        return nounId;
    }

    /**
     * @dev Function that should revert when `msg.sender` is not authorized to upgrade the contract. Called by
     * {upgradeTo} and {upgradeToAndCall}.
     *
     * Normally, this function will use an xref:access.adoc[access control] modifier such as {Ownable-onlyOwner}.
     *
     * ```solidity
     * function _authorizeUpgrade(address) internal override onlyOwner {}
     * ```
     */
    function _authorizeUpgrade(address) internal view override onlyOwner {}
}