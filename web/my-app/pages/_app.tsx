import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/UI/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
