"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Shield, Target, Globe, Cpu, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timelineEvents = [
  {
    year: "2024",
    title: "The Genesis",
    description: "Feenixs was founded in India by Rithish with a core mission: to establish a research-first AI initiative that breaks away from traditional corporate models. The goal was to build a secure developer platform combining advanced neural designs and peer-to-peer compute structures.",
    details: [
      "Initial seed architecture of the node controller",
      "Assembled a core engineering team across 4 time zones",
      "Published first preprint on low-rank semantic embeddings"
    ],
    icon: Cpu
  },
  {
    year: "2025",
    title: "Edge Network Deployment",
    description: "Successfully launched the global edge computing network, establishing solar co-located clusters to reduce training carbon footprint. Introduced dynamic task migration, allowing machine learning workloads to shift seamlessly between regions.",
    details: [
      "Reached 10,000+ active edge compute nodes",
      "Solar grid telemetry API deployed and public",
      "Completed prototype for sparse MoE network architecture"
    ],
    icon: Globe
  },
  {
    year: "2026",
    title: "Project Nexus Scaling",
    description: "Initiated the training of Project Nexus, our flagship decentralized Mixture-of-Experts (MoE) model. Established the research comment and peer-review system to foster open-source academic collaboration.",
    details: [
      "Achieved sub-80ms global Edge TTFB",
      "Integrated secure PostgreSQL vectors database client mapping",
      "Active collaboration pipelines with 15+ university research labs"
    ],
    icon: Target
  }
];

export default function About() {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const activeEvent = timelineEvents[activeYearIndex];

  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 text-glow"
          >
            A Research-First Technology Initiative
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Founded in 2024 by Rithish, operating from India with a globally distributed remote workforce. Feenixs is built at the intersection of AI research, distributed systems, and open scientific discovery.
          </motion.p>
        </div>

        {/* Foundation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-left">
          <div className="p-6 rounded-2xl glassmorphism-card space-y-4">
            <div className="p-3 w-fit rounded-lg bg-emerald-50 border border-emerald-100 text-brand-primary">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Distributed Talent</h3>
            <p className="text-sm text-slate-650 leading-relaxed font-light">
              We empower highly motivated engineers to collaborate asynchronously from anywhere in the world. High-agency culture overrides rigid corporate management.
            </p>
          </div>
          <div className="p-6 rounded-2xl glassmorphism-card space-y-4">
            <div className="p-3 w-fit rounded-lg bg-teal-50 border border-teal-100 text-brand-accent">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Secure Architecture</h3>
            <p className="text-sm text-slate-650 leading-relaxed font-light">
              Strict cryptographic verification, decentralized identity layers, and sandboxed execution represent core constraints in all software we ship.
            </p>
          </div>
          <div className="p-6 rounded-2xl glassmorphism-card space-y-4">
            <div className="p-3 w-fit rounded-lg bg-emerald-50 border border-emerald-100 text-brand-primary">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Open Science</h3>
            <p className="text-sm text-slate-650 leading-relaxed font-light">
              By open-sourcing model codebooks, raw training metrics, and experimental telemetry datasets, we support academic research and public knowledge.
            </p>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">Our Milestones & Timeline</h2>
          
          {/* Navigation nodes */}
          <div className="relative flex justify-between items-center max-w-2xl mx-auto mb-16">
            {/* Connector line */}
            <div className="absolute left-0 right-0 h-0.5 bg-slate-200 z-0" />
            <div 
              className="absolute left-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent z-0 transition-all duration-500" 
              style={{ width: `${(activeYearIndex / (timelineEvents.length - 1)) * 100}%` }}
            />

            {timelineEvents.map((event, idx) => {
              const Icon = event.icon;
              const isActive = idx === activeYearIndex;
              return (
                <button
                  key={event.year}
                  onClick={() => setActiveYearIndex(idx)}
                  className="relative z-10 flex flex-col items-center focus:outline-none group"
                >
                  <div
                    className={`h-12 w-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-white border-brand-primary text-brand-primary shadow-sm scale-110"
                        : "bg-white border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`mt-2 font-mono text-sm font-semibold transition-colors ${
                    isActive ? "text-brand-primary" : "text-slate-400 group-hover:text-slate-600"
                  }`}>
                    {event.year}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeline details container */}
          <div className="min-h-[250px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.year}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-2 space-y-4 text-left">
                  <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider font-mono">
                    Milestone Details
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">{activeEvent.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-light">{activeEvent.description}</p>
                </div>
                <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 text-left shadow-sm">
                  <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider font-mono mb-2">Key Accomplishments</h4>
                  {activeEvent.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-650">
                      <span className="text-brand-primary mt-1 select-none">{"//"}</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Distributed Workplace Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-glow">Decentralized, High-Agency Culture</h2>
            <p className="text-slate-650 leading-relaxed font-light">
              We operate without central brick-and-mortar headquarters, bringing together elite programmers and machine learning researchers across continents. 
            </p>
            <p className="text-slate-650 leading-relaxed font-light">
              By working in small, self-directed cells, we bypass institutional bureaucracy and focus entirely on engineering output and peer-reviewed rigor.
            </p>
            <div className="flex items-center space-x-6 pt-2">
              <div className="flex items-center text-sm text-slate-700 font-medium">
                <MapPin className="h-5 w-5 text-brand-primary mr-2" />
                <span>Founded in India</span>
              </div>
              <div className="flex items-center text-sm text-slate-700 font-medium">
                <Globe className="h-5 w-5 text-brand-primary mr-2" />
                <span>Distributed Worldwide</span>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 text-left shadow-sm">
            <h3 className="font-bold text-slate-900 text-lg">Engineering-First KPIs</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold uppercase text-slate-500 mb-1.5">
                  <span>Edge Server TTFB</span>
                  <span className="text-brand-primary font-mono">p95 &lt; 80ms</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-primary w-[95%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold uppercase text-slate-500 mb-1.5">
                  <span>Lighthouse Accessibility</span>
                  <span className="text-brand-primary font-mono">100/100</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-primary w-[100%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold uppercase text-slate-500 mb-1.5">
                  <span>Security Code Coverage</span>
                  <span className="text-brand-primary font-mono">&gt; 92%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-primary w-[92%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
