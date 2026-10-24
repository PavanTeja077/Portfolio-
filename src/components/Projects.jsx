import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const webBgRef = useRef(null);
  const spiderStandRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ScrollTrigger timeline
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
        .fromTo(headerRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
        .fromTo(
          '.project-item',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)' },
          '-=0.3'
        )
        .fromTo(
          spiderStandRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
          '-=0.4'
        );

      // Web ambient animation
      gsap.set(webBgRef.current, { transformOrigin: 'top right' });
      gsap.to(webBgRef.current, {
        rotation: 8,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: 'sine.inOut',
      });
      gsap.to(webBgRef.current, {
        scale: 1.1,
        opacity: 0.07,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: 'sine.inOut',
      });

      // Standing Spider-Man subtle breathing float
      gsap.to(spiderStandRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'AI Itinerary Travel Planner',
      subtitle: 'Smart Personalized Trip Generating Engine',
      description:
        'An intelligent AI-powered itinerary travel planner that customizes comprehensive day-by-day vacation schedules, destination recommendations, smart budgeting, and activity maps tailored to user preferences.',
      tags: ['AI Integration', 'React.js', 'Tailwind CSS', 'REST APIs', 'Vercel'],
      liveUrl: 'https://travel-planner-nine-theta.vercel.app/',
      githubUrl: 'https://github.com/PavanTeja077',
      featured: true,
    },
    {
      title: 'Pocket Mentor',
      subtitle: 'Personal Interactive Guidance Platform',
      description:
        'A comprehensive digital mentoring website empowering students and developers with tailored learning roadmaps, curated technical resources, career guidance, and interactive skill tracking in one seamless portal.',
      tags: ['React.js', 'Node.js', 'EdTech', 'Responsive UI', 'Vercel'],
      liveUrl: 'https://pocket-mentor-lovat.vercel.app/',
      githubUrl: 'https://github.com/PavanTeja077',
      featured: true,
    },
    {
      title: 'ShopSphere Multi-Vendor E-Commerce',
      subtitle: 'Scalable Marketplace with Merchant Portals',
      description:
        'A modern multi-vendor e-commerce web platform engineered for seamless online retail, featuring dynamic merchant product catalogs, interactive cart & checkout systems, responsive product filtering, and scalable architecture.',
      tags: ['E-Commerce', 'Full Stack', 'React.js', 'Node.js', 'Multi-Vendor'],
      liveUrl: 'https://shop-sphere-psi-ivory.vercel.app/',
      githubUrl: 'https://github.com/PavanTeja077',
      featured: true,
    },
    {
      title: 'QueueLess Campus Environment',
      subtitle: 'Smart Real-Time University Queue Management',
      description:
        'An innovative digital queue management system designed to eliminate physical waiting lines across campus canteens, administrative desks, and student utility centers with real-time queue tokens and live tracking.',
      tags: ['Smart Campus', 'Real-Time Queuing', 'React.js', 'Full Stack', 'Vercel'],
      liveUrl: 'https://queue-less-campus-j3h1-7zarl1qzk-pavanteja077s-projects.vercel.app/',
      githubUrl: 'https://github.com/PavanTeja077',
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-white text-gray-900 py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100"
    >
      {/* Background Spider Web */}
      <div className="absolute top-0 right-0 pointer-events-none overflow-hidden z-0">
        <img
          ref={webBgRef}
          src="/assets/web1.png"
          alt="Background Web"
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply translate-x-1/4 -translate-y-1/4"
        />
      </div>

      {/* Standing Spider-Man at Bottom-Left */}
      <div
        ref={spiderStandRef}
        className="absolute bottom-0 left-4 md:left-12 z-30 pointer-events-none"
      >
        <img
          src="/assets/spydy_stand.png"
          alt="Standing Spider-Man"
          className="w-32 md:w-48 h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Section Header */}
      <div ref={headerRef} className="flex flex-col items-center text-center mb-12 z-10">
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img src="/assets/spydy.png" alt="Spider" className="w-4 h-4 object-contain inline-block" />
          Featured Deployments
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: '2px 2px 0px #fca5a5' }}
        >
          LIVE PROJECTS.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
        <p className="text-xs md:text-sm text-gray-500 font-medium mt-3 max-w-lg">
          Explore my production-ready applications with live interactive demos deployed on Vercel.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item group relative bg-gray-50/95 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_12px_28px_rgba(163,21,21,0.18)] transform hover:-translate-y-1"
          >
            {/* Top Sliding Red Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

            <div>
              {/* Header with Title and Live Demo Button */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#a31515]">
                    {project.subtitle}
                  </span>
                  <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-[#a31515] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-3 py-1.5 bg-[#a31515] text-white hover:bg-[#7a0f0f] rounded-lg shadow-sm hover:shadow-md transition-all shrink-0 cursor-pointer"
                  title="Open live deployment"
                >
                  <span>Live</span>
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium mb-6 mt-2">
                {project.description}
              </p>
            </div>

            {/* Bottom: Tags and Direct Links */}
            <div>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200/80 mb-3">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white border border-gray-200 text-gray-600 group-hover:border-[#a31515]/30 group-hover:text-[#a31515] rounded-md transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons for Interviewer */}
              <div className="flex items-center justify-between pt-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#a31515] hover:text-[#7a0f0f] flex items-center gap-1 group-hover:underline"
                >
                  Visit Deployment <span>→</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-gray-500 hover:text-gray-900 flex items-center gap-1"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Source</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
