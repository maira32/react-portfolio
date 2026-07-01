import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiNodedotjs, SiReact, SiLinux, SiJavascript } from 'react-icons/si';
const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-screen">
      
      <div className="w-full md:w-1/2 mt-16 md:mt-0 z-10 relative">
        <h2 className="text-orange-500 font-medium text-lg md:text-xl mb-3 tracking-wide">Hello, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Maira Tahir
        </h1>
        <h3 className="text-xl md:text-2xl text-gray-400 mb-6 font-light">
          A <span className="text-green-400 font-medium">Mern Stack Developer</span> From 
           {' '}Lahore
        </h3>
        <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
         I build clean, functional web applications.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
          <a href="#about" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg shadow-orange-500/20 w-full sm:w-auto text-center">
            About Me
          </a>
          <div className="flex gap-5 px-2">
            <a href="https://github.com/maira32" target="_blank" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/maira-tahir-380a38308" target="_blank" className="text-gray-400 hover:text-[#0077b5] transition-transform hover:scale-110"><FaLinkedin size={24} /></a>
            <a href="mailto:mairatahir3@gmail.com" target="_blank" className="text-gray-400 hover:text-orange-500 transition-transform hover:scale-110"><FaEnvelope size={24} /></a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative flex justify-center items-center">
        
        <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
           <img 
  src="/pic.png"
  alt="Maira Tahir"
  className="w-full h-full object-cover rounded-full border-4 border-gray-700 overflow-hidden shadow-2xl" 
/>

<div className="absolute -top-4 -left-4 bg-gray-900/80 backdrop-blur p-3 rounded-xl shadow-lg border border-gray-700 animate-[bounce_3s_infinite]">
  <SiNodedotjs className="text-green-500 text-2xl" />
</div>

<div className="absolute top-1/4 -right-8 bg-gray-900/80 backdrop-blur p-3 rounded-xl shadow-lg border border-gray-700 animate-[bounce_4s_infinite]">
  <SiReact className="text-blue-400 text-2xl" />
</div>

<div className="absolute bottom-10 -left-6 bg-gray-900/80 backdrop-blur p-3 rounded-xl shadow-lg border border-gray-700 animate-[bounce_3.5s_infinite]">
  <SiJavascript className="text-yellow-400 text-2xl" />
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;