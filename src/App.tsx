/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
  <div className={cn("flex items-center gap-2", className)}>
    <a href="/LOGO (1).pdf" target="_blank" rel="noopener noreferrer" className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-sm hover:scale-105 transition-transform shrink-0">
      <object data="/LOGO (1).pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" className="w-[130%] h-[130%] pointer-events-none" aria-label="Logo">
        <div className="absolute inset-0 border-2 border-[#C5A059] rotate-45 rounded-sm"></div>
        <div className="relative z-10 text-[#0A192F] font-bold text-xl">S</div>
      </object>
    </a>
    <div className="flex flex-col leading-tight">
      <span className={cn("text-2xl font-bold tracking-tight", light ? "text-white" : "text-[#0A192F]")}>
        <span className="text-[#C5A059]">U</span>MEDHA
      </span>
      <span className={cn("text-[10px] font-bold tracking-[0.2em]", light ? "text-gray-400" : "text-[#0A192F]")}>CHITS PVT LTD</span>
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
  isPopular 
}: { 
  title: string; 
  amount: string; 
  duration: string; 
  dividend: string; 
  isPopular?: boolean 
}) => (
  <div className="relative bg-[#0A192F] p-8 rounded-sm text-white flex flex-col items-center text-center group hover:scale-[1.02] transition-transform duration-300">
    {isPopular && (
      <div className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[9px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest">
        Popular
      </div>
    )}
    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">{title}</h3>
    <div className="text-2xl font-bold mb-2">₹ {amount}</div>
    <div className="text-[11px] text-gray-400 mb-6">₹ {amount.replace(/,/g, '')} × {duration} Months</div>
    <div className="bg-[#152a4a] w-full py-2 px-4 rounded-sm text-[10px] font-medium text-green-400 mb-8">
      Earn up to ₹ {dividend} Dividend
    </div>
    <button className="w-full border border-gray-600 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#0A192F] transition-colors">
      Details
    </button>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-800 bg-[#0A192F] mb-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left text-white hover:bg-[#152a4a] transition-colors"
      >
        <span className="text-sm font-medium">{question}</span>
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
            <div className="p-5 text-gray-400 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#C5A059] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Schemes</NavLink>
            <NavLink href="#">Documents</NavLink>
            <NavLink href="#">Compliance</NavLink>
            <NavLink href="#">Investor Corner</NavLink>
            <NavLink href="#">FAQ</NavLink>
            <NavLink href="#">Support</NavLink>
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
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Schemes</NavLink>
              <NavLink href="#">Documents</NavLink>
              <NavLink href="#">Compliance</NavLink>
              <NavLink href="#">Investor Corner</NavLink>
              <NavLink href="#">FAQ</NavLink>
              <NavLink href="#">Support</NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-24 h-24 flex items-center justify-center bg-white rounded-2xl shadow-xl overflow-hidden p-2">
                <object data="/LOGO (1).pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" className="w-full h-full pointer-events-none" aria-label="Logo">
                  <div className="absolute inset-0 border-4 border-[#C5A059] rotate-45 rounded-md"></div>
                  <div className="relative z-10 text-[#0A192F] font-bold text-4xl">S</div>
                </object>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#0A192F] mb-4">
                SUMEDHA CHITS PVT LIMITED
              </h2>
              <p className="text-[10px] text-gray-400 mb-8 tracking-widest">CIN: U65990KA2021PTC144520</p>
              
              <p className="text-[11px] font-medium text-[#C5A059] mb-4 uppercase tracking-widest">
                Karnataka's Regulated Digital Chit Fund
              </p>
              
              <h1 className="text-5xl md:text-6xl font-bold text-[#0A192F] mb-6 leading-tight">
                Secure Growth for <br />
                <span className="text-[#C5A059]">Secure Digital Investing</span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-gray-500 text-sm leading-relaxed mb-12">
                At sumedha chits private limited, we are committed to providing reliable, transparent, <br className="hidden md:block" />
                and customer-friendly chit fund services.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                <Button variant="primary">View Schemes</Button>
                <a href="https://play.google.com/store/apps/details?id=com.sreeyainfotech.chitcaresasmember" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="w-full h-full">Download App</Button>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 rounded-full border border-gray-200">
                    <ShieldCheck className="text-[#C5A059]" size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Regulated By</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A192F]">Govt. of Karnataka</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 rounded-full border border-gray-200">
                    <CheckCircle2 className="text-[#C5A059]" size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Registered Under</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A192F]">Chit Funds Act 1982</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Schemes Section */}
        <section className="py-24 bg-gray-50">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <SchemeCard title="Micro Savings" amount="2,00,000" duration="20" dividend="2,500" />
              <SchemeCard title="Retail Savings" amount="3,00,000" duration="25" dividend="3,000" />
              <SchemeCard title="Business Growth" amount="5,00,000" duration="20" dividend="5,000" isPopular />
              <SchemeCard title="Premium Savings" amount="5,00,000" duration="25" dividend="5,000" />
              <SchemeCard title="HNI Wealth" amount="5,00,000" duration="40" dividend="4,375" />
              <SchemeCard title="Elite Corporate" amount="10,00,000" duration="30" dividend="8,333" />
            </div>

            <div className="flex justify-center">
              <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#C5A059] hover:gap-4 transition-all">
                View All Schemes <ArrowRight size={14} />
              </button>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-6">Director's Vision & Mission</p>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[#C5A059] font-bold text-sm mb-2">Lavanya Madam:</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        At Sumedha Chits Pvt. Ltd., we are committed to providing secure, transparent, and reliable chit solutions. Our focus is on building trust and helping customers achieve their financial goals with confidence.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#C5A059] font-bold text-sm mb-2">Mahesh Sir:</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        We believe in simple, disciplined, and dependable financial growth. At Sumedha Chits Pvt. Ltd., we strive to deliver value-driven schemes with integrity and customer-first service.
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <p className="text-[#C5A059] font-bold text-sm mb-4">Official Documents:</p>
                    <div className="flex flex-wrap gap-4">
                      <a href="/CIN_SUMEDHA.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#152a4a] text-white px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#1a335a] border border-gray-700 hover:border-[#C5A059] transition-all">
                        <ShieldCheck size={14} className="text-[#C5A059]"/> CIN
                      </a>
                      <a href="/SUMEDHA CHITS PRIVATE LIMITED-GST  Certificate.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#152a4a] text-white px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#1a335a] border border-gray-700 hover:border-[#C5A059] transition-all">
                        <ShieldCheck size={14} className="text-[#C5A059]"/> GST
                      </a>
                      <a href="/TAN_88305929732731_signed_SUMEDHA.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#152a4a] text-white px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#1a335a] border border-gray-700 hover:border-[#C5A059] transition-all">
                        <ShieldCheck size={14} className="text-[#C5A059]"/> TAN
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-800">
                  <div>
                    <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-1">Transparency:</p>
                    <p className="text-gray-400 text-[10px]">Real-time digital auctions.</p>
                  </div>
                  <div>
                    <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-1">Security:</p>
                    <p className="text-gray-400 text-[10px]">Regulated by the Chit Funds Act, 1982.</p>
                  </div>
                  <div>
                    <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-1">Local:</p>
                    <p className="text-gray-400 text-[10px]">Proudly serving the Bangalore community.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-gray-800 rounded-sm hover:border-[#C5A059] transition-colors">
                  <Eye className="text-[#C5A059] mb-6" size={32} />
                  <h3 className="text-lg font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    To become a trusted and leading chit fund company that empowers individuals and families to achieve financial stability and growth through transparent and reliable financial solutions.
                  </p>
                </div>
                <div className="p-8 border border-gray-800 rounded-sm hover:border-[#C5A059] transition-colors">
                  <Zap className="text-[#C5A059] mb-6" size={32} />
                  <h3 className="text-lg font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    To deliver efficient customer support and timely financial assistance to our members.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">The Advantage</p>
              <h2 className="text-3xl font-bold text-[#0A192F]">Why Choose Us?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0A192F] p-12 text-center rounded-sm group hover:-translate-y-2 transition-transform">
                <TrendingUp className="text-[#C5A059] mx-auto mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-white font-bold mb-4">Higher Yields</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Competitive returns compared to traditional banking instruments.
                </p>
              </div>
              <div className="bg-[#0A192F] p-12 text-center rounded-sm group hover:-translate-y-2 transition-transform">
                <ShieldCheck className="text-[#C5A059] mx-auto mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-white font-bold mb-4">Instant Liquidity</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Access your funds quickly during emergency needs via auctions.
                </p>
              </div>
              <div className="bg-[#0A192F] p-12 text-center rounded-sm group hover:-translate-y-2 transition-transform">
                <Smartphone className="text-[#C5A059] mx-auto mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-white font-bold mb-4">Paperless UX</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Manage your installments and dividends entirely through our app.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Board Messages Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">Our Leaders</p>
              <h2 className="text-3xl font-bold text-[#0A192F]">Messages from the Board</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Manjunath K V", role: "Director", msg: "Technology is the bridge that brings the age-old trust of chit funds into the digital era. We are committed to absolute financial integrity." },
                { name: "Santosh G K", role: "Director", msg: "Your hard-earned savings deserve the highest level of legal protection. We ensure 100% compliance with every state regulation." },
                { name: "Rajesh H R", role: "Director", msg: "Empowering the community through shared savings is our mission. Akshita Shri is built to help every member grow together." }
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
        <section className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4"
          >
            <div className="text-center mb-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">Our Commitment</p>
              <h2 className="text-3xl font-bold text-[#0A192F]">Built on Transparency & Law</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-[#C5A059]" size={28} />
                </div>
                <h3 className="font-bold mb-4">100% Government Regulated</h3>
                <p className="text-gray-500 text-[10px] leading-relaxed">
                  Registered under the Chit Funds Act, 1982. Every group is launched only after obtaining the mandatory Prior Sanction from the Registrar.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="text-[#C5A059]" size={28} />
                </div>
                <h3 className="font-bold mb-4">Digital-First Transparency</h3>
                <p className="text-gray-500 text-[10px] leading-relaxed">
                  We've replaced manual ledgers with a secure digital portal. Track your dividends, payments, and auction results in real-time.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mx-auto mb-6">
                  <Users className="text-[#C5A059]" size={28} />
                </div>
                <h3 className="font-bold mb-4">Expert Management</h3>
                <p className="text-gray-500 text-[10px] leading-relaxed">
                  Led by industry veterans with a mission to modernize community savings for the next generation of Karnataka's investors.
                </p>
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
                <a href="https://play.google.com/store/apps/details?id=com.sreeyainfotech.chitcaresasmember" target="_blank" rel="noopener noreferrer" className="inline-flex bg-black border border-gray-700 px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-900 transition-colors">
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-gray-400">Get it on</p>
                    <p className="text-lg font-bold">Google Play</p>
                  </div>
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
                        <Logo className="scale-[0.85] origin-top max-w-full justify-center mb-6" light={true} />
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
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">Help Center</p>
              <h2 className="text-3xl font-bold text-[#0A192F]">Frequently Asked <span className="text-[#C5A059]">Questions</span></h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQItem 
                question="What is a chit fund?" 
                answer="A chit fund is a unique financial instrument that combines savings and borrowing. It's a rotating savings and credit association where members contribute a fixed amount monthly, and one member receives the total pool through an auction process." 
              />
              <FAQItem 
                question="How does a chit scheme work?" 
                answer="Members contribute monthly. Every month, an auction is held. The member who offers the highest discount (within legal limits) receives the prize money. The discount is then distributed among all members as a dividend." 
              />
              <FAQItem 
                question="Who can join a chit scheme?" 
                answer="Any Indian citizen with a valid source of income and necessary KYC documents (Aadhar, PAN, etc.) can join our schemes after verification." 
              />
              <FAQItem 
                question="Is my money safe in a chit fund?" 
                answer="Yes, when you invest with a regulated company like Sumedha Chits. We are registered under the Chit Funds Act, 1982, and regulated by the Government of Karnataka, ensuring 100% legal compliance and security." 
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
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">Contact</p>
              <h2 className="text-3xl font-bold text-[#0A192F]">Support & Location</h2>
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
                      <br/>
                      <a href="https://maps.app.goo.gl/Zi9wtgeNjjJPasFm9" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:text-white transition-colors mt-2 inline-block font-bold tracking-widest uppercase text-[10px]">Get Directions</a>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-[#C5A059] shrink-0" size={20} />
                    <p className="text-gray-400 text-xs">
                      <a href="tel:+919964556559" className="hover:text-white transition-colors">+91 9964556559</a>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-[#C5A059] shrink-0" size={20} />
                    <p className="text-gray-400 text-xs">
                      <a href="mailto:sumedhachits@gmail.com" className="hover:text-white transition-colors">sumedhachits@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <a href="https://wa.me/919964556559" target="_blank" rel="noopener noreferrer" className="mt-12 w-full bg-[#25D366] text-white py-3 rounded-sm flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#1ebd57] transition-colors">
                  <MessageCircle size={18} /> WhatsApp Support
                </a>
              </div>
              <div className="bg-white relative min-h-[400px]">
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
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <Logo className="mb-12" />
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Schemes</NavLink>
              <NavLink href="#">Documents</NavLink>
              <NavLink href="#">Compliance</NavLink>
              <NavLink href="#">Investor Corner</NavLink>
              <NavLink href="#">FAQ</NavLink>
              <NavLink href="#">Support</NavLink>
            </nav>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <a href="#" className="hover:text-[#C5A059]">Privacy Policy</a>
              <a href="#" className="hover:text-[#C5A059]">Terms & Conditions</a>
            </div>
          </div>
          
          <div className="text-center pt-10 border-t border-gray-50">
            <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-2">
              © 2026 SUMEDHA CHITS PRIVATE LIMITED. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[9px] text-gray-400 uppercase tracking-widest">
              CIN: U65990KA2021PTC144520 | Regd. Office: Bengaluru, India
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919964556559" 
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-[100]"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
