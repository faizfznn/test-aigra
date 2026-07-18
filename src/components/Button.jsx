import React from 'react';

/**
 * Reusable Button Component
 * 
 * Props:
 * - children: text or element to render inside the button
 * - variant: 'primary' | 'secondary' | 'accent' | 'ghost'
 * - onClick: click handler function
 * - type: HTML button type (e.g. 'button', 'submit')
 * - className: custom Tailwind CSS styles
 * - disabled: disabled state
 */
export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) {
  const hasRoundedClass = className.includes('rounded-');
  const baseStyles = `px-6 py-3 font-semibold ${hasRoundedClass ? '' : 'rounded-full'} transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-98`;
  
  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/10 hover:shadow-emerald-500/20 focus:ring-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 dark:shadow-emerald-500/5',
    secondary: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50/50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950/20 focus:ring-emerald-600 dark:focus:ring-emerald-400',
    accent: 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 focus:ring-amber-500 dark:bg-amber-400 dark:hover:bg-amber-300 dark:shadow-amber-400/5',
    ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-350 dark:hover:bg-slate-800/50 dark:hover:text-white focus:ring-slate-400'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed active:scale-100' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
