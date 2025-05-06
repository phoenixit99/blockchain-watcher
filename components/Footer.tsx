import React from "react";
import { Github, Twitter, Globe } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('common');

  return (
    <footer className="py-12 bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">{t('app.title')}</h3>
            <p className="text-sm">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.link_items.home')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.link_items.validators')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.link_items.delegators')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.link_items.analytics')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.resource_items.guides')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.resource_items.api_docs')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.resource_items.blog')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.resource_items.faq')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">{t('footer.connect')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>{t('footer.copyright')}</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors mr-4">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
          </p>
        </div>
      </div>
    </footer>
  );
} 