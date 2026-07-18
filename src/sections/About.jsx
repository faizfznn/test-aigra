import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import logoImg from '../assets/logo.png';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-24 bg-[#faf9f6]/40 dark:bg-slate-950/20 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[992px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-[992px] mx-auto mb-16 flex flex-col items-center gap-6">
          <h2 className="font-sans text-[32px] md:text-[48px] font-bold text-[#071012] dark:text-white leading-[120%] tracking-tight text-center lg:whitespace-nowrap">
            Solusi Terintegrasi untuk Petani Modern dan Investor
          </h2>

          <a href="#contact">
            <Button variant="primary" className="rounded-xl px-8 py-3.5 bg-[#00966c] hover:bg-[#00805c] text-white font-bold text-sm shadow-sm transition-all duration-300">
              Pelajari Skema Kemitraan
            </Button>
          </a>
        </div>

        <div className="relative max-w-[992px] mx-auto mt-12 flex flex-col md:block gap-8 md:h-[580px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="about-card-1 w-full md:w-[520px] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-8 shadow-xl text-left md:absolute md:left-[2%] md:top-0 z-10 origin-center"
          >
            <h3 className="font-sans text-[16px] font-bold text-[#071012] dark:text-white flex items-center gap-2 mb-4 leading-none">
              Mengapa <img src={logoImg} alt="AIGRA" className="h-5 w-auto object-contain inline-block dark:brightness-125" /> hadir
            </h3>

            <div className="flex flex-col gap-4 text-slate-650 dark:text-slate-300 text-sm md:text-[15px] leading-relaxed font-medium">
              <p>
                Sektor pertanian sering kali menghadapi kendala akibat minimnya data real-time mengenai kondisi lahan, curah hujan yang tidak menentu, serta pemborosan biaya operasional akibat sistem penyiraman dan pemupukan yang masih manual.
              </p>
              <p>
                Di sisi lain, investor membutuhkan transparansi data dan kepastian proyeksi hasil panen yang terukur sebelum menyalurkan pendanaan pada sektor agribisnis.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="about-card-2 w-full md:w-[560px] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-8 shadow-xl text-left md:absolute md:right-[2%] md:top-[220px] z-20 origin-center"
          >
            <div className="flex flex-col gap-4 mb-6 text-sm md:text-[15px] font-bold text-slate-800 dark:text-slate-100 leading-normal">
              <div className="flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-[#00a2e8] mt-1 shrink-0" />
                <span>72% Petani gagal panen akibat lambatnya deteksi hama dan cuaca ekstrem.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-[#00a2e8] mt-1 shrink-0" />
                <span>0% Air terbuang sia-sia karena irigasi tidak berbasis data kelembaban.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-[#00a2e8] mt-1 shrink-0" />
                <span>65% Investor ragu mendanai akibat ketiadaan monitoring lahan yang valid.</span>
              </div>
            </div>

            <hr className="border-slate-100 dark:border-slate-800 my-4" />

            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-semibold">
              AIGRA EON INDONESIA hadir mengatasi kesenjangan teknologi ini. Lewat efisiensi IoT dan transparansi data, platform agritech ini memodernisasi pertanian sekaligus membuka akses pendanaan yang aman bagi investor.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
