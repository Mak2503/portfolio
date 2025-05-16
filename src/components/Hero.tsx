import { Code2, Server, Cloud, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-64 h-64 rounded-full bg-blue-300 dark:bg-blue-500 blur-3xl -top-32 -left-32" />
          <div className="absolute w-64 h-64 rounded-full bg-indigo-300 dark:bg-indigo-500 blur-3xl top-32 right-32" />
        </div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-6 mb-8"
          >
            <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
              <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
              <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
              <Cloud className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
          >
            Full Stack Developer
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl leading-relaxed"
          >
            Passionate about creating seamless web experiences with modern technologies.
            Specializing in React.js, TypeScript and cloud solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-6"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-lg hover:shadow-lg transition transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.a
            href="#experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}