import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import React, {useEffect, useState } from 'react';
import { ethers } from "ethers";
import Link from 'next/link'
import Date from '../components/date'

const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;
const CONTRACT_ADDRESS = "0xc78Ccd1FB9e4401534aEA06d2786cD7581Cd50F2";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Mint() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [mintInfo, setMintInfo] = useState("");
  const [lastToken, setLastToken] = useState("");
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
                  This is a demo NFT project site. It is a fully functional mockup of what a potential project would look like and everything element is customizable.
                  In order to mint from this demo site, you must change your network to the Ethereum Test Network (Rinkeby).
                </p>
                
              </div>
            </div>
          </div>
      </section>     
    </Layout>
  )
}