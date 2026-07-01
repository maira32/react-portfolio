import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-[2rem] p-8 md:p-16 border border-gray-700/50 shadow-2xl relative overflow-hidden">
        
       
        <div className="text-center mb-16 z-10 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-6">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto z-10 relative">
          <a href="mailto:mairatahir3@gmail.com" className="flex flex-col items-center p-8 bg-gray-800/80 rounded-2xl hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-orange-500/50 group">
            <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-orange-500 mb-5 group-hover:scale-110 transition-transform">
              <FaEnvelope size={24} />
            </div>
            <h4 className="text-white font-semibold mb-2">Email</h4>
            <span className="text-sm text-gray-400 text-center break-all">mairatahir3@gmail.com</span>
          </a>

          <div className="flex flex-col items-center p-8 bg-gray-800/80 rounded-2xl border border-gray-700 hover:border-orange-500/50 group transition-all duration-300">
            <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-orange-500 mb-5 group-hover:scale-110 transition-transform">
              <FaPhoneAlt size={22} />
            </div>
            <h4 className="text-white font-semibold mb-2">Phone</h4>
            <span className="text-sm text-gray-400 text-center">
             +92320000000
            </span>
          </div>

          <a href="https://www.linkedin.com/in/maira-tahir-380a38308" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-gray-800/80 rounded-2xl hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-orange-500/50 group">
            <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-orange-500 mb-5 group-hover:scale-110 transition-transform">
              <FaLinkedin size={24} />
            </div>
            <h4 className="text-white font-semibold mb-2">LinkedIn</h4>
            <span className="text-sm text-gray-400 text-center">@mairatahir</span>
          </a>

          <a href="https://github.com/maira32" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-gray-800/80 rounded-2xl hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-orange-500/50 group">
            <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-orange-500 mb-5 group-hover:scale-110 transition-transform">
              <FaGithub size={24} />
            </div>
            <h4 className="text-white font-semibold mb-2">GitHub</h4>
            <span className="text-sm text-gray-400 text-center">@mairatahir</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;