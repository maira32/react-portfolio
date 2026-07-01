import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';


function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills/>
      </main>

    </div>
  );
}

export default App;