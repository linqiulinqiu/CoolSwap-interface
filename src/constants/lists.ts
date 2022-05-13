const AMM_LIST = "https://raw.githubusercontent.com/linqiulinqiu/CoolSwap-interface/master/public/json/amm-list.json"

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [AMM_LIST];

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [AMM_LIST];
