import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {SimpsonsCharactersMapNotInsideJsx} from '../components/SimpsonsCharacters'
import {SimpsonsCharactersMapInsideJsx} from '../components/SimpsonsCharacters'
import Blog from '../components/Blog'
import {somePosts} from '../aa-data/Data'
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
        <SimpsonsCharactersMapNotInsideJsx />
        <SimpsonsCharactersMapInsideJsx />
        <Blog posts={somePosts} />
        <InterestingPeople />
      </main>
    </div>
  )
}
