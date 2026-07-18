import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from './Button';

/**
 * Contact Section Component
 * Renders the office address, contact details on the left,
 * and the validated interactive contact form on the right.
 */
export default function Contact() {
  // Form fields state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Validation errors state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Submission process states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Email validation helper
  const validateEmail = (emailStr) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailStr);
  };

  // Live validator on keydown/change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation error if user fixes input
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Form submit validator and simulator
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = { name: '', email: '', message: '' };
    let hasError = false;

    // Check Name
    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi';
      hasError = true;
    }

    // Check Email
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi';
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Format email tidak valid (contoh: nama@domain.com)';
      hasError = true;
    }

    // Check Message
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Simulate 2-second server latency
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Clear
    }, 2000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrors({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      className="py-20 md:py-24 bg-slate-50/50 dark:bg-slate-900/30 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-500/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 dark:bg-amber-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[992px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-8 text-left"
          >
            <div className="flex">
              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-4 py-1.5 rounded-full">
                Hubungi Kami
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-905 dark:text-white tracking-tight">
              Tertarik Bertani Lebih Cerdas?<br />
              Mari Berdiskusi
            </h2>

            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm md:text-base">
              Tim AIGRA EON siap membantu menjawab pertanyaan Anda seputar instalasi sensor IoT, model prediksi panen, ataupun penawaran kemitraan investasi lahan.
            </p>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* Contacts list */}
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-emerald-600 dark:text-emerald-400 shadow-xs">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Alamat Kantor</span>
                  <p className="text-slate-700 dark:text-slate-350 text-sm mt-0.5 font-semibold">
                    Jl. Raya Pertanian No. 45, Bogor Timur, Jawa Barat, 16143
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-emerald-600 dark:text-emerald-400 shadow-xs">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Alamat Email</span>
                  <a href="mailto:contact@aigra.id" className="text-slate-700 dark:text-slate-350 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm mt-0.5 font-semibold transition-colors">
                    contact@aigra.id
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-emerald-600 dark:text-emerald-400 shadow-xs">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Telepon / WhatsApp</span>
                  <a href="tel:+6281234567890" className="text-slate-700 dark:text-slate-350 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm mt-0.5 font-semibold transition-colors">
                    +62 812-3456-7890
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic contact form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 w-full"
          >
            <div className="p-8 md:p-10 rounded-2xl glass-panel shadow-lg border border-slate-200/40 dark:border-slate-800/40 text-left relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  /* Form UI */
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    noValidate
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Kirim Pesan</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Isi form di bawah ini, kami akan merespon pertanyaan Anda secepat mungkin.
                      </p>
                    </div>

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="Masukkan nama lengkap Anda"
                        className={`w-full px-5 py-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border text-slate-800 dark:text-white placeholder-slate-405 dark:placeholder-slate-600 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-950/50'
                            : 'border-slate-200 dark:border-slate-800 focus:ring-emerald-250 dark:focus:ring-emerald-950/50 focus:border-emerald-500'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs text-red-500 font-semibold flex items-center gap-1 mt-1 animate-fade-in">
                          <AlertCircle size={14} />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="contoh@alamat.com"
                        className={`w-full px-5 py-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border text-slate-800 dark:text-white placeholder-slate-405 dark:placeholder-slate-600 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-950/50'
                            : 'border-slate-200 dark:border-slate-800 focus:ring-emerald-250 dark:focus:ring-emerald-950/50 focus:border-emerald-500'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 font-semibold flex items-center gap-1 mt-1 animate-fade-in">
                          <AlertCircle size={14} />
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="Tuliskan pertanyaan atau penawaran kerja sama Anda di sini..."
                        className={`w-full px-5 py-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border text-slate-800 dark:text-white placeholder-slate-405 dark:placeholder-slate-600 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-950/50'
                            : 'border-slate-200 dark:border-slate-800 focus:ring-emerald-250 dark:focus:ring-emerald-950/50 focus:border-emerald-500'
                        }`}
                      />
                      {errors.message && (
                        <span className="text-xs text-red-500 font-semibold flex items-center gap-1 mt-1 animate-fade-in">
                          <AlertCircle size={14} />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="mt-2 py-3.5 rounded-xl justify-center w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Mengirim Pesan...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Kirim Pesan</span>
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  /* Success State Visual Feedback */
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4 gap-6"
                  >
                    <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 animate-bounce">
                      <CheckCircle2 size={48} />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Pesan Terkirim!</h3>
                      <p className="text-slate-600 dark:text-slate-350 max-w-sm leading-relaxed">
                        Terima kasih telah menghubungi kami. Tim kami akan meninjau pesan Anda dan membalasnya dalam waktu 1x24 jam.
                      </p>
                    </div>

                    <Button
                      type="button"
                      variant="secondary"
                      onClick={handleReset}
                      className="mt-2 py-2.5 px-6 text-sm"
                    >
                      Kirim Pesan Lain
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
