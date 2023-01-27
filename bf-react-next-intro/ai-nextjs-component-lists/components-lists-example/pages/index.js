import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import SimpsonsCharacters from '../components/SimpsonsCharacters'
import Blog from '../components/Blog'
import {posts} from '../components/Data'
import InterestingPeople from '../components/InterestingPeople'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          The Component lists example.
        </h1>
        <SimpsonsCharacters />
        <Blog posts={posts} />
        <InterestingPeople />
      </main>
    </div>
  )
}
