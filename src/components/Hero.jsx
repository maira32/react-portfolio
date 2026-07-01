import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-[32rem] w-[32rem] rounded-full bg-grad-radial-glow blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-grad-radial-glow blur-3xl opacity-60" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div className="order-2 md:order-1 animate-fade-up">
          <p className="eyebrow mb-4">Web Developer · Student</p>

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">Maira Tahir</span>
          </h1>

          <p className="mt-4 text-lg text-muted sm:text-xl">
            I build clean, functional web applications.
          </p>

          <p className="mt-4 max-w-xl text-slate-400">
           Motivated Full-Stack Developer seeking to bring a fresh, analytical perspective to innovative MERN stack software
projects. A rapid learner who excels at asking critical questions to uncover core requirements, dedicated to building
scalable and responsive web applications using modern JavaScript frameworks
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-grad-accent px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
            >
              <FiDownload /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent-cyan hover:text-accent-cyan"
            >
              Contact Me <FiArrowRight />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-xl text-muted">
            <a href="https://github.com/maira32" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/maira-tahir-380a38308" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:mairatahir3@gmail.com" className="transition-colors hover:text-white" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative animate-float">
            <div className="absolute inset-0 -z-10 rounded-full bg-grad-accent opacity-30 blur-2xl" />
            <img
              src="/pic.png"
              alt="maira profile photo"
              className="h-64 w-64 rounded-full border-4 border-white/10 object-cover shadow-2xl sm:h-80 sm:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
