"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Network, KeyRound, CpuIcon, Activity, Database, Zap, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const techPillars = [
  {
    id: "neural-computing",
    title: "Neural Computing",
    icon: Cpu,
    tagline: "Custom dynamic execution kernels",
    description: "Our runtime engine compiles sparsified tensor operations directly to low-level target machine code. By compiling execution graphs dynamically, we bypass conventional frame overheads.",
    features: ["Dynamic kernel fusion", "Half-precision FP16 optimization", "Sub-microsecond synchronization"],
    benchmarkVal: "98.2%",
    benchmarkLabel: "Compute Utilization"
  },
  {
    id: "global-node-network",
    title: "Global Node Network",
    icon: Network,
    tagline: "P2P distributed mesh topology",
    description: "A decentralized consensus protocol coordinating geographically isolated nodes. Workloads route intelligently to clusters co-located with solar and wind farms to maximize carbon offset.",
    features: ["Optimistic state consensus", "Solar irradiance routing", "Multi-region failover protection"],
    benchmarkVal: "48ms",
    benchmarkLabel: "Consensus Latency"
  },
  {
    id: "quantum-ready-algorithms",
    title: "Quantum-Ready Algorithms",
    icon: KeyRound,
    tagline: "Post-quantum cryptographic parameters",
    description: "Preparing all messaging, weight handshakes, and node verification tokens for post-quantum threat vectors. Secure key exchange runs across state borders via Kyber-1024 parameters.",
    features: ["Kyber-1024 key exchange", "Dilithium-5 signatures", "Zero-Knowledge model verification"],
    benchmarkVal: "2048-bit",
    benchmarkLabel: "Entropy Baseline"
  },
  {
    id: "advanced-nlp-models",
    title: "Advanced NLP Models",
    icon: CpuIcon,
    tagline: "Low-rank sparse transformer manifolds",
    description: "By projecting semantic embeddings onto lower-dimensional spectral manifolds, we eliminate massive parameter redundancy while preserving contextual reasoning capacity.",
    features: ["Sparse attention routing", "Low-rank adapter integration", "Dynamic routing block modules"],
    benchmarkVal: "60%",
    benchmarkLabel: "Weight Reduction"
  },
  {
    id: "real-time-telemetry",
    title: "Real-Time Telemetry",
    icon: Activity,
    tagline: "Carbon-deficit training schedulers",
    description: "Compute managers monitor local solar array indices. When weather patterns block local generation, tasks shift automatically to high-irradiance zones without model state rollback.",
    features: ["Real-time carbon counters", "Autonomous task migration", "Hardware temperature guards"],
    benchmarkVal: "100%",
    benchmarkLabel: "Grid Independence"
  },
  {
    id: "vector-database",
    title: "Vector Database Layer",
    icon: Database,
    tagline: "High-density pgvector index layers",
    description: "Query and cluster multi-modal paper embeddings instantly. Integrated directly with our PostgreSQL backend, research citations index and connect in real-time.",
    features: ["HNSW index acceleration", "Multi-modal cross matching", "Real-time citation graphs"],
    benchmarkVal: "<12ms",
    benchmarkLabel: "Semantic Query Latency"
  }
];

const benchmarkCategories = [
  {
    id: "throughput",
    title: "Training Throughput (TFLOPS)",
    bars: [
      { name: "Feenixs Node Grid", value: 92, color: "bg-brand-primary" },
      { name: "Industry Standard Multi-Cloud", value: 65, color: "bg-brand-accent" },
      { name: "Legacy Server Monoliths", value: 40, color: "bg-slate-400" }
    ]
  },
  {
    id: "latency",
    title: "Global API Response (p99 in ms)",
    bars: [
      { name: "Feenixs Edge Routing", value: 92, color: "bg-brand-primary" },
      { name: "Standard Central CDN", value: 240, color: "bg-brand-accent" },
      { name: "Unmanaged Region Server", value: 380, color: "bg-slate-400" }
    ]
  },
  {
    id: "efficiency",
    title: "Compute Power Efficiency (GFLOPS/Watt)",
    bars: [
      { name: "Feenixs Solar Clusters", value: 98, color: "bg-brand-primary" },
      { name: "Grid-Tied Server Clusters", value: 45, color: "bg-brand-accent" },
      { name: "Standard Office Workstations", value: 15, color: "bg-slate-400" }
    ]
  }
];

