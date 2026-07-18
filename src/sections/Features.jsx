import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Droplet, LayoutDashboard, BrainCircuit, Waves, Thermometer, Sun } from 'lucide-react';
import Button from '../components/Button';

export default function Features() {
  const cardShadow = {
    boxShadow: '0 58px 16px 0 rgba(0, 0, 0, 0.00), 0 37px 15px 0 rgba(0, 0, 0, 0.003), 0 21px 12px 0 rgba(0, 0, 0, 0.015), 0 9px 9px 0 rgba(0, 0, 0, 0.025), 0 2px 5px 0 rgba(0, 0, 0, 0.03)'
  };

  return (
    <section
      id="features"
      className="py-20 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative border-t border-b border-slate-200/20 dark:border-slate-800/20"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-emerald-500/5 dark:bg-emerald-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[992px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-2.5">
          <h2 className="font-sans text-[32px] md:text-[48px] font-bold text-[#071012] dark:text-white leading-[120%] tracking-tight text-center">
            Apa yang membuat kami 'beda'
          </h2>
          <p className="font-sans text-[18px] font-semibold text-[#454B4C] dark:text-slate-350 leading-[150%] text-center">
            Kita senang kamu bertanya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            style={cardShadow}
            className="md:col-span-2 flex flex-col justify-between pt-[16px] pb-[16px] pl-[12.8px] pr-0 gap-[19.2px] rounded-[9.6px] border border-[#AEB1B2] dark:border-slate-800 bg-[#FBFDFD] dark:bg-slate-900/40 text-left"
          >
            <div className="flex items-center gap-2 pr-[12.8px] w-full">
              <div className="w-[19.2px] h-[19.2px] flex items-center justify-center text-slate-850 dark:text-emerald-400 shrink-0">
                <Smartphone size={16} className="stroke-[2.5]" />
              </div>
              <h3 className="font-sans text-[14.4px] font-bold text-[#071012] dark:text-white leading-[150%]">
                Monitoring Sensor Real-Time
              </h3>
            </div>

            <div className="flex flex-col gap-3 my-2 pr-[12.8px]">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/45 text-emerald-600">
                    <Droplet size={16} />
                  </div>
                  <span className="text-sm font-extrabold text-slate-800 dark:text-white">Sensor Kelembapan Tanah</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">68% (Optimal)</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-955/45 text-amber-500">
                    <Thermometer size={16} />
                  </div>
                  <span className="text-sm font-extrabold text-slate-800 dark:text-white">Sensor Suhu Udara</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">27.4°C (Stabil)</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-955/45 text-blue-500">
                    <Sun size={16} />
                  </div>
                  <span className="text-sm font-extrabold text-slate-800 dark:text-white">Sensor Intensitas Cahaya</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">820 Lux (Normal)</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-semibold leading-relaxed pr-[12.8px]">
              * Seluruh sensor terhubung secara live ke jaringan AI AIGRA EON. Pembaruan data terjadi setiap 10 detik.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={cardShadow}
            className="md:col-span-1 flex flex-col justify-between pt-[16px] pb-[16px] pl-[12.8px] pr-0 gap-[19.2px] rounded-[9.6px] border border-[#AEB1B2] dark:border-slate-800 bg-[#FBFDFD] dark:bg-slate-900/40 text-left"
          >
            <div className="flex items-center gap-2 pr-[12.8px] w-full">
              <div className="w-[19.2px] h-[19.2px] flex items-center justify-center text-slate-850 dark:text-emerald-400 shrink-0">
                <LayoutDashboard size={16} className="stroke-[2.5]" />
              </div>
              <h3 className="font-sans text-[14.4px] font-bold text-[#071012] dark:text-white leading-[150%]">
                Dashboard Terpusat
              </h3>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/80 flex flex-col gap-3 my-2 mr-[12.8px]">
              <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold">
                <span>AKTIVITAS LAHAN</span>
                <span className="text-emerald-500">100% ONLINE</span>
              </div>
              <div className="flex justify-between items-end gap-1.5 h-16 pt-2">
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-[35%] rounded-t-md" />
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-[60%] rounded-t-md" />
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-[45%] rounded-t-md" />
                <div className="w-full bg-emerald-500/40 h-[75%] rounded-t-md" />
                <div className="w-full bg-emerald-500 h-[95%] rounded-t-md" />
              </div>
              <span className="text-lg font-black text-slate-850 dark:text-white tracking-tight">Blok A-1 Sukses</span>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-355 leading-relaxed font-semibold pr-[12.8px]">
              Kelola dan sinkronkan data berhektar-hektar lahan Anda di berbagai wilayah dalam satu dasbor terpadu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={cardShadow}
            className="md:col-span-1 flex flex-col justify-between pt-[16px] pb-[16px] pl-[12.8px] pr-0 gap-[19.2px] rounded-[9.6px] border border-[#AEB1B2] dark:border-slate-800 bg-[#FBFDFD] dark:bg-slate-900/40 text-left"
          >
            <div className="flex items-center gap-2 pr-[12.8px] w-full">
              <div className="w-[19.2px] h-[19.2px] flex items-center justify-center text-slate-850 dark:text-emerald-400 shrink-0">
                <Waves size={16} className="stroke-[2.5]" />
              </div>
              <h3 className="font-sans text-[14.4px] font-bold text-[#071012] dark:text-white leading-[150%]">
                Sistem Irigasi Otomatis
              </h3>
            </div>

            <div className="flex flex-col gap-3 my-2 pr-[12.8px]">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/80">
                <span className="text-sm font-extrabold text-slate-800 dark:text-white">Katup Pompa Utama</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] bg-emerald-500/10 text-emerald-600 font-extrabold border border-emerald-500/20">AKTIF</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/80">
                <span className="text-sm font-extrabold text-slate-800 dark:text-white">Katup Zona A (Tomat)</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] bg-slate-100 dark:bg-slate-800 text-slate-505 font-extrabold border border-slate-200/50">TERTUTUP</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/80">
                <span className="text-sm font-extrabold text-slate-800 dark:text-white">Katup Zona B (Cabai)</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] bg-emerald-500/10 text-emerald-600 font-extrabold border border-emerald-500/20">TERBUKA</span>
              </div>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-355 leading-relaxed font-semibold pr-[12.8px]">
              Katup penyiram menyala otomatis terjadwal hanya ketika sensor kelembapan mendeteksi tingkat air di bawah ambang batas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={cardShadow}
            className="md:col-span-2 flex flex-col justify-between pt-[16px] pb-[16px] pl-[12.8px] pr-0 gap-[19.2px] rounded-[9.6px] border border-[#AEB1B2] dark:border-slate-800 bg-[#FBFDFD] dark:bg-slate-900/40 text-left"
          >
            <div className="flex items-center gap-2 pr-[12.8px] w-full">
              <div className="w-[19.2px] h-[19.2px] flex items-center justify-center text-slate-850 dark:text-emerald-400 shrink-0">
                <BrainCircuit size={16} className="stroke-[2.5]" />
              </div>
              <h3 className="font-sans text-[14.4px] font-bold text-[#071012] dark:text-white leading-[150%]">
                Rekomendasi Prediksi Panen
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 my-2 items-stretch sm:items-center justify-between pr-[12.8px]">
              <div className="max-w-sm">
                <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400 block tracking-tight">+12.4%</span>
                <span className="text-xs font-bold text-slate-400 tracking-widest block mt-1">Estimasi Kenaikan Hasil</span>
                <p className="text-sm text-slate-550 dark:text-slate-350 mt-3 leading-relaxed font-semibold">
                  Analitik AIGRA EON memproses kecocokan unsur hara tanah dan riwayat kelembapan untuk menyusun kalender panen dan anjuran dosis pupuk paling efisien.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-sm flex-1 text-left flex flex-col gap-2 min-w-[220px]">
                <div className="flex justify-between text-[11px] font-bold text-slate-400 pb-1.5 border-b border-slate-50 dark:border-slate-800">
                  <span>MODEL PREDIKTOR</span>
                  <span className="text-emerald-500">94.8% AKURAT</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-slate-500 font-semibold">Tanggal Panen:</span>
                  <span className="font-extrabold text-slate-850 dark:text-white">12 September 2026</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-slate-500 font-semibold">Rekomendasi Pupuk:</span>
                  <span className="font-extrabold text-slate-850 dark:text-white">NPK Dosis Vegetatif</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-450 font-semibold pr-[12.8px]">
              * Rekomendasi dihitung berdasarkan data agronomis daerah Jawa Barat.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <a href="#contact">
            <Button variant="primary" className="rounded-xl px-8 py-3.5 bg-[#00966c] hover:bg-[#00805c] text-white font-bold text-sm shadow-sm transition-all duration-300">
              Mulai dari sekarang
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
