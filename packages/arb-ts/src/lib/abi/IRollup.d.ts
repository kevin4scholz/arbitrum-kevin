/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface IRollupInterface extends ethers.utils.Interface {
  functions: {
    'completeChallenge(address,address)': FunctionFragment
    'initialize(bytes32,uint256,uint256,uint256,uint256,address,address,bytes,address[7])': FunctionFragment
    'returnOldDeposit(address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'completeChallenge',
    values: [string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BytesLike,
      [string, string, string, string, string, string, string]
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'returnOldDeposit',
    values: [string]
  ): string

  decodeFunctionResult(
    functionFragment: 'completeChallenge',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'returnOldDeposit',
    data: BytesLike
  ): Result

  events: {
    'NodeConfirmed(uint256,bytes32,uint256,bytes32,uint256)': EventFragment
    'NodeCreated(uint256,bytes32,bytes32,bytes32,uint256,uint256,bytes32,bytes32[3][2],uint256[4][2])': EventFragment
    'NodeRejected(uint256)': EventFragment
    'NodesDestroyed(uint256,uint256)': EventFragment
    'RollupChallengeStarted(address,address,address,uint256)': EventFragment
    'RollupCreated(bytes32)': EventFragment
    'StakerReassigned(address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'NodeConfirmed'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NodeCreated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NodeRejected'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NodesDestroyed'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RollupChallengeStarted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RollupCreated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'StakerReassigned'): EventFragment
}

export class IRollup extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IRollupInterface

  functions: {
    completeChallenge(
      winningStaker: string,
      losingStaker: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'completeChallenge(address,address)'(
      winningStaker: string,
      losingStaker: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    initialize(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      connectedContracts: [
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'initialize(bytes32,uint256,uint256,uint256,uint256,address,address,bytes,address[7])'(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      connectedContracts: [
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<ContractTransaction>

    returnOldDeposit(
      stakerAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'returnOldDeposit(address)'(
      stakerAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  completeChallenge(
    winningStaker: string,
    losingStaker: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'completeChallenge(address,address)'(
    winningStaker: string,
    losingStaker: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  initialize(
    _machineHash: BytesLike,
    _confirmPeriodBlocks: BigNumberish,
    _extraChallengeTimeBlocks: BigNumberish,
    _arbGasSpeedLimitPerBlock: BigNumberish,
    _baseStake: BigNumberish,
    _stakeToken: string,
    _owner: string,
    _extraConfig: BytesLike,
    connectedContracts: [
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ],
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'initialize(bytes32,uint256,uint256,uint256,uint256,address,address,bytes,address[7])'(
    _machineHash: BytesLike,
    _confirmPeriodBlocks: BigNumberish,
    _extraChallengeTimeBlocks: BigNumberish,
    _arbGasSpeedLimitPerBlock: BigNumberish,
    _baseStake: BigNumberish,
    _stakeToken: string,
    _owner: string,
    _extraConfig: BytesLike,
    connectedContracts: [
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ],
    overrides?: Overrides
  ): Promise<ContractTransaction>

  returnOldDeposit(
    stakerAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'returnOldDeposit(address)'(
    stakerAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    completeChallenge(
      winningStaker: string,
      losingStaker: string,
      overrides?: CallOverrides
    ): Promise<void>

    'completeChallenge(address,address)'(
      winningStaker: string,
      losingStaker: string,
      overrides?: CallOverrides
    ): Promise<void>

    initialize(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      connectedContracts: [
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: CallOverrides
    ): Promise<void>

    'initialize(bytes32,uint256,uint256,uint256,uint256,address,address,bytes,address[7])'(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      connectedContracts: [
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: CallOverrides
    ): Promise<void>

    returnOldDeposit(
      stakerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>

    'returnOldDeposit(address)'(
      stakerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    NodeConfirmed(
      nodeNum: BigNumberish | null,
      afterSendAcc: null,
      afterSendCount: null,
      afterLogAcc: null,
      afterLogCount: null
    ): EventFilter

    NodeCreated(
      nodeNum: BigNumberish | null,
      parentNodeHash: BytesLike | null,
      nodeHash: null,
      executionHash: null,
      inboxMaxCount: null,
      afterInboxBatchEndCount: null,
      afterInboxBatchAcc: null,
      assertionBytes32Fields: null,
      assertionIntFields: null
    ): EventFilter

    NodeRejected(nodeNum: BigNumberish | null): EventFilter

    NodesDestroyed(
      startNode: BigNumberish | null,
      endNode: BigNumberish | null
    ): EventFilter

    RollupChallengeStarted(
      challengeContract: string | null,
      asserter: null,
      challenger: null,
      challengedNode: null
    ): EventFilter

    RollupCreated(machineHash: null): EventFilter

    StakerReassigned(staker: string | null, newNode: null): EventFilter
  }

  estimateGas: {
    completeChallenge(
      winningStaker: string,
      losingStaker: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'completeChallenge(address,address)'(
      winningStaker: string,
      losingStaker: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    initialize(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      connectedContracts: [
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<BigNumber>

    'initialize(bytes32,uint256,uint256,uint256,uint256,address,address,bytes,address[7])'(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      connectedContracts: [
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<BigNumber>

    returnOldDeposit(
      stakerAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'returnOldDeposit(address)'(
      stakerAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    completeChallenge(
      winningStaker: string,
      losingStaker: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'completeChallenge(address,address)'(
      winningStaker: string,
      losingStaker: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    initialize(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      connectedContracts: [
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'initialize(bytes32,uint256,uint256,uint256,uint256,address,address,bytes,address[7])'(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _owner: string,
      _extraConfig: BytesLike,
      connectedContracts: [
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    returnOldDeposit(
      stakerAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'returnOldDeposit(address)'(
      stakerAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
