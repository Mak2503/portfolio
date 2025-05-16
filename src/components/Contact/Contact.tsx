import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
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

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-2">
                      {info.title}
                    </h3>
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}