/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721Upgradeable,
  ERC721UpgradeableInterface,
} from "../../../../../@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611225806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b3578063b88d4fde146101c6578063c87b56dd146101d9578063e985e9c5146101ec57600080fd5b80636352211e1461017757806370a082311461018a57806395d89b41146101ab57600080fd5b806301ffc9a7146100d457806306fdde03146100fc578063081812fc14610111578063095ea7b31461013c57806323b872dd1461015157806342842e0e14610164575b600080fd5b6100e76100e2366004610d49565b6101ff565b60405190151581526020015b60405180910390f35b610104610251565b6040516100f39190610db6565b61012461011f366004610dc9565b6102e3565b6040516001600160a01b0390911681526020016100f3565b61014f61014a366004610dfe565b61037d565b005b61014f61015f366004610e28565b610492565b61014f610172366004610e28565b6104c3565b610124610185366004610dc9565b6104de565b61019d610198366004610e64565b610555565b6040519081526020016100f3565b6101046105dc565b61014f6101c1366004610e7f565b6105eb565b61014f6101d4366004610ed1565b6105fa565b6101046101e7366004610dc9565b610632565b6100e76101fa366004610fad565b61071a565b60006001600160e01b031982166380ac58cd60e01b148061023057506001600160e01b03198216635b5e139f60e01b145b8061024b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606065805461026090610fe0565b80601f016020809104026020016040519081016040528092919081815260200182805461028c90610fe0565b80156102d95780601f106102ae576101008083540402835291602001916102d9565b820191906000526020600020905b8154815290600101906020018083116102bc57829003601f168201915b5050505050905090565b6000818152606760205260408120546001600160a01b03166103615760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b6000610388826104de565b9050806001600160a01b0316836001600160a01b0316036103f55760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610358565b336001600160a01b03821614806104115750610411813361071a565b6104835760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610358565b61048d8383610748565b505050565b61049c33826107b6565b6104b85760405162461bcd60e51b81526004016103589061101a565b61048d83838361088d565b61048d838383604051806020016040528060008152506105fa565b6000818152606760205260408120546001600160a01b03168061024b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610358565b60006001600160a01b0382166105c05760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610358565b506001600160a01b031660009081526068602052604090205490565b60606066805461026090610fe0565b6105f6338383610a2d565b5050565b61060433836107b6565b6106205760405162461bcd60e51b81526004016103589061101a565b61062c84848484610afb565b50505050565b6000818152606760205260409020546060906001600160a01b03166106b15760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610358565b60006106c860408051602081019091526000815290565b905060008151116106e85760405180602001604052806000815250610713565b806106f284610b2e565b60405160200161070392919061106b565b6040516020818303038152906040525b9392505050565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061077d826104de565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152606760205260408120546001600160a01b031661082f5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610358565b600061083a836104de565b9050806001600160a01b0316846001600160a01b031614806108755750836001600160a01b031661086a846102e3565b6001600160a01b0316145b806108855750610885818561071a565b949350505050565b826001600160a01b03166108a0826104de565b6001600160a01b0316146109085760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610358565b6001600160a01b03821661096a5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610358565b610975600082610748565b6001600160a01b038316600090815260686020526040812080546001929061099e9084906110b0565b90915550506001600160a01b03821660009081526068602052604081208054600192906109cc9084906110c3565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031603610a8e5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610358565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610b0684848461088d565b610b1284848484610c2f565b61062c5760405162461bcd60e51b8152600401610358906110d6565b606081600003610b555750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b7f5780610b6981611128565b9150610b789050600a83611157565b9150610b59565b60008167ffffffffffffffff811115610b9a57610b9a610ebb565b6040519080825280601f01601f191660200182016040528015610bc4576020820181803683370190505b5090505b841561088557610bd96001836110b0565b9150610be6600a8661116b565b610bf19060306110c3565b60f81b818381518110610c0657610c0661117f565b60200101906001600160f81b031916908160001a905350610c28600a86611157565b9450610bc8565b60006001600160a01b0384163b15610d2557604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c73903390899088908890600401611195565b6020604051808303816000875af1925050508015610cae575060408051601f3d908101601f19168201909252610cab918101906111d2565b60015b610d0b573d808015610cdc576040519150601f19603f3d011682016040523d82523d6000602084013e610ce1565b606091505b508051600003610d035760405162461bcd60e51b8152600401610358906110d6565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610885565b506001949350505050565b6001600160e01b031981168114610d4657600080fd5b50565b600060208284031215610d5b57600080fd5b813561071381610d30565b60005b83811015610d81578181015183820152602001610d69565b50506000910152565b60008151808452610da2816020860160208601610d66565b601f01601f19169290920160200192915050565b6020815260006107136020830184610d8a565b600060208284031215610ddb57600080fd5b5035919050565b80356001600160a01b0381168114610df957600080fd5b919050565b60008060408385031215610e1157600080fd5b610e1a83610de2565b946020939093013593505050565b600080600060608486031215610e3d57600080fd5b610e4684610de2565b9250610e5460208501610de2565b9150604084013590509250925092565b600060208284031215610e7657600080fd5b61071382610de2565b60008060408385031215610e9257600080fd5b610e9b83610de2565b915060208301358015158114610eb057600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610ee757600080fd5b610ef085610de2565b9350610efe60208601610de2565b925060408501359150606085013567ffffffffffffffff80821115610f2257600080fd5b818701915087601f830112610f3657600080fd5b813581811115610f4857610f48610ebb565b604051601f8201601f19908116603f01168101908382118183101715610f7057610f70610ebb565b816040528281528a6020848701011115610f8957600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610fc057600080fd5b610fc983610de2565b9150610fd760208401610de2565b90509250929050565b600181811c90821680610ff457607f821691505b60208210810361101457634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000835161107d818460208801610d66565b835190830190611091818360208801610d66565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561024b5761024b61109a565b8082018082111561024b5761024b61109a565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60006001820161113a5761113a61109a565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261116657611166611141565b500490565b60008261117a5761117a611141565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906111c890830184610d8a565b9695505050505050565b6000602082840312156111e457600080fd5b815161071381610d3056fea2646970667358221220306c2c91afee346f52f8e82430e82de1e78db2be5524982c0f8ed8ad1352c17064736f6c63430008130033";

type ERC721UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC721UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721Upgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721Upgradeable {
    return super.attach(address) as ERC721Upgradeable;
  }
  override connect(signer: Signer): ERC721Upgradeable__factory {
    return super.connect(signer) as ERC721Upgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721UpgradeableInterface {
    return new utils.Interface(_abi) as ERC721UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Upgradeable;
  }
}