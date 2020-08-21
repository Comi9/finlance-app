import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ exchange }) {
  console.log(exchange)
  return (
    <div className={styles.container}>
      <Head>
        <title>FINlance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://FINlance.app">FINlance</a>
        </h1>
        <br /><br />
        FINlance: {exchange.rate}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  let response = await fetch('https://finlance.app/api/bnr-rates?date=2020-05-12&currency=EUR')
  return { props: { exchange: await response.json() } }
}
