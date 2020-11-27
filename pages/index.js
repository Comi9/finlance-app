import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { version } from "../package.json"

const API_PATH = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/api/bnr-rates?date=2020-05-12&currency=EUR'
  : 'https://finlance.app/api/bnr-rates?date=2020-05-12&currency=EUR'

export default function Home({ exchange = 1 }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>FINlance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to <a href="https://FINlance.app">FINlance</a>
        </h3>
        <br /><br />
        FINlance: 1 RON = {exchange.rate} {exchange.currency} / {exchange.date}
        <div>
          <pre><strong>Version: </strong>{version}</pre>
          <pre><strong>Release: </strong>{process.env.revision}</pre></div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  let response = await fetch(API_PATH)
  const w = await response.json();
  return { props: { exchange: w } }
}
