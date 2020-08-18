import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BRNrate from '../components/BRNrate'

export default function Home({ rates }) {
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  let res = await fetch('https://finlance.app/api/bnr-rates')
  console.log(res)
  let response = await fetch('https://www.bnr.ro/files/xml/years/nbrfxrates2020.xml')
  let rates = await response.text()
  return { props: { rates } }
}
