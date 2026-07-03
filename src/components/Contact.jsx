import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);
    setApiError('');

    try {
      const response = await fetch('https://api.yourdomain.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message.');
      }

      // Success
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset the success screen back to the form after 4 seconds
      setTimeout(() => setIsSubmitted(false), 4000);

    } catch (error) {
      setApiError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h4 className="text-orange-500 font-medium mb-2 tracking-wider uppercase text-sm">Get In Touch</h4>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
          {isSubmitted ? (
             <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-3xl">✓</div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">I'll get back to you as soon as possible.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {apiError && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm mb-4 text-center">{apiError}</div>}
              
              <div>
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-700 focus:border-orange-500'}`} />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-700 focus:border-orange-500'}`} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea rows="4" placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border focus:outline-none resize-none ${errors.message ? 'border-red-500' : 'border-gray-700 focus:border-orange-500'}`}></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <button disabled={isLoading} type="submit" className={`w-full text-white font-bold py-3 rounded-lg transition-colors ${isLoading ? 'bg-orange-500/50 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Contact Info (Omitted here for brevity, keep your existing one) */}
        <div className="flex flex-col gap-6 justify-center">
           {/* ... keep your existing contact info blocks ... */}
           <a 
            href="mailto:mairatahir3@gmail.com" 
            className="group flex items-center gap-6 p-6 bg-gray-800/30 hover:bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all cursor-pointer overflow-hidden"
          >
            <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-orange-500 shrink-0">
              <FaEnvelope size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-semibold">Email</h4>
              <span className="text-gray-400 text-sm group-hover:text-orange-500 transition-colors block truncate">
                mairatahir3@gmail.com
              </span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/maira-tahir-380a38308"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 p-6 bg-gray-800/30 hover:bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all cursor-pointer overflow-hidden"
          >
            <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-orange-500 shrink-0">
              <FaLinkedin size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-semibold">LinkedIn</h4>
              <span className="text-gray-400 text-sm group-hover:text-orange-500 transition-colors block truncate">
                linkedin.com/in/mairatahir
              </span>
            </div>
          </a>

          <a
            href="https://github.com/maira32"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 p-6 bg-gray-800/30 hover:bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all cursor-pointer overflow-hidden"
          >
            <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-orange-500 shrink-0">
              <FaGithub size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-semibold">GitHub</h4>
              <span className="text-gray-400 text-sm group-hover:text-orange-500 transition-colors block truncate">
                github.com/maira32
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;



