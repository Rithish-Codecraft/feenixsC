"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Cpu, Network, 
  Terminal, FileText, ChevronRight, Activity 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      {/* Background Gradients and Tech Grid */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-emerald-900/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-teal-900/5 blur-[150px] pointer-events-none z-0" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-105/80 border border-slate-200 text-xs text-brand-primary font-semibold tracking-wider uppercase mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
          </span>
          <span>Project Nexus Training Active</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-5xl"
        >
          Operating at the Scientific Frontier of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-emerald-600 text-glow">
            Distributed AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10"
        >
          We build open neural architectures, robust edge node grids, and quantum-ready algorithms designed for secure collaborative research.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link
            href="/contact"
            className="flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-brand-primary text-white font-semibold hover:shadow-[0_0_25px_rgba(45,106,79,0.3)] transition-all duration-300 group"
          >
            <span>Partner with Us</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/research"
            className="flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
          >
            <span>Read Research Papers</span>
          </Link>
        </motion.div>

        {/* Dashboard Preview Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full max-w-5xl rounded-2xl overflow-hidden glassmorphism border border-slate-200 shadow-md relative"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-slate-100 border-b border-slate-200">
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-slate-500 font-mono">feenixs.node.telemetry {"//"} active-instance</span>
            <div className="w-12" />
          </div>
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/70">
            {/* Telemetry card 1 */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Nexus Global Compute</span>
                <Network className="h-5 w-5 text-brand-primary animate-pulse" />
              </div>
              <div className="space-y-1 text-left">
                <span className="text-3xl font-bold font-mono text-brand-primary">4,812 TFLOPS</span>
                <p className="text-xs text-emerald-600 flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 animate-ping" />
                  +12.4% Active Node Growth
                </p>
              </div>
            </div>
            {/* Telemetry card 2 */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Carbon Deficit Offset</span>
                <Activity className="h-5 w-5 text-brand-primary" />
              </div>
              <div className="space-y-1 text-left">
                <span className="text-3xl font-bold font-mono text-brand-primary">98.4 metric t</span>
                <p className="text-xs text-slate-500">Solar grid co-located compute clusters</p>
              </div>
            </div>
            {/* Telemetry card 3 */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">API Gate Response</span>
                <Terminal className="h-5 w-5 text-brand-accent" />
              </div>
              <div className="space-y-1 text-left">
                <span className="text-3xl font-bold font-mono text-brand-accent">92ms p99</span>
                <p className="text-xs text-slate-500">Active regional edge routers</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-slate-50 border-y border-slate-200 relative z-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-extrabold font-mono text-slate-900 mb-2">50k+</div>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Active Compute Nodes</p>
          </div>
          <div>
            <div className="text-4xl font-extrabold font-mono text-brand-primary mb-2">32k+</div>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Monthly Citations</p>
          </div>
          <div>
            <div className="text-4xl font-extrabold font-mono text-slate-900 mb-2">12</div>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Open Neural Architectures</p>
          </div>
          <div>
            <div className="text-4xl font-extrabold font-mono text-brand-accent mb-2">0.05ms</div>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Consensus Latency</p>
          </div>
        </div>
      </section>

      {/* Research Showcase Section */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <div>
            <h2 className="text-3xl font-bold text-glow mb-4 text-slate-900">Latest Research Publications</h2>
            <p className="text-slate-650 max-w-xl">
              Discover peer-reviewed studies published by our scientists in collaboration with global academic foundations.
            </p>
          </div>
          <Link href="/research" className="flex items-center space-x-1 text-sm text-brand-primary hover:text-opacity-80 font-semibold group mt-4 md:mt-0">
            <span>Explore all publications</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Paper 1 */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl glassmorphism-card flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-left">
              <span className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-100 text-xs text-brand-primary font-mono font-bold">
                Distributed Consensus
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                Decentralized State Sync for Sparse Mixture-of-Experts Nodes
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed font-light">
                We introduce an optimistic replication framework enabling parallel gradient consensus across nodes with sub-50ms latency profiles.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs">
              <span className="text-slate-500">June 2026</span>
              <span className="text-brand-primary flex items-center font-semibold">
                DOI Verified <FileText className="h-3.5 w-3.5 ml-1" />
              </span>
            </div>
          </motion.div>

          {/* Paper 2 */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl glassmorphism-card flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-left">
              <span className="px-2.5 py-1 rounded bg-teal-50 border border-teal-100 text-xs text-brand-accent font-mono font-bold">
                NLP / Neural Nets
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                Spectral Projection of High-Dimensional Semantic Embeddings
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed font-light">
                By mapping deep weights to low-rank manifolds, we decrease tokenization latencies in transformer heads without losing logic capabilities.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs">
              <span className="text-slate-500">May 2026</span>
              <span className="text-brand-primary flex items-center font-semibold">
                DOI Verified <FileText className="h-3.5 w-3.5 ml-1" />
              </span>
            </div>
          </motion.div>

          {/* Paper 3 */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl glassmorphism-card flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-left">
              <span className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-100 text-xs text-brand-primary font-mono font-bold">
                Distributed Web
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                Green Computing: Solar Telemetry and Carbon-Deficit Scheduling
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed font-light">
                Proposing an algorithm that migrates non-urgent training tasks dynamically based on solar irradiance spikes on edge-node grids.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs">
              <span className="text-slate-500">April 2026</span>
              <span className="text-brand-primary flex items-center font-semibold">
                DOI Verified <FileText className="h-3.5 w-3.5 ml-1" />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack CTA Banner */}
      <section className="relative z-10 py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-bold text-slate-900 text-glow">The Feenixs Engineering Paradigm</h2>
            <p className="text-slate-600 leading-relaxed font-light">
              We build custom runtime layers, high-density vectorized storage adapters, and robust data protection firewalls ensuring complete model safety. Explore our benchmarks.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Cpu className="h-5 w-5 text-brand-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Neural Computing</h4>
                  <p className="text-xs text-slate-500">Custom dynamic execution kernels</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Network className="h-5 w-5 text-brand-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Global Node Network</h4>
                  <p className="text-xs text-slate-500">P2P distributed mesh topology</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link href="/technology" className="inline-flex items-center space-x-2 text-sm text-brand-primary hover:text-opacity-80 font-semibold group">
                <span>Inspect our Tech Stack</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm font-mono text-xs text-slate-700 overflow-x-auto space-y-4 text-left">
            <div className="flex items-center space-x-2 text-slate-400 border-b border-slate-100 pb-3">
              <Terminal className="h-4 w-4" />
              <span>nexus_client_setup.py</span>
            </div>
            <pre className="text-brand-primary"><code>{`import feenixs as fx

# Initialize secure node handshake
client = fx.NodeClient(
    api_key="fx_live_09x...",
    topology="distributed-mesh"
)

# Listen to local training workloads
node = client.handshake(solar_co_locate=True)
print(f"Node established: {node.id} on solar grid.")

# Active training stream telemetry listener
node.listen_telemetry(callback=lambda metrics: {
    "loss": metrics.loss,
    "efficiency": metrics.gflop_per_watt
})`}</code></pre>
          </div>
        </div>
      </section>

      {/* Collaboration Call to Action */}
      <section className="relative z-10 py-24 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-slate-200 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow text-slate-900">Start a Research Collaboration</h2>
          <p className="text-slate-700 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-light">
            Are you an enterprise customer needing custom AI architectures, or a research center wanting to participate in sparse training? Get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-brand-primary text-white font-bold hover:bg-opacity-90 transition-all shadow-md"
            >
              Contact Engineering
            </Link>
            <Link
              href="/careers"
              className="px-8 py-4 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold transition-colors"
            >
              Join Our Global Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
