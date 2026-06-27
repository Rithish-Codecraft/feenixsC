"use client";

import React from "react";
import { Terminal, Scale, AlertOctagon, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-glow">Terms of Service</h1>
          <p className="text-slate-500 text-sm font-mono">Last modified: June 2026</p>
        </div>

        {/* Content Body */}
        <div className="p-8 rounded-2xl border border-slate-200 bg-white space-y-6 text-sm text-slate-700 leading-relaxed font-light text-left shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide flex items-center">
            <Scale className="h-5 w-5 text-brand-primary mr-2" /> {"//"} 1. Academic & Research Licensing
          </h3>
          <p>
            The software, architectural codebooks, and telemetry feeds made available on the Feenixs platform are licensed under the standard CC-BY 4.0 or Apache 2.0 open-source terms. Commercial integrations of our weights models must adhere strictly to API licensing bounds.
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide flex items-center">
            <Terminal className="h-5 w-5 text-brand-primary mr-2" /> {"//"} 2. Distributed Consensus & Node Contribution
          </h3>
          <p>
            By connecting computational nodes to the Feenixs network, you agree to execute our telemetry scripts faithfully. Tampering with gradient evaluations, returning fabricated training parameters, or poisoning consensus streams represents a breach of these terms and will trigger network banishment protocols.
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide flex items-center">
            <AlertOctagon className="h-5 w-5 text-brand-primary mr-2" /> {"//"} 3. API Fair Use & Rate Boundaries
          </h3>
          <p>
            API access tokens are subject to rate-limiting matrices (as specified in PDR Appendix C). Flooding endpoints, performing dictionary attacks on user submission schemas, or executing scraping pipelines that layout-thrash edge nodes represents grounds for immediate IP suspension.
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide flex items-center">
            <HelpCircle className="h-5 w-5 text-brand-primary mr-2" /> {"//"} 4. Liability Limits
          </h3>
          <p>
            Feenixs serves neural telemetry and open preprints on an &quot;AS IS&quot; baseline. We guarantee no uptime SLAs, cryptographic invulnerability, or compile stability for edge node workloads run inside the sandbox.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
