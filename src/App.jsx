import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('portfolio_user');
    const token = localStorage.getItem('portfolio_token');
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }

    // If the URL looks like ?page=reset-password&token=abc123 (from the email link), open that page
    const params = new URLSearchParams(window.location.search);
    if (params.get('page') === 'reset-password' && params.get('token')) {
      setCurrentPage('reset-password');
    }
  }, []);

  const handleLoginSuccess = (userData) => setUser(userData);

  const handleLogout = () => {
    localStorage.removeItem('portfolio_token');
    localStorage.removeItem('portfolio_user');
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen font-sans selection:bg-orange-500 selection:text-white bg-[#111827]">

      {currentPage === 'home' && <Navbar setPage={setCurrentPage} user={user} onLogout={handleLogout} />}

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

        {currentPage === 'login' && <Login setPage={setCurrentPage} onLoginSuccess={handleLoginSuccess} />}
        {currentPage === 'signup' && <Signup setPage={setCurrentPage} />}
        {currentPage === 'forgot-password' && <ForgotPassword setPage={setCurrentPage} />}
        {currentPage === 'reset-password' && <ResetPassword setPage={setCurrentPage} />}
      </main>

      {currentPage === 'home' && <Footer />}
    </div>
  );
}

export default App;