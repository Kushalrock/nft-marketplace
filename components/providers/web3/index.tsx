import { ethers } from "ethers";
import { createContext, FunctionComponent, useContext, useEffect, useState } from "react";
import { createDefaultState, Web3State } from "./utils";



interface Props {
    children: React.ReactNode;
}
const Web3Context = createContext<Web3State>(createDefaultState());

const Web3Provider: FunctionComponent<Props> = ({children}) => {
    const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());
    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum as any);
        function initWeb3(){
            setWeb3Api({ethereum: window.ethereum, provider: null, contract: null, isLoading: false});
        }

        initWeb3();
    }, [])
    return(
        <Web3Context.Provider value={web3Api}>
            {children}
        </Web3Context.Provider>
    );
}

export function useWeb3(){
    return useContext(Web3Context);
}

export default Web3Provider;