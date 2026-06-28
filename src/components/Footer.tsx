"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/icon.png" alt="Feenixs Icon" width={24} height={24} className="h-6 w-6 object-contain animate-pulse" />
              <span className="text-xl font-bold tracking-tight text-slate-900 text-glow">Feenixs</span>
            </Link>
            <p className="text-slate-650 text-sm max-w-sm leading-relaxed">
              Feenixs operates at the intersection of artificial intelligence research, distributed systems engineering, and open scientific collaboration. Founded in 2024.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-brand-primary bg-white border border-slate-200 rounded-lg hover:border-brand-primary/50 transition-colors flex items-center justify-center" aria-label="Github">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.086 1.837 1.237 1.837 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.803 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.285c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-brand-primary bg-white border border-slate-200 rounded-lg hover:border-brand-primary/50 transition-colors flex items-center justify-center" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-brand-primary bg-white border border-slate-200 rounded-lg hover:border-brand-primary/50 transition-colors flex items-center justify-center" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-brand-primary bg-white border border-slate-200 rounded-lg hover:border-brand-primary/50 transition-colors flex items-center justify-center" aria-label="Discord">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0c-.172-.393-.412-.875-.63-1.25a.079.079 0 0 0-.078-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Sitemap Columns */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/technology" className="text-slate-650 hover:text-brand-primary text-sm transition-colors">Neural Computing</Link>
              </li>
              <li>
                <Link href="/technology" className="text-slate-650 hover:text-brand-primary text-sm transition-colors">Node Network</Link>
              </li>
              <li>
                <Link href="/technology" className="text-slate-650 hover:text-brand-primary text-sm transition-colors">Vector Engine</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase mb-4">Research</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/research" className="text-slate-650 hover:text-brand-primary text-sm transition-colors">Papers & Artifacts</Link>
              </li>
              <li>
                <Link href="/research/experiments" className="text-slate-650 hover:text-brand-primary text-sm transition-colors">Active Dashboards</Link>
              </li>
              <li>
                <Link href="/research" className="text-slate-650 hover:text-brand-primary text-sm transition-colors">Open Datasets</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">Stay Informed</h3>
            <p className="text-slate-650 text-sm leading-relaxed">
              Get the latest updates on peer reviews, papers, and AI compute telemetry.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="researcher@institute.edu"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-primary w-full"
              />
              <button
                type="submit"
                disabled={subscribed}
                className={`px-4 py-2 text-sm rounded-lg flex items-center justify-center space-x-2 font-medium transition-all ${
                  subscribed 
                    ? "bg-brand-success text-white" 
                    : "bg-brand-primary text-white hover:bg-opacity-95"
                }`}
              >
                {subscribed ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Joined</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Join</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Legal and Copyright */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Feenixs Inc. All rights reserved. Founded in India, globally distributed.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-slate-500 hover:text-slate-800 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-800 text-xs transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="text-slate-500 hover:text-slate-800 text-xs transition-colors">Accessibility Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
