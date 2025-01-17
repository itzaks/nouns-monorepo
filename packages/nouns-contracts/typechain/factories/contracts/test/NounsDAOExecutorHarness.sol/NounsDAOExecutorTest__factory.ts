/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NounsDAOExecutorTest,
  NounsDAOExecutorTestInterface,
} from "../../../../contracts/test/NounsDAOExecutorHarness.sol/NounsDAOExecutorTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    inputs: [],
    name: "MAXIMUM_DELAY",
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
    inputs: [],
    name: "MINIMUM_DELAY",
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
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Administered",
        name: "administered",
        type: "address",
      },
    ],
    name: "harnessAcceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    name: "harnessSetAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
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
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516111d03803806111d083398101604081905261002f916100e7565b816202a300610042565b60405180910390fd5b62278d008111156100bd576040805162461bcd60e51b81526020600482015260248101919091527f4e6f756e7344414f4578656375746f723a3a73657444656c61793a2044656c6160448201527f79206d757374206e6f7420657863656564206d6178696d756d2064656c61792e6064820152608401610039565b50600080546001600160a01b0319166001600160a01b039290921691909117905560025550610121565b600080604083850312156100fa57600080fd5b82516001600160a01b038116811461011157600080fd5b6020939093015192949293505050565b6110a0806101306000396000f3fe6080604052600436106100e05760003560e01c806372b812b411610084578063e177246e11610056578063e177246e14610255578063f2b0653714610275578063f79efaf1146102b5578063f851a440146102d557005b806372b812b4146101f05780637d645fab14610210578063b1b43ae514610227578063c1a287e21461023e57005b80633a66f901116100bd5780633a66f9011461016c5780634dd18bf51461019a578063591fcdfe146101ba5780636a42b8f8146101da57005b80630825f38f146100e95780630e18b6811461011f578063267822471461013457005b366100e757005b005b3480156100f557600080fd5b50610109610104366004610de1565b6102f5565b6040516101169190610ee4565b60405180910390f35b34801561012b57600080fd5b506100e7610685565b34801561014057600080fd5b50600154610154906001600160a01b031681565b6040516001600160a01b039091168152602001610116565b34801561017857600080fd5b5061018c610187366004610de1565b610750565b604051908152602001610116565b3480156101a657600080fd5b506100e76101b5366004610efe565b61090c565b3480156101c657600080fd5b506100e76101d5366004610de1565b6109dc565b3480156101e657600080fd5b5061018c60025481565b3480156101fc57600080fd5b506100e761020b366004610efe565b610af6565b34801561021c57600080fd5b5061018c62278d0081565b34801561023357600080fd5b5061018c6202a30081565b34801561024a57600080fd5b5061018c6212750081565b34801561026157600080fd5b506100e7610270366004610f1b565b610b2f565b34801561028157600080fd5b506102a5610290366004610f1b565b60036020526000908152604090205460ff1681565b6040519015158152602001610116565b3480156102c157600080fd5b506100e76102d0366004610efe565b610cd5565b3480156102e157600080fd5b50600054610154906001600160a01b031681565b6000546060906001600160a01b0316331461036d576040805162461bcd60e51b815260206004820152602481019190915260008051602061104b83398151915260448201527f74696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e60648201526084015b60405180910390fd5b60008686868686604051602001610388959493929190610f34565b60408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166104215760405162461bcd60e51b8152602060048201526045602482015260008051602061104b83398151915260448201527f74696f6e3a205472616e73616374696f6e206861736e2774206265656e20717560648201526432bab2b21760d91b608482015260a401610364565b8242101561049b5760405162461bcd60e51b815260206004820152604d602482015260008051602061104b83398151915260448201527f74696f6e3a205472616e73616374696f6e206861736e2774207375727061737360648201526c32b2103a34b6b2903637b1b59760991b608482015260a401610364565b6104a86212750084610f80565b42111561050b5760405162461bcd60e51b815260206004820152603b602482015260008051602061104b83398151915260448201527f74696f6e3a205472616e73616374696f6e206973207374616c652e00000000006064820152608401610364565b6000818152600360205260408120805460ff1916905585516060910361053257508361055e565b85805190602001208560405160200161054c929190610fa7565b60405160208183030381529060405290505b600080896001600160a01b0316898460405161057a9190610fd8565b60006040518083038185875af1925050503d80600081146105b7576040519150601f19603f3d011682016040523d82523d6000602084013e6105bc565b606091505b5091509150816106305760405162461bcd60e51b8152602060048201526045602482015260008051602061104b83398151915260448201527f74696f6e3a205472616e73616374696f6e20657865637574696f6e2072657665606482015264393a32b21760d91b608482015260a401610364565b896001600160a01b0316847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b6040516106709493929190610ff4565b60405180910390a39998505050505050505050565b6001546001600160a01b03163314610707576040805162461bcd60e51b81526020600482015260248101919091527f4e6f756e7344414f4578656375746f723a3a61636365707441646d696e3a204360448201527f616c6c206d75737420636f6d652066726f6d2070656e64696e6741646d696e2e6064820152608401610364565b60008054336001600160a01b0319918216811783556001805490921690915560405190917f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c91a2565b600080546001600160a01b031633146107d15760405162461bcd60e51b815260206004820152603e60248201527f4e6f756e7344414f4578656375746f723a3a71756575655472616e736163746960448201527f6f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e00006064820152608401610364565b6002546107de9042610f80565b82101561086d5760405162461bcd60e51b815260206004820152605160248201527f4e6f756e7344414f4578656375746f723a3a71756575655472616e736163746960448201527f6f6e3a20457374696d6174656420657865637574696f6e20626c6f636b206d7560648201527039ba1039b0ba34b9b33c903232b630bc9760791b608482015260a401610364565b60008686868686604051602001610888959493929190610f34565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916600117905591506001600160a01b0388169082907f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f906108fa908a908a908a908a90610ff4565b60405180910390a39695505050505050565b3330146109925760405162461bcd60e51b815260206004820152604860248201527f4e6f756e7344414f4578656375746f723a3a73657450656e64696e6741646d6960448201527f6e3a2043616c6c206d75737420636f6d652066726f6d204e6f756e7344414f456064820152673c32b1baba37b91760c11b608482015260a401610364565b600180546001600160a01b0319166001600160a01b0383169081179091556040517f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75690600090a250565b6000546001600160a01b03163314610a5c5760405162461bcd60e51b815260206004820152603f60248201527f4e6f756e7344414f4578656375746f723a3a63616e63656c5472616e7361637460448201527f696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e006064820152608401610364565b60008585858585604051602001610a77959493929190610f34565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916905591506001600160a01b0387169082907f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8790610ae6908990899089908990610ff4565b60405180910390a3505050505050565b6000546001600160a01b03163314610b0d57600080fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b333014610bae5760405162461bcd60e51b815260206004820152604160248201527f4e6f756e7344414f4578656375746f723a3a73657444656c61793a2043616c6c60448201527f206d75737420636f6d652066726f6d204e6f756e7344414f4578656375746f726064820152601760f91b608482015260a401610364565b6202a300811015610c275760405162461bcd60e51b815260206004820152603c60248201527f4e6f756e7344414f4578656375746f723a3a73657444656c61793a2044656c6160448201527f79206d75737420657863656564206d696e696d756d2064656c61792e000000006064820152608401610364565b62278d00811115610ca2576040805162461bcd60e51b81526020600482015260248101919091527f4e6f756e7344414f4578656375746f723a3a73657444656c61793a2044656c6160448201527f79206d757374206e6f7420657863656564206d6178696d756d2064656c61792e6064820152608401610364565b600281905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b806001600160a01b031663e9c714f26040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610d15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d399190611031565b5050565b6001600160a01b0381168114610d5257600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115610d8657610d86610d55565b604051601f8501601f19908116603f01168101908282118183101715610dae57610dae610d55565b81604052809350858152868686011115610dc757600080fd5b858560208301376000602087830101525050509392505050565b600080600080600060a08688031215610df957600080fd5b8535610e0481610d3d565b945060208601359350604086013567ffffffffffffffff80821115610e2857600080fd5b818801915088601f830112610e3c57600080fd5b610e4b89833560208501610d6b565b94506060880135915080821115610e6157600080fd5b508601601f81018813610e7357600080fd5b610e8288823560208401610d6b565b95989497509295608001359392505050565b60005b83811015610eaf578181015183820152602001610e97565b50506000910152565b60008151808452610ed0816020860160208601610e94565b601f01601f19169290920160200192915050565b602081526000610ef76020830184610eb8565b9392505050565b600060208284031215610f1057600080fd5b8135610ef781610d3d565b600060208284031215610f2d57600080fd5b5035919050565b60018060a01b038616815284602082015260a060408201526000610f5b60a0830186610eb8565b8281036060840152610f6d8186610eb8565b9150508260808301529695505050505050565b80820180821115610fa157634e487b7160e01b600052601160045260246000fd5b92915050565b6001600160e01b0319831681528151600090610fca816004850160208701610e94565b919091016004019392505050565b60008251610fea818460208701610e94565b9190910192915050565b84815260806020820152600061100d6080830186610eb8565b828103604084015261101f8186610eb8565b91505082606083015295945050505050565b60006020828403121561104357600080fd5b505191905056fe4e6f756e7344414f4578656375746f723a3a657865637574655472616e736163a2646970667358221220d1d64b349fb18471af9ea31eeec2cdb4ec4fbc683998a9526d4e0cc2f3ac881d64736f6c63430008130033";

type NounsDAOExecutorTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NounsDAOExecutorTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NounsDAOExecutorTest__factory extends ContractFactory {
  constructor(...args: NounsDAOExecutorTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NounsDAOExecutorTest> {
    return super.deploy(
      admin_,
      delay_,
      overrides || {}
    ) as Promise<NounsDAOExecutorTest>;
  }
  override getDeployTransaction(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  override attach(address: string): NounsDAOExecutorTest {
    return super.attach(address) as NounsDAOExecutorTest;
  }
  override connect(signer: Signer): NounsDAOExecutorTest__factory {
    return super.connect(signer) as NounsDAOExecutorTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NounsDAOExecutorTestInterface {
    return new utils.Interface(_abi) as NounsDAOExecutorTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsDAOExecutorTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NounsDAOExecutorTest;
  }
}
