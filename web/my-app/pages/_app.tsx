import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/UI/Navbar';
import CartIcon from '../components/cart/CartIcon';
import { ShopCtxProvider } from '../store/shop-context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ShopCtxProvider>
      <div className='min-h-screen relative'>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      <CartIcon />
    </ShopCtxProvider>
  )
}

export default MyApp
