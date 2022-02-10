import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import {  TagIcon, UserGroupIcon, PhotographIcon, CurrencyDollarIcon, EyeIcon } from '@heroicons/react/solid'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

import Link from 'next/link'
import Date from '../components/date'

const faqs = [
  {
    question: "What is an NFT?",
    answer:
      "An NFT is a non-fungible token. Which is data that is accounted for on a digital ledger, and that data represents something unique. An NFT can, for example, represent a unique piece of artwork or game item.",
  },
  {
    question: "What happens when you \"Mint\"?",
    answer:
      "Minting is the process in which an NFT is generated and transferred your address.",
  },
  {
    question: "When is the collection available to the public?",
    answer:
      "The public mint date is April 1, 2022. Please consult the roadmap for all important dates.",
  },
  {
    question: "How much does it cost to mint?",
    answer:
      "The pre-sale mint price 0.04 ETH, the public mint price is 0.06 ETH.",
  },
  {
    question: "How many NFTs will be available?",
    answer:
      "The collection is set at 10,000 units.",
  },
  {
    question: "How can I find out more info on the project?",
    answer:
      "Please join our Discord and follow us on social media.",
  },
]
const timeline = [
  {
    id: 1,
    content: 'Artwork and designs',
    target: 'Completed',
    href: '#',
    date: 'March 2022',
    datetime: '2022-03-01',
    icon: PhotographIcon,
    iconBackground: 'bg-emerald-400',
  },
  {
    id: 2,
    content: 'Pre-Sale then Public Sale',
    target: 'In Progress',
    href: '#',
    date: 'April 2022',
    datetime: '2022-04-01',
    icon: TagIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Art Reveal',
    target: '1 week after mint out',
    href: '#',
    date: 'TBD',
    datetime: 'TBD',
    icon: EyeIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 4,
    content: 'Token Drop',
    target: 'TBD',
    href: '#',
    date: 'May 2022',
    datetime: '2022-05-22',
    icon: CurrencyDollarIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 5,
    content: 'DAO formation',
    target: 'TBD',
    href: '#',
    date: 'June 2022',
    datetime: '2022-06-01',
    icon: UserGroupIcon,
    iconBackground: 'bg-gray-400',
  },
]

