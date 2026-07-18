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
      className="relative min-h-screen pt-36 pb-12 flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-[#faf9f6]/60 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/2 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/2 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-[992px] mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10 w-full my-auto">

        <h1
          className="font-sans text-[36px] sm:text-[40px] md:text-[48px] font-bold text-[#071012] dark:text-white leading-[120%] tracking-tight text-center max-w-3xl"
        >
          Bertani Lebih <span className="text-[#00966c]">Cerdas</span> dengan AI <br /> & IoT
        </h1>

        <p
          className="font-sans text-[15px] sm:text-[16px] md:text-[18px] font-medium text-slate-600 dark:text-slate-300 leading-[160%] text-center max-w-2xl mt-2"
        >
          Tingkatkan hasil panen Anda dan kurangi pemborosan air lewat sistem monitoring kelembapan tanah, cuaca, serta kontrol irigasi otomatis berbasis kecerdasan buatan.
        </p>

        <div className="mt-4">
          <a href="#contact">
            <Button
              variant="primary"
              className="rounded-xl px-7 py-3 bg-[#00966c] hover:bg-[#00805c] text-white font-bold text-sm shadow-sm transition-all duration-300"
            >
              Hubungi Kemitraan
            </Button>
          </a>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-5 relative z-10 mt-8 overflow-hidden py-3 border-t border-slate-100/50 dark:border-slate-800/30">

        <p
          className="font-sans text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#666B6C] dark:text-slate-400 leading-[150%] text-center px-6"
        >
          Dipercaya oleh kelompok tani lokal dan investor agritech terkemuka di Indonesia.
        </p>

        {/* Marquee Wrapper */}
        <div className="w-full overflow-hidden flex relative mt-2">
          <div className="absolute left-0 top-0 bottom-0 w-[20%] md:w-[30%] bg-gradient-to-r from-white via-white/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-[20%] md:w-[30%] bg-gradient-to-l from-white via-white/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 pointer-events-none z-20" />

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