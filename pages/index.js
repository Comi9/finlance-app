import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BRNrate from '../components/BRNrate'

export default function Home({ rates }) {
  console.log(rates)
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
        FINlance: <BRNrate rates={rates} date="2020-07-27" currency="EUR" />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  let response = await fetch('https://www.bnr.ro/files/xml/years/nbrfxrates2020.xml')
  let rates = await response.text()
  return { props: { rates } }
}
