import React, { useState } from 'react';
import { ContactForm as IContactForm, FormErrors } from '../../types';
import { validateContactForm } from '../../utils/validation';
import { ContactForm } from './ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const [values, setValues] = useState<IContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  console.log("Contact", values)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateContactForm(values);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setValues({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Location',
      content: 'Tuticorin, Tamil Nadu, India',
      link: null,
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Email',
      content: 'mak2503sde@gmail.com',
      link: 'mailto:mak2503sde@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Phone',
      content: '+91 9629345357',
      link: 'tel:+919629345357',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <ContactForm
              values={values}
              errors={errors}
              onChange={handleChange}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}