import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
        .fromTo(headerRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
        .fromTo(
          '.edu-card',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)' },
          '-=0.3'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const educationList = [
    {
      institution: 'Anurag University, Hyderabad',
      degree: 'B.Tech in Information Technology',
      timeline: '2024 – 2028 (Expected)',
      score: 'CGPA: 8.24',
      badge: 'Undergraduate',
      description: 'Focusing on Core Computer Science, Data Structures & Algorithms, Object-Oriented Programming, and Web Engineering.',
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Telangana State Board of Intermediate Education (MPC)',
      timeline: '2022 – 2024',
      score: 'Score: 94.9%',
      badge: 'Intermediate',
      description: 'Built robust foundations in Mathematics, Physics, and analytical logic with high academic distinction.',
    },
    {
      institution: 'Bhashyam High School, Vanasthalipuram',
      degree: 'Telangana Board of Secondary Education (SSC)',
      timeline: 'Completed 2022',
      score: 'Perfect 100%',
      badge: 'SSC Board',
      description: 'Demonstrated exceptional academic excellence, securing a perfect 100% score in secondary schooling.',
    },
  ];

  const softSkills = [
    'Analytical Problem Solving',
    'Effective Communication',
    'Team Collaboration',
    'Fast Adaptability',
    'Technical Leadership',
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative w-full bg-gray-50 text-gray-900 py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100"
    >
      {/* Background Web Ambient */}
      <div className="absolute bottom-0 right-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/assets/web1.png"
          alt="Spider Web"
          className="w-96 h-96 object-contain opacity-[0.03] mix-blend-multiply translate-x-1/3 translate-y-1/3"
        />
      </div>

      {/* Header */}
      <div ref={headerRef} className="flex flex-col items-center text-center mb-12 z-10">
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img src="/assets/spydy.png" alt="Spider" className="w-4 h-4 object-contain inline-block" />
          Academic Milestone
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: '2px 2px 0px #fca5a5' }}
        >
          EDUCATION & EXCELLENCE.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      {/* Education Cards */}
      <div className="w-full max-w-4xl flex flex-col gap-5 z-10">
        {educationList.map((item, idx) => (
          <div
            key={idx}
            className="edu-card group relative bg-white border border-gray-200 hover:border-[#a31515] p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_10px_25px_rgba(163,21,21,0.12)] transform hover:-translate-y-1"
          >
            {/* Left Accent Bar */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#a31515] rounded-l-2xl group-hover:bg-[#a31515] transition-colors" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#a31515]">
                  {item.badge}
                </span>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-gray-900 group-hover:text-[#a31515] transition-colors">
                  {item.institution}
                </h3>
                <p className="text-sm font-semibold text-gray-600 mt-0.5">{item.degree}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-md">
                  {item.timeline}
                </span>
                <span className="text-xs font-black uppercase px-3 py-1 bg-[#a31515] text-white rounded-md shadow-sm">
                  {item.score}
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Soft Skills Section */}
      <div className="w-full max-w-4xl mt-10 z-10 flex flex-col items-center">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
          Core Strengths & Interpersonal Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((skill, sIdx) => (
            <span
              key={sIdx}
              className="text-xs font-bold uppercase tracking-wider px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl shadow-sm hover:border-[#a31515] hover:text-[#a31515] transition-all"
            >
              ✦ {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
