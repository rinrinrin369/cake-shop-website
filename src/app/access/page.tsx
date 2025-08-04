'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Phone, Train, Car, Mail } from 'lucide-react';

export default function AccessPage() {
  const businessHours = [
    { day: '月曜日', hours: '9:30 - 20:00', note: '' },
    { day: '火曜日', hours: '定休日', note: 'Closed' },
    { day: '水曜日', hours: '9:30 - 20:00', note: '' },
    { day: '木曜日', hours: '9:30 - 20:00', note: '' },
    { day: '金曜日', hours: '9:30 - 20:00', note: '' },
    { day: '土曜日', hours: '9:30 - 20:00', note: '' },
    { day: '日曜日', hours: '9:30 - 19:00', note: '日曜のみ19時閉店' },
  ];

  const accessMethods = [
    {
      icon: Train,
      title: '電車でお越しの方',
      details: [
        'JR山手線「渋谷駅」東口より徒歩8分',
        '東京メトロ半蔵門線「表参道駅」B2出口より徒歩12分',
        '東急東横線「代官山駅」正面口より徒歩15分'
      ]
    },
    {
      icon: Car,
      title: 'お車でお越しの方',
      details: [
        '首都高速3号渋谷線「渋谷IC」より約5分',
        '専用駐車場はございません',
        '近隣のコインパーキングをご利用ください',
        '土日祝日は駐車場が混雑する場合があります'
      ]
    }
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
              ACCESS
            </h1>
            <div className="w-32 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              黒の美学が息づく特別な空間へ<br />
              皆様のお越しを心よりお待ちしております
            </p>
          </motion.div>
        </div>
      </section>

      {/* 店舗情報 */}
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
              SHOP INFORMATION
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* 基本情報 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-amber-300 transition-colors duration-500">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide flex items-center">
                  <MapPin className="mr-3 text-amber-600" size={24} />
                  店舗情報
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-black mb-2 tracking-wide">
                      Patisserie Noir
                    </h4>
                    <p className="text-base text-gray-700 font-light">
                      パティスリー ノワール
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-black mb-2 tracking-wide">住所</h4>
                    <p className="text-gray-700 font-light leading-relaxed">
                      〒150-0001<br />
                      東京都渋谷区神宮前1-2-3<br />
                      ノワールビル 1F
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-black mb-2 tracking-wide flex items-center">
                      <Phone className="mr-2" size={16} />
                      電話番号
                    </h4>
                    <p className="text-gray-700 font-light">
                      <a href="tel:03-1234-5678" className="hover:text-amber-600 transition-colors duration-300">
                        03-1234-5678
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-black mb-2 tracking-wide flex items-center">
                      <Mail className="mr-2" size={16} />
                      メールアドレス
                    </h4>
                    <p className="text-gray-700 font-light">
                      <a href="mailto:info@patisserie-noir.com" className="hover:text-amber-600 transition-colors duration-300">
                        info@patisserie-noir.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* 営業時間 */}
              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-amber-300 transition-colors duration-500">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide flex items-center">
                  <Clock className="mr-3 text-amber-600" size={24} />
                  営業時間
                </h3>
                
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className={`flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0 ${
                        schedule.hours === '定休日' ? 'opacity-60' : ''
                      }`}
                    >
                      <span className="text-gray-700 font-light">{schedule.day}</span>
                      <div className="text-right">
                        <span className={`font-light ${
                          schedule.hours === '定休日' ? 'text-gray-500' : 'text-black'
                        }`}>
                          {schedule.hours}
                        </span>
                        {schedule.note && (
                          <span className="block text-xs text-gray-500 mt-1">{schedule.note}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200">
                  <p className="text-xs text-amber-800 font-light leading-relaxed">
                    ※ 営業時間は変更になる場合がございます<br />
                    ※ 完売次第、早期閉店する場合がございます<br />
                    ※ 臨時休業の場合は、Instagramでお知らせいたします
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 地図エリア */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center hover:border-amber-300 transition-colors duration-500">
                <div className="text-center">
                  <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-light text-gray-600 mb-2">Interactive Map</h4>
                  <p className="text-sm text-gray-500 font-light">
                    Google Maps integration<br />
                    coming soon
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <button className="inline-flex items-center px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider font-light">
                  Google Mapsで開く
                  <ArrowLeft className="ml-2 rotate-180" size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* アクセス方法 */}
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
              HOW TO GET HERE
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              各種交通機関でのアクセス方法をご案内いたします
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {accessMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white p-8 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <method.icon className="text-amber-600 mr-4" size={32} />
                  <h3 className="text-xl font-light text-black tracking-wide">
                    {method.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {method.details.map((detail, detailIndex) => (
                    <li 
                      key={detailIndex}
                      className="text-gray-700 text-sm font-light flex items-start leading-relaxed"
                    >
                      <span className="w-2 h-2 bg-amber-300 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
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
              CONTACT US
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 mb-12 font-light leading-relaxed">
              ご不明な点やご予約については<br />
              お気軽にお問い合わせください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:03-1234-5678"
                className="inline-flex items-center px-8 py-4 border border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black transition-all duration-300 text-sm tracking-wider font-light"
              >
                <Phone className="mr-3" size={16} />
                お電話でのお問い合わせ
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wider font-light"
              >
                <Mail className="mr-3" size={16} />
                メールでのお問い合わせ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}