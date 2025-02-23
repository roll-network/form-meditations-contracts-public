/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MigratorETH, MigratorETHInterface } from "../MigratorETH";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_L1Bridge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "L1Bridge",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_destination",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_L2token",
        type: "address",
      },
    ],
    name: "setL2mapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161095d38038061095d83398101604081905261002f916100e6565b816001600160a01b03811661005e57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6100678161007a565b506001600160a01b031660805250610119565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100e157600080fd5b919050565b600080604083850312156100f957600080fd5b610102836100ca565b9150610110602084016100ca565b90509250929050565b60805161081c6101416000396000818160890152818161032401526103f8015261081c6000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806340da848e14610067578063715018a61461007c57806380d1c3b2146100845780638da5cb5b146100c7578063abccc77e146100d8578063f2fde38b146100eb575b600080fd5b61007a6100753660046105f1565b6100fe565b005b61007a610134565b6100ab7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6000546001600160a01b03166100ab565b61007a6100e6366004610670565b610148565b61007a6100f9366004610704565b61051a565b610106610558565b6001600160a01b03918216600090815260016020526040902080546001600160a01b03191691909216179055565b61013c610558565b6101466000610585565b565b83811461018d5760405162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be988a9c8ea8960931b60448201526064015b60405180910390fd5b60005b848110156105115760006001818888858181106101af576101af610726565b90506020020160208101906101c49190610704565b6001600160a01b03908116825260208201929092526040016000205416036102235760405162461bcd60e51b8152602060048201526012602482015271496e76616c6964204c32206d617070696e6760701b6044820152606401610184565b85858281811061023557610235610726565b905060200201602081019061024a9190610704565b6001600160a01b03166323b872dd333086868681811061026c5761026c610726565b6040516001600160e01b031960e088901b1681526001600160a01b039586166004820152949093166024850152506020909102013560448201526064016020604051808303816000875af11580156102c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ec919061073c565b508585828181106102ff576102ff610726565b90506020020160208101906103149190610704565b6001600160a01b031663095ea7b37f000000000000000000000000000000000000000000000000000000000000000085858581811061035557610355610726565b6040516001600160e01b031960e087901b1681526001600160a01b03909416600485015260200291909101356024830152506044016020604051808303816000875af11580156103a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cd919061073c565b50604080516001600160a01b03891660208201526000910160405160208183030381529060405290507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663838b252088888581811061043757610437610726565b905060200201602081019061044c9190610704565b600160008b8b8881811061046257610462610726565b90506020020160208101906104779190610704565b6001600160a01b03908116825260208201929092526040016000205416888888888181106104a7576104a7610726565b905060200201356000876040518763ffffffff1660e01b81526004016104d29695949392919061075e565b600060405180830381600087803b1580156104ec57600080fd5b505af1158015610500573d6000803e3d6000fd5b505060019093019250610190915050565b50505050505050565b610522610558565b6001600160a01b03811661054c57604051631e4fbdf760e01b815260006004820152602401610184565b61055581610585565b50565b6000546001600160a01b031633146101465760405163118cdaa760e01b8152336004820152602401610184565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146105ec57600080fd5b919050565b6000806040838503121561060457600080fd5b61060d836105d5565b915061061b602084016105d5565b90509250929050565b60008083601f84011261063657600080fd5b50813567ffffffffffffffff81111561064e57600080fd5b6020830191508360208260051b850101111561066957600080fd5b9250929050565b6000806000806000806080878903121561068957600080fd5b610692876105d5565b9550602087013567ffffffffffffffff808211156106af57600080fd5b6106bb8a838b01610624565b90975095508591506106cf60408a016105d5565b945060608901359150808211156106e557600080fd5b506106f289828a01610624565b979a9699509497509295939492505050565b60006020828403121561071657600080fd5b61071f826105d5565b9392505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561074e57600080fd5b8151801515811461071f57600080fd5b600060018060a01b03808916835260208189166020850152818816604085015286606085015263ffffffff8616608085015260c060a0850152845191508160c085015260005b828110156107c05785810182015185820160e0015281016107a4565b5050600060e0828501015260e0601f19601f83011684010191505097965050505050505056fea26469706673582212201a5b79e1bf7b74d20d3fbf6f571481b7be74ef7869f65966e83a86381435c03a64736f6c63430008180033";

type MigratorETHConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MigratorETHConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MigratorETH__factory extends ContractFactory {
  constructor(...args: MigratorETHConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MigratorETH";
  }

  deploy(
    initialOwner: string,
    _L1Bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MigratorETH> {
    return super.deploy(
      initialOwner,
      _L1Bridge,
      overrides || {}
    ) as Promise<MigratorETH>;
  }
  getDeployTransaction(
    initialOwner: string,
    _L1Bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialOwner, _L1Bridge, overrides || {});
  }
  attach(address: string): MigratorETH {
    return super.attach(address) as MigratorETH;
  }
  connect(signer: Signer): MigratorETH__factory {
    return super.connect(signer) as MigratorETH__factory;
  }
  static readonly contractName: "MigratorETH";
  public readonly contractName: "MigratorETH";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigratorETHInterface {
    return new utils.Interface(_abi) as MigratorETHInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MigratorETH {
    return new Contract(address, _abi, signerOrProvider) as MigratorETH;
  }
}
