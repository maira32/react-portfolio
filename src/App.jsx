import  { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen font-sans selection:bg-orange-500 selection:text-white bg-[#111827]">
      
      {currentPage === 'home' && <Navbar setPage={setCurrentPage} />}
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}

        {currentPage === 'login' && <Login setPage={setCurrentPage} />}
        {currentPage === 'signup' && <Signup setPage={setCurrentPage} />}
      </main>
      
      {currentPage === 'home' && <Footer />}
    </div>
  );
}

export default App;