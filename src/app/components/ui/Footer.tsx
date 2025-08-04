import Link from 'next/link';
import { Instagram, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ショップ情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Patisserie Noir</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-yellow-400" />
                <span>東京都渋谷区〇〇 1-2-3</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-yellow-400" />
                <span>03-0000-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-yellow-400" />
                <span>10:00-19:00（火曜定休）</span>
              </div>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="text-lg font-semibold mb-4">MENU</h3>
            <div className="space-y-2 text-sm">
              <Link href="/products" className="block hover:text-yellow-400 transition-colors">
                商品紹介
              </Link>
              <Link href="/news" className="block hover:text-yellow-400 transition-colors">
                新着情報
              </Link>
              <Link href="/about" className="block hover:text-yellow-400 transition-colors">
                理念・パティシエ紹介
              </Link>
              <Link href="/access" className="block hover:text-yellow-400 transition-colors">
                アクセス
              </Link>
              <Link href="/contact" className="block hover:text-yellow-400 transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* SNS・その他 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              最新の商品情報やお店の様子を<br />
              Instagramで配信中
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Patisserie Noir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;