import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
        {/* FINlance: {rates.rate} */}
      </main>
    </div>
  )
}

// export async function getStaticProps() {
//   let response = await fetch('http://localhost:3000/api/bnr-rates?date=2020-08-12&currency=eur')
//   console.log(response)
//   const rates = await response

//   return { props: { rates } }
// }
