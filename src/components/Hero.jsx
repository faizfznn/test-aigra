import React from 'react';
import Button from './Button';

/**
 * Hero Section - AIGRA EON Branding
 * Centered text layout, exact typography matching specifications,
 * and an infinite scrolling marquee (carousel) of cooperative partner logos.
 */
export default function Hero() {
  // 10 custom designed logo badge cards representing agricultural and tech collaborators (w-12 h-12 rounded-xl)
  const logoCards = [
    // Card 1: Bar chart (Light gray)
    <div key="1" className="w-12 h-12 rounded-xl bg-[#E2E8F0]/30 dark:bg-slate-900/50 flex items-center justify-center border border-slate-200/40 dark:border-slate-800 shrink-0">
      <svg className="w-6 h-6 text-slate-350 dark:text-slate-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 18h2v-6H4v6zm5 0h2V5H9v13zm5 0h2V9h-2v9zm5 0h2v-4h-2v4z" />
      </svg>
    </div>,
    // Card 2: Parallel bars (Orange accent)
    <div key="2" className="w-12 h-12 rounded-xl bg-[#FAF8F5] dark:bg-slate-900/50 flex items-center justify-center border border-slate-200/40 dark:border-slate-800 shrink-0">
      <svg className="w-6 h-6 text-orange-400/80 transform -skew-x-12" fill="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="6" width="3.5" height="12" />
        <rect x="10.5" y="6" width="3.5" height="12" />
        <rect x="17" y="6" width="3.5" height="12" />
      </svg>
    </div>,
    // Card 3: Leaf Sprout (Dark slate)
    <div key="3" className="w-12 h-12 rounded-xl bg-slate-800 dark:bg-slate-900/50 flex items-center justify-center border border-slate-700/60 shrink-0">
      <span className="text-xl">🌱</span>
    </div>,
    // Card 4: cukurbra (Green block text)
    <div key="4" className="w-12 h-12 rounded-xl bg-[#A7F3D0]/60 dark:bg-emerald-950/20 flex items-center justify-center border border-emerald-250 dark:border-emerald-900/30 p-1 shrink-0">
      <span className="text-[8px] font-black text-emerald-800 dark:text-emerald-450 leading-none text-center">cukur<br/>bra.</span>
    </div>,
    // Card 5: Brown/Earth waves
    <div key="5" className="w-12 h-12 rounded-xl bg-[#78350F]/10 dark:bg-amber-955/10 flex items-center justify-center border border-[#78350F]/20 dark:border-amber-900/20 shrink-0">
      <span className="text-xl">🌾</span>
    </div>,
    // Card 6: Beige Star
    <div key="6" className="w-12 h-12 rounded-xl bg-[#FEF3C7]/80 dark:bg-amber-950/20 flex items-center justify-center border border-amber-200/50 dark:border-amber-900/30 shrink-0">
      <svg className="w-6 h-6 text-amber-600 dark:text-amber-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>,
    // Card 7: Console/Black AIGRA
    <div key="7" className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-slate-900/50 flex items-center justify-center border border-slate-800 shrink-0">
      <span className="text-white text-[8px] font-black tracking-wider">AIGRA</span>
    </div>,
    // Card 8: Blue arrows
    <div key="8" className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center border border-blue-150 dark:border-blue-900/30 shrink-0">
      <svg className="w-6 h-6 text-blue-500/80" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" />
      </svg>
    </div>,
    // Card 9: Farmer Emoji (Pink)
    <div key="9" className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-955/20 flex items-center justify-center border border-pink-150 dark:border-pink-900/20 shrink-0">
      <span className="text-xl">👨‍🌾</span>
    </div>,
    // Card 10: Smiling face (Greenish)
    <div key="10" className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center border border-emerald-150 dark:border-emerald-900/20 shrink-0">
      <span className="text-xl">☺</span>
    </div>
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-36 pb-12 flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-[#faf9f6]/60 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
    >
      {/* Background soft blurs matching the screenshot (light warm glow on left, purple/blue glow on right) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/2 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/2 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Centered Content */}
      <div className="max-w-[992px] mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10 w-full my-auto">
        
        {/* Title */}
        <h1 
          className="font-sans text-[36px] sm:text-[40px] md:text-[48px] font-bold text-[#071012] dark:text-white leading-[120%] tracking-tight text-center max-w-3xl"
        >
          Bertani Lebih <span className="text-[#00966c]">Cerdas</span> dengan AI <br /> & IoT
        </h1>

        {/* Subtitle */}
        <p 
          className="font-sans text-[15px] sm:text-[16px] md:text-[18px] font-medium text-slate-600 dark:text-slate-300 leading-[160%] text-center max-w-2xl mt-2"
        >
          Tingkatkan hasil panen Anda dan kurangi pemborosan air lewat sistem monitoring kelembapan tanah, cuaca, serta kontrol irigasi otomatis berbasis kecerdasan buatan.
        </p>

        {/* Button */}
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

      {/* Bottom Partner Logo Carousel (Marquee) */}
      <div className="w-full flex flex-col items-center gap-5 relative z-10 mt-8 overflow-hidden py-3 border-t border-slate-100/50 dark:border-slate-800/30">
        
        {/* Description above carousel */}
        <p 
          className="font-sans text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#666B6C] dark:text-slate-400 leading-[150%] text-center px-6"
        >
          Dipercaya oleh kelompok tani lokal dan investor agritech terkemuka di Indonesia.
        </p>

        {/* Marquee Wrapper */}
        <div className="w-full overflow-hidden flex relative mt-2">
          {/* Left and Right Fading Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-[20%] md:w-[30%] bg-gradient-to-r from-white via-white/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-[20%] md:w-[30%] bg-gradient-to-l from-white via-white/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 pointer-events-none z-20" />

          {/* 4x repeated list creates perfect loop scroll on any desktop screen size */}
          <div className="animate-marquee-4x flex items-center gap-6 py-1">
            {logoCards.map((card, index) => (
              <React.Fragment key={`c1-${index}`}>{card}</React.Fragment>
            ))}
            {logoCards.map((card, index) => (
              <React.Fragment key={`c2-${index}`}>{card}</React.Fragment>
            ))}
            {logoCards.map((card, index) => (
              <React.Fragment key={`c3-${index}`}>{card}</React.Fragment>
            ))}
            {logoCards.map((card, index) => (
              <React.Fragment key={`c4-${index}`}>{card}</React.Fragment>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
