import { ChainId } from '@uniswap/sdk';
import MULTICALL_ABI from './abi.json';

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
    [ChainId.TBSC]: '0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C',   // from: https://github.com/makerdao/multicall
};

export { MULTICALL_ABI, MULTICALL_NETWORKS };
