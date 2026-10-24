import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef(null);
  const maskImgRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const websRef = useRef(null);
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);

  const mousePos = useRef({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 500,
    alpha: 1,
    size: 50,
  }).current;

  const quickX = useRef(null);
  const quickY = useRef(null);
  const marqueeTween1 = useRef(null);
  const marqueeTween2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Timeline
      gsap.timeline({
        defaults: { ease: 'back.out(1.7)' },
      })
        .fromTo(
          websRef.current.children,
          { opacity: 0, scale: 0.5 },
          { opacity: 0.5, scale: 1, duration: 2, stagger: 0.4, ease: 'power3.out' }
        )
        .fromTo(
          subtitleRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2 },
          '-=1.5'
        )
        .fromTo(
          titleRef.current,
          { x: -150, opacity: 0, skewX: -15 },
          { x: 0, opacity: 1, skewX: 0, duration: 1.2 },
          '-=1.0'
        )
        .fromTo(
          ctaRef.current.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(2)' },
          '-=0.8'
        );

      // Continuous spider webs rotation & breathing
      gsap.to(websRef.current.children, {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: 'linear',
      });
      gsap.to(websRef.current.children, {
        scale: 1.1,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      // Angled Double Marquee Infinite Animations
      marqueeTween1.current = gsap.to(marquee1Ref.current, {
        x: '-50%',
        repeat: -1,
        duration: 18,
        ease: 'none',
      });

      gsap.set(marquee2Ref.current, { x: '-50%' });
      marqueeTween2.current = gsap.to(marquee2Ref.current, {
        x: '0%',
        repeat: -1,
        duration: 22,
        ease: 'none',
      });

      gsap.to('.marquee-text', {
        y: -4,
        yoyo: true,
        repeat: -1,
        duration: 0.8,
        ease: 'sine.inOut',
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    quickX.current = gsap.quickTo(mousePos, 'x', { duration: 0.3, ease: 'power4.out' });
    quickY.current = gsap.quickTo(mousePos, 'y', { duration: 0.3, ease: 'power4.out' });

    const updateMask = () => {
      if (maskImgRef.current) {
        const { x, y, alpha, size } = mousePos;
        const grad = `radial-gradient(circle ${size}px at ${x}px ${y}px, rgba(0,0,0,${alpha}) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,1) 100%)`;
        maskImgRef.current.style.webkitMaskImage = grad;
        maskImgRef.current.style.maskImage = grad;
      }
    };

    gsap.ticker.add(updateMask);
    return () => gsap.ticker.remove(updateMask);
  }, [mousePos]);

  const handleMouseMove = (e) => {
    if (quickX.current && quickY.current) {
      quickX.current(e.clientX);
      quickY.current(e.clientY);
    }
  };

  const handleMouseEnter = () => {
    gsap.to(mousePos, {
      alpha: 0,
      size: 700,
      duration: 0.8,
      ease: 'elastic.out(1, 0.7)',
      overwrite: 'auto',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(mousePos, {
      alpha: 1,
      size: 50,
      duration: 1.2,
      ease: 'power4.inOut',
      overwrite: 'auto',
    });
  };

  const handleMarqueeEnter = () => {
    if (marqueeTween1.current && marqueeTween2.current) {
      gsap.to([marqueeTween1.current, marqueeTween2.current], {
        timeScale: 0.15,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  };

  const handleMarqueeLeave = () => {
    if (marqueeTween1.current && marqueeTween2.current) {
      gsap.to([marqueeTween1.current, marqueeTween2.current], {
        timeScale: 1,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  };

  const marqueeItems1 = [
    'FULL STACK DEVELOPER',
    'MERN STACK EXPERT',
    'DATA STRUCTURES & ALGORITHMS',
    'JAVA & C PROGRAMMING',
    'AI INTEGRATION',
    'CYBERSECURITY FUNDAMENTALS',
  ];

  const marqueeItems2 = [
    'LEETCODE PROBLEM SOLVER',
    'REACT.JS & NODE.JS',
    'SECURE AUTHENTICATION',
    'MONGODB & MYSQL',
    'RESPONSIVE UI/UX DESIGN',
    'GIT & OPEN SOURCE',
  ];

  const renderMarqueeContent = (items) => (
    <>
      {[1, 2, 3, 4].map((setIndex) => (
        <div key={setIndex} className="flex items-center h-full shrink-0">
          {items.map((text, idx) => (
            <React.Fragment key={`${setIndex}-${idx}`}>
              <span className="marquee-text mx-3 sm:mx-4 md:mx-6 text-sm md:text-base lg:text-xl font-black uppercase italic tracking-widest whitespace-nowrap shrink-0 drop-shadow-sm">
                {text}
              </span>
              <img
                src={idx % 2 === 0 ? '/assets/spydy.png' : '/assets/web1.png'}
                alt="Spider Separator"
                className="mx-3 sm:mx-4 md:mx-6 h-5 sm:h-6 md:h-8 lg:h-10 w-auto object-contain shrink-0 drop-shadow-md"
              />
            </React.Fragment>
          ))}
        </div>
      ))}
    </>
  );

  return (
    <main className="w-full flex flex-col bg-white overflow-hidden">
      {/* Hero Section with Interactive Spider-Man Mask Reveal */}
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden flex items-center justify-center cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Bottom Identity Layer (Pavan Teja in Spider-Man Suit) */}
        <img
          src="/assets/hero_unmasked.jpg"
          alt="Mogili Pavan Teja Unmasked Superhero"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-10"
        />

        {/* Top Mask Layer (Spider-Man Mask Reveal with dynamic WebKit Mask) */}
        <img
          ref={maskImgRef}
          src="/assets/spiderman_mask.png"
          alt="Spider-Man Mask Layer"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-20"
          style={{
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        />

        {/* Ambient Rotating Spider Webs in Corners */}
        <div ref={websRef} className="absolute inset-0 pointer-events-none z-[25] overflow-hidden">
          <img
            src="/assets/web1.png"
            alt="Spider Web Top Left"
            className="absolute top-0 left-0 w-44 h-44 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] object-contain opacity-40 sm:opacity-50 -translate-x-1/4 -translate-y-1/4 mix-blend-multiply"
          />
          <img
            src="/assets/web1.png"
            alt="Spider Web Bottom Right"
            className="absolute bottom-0 right-0 w-52 h-52 sm:w-72 sm:h-72 md:w-[500px] md:h-[500px] object-contain opacity-40 sm:opacity-50 translate-x-1/4 translate-y-1/4 mix-blend-multiply"
          />
        </div>

        {/* Hero Typography & CTA */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12 lg:left-24 z-30 flex flex-col gap-3 pointer-events-none drop-shadow-md max-w-lg w-full">
          <span
            ref={subtitleRef}
            className="text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.2em] opacity-0 flex items-center gap-2"
          >
            <img src="/assets/spydy.png" alt="Spider" className="w-4 h-4 inline-block" />
            Your Friendly Neighborhood Engineer
          </span>

          <h1
            ref={titleRef}
            className="text-gray-900 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none opacity-0 italic uppercase"
            style={{
              textShadow: '4px 4px 0px #ef4444, 7px 7px 0px #a31515',
            }}
          >
            MOGILI<br />PAVAN TEJA.
          </h1>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mt-6 pointer-events-auto">
            <a
              href="#projects"
              className="relative overflow-hidden bg-[#a31515] hover:bg-[#7a0f0f] text-white px-8 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(163,21,21,0.4)] cursor-pointer uppercase border border-[#a31515]"
            >
              Explore Projects
            </a>
            <a
              href="/pavan_teja_resume.pdf"
              download
              className="flex items-center gap-2 text-white bg-gray-900 hover:bg-black px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] uppercase text-sm group border border-gray-800"
            >
              <svg
                className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Resume CV
            </a>
          </div>
        </div>
      </section>

      {/* Double Angled Spider-Man Marquee Banners */}
      <section
        className="relative w-full h-[20vh] md:h-[30vh] bg-white overflow-hidden flex items-center justify-center z-40"
        onMouseEnter={handleMarqueeEnter}
        onMouseLeave={handleMarqueeLeave}
      >
        {/* Red Marquee (4deg rotation) */}
        <div className="absolute w-[110vw] h-12 md:h-16 lg:h-20 bg-[#a31515] text-white border-y-[3px] border-black rotate-[4deg] -translate-y-4 md:-translate-y-6 shadow-[0_10px_20px_rgba(0,0,0,0.4)] z-20 flex items-center overflow-hidden scale-105">
          <div ref={marquee1Ref} className="flex items-center h-full w-max">
            {renderMarqueeContent(marqueeItems1)}
          </div>
        </div>

        {/* Black Marquee (-4deg rotation) */}
        <div className="absolute w-[110vw] h-12 md:h-16 lg:h-20 bg-[#111111] text-[#a31515] border-y-[3px] border-[#a31515] rotate-[-4deg] translate-y-4 md:translate-y-6 shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-10 flex items-center overflow-hidden scale-105">
          <div ref={marquee2Ref} className="flex items-center h-full w-max">
            {renderMarqueeContent(marqueeItems2)}
          </div>
        </div>
      </section>
    </main>
  );
}
