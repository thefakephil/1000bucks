import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import MailchimpSubscribe from "react-mailchimp-subscribe"

import { Inter } from 'next/font/google'
// import logo from '../public/1000buckslogo.png'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Nav /> 
      <Head>
        <title>1000 Bucks</title>
        <meta name="description" content="1000 bucks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <div className='main-image'> 
        <a href="http://eepurl.com/inNcy6" target="_blank">
          <Image
            src='/main-image.png'
            width={800}
            height={600}
            alt={'logo'}
          />
          <br /> 
          <div className={styles.subscribe}> 
          <Image
            src='/Subscribe.png'
            width={600}
            height={300}
            alt={'logo'}
          />
          </div>
          </a> 
        </div>
        {/* <div className={styles.container}>
          <div className={styles.col2}>
            <Image
              src={'/1000buckslogo.png'}
              width={400 }
              height={300}
              alt={'logo'}
            />
          </div>
          <div className={styles.col2}>
            <Image
              src={'/bubble-1.png'}
              width={300}
              height={200}
              alt={'logo'}
            />
            <Image
              src={'/bubble-2.png'}
              width={300}
              height={200}
              alt={'logo'}
            />
          </div>
        </div> */}
     
      </main>
    </>
  )
}
