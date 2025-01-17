/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NounsDAODataEvents,
  NounsDAODataEventsInterface,
} from "../../../../contracts/governance/data/NounsDAODataEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "slug",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "support",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "CandidateFeedbackSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldCreateCandidateCost",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newCreateCandidateCost",
        type: "uint256",
      },
    ],
    name: "CreateCandidateCostSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ETHWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldFeeRecipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newFeeRecipient",
        type: "address",
      },
    ],
    name: "FeeRecipientSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "support",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "FeedbackSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "slug",
        type: "string",
      },
    ],
    name: "ProposalCandidateCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "slug",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalIdToUpdate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "encodedProposalHash",
        type: "bytes32",
      },
    ],
    name: "ProposalCandidateCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "slug",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalIdToUpdate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "encodedProposalHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "ProposalCandidateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expirationTimestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "slug",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalIdToUpdate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "encodedPropHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "sigDigest",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "SignatureAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldUpdateCandidateCost",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newUpdateCandidateCost",
        type: "uint256",
      },
    ],
    name: "UpdateCandidateCostSet",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212206ac1a93eec8143d02ace7eaed14fb0ef0dc7ec78d0bcd49ad2695f058ac4ec4c64736f6c63430008130033";

type NounsDAODataEventsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NounsDAODataEventsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NounsDAODataEvents__factory extends ContractFactory {
  constructor(...args: NounsDAODataEventsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NounsDAODataEvents> {
    return super.deploy(overrides || {}) as Promise<NounsDAODataEvents>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NounsDAODataEvents {
    return super.attach(address) as NounsDAODataEvents;
  }
  override connect(signer: Signer): NounsDAODataEvents__factory {
    return super.connect(signer) as NounsDAODataEvents__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NounsDAODataEventsInterface {
    return new utils.Interface(_abi) as NounsDAODataEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsDAODataEvents {
    return new Contract(address, _abi, signerOrProvider) as NounsDAODataEvents;
  }
}
