import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';

import logoSrc from "@assets/kaka_1784317420826.png";
import videoSrc from "@assets/lol_(online-video-cutter.com)_1784317277784.mp4";

// --- Components ---

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Counter({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, end, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, end, suffix]);

  return (
    <motion.div variants={fadeIn} className="flex flex-col items-center justify-center p-8 bg-white/5 border border-primary/20 rounded-2xl backdrop-blur hover:border-primary/50 transition-colors duration-500 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <h3 ref={ref} className="text-4xl md:text-5xl font-serif text-primary font-bold mb-3 relative z-10">0{suffix}</h3>
      <p className="text-gray-300 font-medium text-center relative z-10">{label}</p>
    </motion.div>
  );
}

const services = [
  { icon: "🌐", title: "Website Development", desc: "Custom, high-performance websites built for scale." },
  { icon: "📱", title: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android." },
  { icon: "🤖", title: "AI Chatbots", desc: "Intelligent conversational agents that engage customers 24/7." },
  { icon: "⚙️", title: "AI Automation", desc: "Streamline workflows and reduce operational costs." },
  { icon: "🎥", title: "Promotional Video Ads", desc: "Cinematic, engaging video content for your brand." },
  { icon: "☁️", title: "Hosting & Domain", desc: "Secure, reliable, and lightning-fast web hosting." },
  { icon: "🎨", title: "UI/UX Design", desc: "Intuitive and beautiful interfaces that convert." },
  { icon: "📈", title: "SEO & Digital Marketing", desc: "Data-driven strategies to dominate search results." },
];

const projects = [
  { title: "E-Commerce Platform", category: "Modern shopping experience" },
  { title: "Corporate Website", category: "Premium brand presence" },
  { title: "Mobile Banking App", category: "Seamless financial UX" },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "Understanding your business goals and audience." },
  { num: "02", title: "Planning", desc: "Creating a roadmap and architecture for success." },
  { num: "03", title: "Design", desc: "Crafting beautiful, user-centric interfaces." },
  { num: "04", title: "Development", desc: "Building with scalable, modern technologies." },
  { num: "05", title: "Testing", desc: "Rigorous quality assurance for a flawless launch." },
  { num: "06", title: "Launch", desc: "Deploying your solution to the world." },
  { num: "07", title: "Support", desc: "Ongoing maintenance and feature enhancements." },
];

const features = [
  "Modern Design", "Fast Delivery", "Premium Quality", "AI Powered", 
  "Business Focused", "Responsive Design", "Worldwide Support"
];