const people = [
  {
    name: 'Stencil',
    role: 'Artist',
    imageUrl:
      '/images/cool_pets_2.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jessica',
    role: 'Community Manager',
    imageUrl:
      '/images/cool_pets_3.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  {
    name: 'Teky',
    role: 'Tech Guru',
    imageUrl:
      '/images/cool_pets_1.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
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
                <div className='flex justify-center mt-3 '>
                  <Image
                    className='w-1/2 hover:w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
                    src='/images/cover-2.png'
                    alt='Demo Cover Art'
                    height={250}
                    width={1105}
                  />
                </div>
              </div>
            </div>
          </div>
      </section>
      <section id="collection" className={`${utilStyles.headingMd}`}>
        <div className='bg-gray-900 sm:py-16 lg:py-8 lg:overflow-hidden'>
          <div className='mx-48 lg:grid lg:grid-cols-2 lg:gap-4'>
            <div className='sm:-mb-48 lg:m-0 lg:relative'>
              <div className='flex justify-center mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                  <Image
                  className='w-full lg:absolute rounded-lg lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='/images/Reapers.png'
                  alt='Reapers NFT'
                  width={400}
                  height={400}
                  />
              </div>
            </div>
            <div className='mx-auto max-w-md sm:text-left lg:text-left lg:flex lg:items-center'>
              <p>
                <span className='text-3xl font-bold text-white indie'>Reapers NFT Collection</span>
                <br/>
                <span className='text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl'>
                  Reapers are invading the metaverse. The collection was designed by insert artist name. 
                  The Reapers are a set of 3D characters with unique hand-drawn attributes. 
                </span>
                <br/>
                <span className='text-2xl font-bold text-white indie'>10,000 unique NFTs</span>
                <br />
                <span className='text-2xl font-bold text-white indie'>100+ unique attributes</span>
                <br />
                <span className='text-2xl font-bold text-white indie'>25 1/1 legendary NFTs</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='artist'>
        <div className='relative bg-white py-10 sm:py-8 lg:py-24'>
          <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
            <div>
              <h2 className='text-base text-4xl indie font-semibold tracking-wider text-black uppercase'>
                ARTIST NAME
              </h2>
              <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
              Information about the artist and their inspiration for the project.
              </p>
              <div className='flex justify-center mt-6 '>
                <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/Oz9zw7-_vhM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="community" className={`${utilStyles.headingMd}`}>
        <div className='relative bg-gray-900 py-10 sm:py-8 lg:py-24'>
          <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
            <div className='flex justify-center mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
              <Image
              className='w-full lg:absolute rounded-lg lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
              src='/images/reaperbadge.png'
              alt='Reapers NFT'
              width={240}
              height={240}
              />
            </div>
            <div>
              <h2 className='text-base py-4 text-4xl indie font-semibold tracking-wider text-white'>
                Join the community
              </h2>
              <p className='py-4  text-xl font-extrabold text-white tracking-tight sm:text-4xl blocky'>
              Be part of the conversation
              </p>
              <p className='py-4 '>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Image
                    className="-ml-1 mr-2 h-5 w-5"
                    src="/images/twitter.png"
                    width={50}
                    height={40}
                    alt="Twitter"
                    />
                    <span className="px-2 indie text-3xl">Twitter</span>
                </button>
                <button
                  type="button"
                  className="mx-10 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Image
                    className="-ml-1 mr-2 h-5 w-5"
                    src="/images/discord.png"
                    width={50}
                    height={40}
                    alt="Discord"
                    />
                    <span className="px-2 indie text-3xl">Discord</span>
                </button>
                <button
                  type="button"
                  className=" inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Image
                    className="-ml-1 mr-2 h-5 w-5"
                    src="/images/instagram.png"
                    width={40}
                    height={40}
                    alt="Instagram"
                    />
                    <span className="px-2 indie text-3xl">Instagram</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="roadmap">
        <div className='relative bg-white py-10 sm:py-8 lg:py-24'>
          <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
            <div>
              <h2 className='text-base text-4xl blocky font-semibold tracking-wider text-black uppercase'>
                ROADMAP
              </h2>
              <p className='py-4 text-2xl text-gray-900 tracking-tight sm:text-4xl'>
              The current roadmap for the project.
              </p>
            </div>
            <div>
                <div className='flex justify-center mt-3 '>
                <div className="flow-root max-w-lg">
                  <ul role="list" className="-mb-8">
                    {timeline.map((event, eventIdx) => (
                      <li key={event.id}>
                        <div className="relative pb-8">
                          {eventIdx !== timeline.length - 1 ? (
                            <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span
                                className={classNames(
                                  event.iconBackground,
                                  'h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white'
                                )}
                              >
                                <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-lg text-gray-500">
                                  {event.content}{' '}
                                  <a href={event.href} className="font-medium text-gray-900">
                                    {event.target}
                                  </a>
                                </p>
                              </div>
                              <div className="text-right text-lg whitespace-nowrap text-gray-500">
                                <time dateTime={event.datetime}>{event.date}</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
               </div>
              </div>  
          </div>
        </div>    
      </section>
      <section id="mintlink">
        <div className='relative bg-gray-900 py-10 sm:py-8 lg:py-24'>
          <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
            <div>
              <h2 className='text-base py-4 text-4xl indie font-semibold tracking-wider text-white'>
                Mint in progress
              </h2>
              <p className='py-4  text-xl font-extrabold text-white tracking-tight sm:text-4xl blocky'>
              Don{'\''}t miss your chance
              </p>
              <p className='py-4 '>
                <button
                  type="button"
                  className="inline-flex items-center px-10 py-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="px-4 indie text-4xl">Mint</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="team">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
                <p className="text-xl text-gray-500">
                  Team names, titles and contact info if doxxed.
                </p>
              </div>
              <ul
                role="list"
                className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-6">
                      <Image className="mx-auto h-30 w-30 rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt="" width={140} height={155}/>
                      <div className="space-y-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <ul role="list" className="flex justify-center space-x-5">
                          <li>
                            <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Twitter</span>
                              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">LinkedIn</span>
                              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="faq">
        <div className="bg-gray-900 py-10 sm:py-8 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
              <h2 className="text-center text-3xl indie font-extrabold text-white sm:text-4xl">Frequently Asked Questions</h2>
              <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                            <span className="font-medium text-xl indie text-white">{faq.question}</span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base text-white">{faq.answer}</p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  )
}