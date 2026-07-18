import React from 'react';
import Button from '../components/Button';
import { ArrowRight, TrendingUp } from 'lucide-react';

const partnerBadges = [
  'TaniHub', 'Crowde', 'Kementan RI', 'eFishery', 'Jala Tech',
  'Wahana Agri', 'Tanifund', 'Agromaret', 'TaniHub', 'Crowde',
  'Kementan RI', 'eFishery', 'Jala Tech', 'Wahana Agri', 'Tanifund', 'Agromaret',
  'TaniHub', 'Crowde', 'Kementan RI', 'eFishery', 'Jala Tech',
  'Wahana Agri', 'Tanifund', 'Agromaret', 'TaniHub', 'Crowde',
  'Kementan RI', 'eFishery', 'Jala Tech', 'Wahana Agri', 'Tanifund', 'Agromaret',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-0 flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-[#f5f9f6] via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
    >
      {/* Background ambient glows */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-emerald-400/10 dark:bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-10 right-[-5%] w-[400px] h-[400px] bg-amber-400/8 dark:bg-amber-500/3 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-300/8 dark:bg-emerald-500/3 rounded-full blur-[80px] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="max-w-[992px] mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10 w-full my-auto">

        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Platform Smart Farming #1 di Indonesia
        </div>

        {/* Title */}
        <h1 className="font-sans text-[36px] sm:text-[42px] md:text-[52px] font-bold text-[#071012] dark:text-white leading-[115%] tracking-tight text-center max-w-3xl">
          Bertani Lebih{' '}
          <span className="relative inline-block">
            <span className="text-[#00966c] dark:text-emerald-400">Cerdas</span>
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#00966c]/30 dark:bg-emerald-400/30 rounded-full" />
          </span>{' '}
          dengan AI & IoT
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-[15px] sm:text-[16px] md:text-[18px] font-normal text-slate-500 dark:text-slate-400 leading-[170%] text-center max-w-xl mt-1">
          Tingkatkan hasil panen dan kurangi pemborosan lewat monitoring sensor real-time, irigasi otomatis, dan analitik prediktif berbasis AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a href="#contact">
            <Button
              variant="primary"
              className="rounded-xl px-7 py-3.5 bg-[#00966c] hover:bg-[#00805c] text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all duration-300"
            >
              Mulai Gratis Sekarang
              <ArrowRight size={16} />
            </Button>
          </a>
          <a href="#features">
            <Button
              variant="secondary"
              className="rounded-xl px-7 py-3.5 font-semibold text-sm"
            >
              Lihat Fitur
            </Button>
          </a>
        </div>

        {/* Floating accuracy badge */}
        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-2xl px-5 py-3 shadow-sm mt-2">
          <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
            <TrendingUp size={18} />
          </div>
          <div className="text-left">
            <p className="text-xs text-slate-400 font-semibold">Akurasi Prediksi Panen</p>
            <p className="text-sm font-extrabold text-slate-800 dark:text-white tracking-tight">94.8% tingkat keberhasilan</p>
          </div>
          <div className="ml-3 pl-3 border-l border-slate-100 dark:border-slate-800">
            <p className="text-xs text-slate-400 font-semibold">Lahan Aktif</p>
            <p className="text-sm font-extrabold text-slate-800 dark:text-white tracking-tight">12.400+ hektare</p>
          </div>
        </div>
      </div>

      {/* Partner Logos Marquee */}
      <div className="w-full flex flex-col items-center gap-4 relative z-10 mt-16 overflow-hidden py-6 border-t border-slate-100 dark:border-slate-800/50">
        <p className="font-sans text-[13px] font-semibold text-slate-400 dark:text-slate-500 text-center uppercase tracking-widest px-6">
          Dipercaya oleh ekosistem agritech terkemuka
        </p>

        <div className="w-full overflow-hidden flex relative">
          <div className="absolute left-0 top-0 bottom-0 w-[15%] md:w-[20%] bg-gradient-to-r from-white dark:from-slate-950 to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-[15%] md:w-[20%] bg-gradient-to-l from-white dark:from-slate-950 to-transparent pointer-events-none z-20" />

          <div className="animate-marquee-4x flex items-center gap-4 py-1">
            {partnerBadges.map((name, index) => (
              <span
                key={index}
                className="shrink-0 px-5 py-2 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-sm font-semibold whitespace-nowrap shadow-xs"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
