import type { AppProps } from 'next/app';
import { ProvidersWrapper } from '../components/ProvidersWrapper';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProvidersWrapper>
      <Component {...pageProps} />
    </ProvidersWrapper>
  );
}
