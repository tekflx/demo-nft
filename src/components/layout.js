import Head from 'next/head'
import Image from 'next/image'
import { ethers } from "ethers";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, {useEffect, useState } from 'react';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    '/images/tim.jpeg',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Collection', href: '#collection', current: false },
  { name: 'Roadmap', href: '#roadmap', current: false },
  { name: 'Team', href: '#team', current: false },
  { name: 'Faq', href: '#faq', current: false },
  { name: 'Mint', href: '/mint', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}






const name = 'Frank'
export const siteTitle = 'Demo NFT Website'


export default function Layout({ children, home }) {
  const [currentAccount, setCurrentAccount] = useState("");
  
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
      //alert("You are not connected to the Rinkeby Test Network!");
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
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=> {
    setCurrentAccount("");
    checkIfWalletIsConnected();
  }, [])

  return (
    <div className="min-h-full">
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A demo NFT project site for perspective clients"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <Disclosure as="nav" className="bg-white border-b border-gray-200">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                      <Image
                        src="/images/demonftnologo.png"
                        height={60}
                        width={250}
                        alt="Demo NFT"
                      />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'indie border-teal-600 text-gray-900'
                              : 'indie border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'indie inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button onClick={connectWallet} className="max-w-lg px-4 py-2 bg-teal-600 flex items-center font-semibold text-lg text-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-800">
                      {currentAccount === "" ? "Connect Wallet" : currentAccount.substring(0,8)+'...'}
                    </button>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                        'navy block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <Image className="h-10 w-10 rounded-full" src={user.imageUrl} alt=""  width={20} height={20} />
                    </div>
                    <div className="ml-3">
                      <button onClick={connectWallet} className="max-w-lg px-4 py-2 bg-teal-600 flex items-center font-semibold text-lg text-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-800">
                        {currentAccount === "" ? "Connect Wallet" : currentAccount.substring(0,8)+'...'}
                      </button>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <main>
            {children}
          </main>
        </div>
      </div>
  )
}