/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ChevronRight, 
  ShieldCheck, 
  Smartphone, 
  TrendingUp, 
  Zap, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  Eye, 
  Lightbulb,
  Menu,
  X,
  ArrowRight,
  Home,
  List,
  User
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Logo = ({ className, light = false }: { className?: string; light?: boolean }) => (
  <div className={cn("flex items-center gap-4", className)}>
    <img src="/new logo.png" alt="Sumedha Chits Logo" className="h-28 w-auto object-contain drop-shadow-sm shrink-0" />
    <div className="flex flex-col leading-none">
      <span className={cn("font-bold tracking-tight flex items-baseline", light ? "text-white" : "text-[#0A192F]")}>
        <span className={cn(light ? "text-white" : "text-[#0A192F]", "text-[2.5rem] leading-none")}>SU</span>
        <span className="text-2xl">MEDHA</span>
      </span>
      <span className={cn("text-xs font-bold tracking-[0.2em] mt-1", light ? "text-gray-300" : "text-[#0A192F]")}>CHITS PVT LTD</span>
    </div>
  </div>
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-[11px] font-bold uppercase tracking-wider text-gray-600 hover:text-[#C5A059] transition-colors"
  >
    {children}
  </a>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'dark'; 
  className?: string 
}) => {
  const variants = {
    primary: "bg-[#C5A059] text-white hover:bg-[#b08e4d]",
    secondary: "bg-white text-[#C5A059] border border-[#C5A059] hover:bg-gray-50",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    dark: "bg-[#0A192F] text-white hover:bg-[#152a4a]"
  };

  return (
    <button className={cn(
      "px-6 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all duration-200",
      variants[variant],
      className
    )}>
      {children}
    </button>
  );
};