export default function Technology() {
  const [activeTab, setActiveTab] = useState(techPillars[0].id);
  const [benchmarkTab, setBenchmarkTab] = useState(benchmarkCategories[0].id);

  const activePillar = techPillars.find(p => p.id === activeTab) || techPillars[0];
  const activeBenchmark = benchmarkCategories.find(b => b.id === benchmarkTab) || benchmarkCategories[0];

  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none z-0" />

      <Navbar />

      {/* Hero Header */}
      <section className="relative z-10 pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 text-glow"
        >
          Dynamic Neural Runtime Stack
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-650 max-w-3xl leading-relaxed mb-10"
        >
          Feenixs implements custom sparse layers and active P2P consensus layers designed for maximum training efficiency across solar grid nodes.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex space-x-6 px-5 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono shadow-sm"
        >
          <span className="flex items-center space-x-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            <span>Consensus: <strong className="text-brand-primary font-bold">12 Active Layers</strong></span>
          </span>
          <span className="text-slate-350">|</span>
          <span>Avg Latency: <strong className="text-brand-primary font-bold">0.05ms</strong></span>
        </motion.div>
      </section>

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dynamic Pillars Tabs & Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 text-left">
          {/* Navigation tab links */}
          <div className="space-y-3">
            {techPillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = pillar.id === activeTab;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`w-full flex items-center space-x-4 p-4 rounded-xl text-left border transition-all duration-300 ${
                    isActive
                      ? "bg-white border-brand-primary/30 text-brand-primary shadow-sm scale-[1.02]"
                      : "bg-slate-50/50 border-slate-200 hover:border-slate-300 text-slate-600"
                  }`}
                >
                  <div className={`p-2 rounded-lg border transition-colors ${
                    isActive ? "bg-brand-primary/10 border-brand-primary/20 text-brand-primary" : "bg-white border-slate-200 text-slate-450"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{pillar.title}</h3>
                    <p className="text-xs opacity-75 line-clamp-1">{pillar.tagline}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Card */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider font-mono">Architectural Vector</span>
                      <h2 className="text-2xl font-bold text-slate-900 mt-1">{activePillar.title}</h2>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center shadow-inner">
                      <span className="text-3xl font-extrabold font-mono text-slate-900 block">{activePillar.benchmarkVal}</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{activePillar.benchmarkLabel}</span>
                    </div>
                  </div>

                  <p className="text-slate-655 text-sm leading-relaxed font-light">{activePillar.description}</p>

                  <div className="border-t border-slate-100 pt-6">
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider font-mono mb-4">Core Specifications</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activePillar.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-brand-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Stack compliance: Next.js + Tailwind + TS verified</span>
                  <span className="flex items-center text-brand-primary font-mono font-bold">
                    <Zap className="h-3.5 w-3.5 mr-1" /> ACTIVE PROTOCOL
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* High-Fidelity Performance Benchmarks */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-left shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-slate-200 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2 font-mono">Performance Benchmarks</h2>
              <p className="text-slate-500 text-xs">Empirical metrics validating our infrastructure design constraints against industry models.</p>
            </div>
            {/* Category selection */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0 bg-white p-1.5 rounded-lg border border-slate-200 shadow-inner">
              {benchmarkCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setBenchmarkTab(cat.id)}
                  className={`px-4 py-1.5 rounded text-xs font-semibold transition-all ${
                    cat.id === benchmarkTab
                      ? "bg-brand-primary text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Legend & Context */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 leading-tight">{activeBenchmark.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                By co-locating computing resources and compiling shaders natively, our infrastructure records significant leaps in hardware density.
              </p>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-500 text-xs shadow-inner">
                * Tests conducted over 1,000 parallel threads in multiple edge routing regions.
              </div>
            </div>

            {/* Custom Bar Chart Graphic */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenchmark.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {activeBenchmark.bars.map((bar, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-700">{bar.name}</span>
                        <span className="font-mono font-bold text-brand-primary">{bar.value}%</span>
                      </div>
                      <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden border border-slate-300 shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${bar.value}%` }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                          className={`h-full rounded-full ${bar.color} relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:16px_16px] animate-[pulse_2s_linear_infinite]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
