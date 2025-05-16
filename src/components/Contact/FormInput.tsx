import React from 'react';
import { motion } from 'framer-motion';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput({ label, name, type, value, error, onChange }: FormInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg shadow-sm border focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
          error
            ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900'
            : 'border-gray-200 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-900'
        }`}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </motion.div>
  );
}