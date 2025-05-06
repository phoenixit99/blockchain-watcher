import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { LanguageProvider } from '../components/LanguageProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp; 