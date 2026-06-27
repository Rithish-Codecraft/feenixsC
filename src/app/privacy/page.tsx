"use client";

import React from "react";
import { Shield, EyeOff, Lock, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-glow">Privacy Policy</h1>
          <p className="text-slate-500 text-sm font-mono">Last modified: June 2026</p>
        </div>

        {/* Introduction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start space-x-3 shadow-sm">
            <EyeOff className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase font-mono mb-1">Zero Tracker Cookies</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                We run privacy-compliant Plausible analytics without cookies or IP persistence.
              </p>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start space-x-3 shadow-sm">
            <Lock className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase font-mono mb-1">AES-255 Storage</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                All lead info and uploaded credentials undergo database encryption at rest.
              </p>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start space-x-3 shadow-sm">
            <Shield className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase font-mono mb-1">GDPR / CCPA Compliant</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Complete data erasure rights supported under European Union privacy guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 rounded-2xl border border-slate-200 bg-white space-y-6 text-sm text-slate-700 leading-relaxed font-light text-left shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide">{"//"} Data Processing Principles</h3>
          <p>
            Feenixs operates under strict principles of data minimization. We collect only what is necessary to validate research collaboration requests and candidates applying through our careers framework.
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide">{"//"} 1. Information We Collect</h3>
          <p>
            When utilizing our platform, we capture the following data vectors:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Lead Registrations:</strong> Name, Email, Organization, Budget parameters, and specific research criteria parameters.</li>
            <li><strong>Job Applications:</strong> Contact details, CV uploads, cover letter text notes.</li>
            <li><strong>API Access:</strong> Standard edge gateway routing limits, usage bandwidth, and rate limit logs.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide">{"//"} 2. Data Persistence & Erasure</h3>
          <p>
            Data persists securely inside our Supabase PostgreSQL instance. You hold absolute rights to query, download, or delete your credentials at any point. To initiate an erasure request under GDPR guidelines, please send an authorized email payload to <code className="text-brand-primary font-mono font-bold">privacy@feenixs.com</code>.
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide">{"//"} 3. Compliance Framework</h3>
          <div className="space-y-2">
            {[
              "Granular Cookie Consent opt-in triggers",
              "Standard security header controls active (CSP, HSTS, DNSSEC)",
              "AWS S3 bucket uploads encrypted with KMS key rotation parameters"
            ].map((rule, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
