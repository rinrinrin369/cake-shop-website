'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    agreeToPolicy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: 'お電話でのお問い合わせ',
      content: '03-1234-5678',
      description: '営業時間内にお気軽にお電話ください',
      link: 'tel:03-1234-5678'
    },
    {
      icon: Mail,
      title: 'メールでのお問い合わせ',
      content: 'info@patisserie-noir.com',
      description: '24時間受付、1-2営業日以内にご返信',
      link: 'mailto:info@patisserie-noir.com'
    },
    {
      icon: MapPin,
      title: '店舗でのご相談',
      content: '東京都渋谷区神宮前1-2-3',
      description: 'ご来店でのご相談も承ります',
      link: '/access'
    }
  ];

  const inquiryCategories = [
    { value: 'order', label: 'ケーキのご注文' },
    { value: 'custom', label: 'オーダーメイド' },
    { value: 'workshop', label: 'ワークショップ' },
    { value: 'corporate', label: '法人様向けサービス' },
    { value: 'media', label: 'メディア・取材' },
    { value: 'other', label: 'その他' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // フォーム送信のシミュレーション
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // 実際の実装では、ここでAPIにデータを送信
    alert('お問い合わせを受け付けました。ありがとうございます。');
  };

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
              CONTACT
            </h1>
            <div className="w-32 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              お客様との大切な繋がりを、心よりお待ちしております<br />
              ご質問、ご相談、特別なご注文まで、どのようなことでもお気軽に
            </p>
          </motion.div>
        </div>
      </section>

      {/* お問い合わせ方法 */}
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
              GET IN TOUCH
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              ご都合に合わせて、お好みの方法でお問い合わせください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white p-8 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-500 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-amber-300 group-hover:bg-amber-50 transition-all duration-500">
                  <method.icon className="text-gray-600 group-hover:text-amber-600 transition-colors duration-500" size={28} />
                </div>
                
                <h3 className="text-lg font-light text-black mb-3 tracking-wide group-hover:text-amber-600 transition-colors duration-300">
                  {method.title}
                </h3>
                
                <Link
                  href={method.link}
                  className="block text-xl font-medium text-amber-600 mb-3 hover:text-amber-700 transition-colors duration-300"
                >
                  {method.content}
                </Link>
                
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-thin text-black mb-6 tracking-[0.1em]">
              INQUIRY FORM
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              以下のフォームに必要事項をご記入の上、送信してください
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-3 tracking-wide">
                  お名前 <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-300 transition-colors duration-300 bg-white"
                  placeholder="山田 太郎"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-3 tracking-wide">
                  メールアドレス <span className="text-amber-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-300 transition-colors duration-300 bg-white"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 電話番号 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-3 tracking-wide">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-300 transition-colors duration-300 bg-white"
                  placeholder="03-1234-5678"
                />
              </div>

              {/* お問い合わせ種別 */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-black mb-3 tracking-wide">
                  お問い合わせ種別 <span className="text-amber-600">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-300 transition-colors duration-300 bg-white"
                >
                  <option value="">選択してください</option>
                  {inquiryCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 件名 */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-black mb-3 tracking-wide">
                件名 <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-300 transition-colors duration-300 bg-white"
                placeholder="バースデーケーキのご注文について"
              />
            </div>

            {/* メッセージ */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-3 tracking-wide">
                メッセージ <span className="text-amber-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-300 transition-colors duration-300 bg-white resize-none"
                placeholder="お問い合わせ内容を詳しくお聞かせください。ケーキのご注文の場合は、ご希望の日時、サイズ、人数などもお知らせください。"
              />
            </div>

            {/* プライバシーポリシー同意 */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreeToPolicy"
                name="agreeToPolicy"
                required
                checked={formData.agreeToPolicy}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-amber-600 border-gray-300 focus:ring-amber-300"
              />
              <label htmlFor="agreeToPolicy" className="text-sm text-gray-700 font-light leading-relaxed">
                <Link href="/privacy" className="text-amber-600 hover:text-amber-700 transition-colors duration-300">
                  プライバシーポリシー
                </Link>
                に同意します <span className="text-amber-600">*</span>
              </label>
            </div>

            {/* 送信ボタン */}
            <div className="text-center pt-8">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-12 py-4 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-[0.2em] font-light ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-3"></div>
                    送信中...
                  </>
                ) : (
                  <>
                    <Send className="mr-3" size={16} />
                    送信する
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* よくあるご質問 */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-thin text-black mb-6 tracking-[0.1em]">
              FAQ
            </h2>
            <div className="w-24 h-px bg-amber-300 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              よくいただくご質問をまとめました
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'ケーキの予約はどのくらい前から可能ですか？',
                answer: '通常のケーキは3日前から、オーダーメイドケーキは1週間前からご予約を承っております。特別なイベント時期（クリスマス、バレンタインなど）は、お早めのご予約をお勧めいたします。'
              },
              {
                question: 'アレルギー対応は可能ですか？',
                answer: '卵、乳製品、小麦、ナッツ類のアレルギーに対応したケーキの製作も承っております。ご注文時に詳しいアレルギー情報をお伝えください。ただし、同じ工房で製作するため、完全なアレルゲンフリーの保証はいたしかねます。'
              },
              {
                question: 'ケーキの配送は行っていますか？',
                answer: '東京都内に限り、配送サービスを行っております。配送料は別途かかりますが、一定金額以上のご注文で配送料無料となります。詳しくはお問い合わせください。'
              },
              {
                question: 'ワークショップの参加条件はありますか？',
                answer: '基本的に年齢制限はございませんが、小学生以下のお子様は保護者の方とご一緒にご参加ください。エプロンや必要な道具はすべてご用意いたします。'
              },
              {
                question: 'キャンセルポリシーについて教えてください',
                answer: 'ご注文のキャンセルは、お受け取り予定日の2日前まで承ります。前日・当日のキャンセルにつきましては、キャンセル料として代金の50%を申し受けます。'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 border border-gray-200 hover:border-amber-300 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MessageCircle className="text-amber-600 mt-1" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-black mb-3 tracking-wide">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 営業時間・アクセス */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Clock className="text-amber-300 mr-4" size={28} />
                <h3 className="text-2xl font-light tracking-wide">営業時間</h3>
              </div>
              <div className="space-y-2 text-gray-300 font-light">
                <p>月・水〜土：9:30 - 20:00</p>
                <p>日曜日：9:30 - 19:00</p>
                <p>火曜日：定休日</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <MapPin className="text-amber-300 mr-4" size={28} />
                <h3 className="text-2xl font-light tracking-wide">アクセス</h3>
              </div>
              <div className="space-y-2 text-gray-300 font-light">
                <p>東京都渋谷区神宮前1-2-3</p>
                <p>JR山手線「渋谷駅」徒歩8分</p>
                <Link 
                  href="/access" 
                  className="inline-block text-amber-300 hover:text-white transition-colors duration-300 text-sm tracking-wider"
                >
                  詳しいアクセス情報 →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}