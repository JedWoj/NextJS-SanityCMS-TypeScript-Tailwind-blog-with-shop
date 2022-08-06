import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/UI/Navbar';
import CartIcon from '../components/cart/CartIcon';
import { ShopCtxProvider } from '../store/shop-context';
import { CartCtxProvider } from '../store/cart-context';
import CartModalOverlay from '../components/cart/CartModalOverlay';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  const CHECKOUT_PATH = '/shop/checkout';

  return (
    <CartCtxProvider>
      <ShopCtxProvider>
        <div className='min-h-screen relative'>
          {pathname !== CHECKOUT_PATH && <Navbar />}
          <main>
            <Component {...pageProps} />
          </main>
        </div>
        <CartModalOverlay />
        {pathname !== CHECKOUT_PATH && <CartIcon />}
      </ShopCtxProvider>
    </CartCtxProvider>
  )
}

export default MyApp
