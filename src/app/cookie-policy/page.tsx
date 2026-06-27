"use client";

import React from "react";
import { ShieldAlert, Cpu, EyeOff } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-glow">Cookie Policy</h1>
          <p className="text-slate-500 text-sm font-mono">Plausible Cookie-Free Analytics Framework</p>
        </div>

        {/* Content Body */}
        <div className="p-8 rounded-2xl border border-slate-200 bg-white space-y-6 text-sm text-slate-700 leading-relaxed font-light text-left shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide flex items-center">
            <EyeOff className="h-5 w-5 text-brand-primary mr-2" /> {"//"} 1. Zero Cookie Tracking Philosophy
          </h3>
          <p>
            Unlike typical corporate SaaS platforms, Feenixs respects user privacy limits. We run no invasive ad tracker scripts or persistent third-party marketing cookies. Our platform analytics are handled via a self-hosted instance of Plausible, which uses data hash keys to estimate unique visits without saving client cookies.
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide flex items-center">
            <Cpu className="h-5 w-5 text-brand-primary mr-2" /> {"//"} 2. Local Storage Variables
          </h3>
          <p>
            To optimize dashboard load times and support interactive try-it states, our application sets minimal temporary keys inside your browser&apos;s local storage:
          </p>
          
          <div className="space-y-3 font-mono text-xs text-brand-primary bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-inner">
            <div className="flex justify-between border-b border-slate-200 pb-2 text-slate-500">
              <span>Storage Key Name</span>
              <span>Primary Functional Purpose</span>
            </div>
            <div className="flex justify-between">
              <span>feenixs_theme_preference</span>
              <span className="text-slate-700">Determines Dark/Light stylesheet state.</span>
            </div>
            <div className="flex justify-between">
              <span>feenixs_telemetry_polling</span>
              <span className="text-slate-700">Tracks active poll state for telemetry graphs.</span>
            </div>
            <div className="flex justify-between">
              <span>feenixs_api_explorer_history</span>
              <span className="text-slate-700">Caches last executed endpoints inside sandbox.</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wide flex items-center">
            <ShieldAlert className="h-5 w-5 text-brand-primary mr-2" /> {"//"} 3. Disabling Local Variables
          </h3>
          <p>
            You can restrict your browser from caching local variables by adjusting your local privacy options. Be aware that blocking local storage will disable the interactive try-it developer portal API client features.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
