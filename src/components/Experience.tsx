import { experiences } from '../data/experience';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
        >
          Professional Journey
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex gap-8 mb-12 group"
            >
              <div className="hidden md:block w-px bg-gray-200 dark:bg-gray-700 absolute top-0 bottom-0 left-[28px]" />
              
              <div className="flex-shrink-0 z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
              </div>

              <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{exp.position}</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2.5" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}