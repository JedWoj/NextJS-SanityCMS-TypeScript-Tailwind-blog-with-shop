import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/UI/Navbar';
import { ShopCtxProvider } from '../store/shop-context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ShopCtxProvider>
      <div className='min-h-screen'>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ShopCtxProvider>
  )
}

export default MyApp
