import React, { createContext, useState, useContext, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';

// Import language files
import enMessages from '../messages/en/common.json';
import viMessages from '../messages/vi/common.json';

type Locale = 'en' | 'vi';
type Messages = typeof enMessages;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>('en');
  
  const messages = locale === 'en' ? enMessages : viMessages;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, messages }}>
      <NextIntlClientProvider locale={locale} messages={{ common: messages }}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 