const SchemeCard = ({ 
  title, 
  amount, 
  duration, 
  dividend, 
  subscription,
  isPopular 
}: { 
  title: string; 
  amount: string; 
  duration: string; 
  dividend: string;
  subscription: string;
  isPopular?: boolean 
}) => (
  <div className={`relative p-8 rounded-sm flex flex-col items-center text-center group transition-all duration-500 hover:z-20 ${isPopular ? 'bg-white border-4 border-[#C5A059] md:scale-110 z-10 shadow-[0_20px_60px_rgba(197,160,89,0.3)] ring-4 ring-[#C5A059]/10' : 'bg-white border-2 border-gray-100'}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C5A059] via-[#E5BF77] to-[#C5A059] text-[#0A192F] text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg whitespace-nowrap border border-[#C5A059] z-20">
        Most Popular
      </div>
    )}
    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-4">{title}</h3>
    <div className={`text-2xl font-black mb-3 text-[#0A192F]`}>₹ {amount}</div>
    <div className="text-[11px] text-[#0A192F]/60 mb-6 flex justify-center gap-3">
      <span>Duration: {duration} M</span>
      <span className="text-gray-300">|</span>
      <span>Sub: ₹ {subscription}</span>
    </div>
    <div className="bg-[#152a4a] text-white w-full py-2 px-4 rounded-sm text-[10px] font-medium mb-8">
      Earn up to ₹ {dividend} Dividend
    </div>
    <button className={`w-full py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${isPopular ? 'bg-[#C5A059] text-[#0A192F] hover:bg-[#0A192F] hover:text-white' : 'border border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white'}`}>
      View Details
    </button>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 bg-white mb-2 shadow-sm rounded-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left text-[#0A192F] hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-bold tracking-tight">{question}</span>
        {isOpen ? <X size={16} /> : <ChevronDown size={16} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[#0A192F]/80 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
  </svg>
);

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllSchemes, setShowAllSchemes] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll functionality
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href && href !== '#') {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    // Track scroll position for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    document.addEventListener('click', handleSmoothScroll);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const SCHEMES = [
    { title: "Starter Plan", amount: "2,00,000", duration: "20", dividend: "2,500", subscription: "10,000" },
    { title: "Standard Plan", amount: "3,00,000", duration: "25", dividend: "3,000", subscription: "12,000" },
    { title: "Pro Plan", amount: "5,00,000", duration: "20", dividend: "5,000", subscription: "25,000" },
    { title: "Growth Plan", amount: "5,00,000", duration: "25", dividend: "5,000", subscription: "20,000" },
    { title: "Popular Selection", amount: "1,05,000", duration: "40", dividend: "1,312", subscription: "2,625", isPopular: true },
    { title: "Saver Plan", amount: "5,00,000", duration: "40", dividend: "4,375", subscription: "12,500" },
    { title: "Investor Plan", amount: "10,00,000", duration: "30", dividend: "8,333", subscription: "33,333" },
    { title: "Fortune Plan", amount: "10,00,000", duration: "40", dividend: "8,750", subscription: "25,000" },
    { title: "Micro Saver", amount: "1,50,000", duration: "50", dividend: "2,000", subscription: "3,000" }
  ];

  const displayedSchemes = showAllSchemes ? SCHEMES : SCHEMES.slice(0, 9);
  const homeUrl = "/";

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A192F] selection:bg-[#C5A059] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-32 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href={homeUrl}>Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#schemes">Schemes</NavLink>
            <NavLink href="#compliance">Compliance</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#support">Support</NavLink>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4"
            >
              <NavLink href={homeUrl}>Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#schemes">Schemes</NavLink>
              <NavLink href="#compliance">Compliance</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
              <NavLink href="#support">Support</NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Parallax Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              style={{ y: scrollY * 0.5 }}
              className="absolute top-20 left-10 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl"
            />
            <motion.div 
              style={{ y: scrollY * 0.3 }}
              className="absolute top-40 right-20 w-48 h-48 bg-[#0A192F]/10 rounded-full blur-3xl"
            />
            <motion.div 
              style={{ y: scrollY * 0.4 }}
              className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#C5A059]/5 rounded-full blur-3xl"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="flex justify-center mb-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-28 flex flex-col items-center justify-center pointer-events-none"
              >
                <img src="/new logo.png" alt="Sumedha Chits Logo" className="w-auto h-full object-contain drop-shadow-xl" />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.h2 
                className="text-[14px] md:text-[18px] font-black uppercase tracking-[0.4em] text-[#0A192F] mb-6 block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                SUMEDHA CHITS PVT LIMITED
              </motion.h2>
              <motion.p 
                className="text-[10px] text-black font-bold tracking-widest mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                CIN: U64190KA2026PTC217660
              </motion.p>
              
              <motion.p 
                className="text-[11px] font-medium text-[#C5A059] mb-4 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Karnataka's Regulated Digital Chit Fund
              </motion.p>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-[#0A192F] mb-6 leading-tight uppercase tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                SUMEDHA CHITS PVT LIMITED <br />
                <motion.span 
                  className="text-[#C5A059] inline-block text-3xl md:text-4xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  SMALL SAVINGS, BIG DREAMS
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="max-w-3xl mx-auto text-[#0A192F] text-sm leading-relaxed mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="block font-bold mb-4 text-base">Welcome to Sumedha Chits Private Limited!!</span>
                At Sumedha Chits Private Limited, we are committed to providing reliable, transparent, and customer-friendly chit fund services. Our goal is to help individuals and families achieve their financial needs through systematic savings and easy access to funds. <br className="hidden md:block" />
                With a strong focus on trust, integrity, and customer satisfaction, we strive to build long-term relationships with our subscribers while ensuring safe and efficient financial management.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.a 
                  href="#schemes"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button variant="primary" className="w-full h-full">View Schemes</Button>
                </motion.a>
                <motion.a 
                  href="https://play.google.com/store/apps/details?id=com.sreeyainfotech.chitcaresasmember" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button variant="secondary" className="w-full h-full">Download App</Button>
                </motion.a>
              </motion.div>

              <motion.div 
                className="flex flex-wrap justify-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <motion.div 
                  className="flex items-center gap-3 text-left"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 rounded-full border-2 border-gray-700">
                    <ShieldCheck className="text-[#C5A059]" size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">Regulated By</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A192F]">Govt. of Karnataka</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-left"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 rounded-full border-2 border-gray-700">
                    <CheckCircle2 className="text-[#C5A059]" size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">Registered Under</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A192F]">Chit Funds Act 1982</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Schemes Section */}
        <section className="py-24 bg-white border-t border-gray-100" id="schemes">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4"
          >
            <div className="text-center mb-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">Investment Plans</p>
              <h2 className="text-3xl font-bold text-[#0A192F]">Our Popular Schemes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 px-4">
              {displayedSchemes.map((scheme, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                >
                  <SchemeCard title="Chit Scheme" {...scheme} />
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center h-10">
              {!showAllSchemes && SCHEMES.length > 9 && (
                <button 
                  onClick={() => setShowAllSchemes(true)}
                  className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#C5A059] hover:text-[#0A192F] transition-all"
                >
                  View All Schemes <ArrowRight size={14} />
                </button>
              )}
            </div>
          </motion.div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-24 bg-[#0A192F] text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4"
          >
          <div className="text-center space-y-16">
              {/* Vision and Mission Boxes - Centered */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: Eye,
                    title: "Our Vision",
                    description: "To become a trusted and leading chit fund company that empowers individuals and families to achieve financial stability and growth through transparent and reliable financial solutions."
                  },
                  {
                    icon: Zap,
                    title: "Our Mission",
                    description: "To deliver efficient customer support and timely financial assistance to our members."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    className="p-8 border border-gray-800 rounded-sm hover:border-[#C5A059] transition-colors"
                  >
                    <item.icon className="text-[#C5A059] mb-6" size={32} />
                    <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Transparency, Security, Local Features - Below */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-[#C5A059]/30 mx-auto mb-4 bg-[#152a4a] flex items-center justify-center">
                    <Eye className="text-[#C5A059]" size={24} />
                  </div>
                  <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-1">Transparency:</p>
                  <p className="text-gray-400 text-[10px]">Real-time digital auctions.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-[#C5A059]/30 mx-auto mb-4 bg-[#152a4a] flex items-center justify-center">
                    <ShieldCheck className="text-[#C5A059]" size={24} />
                  </div>
                  <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-1">Security:</p>
                  <p className="text-gray-400 text-[10px]">Regulated by the Chit Funds Act, 1982.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-[#C5A059]/30 mx-auto mb-4 bg-[#152a4a] flex items-center justify-center">
                    <MapPin className="text-[#C5A059]" size={24} />
                  </div>
                  <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-1">Local:</p>
                  <p className="text-gray-400 text-[10px]">Proudly serving the Bangalore community.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Us & Services Section */}
        <section className="py-24 bg-white border-t border-gray-100" id="about">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">Who We Are</p>
                <h2 className="text-3xl font-bold text-[#0A192F] mb-8">About Us</h2>
                <div className="space-y-6 text-[#0A192F]/80 text-sm leading-relaxed text-left">
                  <p>
                    Sumedha Chits Private Limited is dedicated to offering safe and reliable chit fund services to help customers save regularly and access funds when required. Our company follows structured financial practices to ensure the smooth operation of chit schemes.
                  </p>
                  <p>
                    We believe that disciplined savings and proper financial planning are essential for achieving personal and business goals. Our experienced team works diligently to provide transparent services and ensure the best experience for all subscribers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#0A192F] p-8 rounded-sm text-white"
              >
                <h3 className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-8">Our Services</h3>
                <ul className="space-y-4 text-left">
                  {[
                    "Chit fund schemes for individuals and businesses",
                    "Systematic savings plans",
                    "Transparent auction process",
                    "Easy payment and collection system",
                    "Customer support and guidance"
                  ].map((service, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-gray-300">
                      <CheckCircle2 size={16} className="text-[#C5A059]" /> {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="mt-24 pt-24 border-t border-gray-100">
              <div className="text-center mb-16">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">Core Principles</p>
                <h2 className="text-3xl font-bold text-[#0A192F]">Our Values</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Trust", desc: "Building long-term relationships with customers" },
                  { title: "Transparency", desc: "Clear and honest business practices" },
                  { title: "Integrity", desc: "Ethical and responsible operations" },
                  { title: "Customer Commitment", desc: "Prioritizing customer satisfaction" }
                ].map((val, i) => (
                  <div key={i} className="text-center p-6 bg-gray-50 rounded-sm border border-transparent hover:border-[#C5A059]/30 transition-all">
                    <h4 className="text-[#0A192F] font-bold mb-2">{val.title}</h4>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">The Advantage</p>
              <h2 className="text-3xl font-bold text-[#0A192F]">Why Choose Us?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: ShieldCheck,
                  title: "Trusted Service",
                  description: "Trusted and reliable financial services for individuals and businesses."
                },
                {
                  icon: Eye,
                  title: "Transparent Policies",
                  description: "Transparent operations and clear, honest business policies."
                },
                {
                  icon: Users,
                  title: "Expert Management",
                  description: "Professional and experienced management team at your service."
                },
                {
                  icon: User,
                  title: "Customer-Centric",
                  description: "A customer-centric approach focusing on prioritized satisfaction."
                },
                {
                  icon: Smartphone,
                  title: "Secure Schemes",
                  description: "Secure and well-managed chit schemes for your peace of mind."
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full border border-gray-100 mx-auto mb-8 flex items-center justify-center transition-colors group-hover:border-[#C5A059]/30"
                  >
                    <feature.icon className="text-[#C5A059]" size={36} />
                  </motion.div>
                  <h3 className="text-[#0A192F] font-bold text-lg mb-4">{feature.title}</h3>
                  <p className="text-[#0A192F] font-medium text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Messages Section */}
        <section className="py-24 bg-[#0A192F] border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">Our Leaders</p>
              <h2 className="text-3xl font-bold text-white">Messages from the Board</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Lavanya Madam", role: "Director", msg: "At Sumedha Chits Pvt. Ltd., we are committed to providing secure, transparent, and reliable chit solutions. Our focus is on building trust and helping customers achieve their financial goals with confidence." },
                { name: "Mahesh Sir", role: "Director", msg: "We believe in simple, disciplined, and dependable financial growth. At Sumedha Chits Pvt. Ltd., we strive to deliver value-driven schemes with integrity and customer-first service." }
              ].map((leader, i) => (
                <div key={i} className="bg-[#0A192F] p-8 rounded-sm text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                      <Users className="text-gray-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{leader.name}</h4>
                      <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest">{leader.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs italic leading-relaxed">"{leader.msg}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-32 bg-white" id="compliance">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4"
          >
            <div className="text-center mb-20">
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#C5A059] mb-4">Our Commitment</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0A192F]">Built on Transparency & Law</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border border-gray-100 group-hover:border-[#C5A059]/30 transition-all flex items-center justify-center mb-8 bg-gray-50 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#C5A059]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CheckCircle2 className="text-[#C5A059]" size={32} />
                </div>
                <h3 className="font-bold mb-4 text-[#0A192F] text-xl">100% Registered</h3>
                <p className="text-[#0A192F] font-medium text-sm leading-relaxed max-w-xs mx-auto">
                  Registered under the Chit Funds Act, 1982. Every group is launched only after obtaining the mandatory Prior Sanction from the Registrar.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border border-gray-100 group-hover:border-[#C5A059]/30 transition-all flex items-center justify-center mb-8 bg-gray-50 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#C5A059]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Smartphone className="text-[#C5A059]" size={32} />
                </div>
                <h3 className="font-bold mb-4 text-[#0A192F] text-xl">Digital-First Transparency</h3>
                <p className="text-[#0A192F] font-medium text-sm leading-relaxed max-w-xs mx-auto">
                  We've replaced manual ledgers with a secure digital portal. Track your dividends, payments, and auction results in real-time.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border border-gray-100 group-hover:border-[#C5A059]/30 transition-all flex items-center justify-center mb-8 bg-gray-50 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#C5A059]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Users className="text-[#C5A059]" size={32} />
                </div>
                <h3 className="font-bold mb-4 text-[#0A192F] text-xl">Expert Management</h3>
                <p className="text-[#0A192F] font-medium text-sm leading-relaxed max-w-xs mx-auto">
                  Led by industry veterans missioned to modernize community savings for the next generation of Karnataka's investors.
                </p>
              </div>
            </div>

            <div className="pt-20 border-t border-gray-100 text-center">
              <h3 className="text-[#0A192F] font-black mb-10 text-2xl">Official Compliance Certificates</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="/CIN_SUMEDHA.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#152a4a] text-white px-8 py-5 rounded-sm text-xs font-bold uppercase tracking-widest border border-gray-700 hover:border-[#C5A059] hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <ShieldCheck size={20} className="text-[#C5A059]" /> CIN Document
                </a>
                <a href="/SUMEDHA CHITS PRIVATE LIMITED-GST  Certificate.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#152a4a] text-white px-8 py-5 rounded-sm text-xs font-bold uppercase tracking-widest border border-gray-700 hover:border-[#C5A059] hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <ShieldCheck size={20} className="text-[#C5A059]" /> GST Certificate
                </a>
                <a href="/TAN_88305929732731_signed_SUMEDHA.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#152a4a] text-white px-8 py-5 rounded-sm text-xs font-bold uppercase tracking-widest border border-gray-700 hover:border-[#C5A059] hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <ShieldCheck size={20} className="text-[#C5A059]" /> TAN Document
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Mobile App Section */}
        <section className="py-24 bg-[#0A192F] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <div className="text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-6">Mobile Portal</p>
                <h2 className="text-4xl font-bold mb-8">Get the Mobile App</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md">
                  Bid in real-time, pay your installments, and track your dividends with our secure Android application.
                </p>
                <a href="https://play.google.com/store/apps/details?id=com.sreeyainfotech.chitcaresasmember" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 hover:scale-110 transition-transform">
                  <img src="/Google Play Badge Logo.jpg" alt="Get it on Google Play" className="h-16 w-auto shadow-xl rounded-lg" />
                </a>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative flex justify-center"
                style={{ perspective: 1000 }}
              >
                <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-x-8 top-0 h-4 bg-gray-800 rounded-b-xl z-20"></div>
                  
                  <div className="absolute inset-0 bg-[#0A192F] flex flex-col items-center overflow-y-auto hide-scrollbar pb-20">
                     {/* Mock App Header */}
                     <div className="w-full bg-[#152a4a] px-6 pt-12 pb-6 flex flex-col items-center rounded-b-3xl shadow-lg border-b border-[#C5A059]/20 relative z-10">
                        <div className="flex items-center justify-center mb-6 scale-110 w-full">
                          <img src="/new logo.png" alt="Sumedha Chits" className="h-16 w-auto object-contain" />
                        </div>
                        <div className="w-full bg-[#0A192F]/50 rounded-lg p-3 border border-gray-700/50 flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Total Dividends</span>
                          <span className="text-[#C5A059] font-bold">₹ 12,450</span>
                        </div>
                     </div>
                     
                     {/* Mock App Body */}
                     <div className="w-full px-5 py-6 space-y-4">
                        <div className="bg-gradient-to-br from-[#152a4a] to-[#0A192F] w-full p-5 rounded-2xl border border-gray-700/50 shadow-lg relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full blur-2xl"></div>
                           <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Upcoming Installment</p>
                           <p className="text-white text-2xl font-bold mb-4">₹ 8,500</p>
                           <button className="w-full bg-[#C5A059] py-2.5 rounded-lg text-white text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-[#C5A059]/20 flex items-center justify-center gap-2 relative z-10">
                              Pay Now <ArrowRight size={12} />
                           </button>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-[#152a4a] p-4 rounded-2xl border border-gray-700/50 flex flex-col items-center justify-center gap-2 text-center">
                             <div className="w-8 h-8 rounded-full bg-[#0A192F] flex items-center justify-center"><List size={14} className="text-[#C5A059]" /></div>
                             <span className="text-[9px] font-bold text-gray-300 uppercase">My Schemes</span>
                          </div>
                          <div className="bg-[#152a4a] p-4 rounded-2xl border border-gray-700/50 flex flex-col items-center justify-center gap-2 text-center">
                             <div className="w-8 h-8 rounded-full bg-[#0A192F] flex items-center justify-center"><Zap size={14} className="text-[#C5A059]" /></div>
                             <span className="text-[9px] font-bold text-gray-300 uppercase">Auctions</span>
                          </div>
                        </div>
                     </div>
                  </div>

                  {/* Mock App Bottom Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-[#152a4a]/95 backdrop-blur-md border-t border-gray-800 flex justify-around items-center px-6 pb-2 rounded-t-3xl z-30">
                     <div className="flex flex-col items-center gap-1 text-[#C5A059]"><Home size={18} /><span className="text-[8px] font-bold uppercase tracking-widest">Home</span></div>
                     <div className="flex flex-col items-center gap-1 text-gray-500"><ShieldCheck size={18} /><span className="text-[8px] font-bold uppercase tracking-widest">Safe</span></div>
                     <div className="flex flex-col items-center gap-1 text-gray-500"><User size={18} /><span className="text-[8px] font-bold uppercase tracking-widest">Profile</span></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white border-t border-gray-100" id="faq">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">Help Center</p>
              <h2 className="text-3xl font-bold text-[#0A192F]">Frequently Asked <span className="text-[#C5A059]">Questions</span></h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQItem 
                question="1. What is a chit fund?" 
                answer="A chit fund is a financial arrangement where a group of members contribute a fixed amount every month, and one member receives the collected amount through an auction or draw." 
              />
              <FAQItem 
                question="2. How does a chit scheme work?" 
                answer="In a chit scheme, all members pay a fixed monthly installment. Every month, one member receives the chit amount through an auction process or predetermined method." 
              />
              <FAQItem 
                question="3. Who can join a chit scheme?" 
                answer="Any individual who meets the eligibility criteria and agrees to the terms and conditions can join a chit scheme." 
              />
              <FAQItem 
                question="4. Is my money safe in a chit fund?" 
                answer="Yes, when managed by a reliable company like Sumedha Chits Private Limited, chit funds are conducted in a structured and transparent manner according to company policies." 
              />
              <FAQItem 
                question="5. What are the benefits of joining a chit fund?" 
                answer="Regular savings habit, access to funds when needed, flexible financial support, and a community-based financial system." 
              />
              <FAQItem 
                question="6. How are chit auctions conducted?" 
                answer="Chit auctions are conducted periodically where members bid for the chit amount. The member offering the highest discount receives the amount." 
              />
              <FAQItem 
                question="7. What documents are required to join?" 
                answer="Generally required documents include: Identity proof, Address proof, Passport size photographs, and Bank details." 
              />
              <FAQItem 
                question="8. Can I join more than one chit scheme?" 
                answer="Yes, a customer can join multiple chit schemes depending on eligibility and company policies." 
              />
              <FAQItem 
                question="9. How can I make payments?" 
                answer="Payments can be made through authorized company representatives, bank transfer, or other payment methods provided by the company." 
              />
              <FAQItem 
                question="10. How can I contact customer support?" 
                answer="You can contact Sumedha Chits Private Limited through our branch offices, phone numbers, or the contact form available on our website." 
              />
              
              <div className="mt-12 flex justify-center">
                <button className="border border-[#C5A059] px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all">
                  View All Questions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support & Location Section */}
        <section className="py-24 bg-[#0A192F] border-t border-gray-800" id="support">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">Contact</p>
              <h2 className="text-3xl font-bold text-white">Support & Location</h2>
            </div>

            <div className="bg-[#0A192F] rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-white">
                <h3 className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-8">Head Office</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="text-[#C5A059] shrink-0" size={20} />
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Sumedha Chits Private Limited <br />
                      No.3FC-401, Raghav's Complex, 4th Cross, East of New BDA Layout Ramamurthynagar, Bengaluru - 560016
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-[#C5A059] shrink-0" size={20} />
                    <p className="text-gray-400 text-xs">
                      <a href="tel:+919964556559" className="hover:text-white transition-colors">+91 9964556559</a> / <a href="tel:+919916389186" className="hover:text-white transition-colors">9916389186</a>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-[#C5A059] shrink-0" size={20} />
                    <p className="text-gray-400 text-xs text-left">
                      sumedhachits@gmail.com <br/>
                      <span className="text-[9px] uppercase tracking-widest text-[#C5A059]/60">Customer support team is always ready to assist you.</span>
                    </p>
                  </div>
                </div>
                
                <a href="https://wa.me/919964556559" target="_blank" rel="noopener noreferrer" className="mt-12 w-full bg-[#25D366] text-white py-3 rounded-sm flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#1ebd57] transition-colors">
                  <WhatsAppIcon size={18} /> WhatsApp Support
                </a>
              </div>
              <div className="bg-[#152a4a] relative min-h-[400px]">
                <iframe 
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Sumedha+Chits+Private+Limited,+Bengaluru&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
                  title="Sumedha Chits Private Limited Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A192F] border-t border-gray-800 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <Logo light={true} className="mb-12" />
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
              <NavLink href={homeUrl}>Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#schemes">Schemes</NavLink>
              <NavLink href="#compliance">Compliance</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
              <NavLink href="#support">Support</NavLink>
            </nav>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <a href="/privacy" className="hover:text-[#C5A059]">Privacy Policy</a>
              <a href="/terms" className="hover:text-[#C5A059]">Terms & Conditions</a>
            </div>
          </div>
          
          <div className="text-center pt-10 border-t border-gray-800">
            <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-2">
              © 2026 SUMEDHA CHITS PRIVATE LIMITED. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[9px] text-gray-400 uppercase tracking-widest">
              CIN: U64190KA2026PTC217660 | Regd. Office: Bengaluru, India
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919964556559" 
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-100"
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}
