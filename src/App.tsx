import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Mohamed Abdul Kader. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;