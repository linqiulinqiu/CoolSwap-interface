import { ChainId } from '@uniswap/sdk';
import MULTICALL_ABI from './abi.json';

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
    [ChainId.TBSC]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',   //TODO: this is NOT a multicall address
};

export { MULTICALL_ABI, MULTICALL_NETWORKS };
