const personalInfo = [
  { label: "Degree", value: "BBIT" },
  { label: "University", value: "Punjab University" },
  { label: "CGPA", value: "3.79 / 4.0" }, 
  { label: "Location", value: "Lahore, Pakistan" },
  { label: "Email", value: "mairatahir3@gmail.com" },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gray-800/30 rounded-[2rem] p-8 md:p-16 border border-gray-700/50 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <div className="w-full lg:w-5/12">
         <img 
  src="/img2.jpg" 
  alt="About Me" 
  className="w-full aspect-square object-cover rounded-3xl shadow-xl border border-gray-700"
/>
        </div>
        
        <div className="w-full lg:w-7/12">
          <h4 className="text-orange-500 font-medium mb-2 tracking-wider uppercase text-sm">I'm a Developer</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Turning Ideas into Interactive Web Apps
          </h2>
          
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
            Hi, I'm Maira! I'm a student and Full-Stack Developer specializing in the MERN stack. I thrive on building fast, responsive web applications from the ground up using React, Node.js, and Tailwind CSS.
            </p>
            <p>
As a rapid learner and dedicated student, I'm constantly exploring new technologies and seeking out projects that push my skills to the next level.            </p>
          </div>

<div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
  {personalInfo.map((info) => (
    <div 
      key={info.label} 
      className="glass p-4 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300"
    >
      <p className="font-mono text-xs text-orange-400 uppercase tracking-widest mb-1">
        {info.label}
      </p>
      
      <p className="font-body text-white font-semibold text-sm sm:text">
  {info.value}
</p>
    </div>
  ))}
</div>
          
        </div>
      </div>
    </section>
  );
};

export default About;