import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tech, liveUrl, githubUrl, image }) => (  <div className="bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group flex flex-col h-full shadow-lg">
    <div className="relative overflow-hidden h-56">
      <img 
  src={image} 
  alt="Project preview" 
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
/>
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <span key={index} className="text-xs font-medium px-3 py-1 bg-gray-900 text-orange-400 rounded-full border border-gray-700">
            {item}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4 mt-auto">
        {/* PLACEHOLDER: URLs are passed via props below */}
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl text-sm font-medium transition-colors">
          <FaExternalLinkAlt size={12} /> Live Demo
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-xl text-sm font-medium transition-colors">
          <FaGithub size={14} /> GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectsData = [
    {
      title: "HostelHub",
      description: " Hostel owners can manage their hostel residents, store student records, and organize hostel data efficiently through a database-powered web application. Features include a responsive UI, backend APIs, database integration and launched on vercel.",
      tech: ["MongoDB", "Node.js", "Express.js", "React"],
      liveUrl: "https://hostel-hub-directory-nu.vercel.app/",
      githubUrl: "https://github.com/maira32/HostelHub.git",
      image: "p1.png"
    },
    {
      title: "LogicBot",
      description: "A chatbot-like logic prover that takes a premise and conclusion as input and applies rules of inference and replacement to verify logical validity.",
      tech: ["React", "CSS3"],
      liveUrl: "https://logic-prover-react.vercel.app",
      githubUrl: "https://github.com/maira32/logic-prover-react.git",
       image: "p2.png"
    },
    {
      title: "UberEats",
      description: "A UI/UX design prototype of a food delivery app inspired by Uber Eats, created in Figma.",
      tech: ["Figma"],
      liveUrl: "https://www.figma.com/design/IVnByaUYuZRFBTRQa8r5Q7/Uber-Eats?node-id=0-1&t=2lVEAyImvG6CBrvO-1",
      githubUrl: "https://github.com/maira32/Uber-Eats-Figma.git",
       image: "p3.png"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h4 className="text-orange-500 font-medium mb-2 tracking-wider uppercase text-sm">Portfolio</h4>
        <h2 className="text-3xl md:text-5xl font-bold text-white">My Works</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;