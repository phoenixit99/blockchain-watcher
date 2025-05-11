// import React from 'react';
// import { useLanguage } from './LanguageProvider';
// import { useTranslations } from 'next-intl';
// import { Globe } from 'lucide-react';

// export default function LanguageSwitcher() {
//   const { locale, setLocale } = useLanguage();
//   const t = useTranslations('common');

//   const toggleLanguage = () => {
//     setLocale(locale === 'en' ? 'vi' : 'en');
//   };

//   return (
//     <button
//       onClick={toggleLanguage}
//       className="flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
//       aria-label="Switch language"
//     >
//       <Globe size={16} />
//       <span>{t('language.' + locale)}</span>
//     </button>
//   );
// } 