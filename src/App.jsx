import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'


function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects/>
      </main>

    </div>
  );
}

export default App;