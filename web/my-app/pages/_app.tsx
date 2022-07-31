import Link from 'next/link';
import '../styles/globals.css'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <nav>
        <div>
          <Link href='/'>
            <a>
              Page 2
            </a>
          </Link> 
        </div>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
