import React, { useEffect, useState } from 'react'
import abi from "./contractJson/chai.json"
import { ethers } from "ethers"
import Buy from './components/Buy';
import Memos from './components/Memos';
function App() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });
  const [account, setAccount] = useState("Not connected !");
  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x5ADA1ed50A589b9Fb846EaaAEbc468D2cEBfB07e";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        })
        const address = account[0];

        setAccount(address);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }

      const provider = new ethers.providers.Web3Provider(ethereum); // read the block chain 
      const signer = provider.getSigner(); // write the block chain

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      console.log(contract)
      setState({ provider, signer, contract });
    };

    template();
  }, []);

  return (
    <div className='app vh-100  grad d-flex justify-center p-5 flex-column align-items-center'>
      <h1 className=' fw-bold fs-1  p-5 text-center '>Buy Chai Dapp</h1>
      <span>Connected Account : {account}</span>
      <Buy state={state} />
      <Memos state={state}/>
    </div>
  )
}

export default App
