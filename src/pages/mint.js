import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import React, {useEffect, useState } from 'react';
import { ethers } from "ethers";
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import myEpicNft from '../utils/MyEpicNFT.json';

const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;
const CONTRACT_ADDRESS = "0x1D1FACd89182f120911e87f8BcEED3aC0036232B";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Mint() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [mintInfo, setMintInfo] = useState("");
  const [lastToken, setLastToken] = useState("");
  
  const checkIfWalletIsConnected = async () => {
    
    const { ethereum } = window;
  
    if(!ethereum) {
      console.log("No wallet detected");
      setCurrentAccount("");
      return;
    } else {
      console.log("Ethereum Obj:", ethereum);
    }
  
    let chainId = await ethereum.request({ method: 'eth_chainId' });
    console.log("Connected to chain " + chainId);
  
    // String, hex code of the chainId of the Rinkebey test network
    const rinkebyChainId = "0x4"; 
    if (chainId !== rinkebyChainId) {
      alert("You are not connected to the Rinkeby Test Network!");
      setCurrentAccount("");
      return;
    }
  
    const accounts = await ethereum.request({ method: 'eth_accounts'});
  
    console.log(accounts);
    /* 
    * Check for multiple accounts
    */
    if(accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found authorized account: ', account);
      setCurrentAccount(account);
      setupEventListener()
    } else {
      console.log("No authorized account found");
    }
  
  }

  const connectWallet = async () => {
    console.log('TRYING to CONNECT')
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      let chainId = await ethereum.request({ method: 'eth_chainId' });
      console.log("Connected to chain " + chainId);

      // String, hex code of the chainId of the Rinkebey test network
      const rinkebyChainId = "0x4"; 
      if (chainId !== rinkebyChainId) {
        setCurrentAccount("");
        alert('Please connect to the Rinkeby Network')
        return;
      }

      /*
      * Fancy method to request access to account.
      */
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      /*
      * This should print out public address once we authorize Metamask.
      */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
      setupEventListener()
    } catch (error) {
      console.log(error)
    }
  }

  const setupEventListener = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        // Same stuff again
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);

        // THIS IS THE MAGIC SAUCE.
        // This will essentially "capture" our event when our contract throws it.
        // If you're familiar with webhooks, it's very similar to that!
        connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
          console.log(from, tokenId.toNumber())
          setLastToken('https://testnets.opensea.io/assets/'+CONTRACT_ADDRESS+'/'+tokenId);
          setMintInfo('Congrats! You minted an NFT. It can take a around 10 min to show up on OpenSea, see the link below.');
        });

        console.log("Setup event listener!")

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=> {
    setMintInfo("")
    setLastToken("")
    setCurrentAccount("")
    checkIfWalletIsConnected()
  }, [])
    const askContractToMintNft = async () => {
        try {
            const { ethereum } = window;
        
            if (ethereum) {
                let chainId = await ethereum.request({ method: 'eth_chainId' });
                const rinkebyChainId = "0x4"; 
                if (chainId !== rinkebyChainId) {
                  alert('Please connect to the Rinkeby Network')
                  return;
                }
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);
            
                console.log("Going to pop wallet now to pay gas...")
                let nftTxn = await connectedContract.makeAnEpicNFT();
            
                console.log("Mining...please wait.")
                await nftTxn.wait();
                
                console.log(`Minted, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
            
                } else {
                console.log("Ethereum object doesn't exist!");
                }
        } catch (error) {
            console.log(error)
        }
    }
    // Render Methods
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="max-w-lg px-4 py-2 bg-teal-600 flex items-center font-semibold text-lg text-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-800">
      Connect to Wallet
    </button>
  );

  const renderMintUI = () => (
    <button onClick={askContractToMintNft} className="max-w-lg px-4 py-2 bg-teal-600 flex items-center font-semibold text-lg text-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-800">
      Mint NFT
    </button>
  )
      
  return (
    <Layout>
      <Head>
        <title>{siteTitle} Mint Page</title>
      </Head>
      <section >
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
              <div>
                <div className='flex justify-center mt-3 '>
                  <Image
                    className='w-1/2 hover:w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
                    src='/images/demonft.png'
                    alt='Demo NFT Project with Logo'
                    height={240}
                    width={300}
                  />
                </div>
                <p className='mt-1 text-xl  text-gray-900 tracking-tight sm:text-2xl'>
                  In order to mint from this demo site, you must change your network to the Ethereum Test Network (Rinkeby).
                <br />
                  If you need some test Eth for the Rinkeby network, please send a request <a href="mailto:frank@tekflx.com">here</a>.
                  <br />
                  A footer banner will appear on successful minting. Sometimes it can take up to 10 minutes for the NFT to appear on the marketplaces, your NFT will appear under these projects <a href="https://testnets.opensea.io/collection/demo-nft-b429y5nopy" target="_blank"  rel="noreferrer">testnets.opensea.io</a> and  <a href="https://rinkeby.rarible.com/collection/0x1d1facd89182f120911e87f8bceed3ac0036232b/items" target="_blank" rel="noreferrer">rinkeby.rarible.com</a>.
                </p>
                
                <div className='flex justify-center mt-3 '>
                  <p className="py-2 block">
                  {currentAccount === "" ? renderNotConnectedContainer() : renderMintUI()}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
      </section> 
      <section className='p-8'>
      {mintInfo !== '' && (
        <div className="fixed inset-x-0 bottom-0">
            <div className="bg-indigo-600">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                    <span className="flex p-2 rounded-lg bg-indigo-800">
                    <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden">You just minted an NFT!</span>
                    <span className="hidden md:inline">Big news! You just minted an NFT!</span>
                    </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                    <a
                    href={lastToken} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                    >
                    See it on OpenSea!
                    </a>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <button
                    type="button"
                    className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                    >
                    <span className="sr-only">Dismiss</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
      )}
      </section>    
    </Layout>
  )
}