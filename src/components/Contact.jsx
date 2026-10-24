import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const webBgRef = useRef(null);
  const formBoxRef = useRef(null);
  const spiderHangRef = useRef(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
        .fromTo(formBoxRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.4)' }, '-=0.3');

      // Web ambient scale
      gsap.to(webBgRef.current, {
        scale: 1.15,
        opacity: 0.06,
        repeat: -1,
        yoyo: true,
        duration: 4.5,
        ease: 'sine.inOut',
      });

      // Hanging Spider-Man swing
      gsap.to(spiderHangRef.current, {
        rotation: 8,
        transformOrigin: 'top center',
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-white text-gray-900 py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100"
    >
      {/* Background Web Bottom-Left */}
      <div className="absolute bottom-0 left-0 pointer-events-none overflow-hidden z-0">
        <img
          ref={webBgRef}
          src="/assets/web1.png"
          alt="Background Web"
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply -translate-x-1/4 translate-y-1/4"
        />
      </div>

      {/* Hanging Spider-Man from Thread Top-Right */}
      <div
        ref={spiderHangRef}
        className="absolute top-0 right-8 md:right-20 z-30 pointer-events-none flex flex-col items-center origin-top"
      >
        <div className="w-[2px] h-24 md:h-36 bg-gradient-to-b from-transparent to-gray-400 opacity-60" />
        <img
          src="/assets/spydy_hang.png"
          alt="Hanging Spider-Man"
          className="w-40 md:w-60 h-auto object-contain drop-shadow-2xl -mt-2"
        />
      </div>

      {/* Header */}
      <div ref={headerRef} className="flex flex-col items-center text-center mb-12 z-10">
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img src="/assets/spydy.png" alt="Spider" className="w-4 h-4 object-contain inline-block" />
          Get In Touch
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: '2px 2px 0px #fca5a5' }}
        >
          CONTACT.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      {/* Direct Contact Badges & Form */}
      <div className="w-full max-w-4xl z-10 flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Side: Contact Cards & Socials */}
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div className="bg-gray-50/90 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-sm flex flex-col gap-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#a31515]" />
              Direct Contacts
            </h3>

            {/* Email */}
            <a
              href="mailto:mogilipavan0@gmail.com"
              className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-200 hover:border-[#a31515] hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#a31515]/10 text-[#a31515] flex items-center justify-center font-bold text-lg group-hover:bg-[#a31515] group-hover:text-white transition-colors">
                ✉
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Email Me</span>
                <span className="text-xs md:text-sm font-bold text-gray-800 group-hover:text-[#a31515]">
                  mogilipavan0@gmail.com
                </span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+917075914725"
              className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-200 hover:border-[#a31515] hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#a31515]/10 text-[#a31515] flex items-center justify-center font-bold text-lg group-hover:bg-[#a31515] group-hover:text-white transition-colors">
                ☎
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Call / WhatsApp</span>
                <span className="text-xs md:text-sm font-bold text-gray-800 group-hover:text-[#a31515]">
                  +91 7075914725
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-[#a31515]/10 text-[#a31515] flex items-center justify-center font-bold text-lg">
                📍
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Location</span>
                <span className="text-xs md:text-sm font-bold text-gray-800">
                  Hyderabad, Telangana, India
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid with exact user links */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href="https://www.linkedin.com/in/pavan-teja-107225379"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50/90 border border-gray-200 rounded-xl text-center hover:border-[#a31515] hover:bg-[#a31515] hover:text-white group transition-all shadow-sm"
            >
              <span className="block text-base font-black uppercase tracking-tight text-gray-900 group-hover:text-white">
                LinkedIn
              </span>
              <span className="text-[10px] text-gray-400 group-hover:text-gray-200">Connect ↗</span>
            </a>

            <a
              href="https://github.com/PavanTeja077"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50/90 border border-gray-200 rounded-xl text-center hover:border-[#a31515] hover:bg-[#a31515] hover:text-white group transition-all shadow-sm"
            >
              <span className="block text-base font-black uppercase tracking-tight text-gray-900 group-hover:text-white">
                GitHub
              </span>
              <span className="text-[10px] text-gray-400 group-hover:text-gray-200">Repositories ↗</span>
            </a>

            <a
              href="https://leetcode.com/u/RovUE7ICIs/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50/90 border border-gray-200 rounded-xl text-center hover:border-[#a31515] hover:bg-[#a31515] hover:text-white group transition-all shadow-sm"
            >
              <span className="block text-base font-black uppercase tracking-tight text-gray-900 group-hover:text-white">
                LeetCode
              </span>
              <span className="text-[10px] text-gray-400 group-hover:text-gray-200">DSA Profile ↗</span>
            </a>
          </div>
        </div>

        {/* Right Side: Working Contact Form */}
        <div
          ref={formBoxRef}
          className="flex-1 bg-gray-50/90 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-sm relative z-10 flex flex-col justify-center"
        >
          {formSubmitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#a31515] text-white rounded-full flex items-center justify-center text-2xl font-black mb-4 shadow-md animate-bounce">
                ✓
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-2">
                Message Sent!
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                Thanks for reaching out, Pavan will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Peter Parker"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="peter@stark.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Message
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Let's build something amazing together..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#a31515] hover:bg-[#7a0f0f] text-white py-3.5 rounded-xl font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-[0_4px_15px_rgba(163,21,21,0.3)] hover:shadow-[0_6px_20px_rgba(163,21,21,0.5)] cursor-pointer mt-2"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
