'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Instagram, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin mb-4 tracking-[0.2em] leading-tight">
              PATISSERIE
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-amber-300 tracking-[0.3em] mb-8">
              NOIR
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-base md:text-lg font-light text-gray-300 max-w-xl mx-auto leading-relaxed tracking-wide">
              黒の美学に包まれた、至高のパティスリー<br />
              <span className="text-amber-300">一口ごとに紡がれる、特別な物語</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/products"
              className="group relative overflow-hidden px-10 py-4 border border-amber-300 text-amber-300 hover:text-black transition-all duration-500 text-sm tracking-[0.2em] font-light"
            >
              <span className="absolute inset-0 bg-amber-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative flex items-center">
                EXPLORE COLLECTION
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </span>
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 text-white border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-[0.2em] font-light"
            >
              OUR STORY
            </Link>
          </motion.div>
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-xs tracking-wider mb-2">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* 商品紹介セクション */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-thin text-black mb-6 tracking-[0.1em]">
              SIGNATURE
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              黒の美学と繊細な技術が融合した、当店だけの特別な創作菓子。<br />
              一つひとつに込められた想いと、職人の魂を感じてください。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Noir Chocolat',
                subtitle: 'ノワール ショコラ',
                price: '¥4,500',
                description: 'ベルギー産最高級カカオと黒糖が織りなす、深遠なる味わい。漆黒の外観に秘められた情熱の物語。',
              },
              {
                title: 'Seasonal Tarte',
                subtitle: '季節のタルト',
                price: '¥3,800',
                description: '四季の移ろいを繊細に表現した芸術作品。旬の果実が奏でる、自然からの贈り物。',
              },
              {
                title: 'Petit Gâteau Collection',
                subtitle: 'プティ ガトー コレクション',
                price: '¥2,500',
                description: '洗練された小菓子の詰め合わせ。大切な方への心からの贈り物として。',
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 via-gray-50 to-white border border-gray-200 flex items-center justify-center group-hover:border-amber-300 transition-all duration-500">
                    <div className="text-center">
                      <div className="w-16 h-16 border border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:border-amber-300 transition-colors duration-500">
                        <span className="text-gray-400 text-xs">IMAGE</span>
                      </div>
                      <span className="text-gray-500 text-sm font-light tracking-wide">Coming Soon</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-light text-black mb-1 tracking-wide group-hover:text-amber-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-light">{product.subtitle}</p>
                  <p className="text-2xl font-thin text-amber-600 mb-4 tracking-wide">{product.price}</p>
                  <p className="text-gray-600 text-sm leading-relaxed font-light px-2">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              href="/products"
              className="group inline-flex items-center px-12 py-4 border border-black text-black hover:bg-black hover:text-white transition-all duration-500 text-sm tracking-[0.2em] font-light"
            >
              VIEW ALL COLLECTIONS
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 新着情報セクション */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-thin text-black mb-6 tracking-[0.1em]">
              JOURNAL
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              パティスリー ノワールの最新情報と、季節の物語をお届けします
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                date: '2024.03.15',
                category: 'ANNOUNCEMENT',
                categoryJa: '新作発表',
                title: '春の限定コレクション「Sakura Noir」販売開始',
                excerpt: '桜の儚い美しさを黒の美学で表現した、この季節だけの特別なコレクション。'
              },
              {
                date: '2024.03.10',
                category: 'WORKSHOP',
                categoryJa: 'ワークショップ',
                title: 'パティシエ田中美咲による特別レッスン開催',
                excerpt: '全国洋菓子技術コンテスト金賞受賞のパティシエが教える、プロの技術。'
              },
              {
                date: '2024.03.05',
                category: 'MEDIA',
                categoryJa: 'メディア掲載',
                title: '雑誌「GOURMET TOKYO」で当店の理念が特集されました',
                excerpt: '黒の美学を追求するパティスリーとして、専門誌に掲載いただきました。'
              },
            ].map((news, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group cursor-pointer border-b border-gray-200 py-8 hover:bg-white hover:shadow-lg transition-all duration-500 px-8 hover:px-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <time className="text-sm text-gray-500 font-mono tracking-wider">
                        {news.date}
                      </time>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs tracking-wider font-light">
                        {news.category}
                      </span>
                      <span className="text-xs text-gray-400 font-light">
                        {news.categoryJa}
                      </span>
                    </div>
                    <h3 className="text-xl font-light text-black mb-2 group-hover:text-amber-600 transition-colors duration-300 tracking-wide">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {news.excerpt}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <ArrowRight 
                      className="text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all duration-300" 
                      size={20} 
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              href="/news"
              className="group inline-flex items-center px-12 py-4 border border-black text-black hover:bg-black hover:text-white transition-all duration-500 text-sm tracking-[0.2em] font-light"
            >
              READ ALL STORIES
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Instagramギャラリー */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 tracking-[0.1em]">
              GALLERY
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-gray-400 mb-8 text-lg font-light tracking-wide">
              日々の創作過程と美しい瞬間を
            </p>
            <motion.a
              href="https://instagram.com/patisserie_noir"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center text-amber-300 hover:text-white transition-colors duration-300 text-lg font-light tracking-wider"
            >
              <Instagram className="mr-3" size={24} />
              @patisserie_noir
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-amber-300 transition-all duration-500 flex items-center justify-center cursor-pointer group relative overflow-hidden"
              >
                <div className="text-center">
                  <Instagram className="text-gray-600 group-hover:text-amber-300 transition-colors duration-300 mx-auto mb-2" size={32} />
                  <span className="text-gray-500 group-hover:text-gray-300 text-xs font-light tracking-wide transition-colors duration-300">
                    Coming Soon
                  </span>
                </div>
                <div className="absolute inset-0 bg-amber-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              href="https://instagram.com/patisserie_noir"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-12 py-4 border border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black transition-all duration-500 text-sm tracking-[0.2em] font-light"
            >
              FOLLOW US
              <Instagram className="ml-3 group-hover:scale-110 transition-transform duration-300" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
