import { SiCplusplus, SiPython, SiNodedotjs, SiExpress, SiWordpress, SiPhp, SiHtml5, SiJavascript, SiReact, SiBootstrap, SiTailwindcss, SiFigma, SiGnubash, SiGithub } from 'react-icons/si';
import { FaNetworkWired, FaServer } from 'react-icons/fa';

const SkillCard = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-gray-800/40 rounded-2xl border border-gray-700 hover:border-orange-500/50 hover:bg-gray-800 transition-all duration-300 group shadow-lg">
    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
      {icon}
    </div>
    <span className="text-xs sm:text-sm font-medium text-gray-300 text-center">{name}</span>
  </div>
);

const Skills = () => {
  const skillsData = [
    { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" />, category: 'Frontend' },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, category: 'Frontend' },
    { name: 'React', icon: <SiReact className="text-[#61DAFB]" />, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, category: 'Frontend' },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" />, category: 'Frontend' },
    
    { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" />, category: 'Backend' },
    { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, category: 'Backend' },
    { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, category: 'Backend' },
    { name: 'Express.js', icon: <SiExpress className="text-white" />, category: 'Backend' },
    { name: 'PHP', icon: <SiPhp className="text-[#777BB4]" />, category: 'Backend' },
    { name: 'REST API', icon: <FaServer className="text-gray-400" />, category: 'Backend' },
    
    { name: 'WordPress', icon: <SiWordpress className="text-[#21759B]" />, category: 'Tools & Other' },
    { name: 'Git/GitHub', icon: <SiGithub className="text-white" />, category: 'Tools & Other' },
    { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" />, category: 'Tools & Other' },
    { name: 'Network Security', icon: <FaNetworkWired className="text-green-500" />, category: 'Tools & Other' },
  ];

  const categories = ['Frontend', 'Backend', 'Tools & Other'];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h4 className="text-orange-500 font-medium mb-2 tracking-wider uppercase text-sm">My Expertise</h4>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">Skills & Technologies</h2>
      </div>

      <div className="space-y-12 sm:space-y-16">
        {categories.map(category => (
          <div key={category}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6 sm:mb-8 pb-3 border-b border-gray-800 inline-block">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {skillsData.filter(skill => skill.category === category).map((skill, index) => (
                <SkillCard key={index} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;