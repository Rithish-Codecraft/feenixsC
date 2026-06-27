"use client";

import React from "react";
import { Check, ShieldAlert, Heart, Keyboard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-glow">Accessibility Statement</h1>
          <p className="text-slate-500 text-sm font-mono">WCAG 2.2 AA Strict Compliance Verification</p>
        </div>

        {/* Content Body */}
        <div className="p-8 rounded-2xl border border-slate-200 bg-white space-y-6 text-sm text-slate-700 leading-relaxed font-light text-left shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide flex items-center">
            <Heart className="h-5 w-5 text-brand-primary mr-2" /> {"//"} Commitment to Inclusion
          </h3>
          <p>
            At Feenixs, we believe scientific research must remain open and accessible to everyone. Our design system prioritizes visual clarity, semantic HTML layout mapping, and full keyboard-only capability to verify our platform can be navigated by researchers using assistive technology.
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide flex items-center">
            <Keyboard className="h-5 w-5 text-brand-primary mr-2" /> {"//"} Key Accessibility Implementations
          </h3>
          <p>
            We align our front-end builds with the WCAG 2.2 AA guidelines through the following architectural practices:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              "Contrast ratio ≥ 4.5:1 on Slate background layers",
              "Keyboard focus rings (2px cyan borders) visible on all tabs",
              "Proper ARIA labels on all modal and file upload inputs",
              "Skip-to-content links for non-mouse inputs",
              "Pre-merged fonts mapped with swap loading to block FOIT",
              "Flexible text scaling supporting Dynamic Type parameters"
            ].map((spec, index) => (
              <div key={index} className="flex items-start space-x-3 text-xs text-slate-650 bg-slate-50 p-3 rounded-lg border border-slate-200 shadow-inner">
                <Check className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                <span>{spec}</span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide flex items-center">
            <ShieldAlert className="h-5 w-5 text-brand-primary mr-2" /> {"//"} Reporting Obstacles
          </h3>
          <p>
            We perform automated axe-core audits inside our build cycles. If you encounter an accessibility block while using the telemetry client or Try-It API dashboard, please contact our dev team at <code className="text-brand-primary font-mono font-bold">a11y@feenixs.com</code>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
