'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Facebook, Twitter } from 'lucide-react';
import { notFound } from 'next/navigation';

interface NewsArticle {
  id: number;
  date: string;
  category: string;
  categoryJa: string;
  title: string;
  excerpt: string;
  content: string;
  featured: boolean;
}

const newsItems: NewsArticle[] = [
  {
    id: 1,
    date: '2024.03.15',
    category: 'ANNOUNCEMENT',
    categoryJa: '新作発表',
    title: '春の限定コレクション「Sakura Noir」販売開始',
    excerpt: '桜の儚い美しさを黒の美学で表現した、この季節だけの特別なコレクション。国産桜の花びらを練り込んだスポンジケーキと、桜餡のクリームが春の訪れを告げます。',
    content: `桜の花びらが舞い散る季節に合わせて、パティスリー ノワールでは春限定の特別なコレクション「Sakura Noir」の販売を開始いたします。この度のコレクションは、日本の美しい春を黒の美学で表現した革新的な作品となっております。

厳選された国産桜の花びらを丁寧に練り込んだ黒胡麻スポンジケーキに、桜餡と生クリームを合わせた繊細なクリームを重ねました。外観は漆黒でありながら、一口ごとに広がる桜の香りと優雅な甘みが、この季節だけの特別な体験をお届けします。

**販売期間**：2024年3月15日〜5月31日まで  
**価格**：¥4,200（税込）  
**サイズ**：直径15cm（4-6名様用）

ご予約・お問い合わせは店頭またはお電話にて承っております。`,
    featured: true
  },
  {
    id: 2,
    date: '2024.03.10',
    category: 'WORKSHOP',
    categoryJa: 'ワークショップ',
    title: 'パティシエ田中美咲による特別レッスン開催',
    excerpt: '全国洋菓子技術コンテスト金賞受賞のパティシエが教える、プロの技術を学べる特別なワークショップを開催いたします。',
    content: `当店のシェフパティシエ 田中美咲による特別レッスンを開催いたします。全国洋菓子技術コンテスト金賞受賞の経験を持つ田中が、プロの技術と黒の美学を融合させたケーキ作りの秘密をお教えします。

今回のレッスンでは、当店の人気商品「Noir Chocolat」の製作過程を学んでいただけます。ベルギー産カカオの選び方から、生地の仕込み、デコレーションまで、プロの技術を間近で体験できる貴重な機会です。

**開催日時**：2024年4月20日（土）14:00-17:00  
**定員**：8名様  
**料金**：¥15,000（材料費込み、作品お持ち帰り付き）  
**申込締切**：4月10日（水）まで

お申し込みは店頭またはお電話にて先着順で受付いたします。`,
    featured: false
  },
  {
    id: 3,
    date: '2024.03.05',
    category: 'MEDIA',
    categoryJa: 'メディア掲載',
    title: '雑誌「GOURMET TOKYO」で当店の理念が特集されました',
    excerpt: '黒の美学を追求するパティスリーとして、「GOURMET TOKYO」4月号の特集記事に掲載いただきました。',
    content: `月刊誌「GOURMET TOKYO」2024年4月号にて、当店の理念と取り組みについて特集していただきました。「黒の美学を追求する新世代パティスリー」という題で、6ページにわたって詳しくご紹介いただいております。

記事では、シェフパティシエ田中美咲のこれまでの歩みや、なぜ「黒」をテーマにしたパティスリーを始めたのか、そして当店が目指す「美」の在り方について深く掘り下げていただきました。

また、代表商品の製作過程や、食材へのこだわりについても詳しく取り上げられており、当店の哲学をより多くの方に知っていただける貴重な機会となりました。

**「GOURMET TOKYO」4月号は現在書店にて発売中**です。ぜひお手に取ってご覧ください。`,
    featured: false
  },
  {
    id: 4,
    date: '2024.02.28',
    category: 'EVENT',
    categoryJa: 'イベント',
    title: 'バレンタイン限定「Noir Romance」完売御礼',
    excerpt: 'バレンタイン期間限定で販売いたしました「Noir Romance」コレクションは、おかげさまで完売となりました。',
    content: `2024年バレンタイン期間限定で販売いたしました「Noir Romance」コレクションは、多くのお客様にご愛顧いただき、予定よりも早く完売となりました。心より感謝申し上げます。

今回のコレクションは、大切な方への想いを黒の美学で表現したロマンティックなケーキとして、多くの方にお選びいただきました。特に、「Midnight Passion」と「Black Rose Mousse」は発売初日に完売となり、追加製作を行うほどの人気をいただきました。

お客様からは「見た目の美しさと味の深みに感動した」「特別な日にふさわしい逸品」といった温かいお言葉をいただき、スタッフ一同大変嬉しく思っております。

**来年のバレンタインでも、さらに進化した特別なコレクションをご用意する予定です。**どうぞご期待ください。`,
    featured: false
  },
  {
    id: 5,
    date: '2024.02.15',
    category: 'ANNOUNCEMENT',
    categoryJa: 'お知らせ',
    title: '営業時間変更のお知らせ',
    excerpt: '3月より営業時間を変更させていただきます。より多くのお客様にご利用いただけるよう、営業時間を延長いたします。',
    content: `平素より格別のご愛顧を賜り、誠にありがとうございます。この度、より多くのお客様にご利用いただけるよう、営業時間を変更させていただくことになりました。

**【変更前】**10:00-19:00（火曜定休）  
**【変更後】**9:30-20:00（火曜定休）

**変更開始日**：2024年3月1日（金）より

朝の時間帯と夕方の時間帯を拡張することで、お仕事前やお仕事帰りのお客様にもお立ち寄りいただきやすくなります。また、週末の混雑緩和にもつながると考えております。

なお、**火曜日の定休日に変更はございません**。

お客様にはご迷惑をおかけしないよう、スタッフ一同より一層のサービス向上に努めてまいります。今後ともどうぞよろしくお願いいたします。`,
    featured: false
  },
  {
    id: 6,
    date: '2024.01.20',
    category: 'ANNOUNCEMENT',
    categoryJa: 'お知らせ',
    title: 'ウェブサイトリニューアルのお知らせ',
    excerpt: 'より使いやすく、美しいウェブサイトへとリニューアルいたしました。商品情報やニュースをより詳しくご覧いただけます。',
    content: `この度、パティスリー ノワールのウェブサイトを全面リニューアルいたしました。黒の美学をテーマとした当店の世界観をより深く表現できるデザインに生まれ変わりました。

**【リニューアルの主なポイント】**
- より洗練されたデザインと使いやすいナビゲーション
- 商品紹介ページの詳細化
- 最新ニュースとイベント情報の充実
- レスポンシブデザインによるスマートフォン対応の向上
- お問い合わせフォームの改善

今後も定期的にコンテンツを更新し、お客様により多くの情報をお届けしてまいります。ご不明な点やご要望がございましたら、お気軽にお問い合わせください。

**新しいウェブサイトを通じて、パティスリー ノワールの世界をお楽しみください。**`,
    featured: false
  }
];

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const articleId = parseInt(params.id);
  const article = newsItems.find(item => item.id === articleId);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsItems
    .filter(item => item.id !== articleId && item.category === article.category)
    .slice(0, 3);

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.includes('**') && paragraph.includes('**')) {
        return (
          <p key={index} className="mb-6 text-gray-700 leading-relaxed font-light">
            {paragraph.split('**').map((part, i) => 
              i % 2 === 1 ? (
                <strong key={i} className="font-medium text-black">{part}</strong>
              ) : (
                part
              )
            )}
          </p>
        );
      }
      return (
        <p key={index} className="mb-6 text-gray-700 leading-relaxed font-light">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダーセクション */}
      <section className="relative py-20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <Link 
              href="/news"
              className="inline-flex items-center text-amber-300 hover:text-white transition-colors duration-300 mb-8 text-sm tracking-wider"
            >
              <ArrowLeft className="mr-2" size={16} />
              BACK TO JOURNAL
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <time className="text-sm text-gray-400 font-mono tracking-wider flex items-center">
                <Clock className="mr-2" size={14} />
                {article.date}
              </time>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs tracking-wider font-light flex items-center">
                <Tag className="mr-1" size={12} />
                {article.category}
              </span>
              <span className="text-xs text-gray-400 font-light">
                {article.categoryJa}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-light mb-6 tracking-wide leading-tight">
              {article.title}
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light max-w-3xl">
              {article.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 記事本文 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* アイキャッチ画像プレースホルダー */}
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-none mb-12 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="text-gray-400 mx-auto mb-4" size={64} />
                <span className="text-gray-500 text-lg font-light tracking-wide">
                  Article Image
                </span>
              </div>
            </div>

            {/* 記事本文 */}
            <div className="text-base">
              {formatContent(article.content)}
            </div>

            {/* シェアボタン */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Share2 size={16} />
                  <span>この記事をシェア</span>
                </div>
                <div className="flex gap-3">
                  <button className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">
                    <Facebook size={18} />
                  </button>
                  <button className="p-2 rounded-full border border-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors duration-300">
                    <Twitter size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* 関連記事 */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-4xl font-thin text-center mb-4 tracking-[0.1em]">
                RELATED STORIES
              </h2>
              <div className="w-16 h-px bg-amber-300 mx-auto mb-8"></div>
              <p className="text-center text-gray-600 font-light">
                同じカテゴリの記事
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.article
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="bg-white rounded-none overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-500"
                >
                  <Link href={`/news/${relatedArticle.id}`}>
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center group-hover:from-amber-50 group-hover:to-amber-100 transition-all duration-500">
                      <div className="text-center">
                        <Calendar className="text-gray-400 group-hover:text-amber-600 transition-colors duration-500 mx-auto mb-2" size={32} />
                        <span className="text-gray-500 group-hover:text-amber-700 text-xs font-light tracking-wide transition-colors duration-500">
                          Image
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <time className="text-xs text-gray-500 font-mono tracking-wider">
                          {relatedArticle.date}
                        </time>
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs tracking-wider font-light">
                          {relatedArticle.categoryJa}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-light text-black mb-3 group-hover:text-amber-600 transition-colors duration-300 tracking-wide line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      
                      <p className="text-gray-700 text-sm leading-relaxed font-light line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 記事一覧へ戻るボタン */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/news"
              className="inline-flex items-center px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider font-light"
            >
              <ArrowLeft className="mr-2" size={16} />
              記事一覧に戻る
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}