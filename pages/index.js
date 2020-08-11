import Head from 'next/head'
import styles from 'styles/Home.module.css'
import BRNrate from 'components/BRNrate'

function Home({ rates }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        FINlance: <BRNrate rates={rates} date="2020-07-27" currency="EUR" />
        <br />
        FINlance: <BRNrate rates={rates} date="2020-07-25" currency="EUR" />
        <br />
        FINlance: <BRNrate rates={rates} date="2020-07-22" currency="EUR" />
      </main>
      
    </div>
  )
}

export async function getStaticProps() {
  let response = await fetch('https://www.bnr.ro/files/xml/years/nbrfxrates2020.xml')
  let rates = await response.text()
  return { props: { rates } }
}

export default Home