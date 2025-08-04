'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: 'HOME' },
    { href: '/products', label: 'PRODUCTS' },
    { href: '/news', label: 'NEWS' },
    { href: '/about', label: 'ABOUT' },
    { href: '/access', label: 'ACCESS' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="text-white text-xl font-bold tracking-wider">
            Patisserie Noir
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* モバイルハンバーガーメニュー */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 absolute top-16 left-0 right-0 py-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-white hover:text-yellow-400 transition-colors duration-300 text-sm tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;