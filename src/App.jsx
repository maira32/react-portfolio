import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from "./components/Contact"


function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
<Footer/>
    </div>
  );
}

export default App;