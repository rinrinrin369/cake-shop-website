'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      category: 'signature',
      categoryName: 'シグネチャーライン',
      title: 'Noir Chocolat',
      subtitle: 'ノワール ショコラ',
      price: '¥4,500',
      description: 'ベルギー産最高級カカオと黒糖が織りなす、深遠なる味わい。漆黒の外観に秘められた情熱の物語をお楽しみください。フランス産発酵バターを使用し、48時間かけて仕上げる特別なケーキです。',
      features: ['ベルギー産カカオ70%使用', 'フランス産発酵バター', '48時間熟成', '季節限定装飾'],
      allergens: '卵、乳、小麦、大豆を含む'
    },
    {
      id: 2,
      category: 'signature',
      categoryName: 'シグネチャーライン',
      title: 'Seasonal Tarte',
      subtitle: '季節のタルト',
      price: '¥3,800',
      description: '四季の移ろいを繊細に表現した芸術作品。旬の果実が奏でる、自然からの贈り物。現在は春限定の桜と苺を使用したタルトをご提供しております。',
      features: ['季節の厳選フルーツ', 'アーモンドクリーム', '自家製パート・ブリゼ', '天然バニラ使用'],
      allergens: '卵、乳、小麦、アーモンドを含む'
    },
    {
      id: 3,
      category: 'signature',
      categoryName: 'シグネチャーライン',
      title: 'Mille-feuille Noir',
      subtitle: 'ミルフィーユ ノワール',
      price: '¥3,200',
      description: '伝統的なミルフィーユに黒の美学を纏わせた革新的な逸品。軽やかなパイ生地と濃厚なカスタードクリームの絶妙なハーモニー。',
      features: ['層状パイ生地', 'バニラカスタード', '黒糖グラサージュ', '金箔装飾'],
      allergens: '卵、乳、小麦を含む'
    },
    {
      id: 4,
      category: 'seasonal',
      categoryName: '季節限定',
      title: 'Sakura Noir Collection',
      subtitle: '桜ノワール コレクション',
      price: '¥4,200',
      description: '桜の儚い美しさを黒の美学で表現した、この季節だけの特別なコレクション。桜の花びらを練り込んだスポンジと桜餡のクリームが春の訪れを告げます。',
      features: ['国産桜の花びら', '桜餡クリーム', '黒胡麻スポンジ', '期間限定（3-5月）'],
      allergens: '卵、乳、小麦、胡麻を含む'
    },
    {
      id: 5,
      category: 'petit',
      categoryName: 'プティ ガトー',
      title: 'Petit Gâteau Collection',
      subtitle: 'プティ ガトー コレクション',
      price: '¥2,500',
      description: '洗練された小菓子の詰め合わせ。大切な方への心からの贈り物として。6種類の異なる味わいをお楽しみいただけます。',
      features: ['6種アソート', '個別包装', 'ギフトボックス', '日持ち5日間'],
      allergens: '卵、乳、小麦、ナッツ類を含む'
    },
    {
      id: 6,
      category: 'petit',
      categoryName: 'プティ ガトー',
      title: 'Macaron Noir Set',
      subtitle: 'マカロン ノワール セット',
      price: '¥1,800',
      description: '黒を基調とした洗練されたマカロンセット。竹炭を使用した漆黒のマカロンと、季節のフレーバーを組み合わせた12個入りセットです。',
      features: ['竹炭使用', '12個入り', '4種フレーバー', 'ブランドボックス'],
      allergens: '卵、乳、アーモンドを含む'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Collections', nameJa: '全ての商品' },
    { id: 'signature', name: 'Signature Line', nameJa: 'シグネチャーライン' },
    { id: 'seasonal', name: 'Seasonal Limited', nameJa: '季節限定' },
    { id: 'petit', name: 'Petit Gâteau', nameJa: 'プティ ガトー' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダーセクション */}
      <section className="relative py-32 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-amber-300 hover:text-white transition-colors duration-300 mb-8 text-sm tracking-wider"
            >
              <ArrowLeft className="mr-2" size={16} />
              BACK TO HOME
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-thin mb-6 tracking-[0.2em]">
              COLLECTIONS
            </h1>
            <div className="w-32 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              黒の美学に包まれた、至高のパティスリーコレクション<br />
              職人の技と情熱が生み出す、唯一無二の創作菓子たち
            </p>
          </motion.div>
        </div>
      </section>

      {/* カテゴリーフィルター */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`px-8 py-3 border transition-all duration-300 text-sm tracking-wider font-light ${
                  category.id === 'all' 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-300 text-gray-700 hover:border-black hover:text-black'
                }`}
              >
                <span className="block">{category.name}</span>
                <span className="block text-xs opacity-70">{category.nameJa}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 商品グリッド */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {products.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* 商品画像 */}
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 via-gray-50 to-white border border-gray-200 group-hover:border-amber-300 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 border border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:border-amber-300 transition-colors duration-500">
                          <ShoppingBag className="text-gray-400 group-hover:text-amber-600 transition-colors duration-500" size={24} />
                        </div>
                        <span className="text-gray-500 text-sm font-light tracking-wide">Coming Soon</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs tracking-wider font-light">
                        {product.categoryName}
                      </span>
                    </div>
                  </div>

                  {/* 商品詳細 */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-light text-black mb-1 tracking-wide group-hover:text-amber-600 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-base text-gray-500 mb-3 font-light">
                        {product.subtitle}
                      </p>
                      <p className="text-3xl font-thin text-amber-600 mb-4 tracking-wide">
                        {product.price}
                      </p>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed font-light">
                      {product.description}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-black mb-2 tracking-wide">特徴</h4>
                        <ul className="space-y-1">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-xs text-gray-600 font-light flex items-center">
                              <span className="w-1 h-1 bg-amber-300 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-black mb-1 tracking-wide">アレルゲン</h4>
                        <p className="text-xs text-gray-500 font-light">{product.allergens}</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button className="group/btn inline-flex items-center px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider font-light">
                        お問い合わせ
                        <ArrowLeft className="ml-2 rotate-180 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-5xl font-thin mb-6 tracking-[0.1em]">
              CUSTOM ORDER
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 mb-12 font-light leading-relaxed">
              特別な日のために、あなただけのケーキを<br />
              お客様のご要望に合わせたオーダーメイドも承っております
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-12 py-4 border border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black transition-all duration-500 text-sm tracking-[0.2em] font-light"
            >
              ORDER CONSULTATION
              <ArrowLeft className="ml-3 rotate-180" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}