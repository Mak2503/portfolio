import React from 'react';
import { ContactForm as IContactForm, FormErrors } from '../../types';
import { FormInput } from './FormInput';
import { Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  values: IContactForm;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export function ContactForm({ values, errors, onChange, onSubmit, isSubmitting }: ContactFormProps) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <FormInput
        label="Name"
        name="name"
        type="text"
        value={values.name}
        error={errors.name}
        onChange={onChange}
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={onChange}
      />
      <FormInput
        label="Subject"
        name="subject"
        type="text"
        value={values.subject}
        error={errors.subject}
        onChange={onChange}
      />
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg shadow-sm border focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
            errors.message
              ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900'
              : 'border-gray-200 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-900'
          }`}
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white transition-all duration-300 ${
          isSubmitting
            ? 'bg-blue-400 dark:bg-blue-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 hover:shadow-lg hover:-translate-y-1 transform'
        }`}
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Send className="w-5 h-5" />
        )}
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  );
}