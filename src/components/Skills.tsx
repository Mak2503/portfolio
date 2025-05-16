import { skills } from '../data/skills';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Settings } from 'lucide-react';

export function Skills() {
  const categories = ['Frontend', 'Backend', 'DevOps', 'Cloud'] as const;
  
  const getCategoryIcon = (category: typeof categories[number]) => {
    switch (category) {
      case 'Frontend':
        return <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Backend':
        return <Server className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'DevOps':
        return <Settings className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  const getSkillLevel = (level: string) => {
    switch (level) {
      case 'Beginner':
        return '33%';
      case 'Intermediate':
        return '66%';
      case 'Advanced':
        return '100%';
      default:
        return '0%';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{category}</h3>
              </div>

              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: getSkillLevel(skill.level) }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}