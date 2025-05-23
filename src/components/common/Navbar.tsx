import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isValidatorsDropdownOpen, setIsValidatorsDropdownOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/validators', label: 'Validators' },
    { href: '/delegators', label: 'Delegators' },
    { href: '/analytics', label: 'Analytics' },
    { href: '/governance', label: 'Governance' },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                Cosmos Validator Dashboard
              </span>
            </a>
            
            {/* Desktop navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="text-white hover:text-indigo-300 px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Validators dropdown */}
              <div className="relative">
                <button 
                  className="text-white hover:text-indigo-300 px-3 py-2 text-sm font-medium flex items-center"
                  onClick={() => setIsValidatorsDropdownOpen(!isValidatorsDropdownOpen)}
                >
                  Validators
                  <ChevronDown size={16} className="ml-1" />
                </button>
                
                {isValidatorsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" role="menuitem">
                        Validator List
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" role="menuitem">
                        Performance Analysis
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" role="menuitem">
                        Validator Comparison
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-3">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Connect Wallet
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-800">
            <div className="px-2">
              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-base font-medium transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 