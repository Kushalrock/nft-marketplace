import { CryptoHookFactory, Web3Dependencies } from "@_types/hooks";
import useSWR from "swr";

type AccountHookFactory = CryptoHookFactory<string, string>;
export type UseAccountHook = ReturnType<AccountHookFactory>
export const hookFactory: AccountHookFactory = (deps) => (params) => {
    const swrRes = useSWR("web3/useAccount", () => {
        console.log(deps);
        return "Test User";
    });
    return swrRes;
};