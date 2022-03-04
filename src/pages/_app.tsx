import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'


const DefaultNav = dynamic(
  () => import("../components/defaultNav"),{ssr:false}
);


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultNav />
      <Component {...pageProps} />
    </>
  ) 
 
}

export default MyApp


