import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/UI/Navbar';
import CartIcon from '../components/cart/CartIcon';
import { ShopCtxProvider } from '../store/shop-context';
import { CartCtxProvider } from '../store/cart-context';
import CartModalOverlay from '../components/cart/CartModalOverlay';
import { useCartCtx } from '../store/cart-context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { modalIsOpen } = useCartCtx();

  return (
    <CartCtxProvider>
      <ShopCtxProvider>
        <div className='min-h-screen relative'>
          <Navbar />
          <main>
            <Component {...pageProps} />
          </main>
        </div>
        <CartModalOverlay />
        <CartIcon />
      </ShopCtxProvider>
    </CartCtxProvider>
  )
}

export default MyApp
