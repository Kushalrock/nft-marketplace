import { Web3Dependencies } from "@_types/hooks";
import { hookFactory, UseAccountHook } from "./useAccount"

export type Web3Hooks = {
    useAccount: UseAccountHook;
}

export type SetupHooks = {
    (d: Web3Dependencies): Web3Hooks
}

export const setupHooks : SetupHooks = (d) =>{
    return{
        useAccount: hookFactory(d)
    }
}