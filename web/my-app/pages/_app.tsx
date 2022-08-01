import Link from 'next/link';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='min-h-screen bg-emerald-400'>
      <nav className='flex justify-between p-5 bg-white text-emerald-400'>
        <Link href='/'>
          <a>
            Blog && Shop
          </a>
        </Link>
        <div className='flex'>
          <div>
            <Link href='/blog'>
              <a>
                Blog
              </a>
            </Link>
          </div>
          <div>
            <Link href='/shop'>
              <a>
                Shop
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
