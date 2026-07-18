import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function Input({
  label,
  id,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  rows = 4,
  ...props
}) {
  const baseInputClass = `w-full px-5 py-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 transition-all duration-300 ${
    error
      ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-950/50'
      : 'border-slate-200 dark:border-slate-800 focus:ring-emerald-200 dark:focus:ring-emerald-950/50 focus:border-emerald-500'
  } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-bold text-slate-700 dark:text-slate-300">
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={baseInputClass}
          {...props}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={baseInputClass}
          {...props}
        />
      )}

      {error && (
        <span className="text-xs text-red-500 font-semibold flex items-center gap-1 mt-1 animate-fade-in">
          <AlertCircle size={14} />
          {error}
        </span>
      )}
    </div>
  );
}
