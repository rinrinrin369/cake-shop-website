'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Award, Heart, Star, Users } from 'lucide-react';

export default function AboutPage() {
  const philosophyPoints = [
    {
      icon: Heart,
      title: '黒の美学',
      subtitle: 'Aesthetic of Black',
      description: '黒は無限の可能性を秘めた色。その深遠なる美しさの中に、真の美味を宿らせる。'
    },
    {
      icon: Star,
      title: '職人の魂',
      subtitle: 'Artisan Spirit',
      description: '一つひとつに込められた想い。手仕事への敬意と、伝統への深い愛情。'
    },
    {
      icon: Users,
      title: '繋がりの喜び',
      subtitle: 'Connection & Joy',
      description: '特別な瞬間を彩る存在として。大切な人と分かち合う至福のひととき。'
    }
  ];

  const achievements = [
    {
      year: '2023',
      title: '全国洋菓子技術コンテスト',
      award: '金賞受賞',
      description: 'シグネチャーケーキ「Noir Chocolat」にて'
    },
    {
      year: '2022',
      title: 'ジャパン・ペストリー・カップ',
      award: '優秀賞',
      description: '革新的技術部門'
    },
    {
      year: '2021',
      title: 'Tokyo Dessert Festival',
      award: '審査員特別賞',
      description: '「黒の美学」コンセプトケーキ'
    }
  ];

  const skills = [
    { name: 'チョコレート技術', level: 95 },
    { name: '焼き菓子', level: 90 },
    { name: 'デコレーション', level: 88 },
    { name: 'アイスケーキ', level: 85 },
    { name: '和洋融合', level: 92 }
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
              OUR STORY
            </h1>
            <div className="w-32 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              黒の美学に魅せられたパティシエの想い<br />
              伝統と革新が交差する、特別な物語
            </p>
          </motion.div>
        </div>
      </section>

      {/* 理念セクション */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-thin text-black mb-6 tracking-[0.1em]">
              PHILOSOPHY
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed font-light mb-8">
                「黒は、すべての色を包み込む無限の深さを持つ」
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                私たちは、黒の持つ神秘的な美しさに魅せられ、その中に宿る無限の可能性を信じています。
                伝統的なパティスリーの技術に現代的な感性を融合させ、一つひとつの作品に物語を込めて。
                黒の美学を通じて、お客様の特別な瞬間をより深く、より美しく彩ることが私たちの使命です。
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-amber-300 group-hover:bg-amber-50 transition-all duration-500">
                  <point.icon className="text-gray-600 group-hover:text-amber-600 transition-colors duration-500" size={32} />
                </div>
                
                <h3 className="text-xl font-light text-black mb-2 tracking-wide group-hover:text-amber-600 transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-light tracking-wide">
                  {point.subtitle}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-light">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* パティシエ紹介 */}
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
              CHEF PATISSIER
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* パティシエ画像 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-100 border border-gray-200 flex items-center justify-center hover:border-amber-300 transition-colors duration-500">
                <div className="text-center">
                  <Users className="text-gray-400 mx-auto mb-4" size={64} />
                  <h4 className="text-xl font-light text-gray-600 mb-2">Chef Portrait</h4>
                  <p className="text-sm text-gray-500 font-light">
                    Professional photo<br />
                    coming soon
                  </p>
                </div>
              </div>
              
              {/* 装飾的な要素 */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-amber-300"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-amber-300"></div>
            </motion.div>

            {/* パティシエ情報 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-light text-black mb-2 tracking-wide">
                  田中 美咲
                </h3>
                <p className="text-lg text-gray-600 mb-1 font-light">
                  Misaki Tanaka
                </p>
                <p className="text-sm text-amber-600 font-light tracking-wide">
                  Chef Pâtissier & Owner
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed font-light">
                  25歳。都内有名パティスリーで修業を積んだ後、フランス・パリの老舗パティスリーで2年間研鑽を重ねる。
                  帰国後、「黒の美学」をテーマとした独自のスタイルを確立し、2021年にパティスリー ノワールを開店。
                </p>
                
                <p className="text-gray-700 leading-relaxed font-light">
                  「一つひとつのケーキに物語を込めて」をモットーに、伝統的な技法と革新的なアイデアを融合させた作品を生み出し続けている。
                  黒を基調とした美しいビジュアルと深い味わいで、多くの人々を魅了している。
                </p>
              </div>

              {/* スキル表示 */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-black tracking-wide">Specialties</h4>
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 font-light">{skill.name}</span>
                      <span className="text-sm text-amber-600 font-light">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 受賞歴 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-thin text-black mb-6 tracking-[0.1em]">
              ACHIEVEMENTS
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              技術と創造性が認められた数々の受賞歴
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex items-center p-8 bg-gray-50 border border-gray-200 hover:border-amber-300 hover:bg-white hover:shadow-lg transition-all duration-500 group"
              >
                <div className="flex-shrink-0 mr-8">
                  <div className="w-16 h-16 border-2 border-amber-300 rounded-full flex items-center justify-center group-hover:bg-amber-300 transition-colors duration-500">
                    <Award className="text-amber-600 group-hover:text-white transition-colors duration-500" size={28} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-thin text-amber-600 tracking-wide">
                      {achievement.year}
                    </span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs tracking-wider font-light">
                      {achievement.award}
                    </span>
                  </div>
                  <h3 className="text-xl font-light text-black mb-1 tracking-wide group-hover:text-amber-600 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-light">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* メッセージセクション */}
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
              MESSAGE
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 italic text-gray-300">
              「黒の中に宿る無限の美しさを、<br />
              一つひとつのケーキに込めて。<br />
              お客様の特別な瞬間が、<br />
              より深く、より美しく輝きますように。」
            </blockquote>
            <p className="text-amber-300 text-lg font-light tracking-wider">
              — 田中 美咲
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}