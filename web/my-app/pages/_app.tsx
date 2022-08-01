import Link from 'next/link';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='min-h-screen'>
      <nav className='flex justify-between items-center gradient text-lg md:text-xl lg:text-2xl'>
        <Link href='/'>
          <a className='ml-3 md:ml-6 lg:ml-12'>
            Blog && Shop
          </a>
        </Link>
        <div className='flex text-white'>
          <div>
            <Link href='/blog'>
              <a className='hover:bg-blue-400 px-5 py-3 md:px-7 md:py-5 lg:px-10 lg:py-8 block border-x-2'>
                Blog
              </a>
            </Link>
          </div>
          <div>
            <Link href='/shop'>
              <a className='hover:bg-blue-400 px-5 py-3 md:px-7 md:py-5 lg:px-10 lg:py-8 block'>
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
