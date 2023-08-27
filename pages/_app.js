import {DataProvider} from '../context/DataProvider';
import '../styles/globalStyles/normalize.scss';
import '../styles/globalStyles/globals.scss';


function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