const testimonials = [
  { quote: "Working with Flora Max Media transformed our online presence completely. Their attention to detail is unmatched.", author: "James Robertson", title: "CEO, TechVentures UK" },
  { quote: "Their AI chatbot solution increased our customer engagement by 40%. Exceptional team.", author: "Sarah Müller", title: "Director, EuroTech Solutions" },
  { quote: "Professional, fast, and brilliant results. Our new website now attracts clients from across Europe.", author: "Ahmed Al-Rashid", title: "Founder, Global Commerce Ltd" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-background/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logoSrc} alt="Flora Max Media" className="h-10 w-10 object-contain" />
            <span className="font-serif text-xl font-bold tracking-wide text-white">Flora Max<span className="text-primary">.</span></span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollTo('services')} className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollTo('portfolio')} className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors">Portfolio</button>
            <button onClick={() => scrollTo('process')} className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors">Process</button>
            <button onClick={() => scrollTo('about')} className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollTo('contact')} className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors">Contact</button>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaXTwitter /></a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-300 hover:text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-20"
          >
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-serif tracking-widest hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollTo('services')} className="text-2xl font-serif tracking-widest hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollTo('portfolio')} className="text-2xl font-serif tracking-widest hover:text-primary transition-colors">Portfolio</button>
            <button onClick={() => scrollTo('process')} className="text-2xl font-serif tracking-widest hover:text-primary transition-colors">Process</button>
            <button onClick={() => scrollTo('about')} className="text-2xl font-serif tracking-widest hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollTo('contact')} className="text-2xl font-serif tracking-widest hover:text-primary transition-colors">Contact</button>
            <div className="flex gap-6 mt-4">
              <a href="#" className="text-xl text-gray-400 hover:text-primary transition-colors"><FaFacebookF /></a>
              <a href="#" className="text-xl text-gray-400 hover:text-primary transition-colors"><FaInstagram /></a>
              <a href="#" className="text-xl text-gray-400 hover:text-primary transition-colors"><FaXTwitter /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Pure black background */}
        <div className="absolute inset-0 z-0 bg-black" />

        <div className="container relative z-10 px-6 mx-auto text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-6 text-white drop-shadow-2xl">
              Premium Web Development <span className="text-primary italic">&</span> AI Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              We build modern websites, AI chatbots, mobile apps, promotional videos, hosting solutions, and digital experiences that help businesses grow.
            </p>
          </motion.div>
        </div>

      </section>

      {/* Video Showcase Section */}
      <section className="bg-[#050505] border-t border-white/5">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full block"
          style={{ display: 'block' }}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative bg-background border-t border-white/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold mb-6">About Flora Max<span className="text-primary">.</span></motion.h2>
              <motion.div variants={fadeIn} className="w-20 h-1 bg-primary mb-8" />
              <motion.p variants={fadeIn} className="text-gray-400 text-lg leading-relaxed mb-6">
                Flora Max Media is an international premium digital agency. We specialize in Website Development, Mobile App Development, AI Chatbots, AI Automation, Promotional Video Ads, Hosting & Domains, UI/UX Design, and SEO & Digital Marketing.
              </motion.p>
              <motion.p variants={fadeIn} className="text-gray-400 text-lg leading-relaxed">
                We blend timeless design aesthetics with cutting-edge technology to build digital products that feel crafted, not assembled.
              </motion.p>
            </div>
            <div className="grid gap-6">
              <motion.div variants={fadeIn} className="p-8 bg-white/5 border border-white/10 backdrop-blur rounded-2xl hover:border-primary/30 transition-colors">
                <h3 className="text-2xl font-serif text-white mb-3">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">Helping businesses grow through premium digital solutions, modern technology, automation, and exceptional user experience.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="p-8 bg-primary/5 border border-primary/20 backdrop-blur rounded-2xl hover:border-primary/40 transition-colors ml-0 lg:ml-8">
                <h3 className="text-2xl font-serif text-primary mb-3">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">To become a globally trusted digital agency delivering innovative web, AI, and marketing solutions for businesses of every size.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-20">
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</motion.h2>
            <motion.div variants={fadeIn} className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, i) => (
              <motion.div 
                key={i} variants={fadeIn}
                className="group p-8 bg-white/[0.02] border border-primary/20 backdrop-blur rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:bg-white/[0.04]"
              >
                <div className="text-4xl mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 transform origin-left">{service.icon}</div>
                <h3 className="text-xl font-medium text-white mb-3 tracking-wide">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 md:py-32 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold mb-6">Selected Work</motion.h2>
              <motion.div variants={fadeIn} className="w-20 h-1 bg-primary" />
            </div>
            <motion.div variants={fadeIn}>
              <Button variant="ghost" className="text-primary hover:text-white hover:bg-transparent uppercase tracking-widest text-sm group">
                View All Projects <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, i) => (
              <motion.div key={i} variants={fadeIn} className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border border-white/10 rounded-lg bg-neutral-900/50 flex flex-col justify-between p-6 relative overflow-hidden shadow-2xl">
                    <div className="w-full h-4 bg-neutral-800/50 rounded-full mb-4"></div>
                    <div className="w-2/3 h-4 bg-neutral-800/50 rounded-full"></div>
                    <div className="mt-auto absolute -bottom-6 -right-6 w-32 h-48 bg-neutral-800/80 rounded-xl border border-white/10 rotate-[-10deg]"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.category}</span>
                  <h3 className="text-2xl font-serif text-white mb-4">{project.title}</h3>
                  <div className="overflow-hidden">
                    <span className="inline-block text-sm text-white border-b border-primary pb-1 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      View Project
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-20">
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Process</motion.h2>
            <motion.div variants={fadeIn} className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
            
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-2xl font-serif text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-14 h-14 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold z-10 md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  {step.num}
                </div>
                
                <div className={`md:hidden pl-20 w-full`}>
                  <h3 className="text-xl font-serif text-white mb-2 pt-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Statistics combined area */}
      <section className="py-24 md:py-32 bg-neutral-950 border-t border-white/5 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Why Choose Us */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose Flora Max</motion.h2>
              <motion.div variants={fadeIn} className="w-16 h-1 bg-primary mb-10" />
              <div className="flex flex-wrap gap-4">
                {features.map((feature, i) => (
                  <motion.div 
                    key={i} variants={fadeIn}
                    className="px-6 py-4 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Counter end={150} suffix="+" label="Projects Completed" />
              <Counter end={80} suffix="+" label="Happy Clients" />
              <Counter end={98} suffix="%" label="Client Satisfaction" />
              <Counter end={24} suffix="/7" label="Support Availability" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-20">
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold mb-6">What Our Clients Say</motion.h2>
            <motion.div variants={fadeIn} className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((test, i) => (
              <motion.div key={i} variants={fadeIn} className="p-10 bg-white/[0.02] border border-white/10 backdrop-blur rounded-2xl relative">
                <div className="text-6xl text-primary/20 absolute top-6 left-6 font-serif leading-none">"</div>
                <p className="text-gray-300 leading-relaxed mb-8 relative z-10 pt-4 text-lg italic">"{test.quote}"</p>
                <div className="mt-auto">
                  <h4 className="text-white font-bold">{test.author}</h4>
                  <p className="text-primary text-sm uppercase tracking-wider mt-1">{test.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-[#050505] border-t border-white/5 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-20">
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold mb-6">Get In Touch</motion.h2>
            <motion.div variants={fadeIn} className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-serif text-white mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-gray-400">01955532951</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-gray-400">hello@floramaxmedia.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Office</h4>
                    <p className="text-gray-400">123 Luxury Ave, London, UK</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-white font-bold mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"><FaFacebookF /></a>
                  <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"><FaInstagram /></a>
                  <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"><FaXTwitter /></a>
                </div>
              </div>
            </motion.div>

          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full h-[400px] bg-neutral-900 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-neutral-800 animate-pulse opacity-20"></div>
            <div className="text-center z-10">
              <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-4 opacity-50" />
              <p className="text-gray-500 font-serif text-xl">Location Map Placeholder</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-20 pb-10 border-t border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={logoSrc} alt="Flora Max Media" className="h-8 w-8 object-contain" />
                <span className="font-serif text-lg font-bold tracking-wide text-white">Flora Max<span className="text-primary">.</span></span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed pr-4">
                Premium digital solutions for visionary brands. We craft experiences that elevate your business to a global standard.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-primary transition-colors text-sm">Home</button></li>
                <li><button onClick={() => scrollTo('about')} className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</button></li>
                <li><button onClick={() => scrollTo('portfolio')} className="text-gray-400 hover:text-primary transition-colors text-sm">Portfolio</button></li>
                <li><button onClick={() => scrollTo('process')} className="text-gray-400 hover:text-primary transition-colors text-sm">Our Process</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollTo('services')} className="text-gray-400 hover:text-primary transition-colors text-sm">Web Development</button></li>
                <li><button onClick={() => scrollTo('services')} className="text-gray-400 hover:text-primary transition-colors text-sm">AI Chatbots</button></li>
                <li><button onClick={() => scrollTo('services')} className="text-gray-400 hover:text-primary transition-colors text-sm">Mobile Apps</button></li>
                <li><button onClick={() => scrollTo('services')} className="text-gray-400 hover:text-primary transition-colors text-sm">Digital Marketing</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Connect</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm">hello@floramaxmedia.com</li>
                <li className="text-gray-400 text-sm">01955532951</li>
                <li className="flex gap-4 mt-6">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaFacebookF /></a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaInstagram /></a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaXTwitter /></a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2025 Flora Max Media. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
