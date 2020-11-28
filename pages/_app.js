import { Provider } from 'next-auth/client'
import '../styles/styles.css'

function FINlanceApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>)
}

export default FINlanceApp
