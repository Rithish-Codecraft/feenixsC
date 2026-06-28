"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Mail, Building2, User, Wallet, Calendar, MessageSquare, Check, ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [domain, setDomain] = useState("Distributed Consensus");

  // Step 2 parameters
  const [budget, setBudget] = useState("Under $50k");
  const [timeline, setTimeline] = useState("Immediate");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [leadRefId, setLeadRefId] = useState("");

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && email && org) {
      setStep(2);
    }
  };

  const handleBackStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "93a0c7c7-dded-455e-a206-69d3908f430f",
          subject: "New Collaboration Lead from Feenixs Website",
          from_name: "Feenixs Website",
          name: fullName,
          email,
          org,
          domain,
          budget,
          timeline,
          message
        })
      });

      if (response.ok) {
        setLeadRefId(`lead_${Math.random().toString(36).substring(2, 9)}`);
        setSubmitSuccess(true);
      }
    } catch (err) {
      console.error("Lead submission failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to safely read json
  async function resJson(res: Response) {
    try {
      return await res.json();
    } catch {
      return {};
    }
  }

  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm relative text-left">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2 text-glow">Start a Research Collaboration</h1>
            <p className="text-slate-600 text-sm font-light">Submit partner requirements to connect with our core engineering cells.</p>
          </div>

          {/* Form Progress bar indicator */}
          <div className="flex justify-between items-center max-w-xs mx-auto mb-10 relative">
            <div className="absolute left-0 right-0 h-0.5 bg-slate-200 z-0" />
            <div 
              className="absolute left-0 h-0.5 bg-brand-primary z-0 transition-all duration-300"
              style={{ width: step === 2 ? "100%" : "0%" }}
            />
            {/* Step 1 marker */}
            <div className={`relative z-10 h-8 w-8 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all ${
              step >= 1 
                ? "bg-white border-brand-primary text-brand-primary shadow-sm" 
                : "bg-slate-50 border-slate-200 text-slate-400"
            }`}>
              1
            </div>
            {/* Step 2 marker */}
            <div className={`relative z-10 h-8 w-8 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all ${
              step >= 2 
                ? "bg-white border-brand-primary text-brand-primary shadow-sm" 
                : "bg-slate-50 border-slate-200 text-slate-400"
            }`}>
              2
            </div>
          </div>

          {/* Form container */}
          {submitSuccess ? (
            <div className="py-12 text-center font-mono space-y-4">
              <div className="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-250 flex items-center justify-center text-brand-primary mx-auto animate-bounce mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Collaboration Intent Logged</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Your partnership parameters were received successfully. Reference ID: <span className="text-brand-primary font-bold">{leadRefId}</span>
              </p>
              <p className="text-[10px] text-slate-500 max-w-sm mx-auto">
                Our operations coordinators will reviews metrics and alert appropriate channels in &lt; 24 hours.
              </p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.form
                  key="step-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  onSubmit={handleNextStep}
                  className="space-y-6 text-xs"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono font-semibold text-slate-500 flex items-center">
                        <User className="h-3.5 w-3.5 mr-1.5 text-slate-400" /> Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Dr. Jordan Miller"
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-primary font-semibold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono font-semibold text-slate-500 flex items-center">
                        <Mail className="h-3.5 w-3.5 mr-1.5 text-slate-400" /> Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jordan.miller@institute.edu"
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-primary font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono font-semibold text-slate-500 flex items-center">
                        <Building2 className="h-3.5 w-3.5 mr-1.5 text-slate-400" /> Organization Name
                      </label>
                      <input
                        type="text"
                        required
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="Academic Institute / Enterprise Corp"
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono font-semibold text-slate-500 block">Research Domain Vector</label>
                      <select
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-brand-primary font-semibold"
                      >
                        <option value="Distributed Consensus">Distributed Consensus</option>
                        <option value="NLP & Transformers">NLP & Transformers</option>
                        <option value="Green Computing">Green Computing</option>
                        <option value="Model Cryptography">Model Cryptography</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-brand-primary text-white font-bold text-sm flex items-center justify-center space-x-2 hover:bg-opacity-95 transition-all shadow-sm"
                  >
                    <span>Configure Specifics</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.form
                  key="step-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-xs"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono font-semibold text-slate-500 flex items-center">
                        <Wallet className="h-3.5 w-3.5 mr-1.5 text-slate-450" /> Collaboration Budget Tier
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-brand-primary font-semibold"
                      >
                        <option value="Under $50k">Under $50,000</option>
                        <option value="$50k - $200k">$50,000 - $200,000</option>
                        <option value="$200k - $500k">$200,000 - $500,000</option>
                        <option value="Over $500k">Over $500,000</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono font-semibold text-slate-500 flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1.5 text-slate-450" /> Project Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-brand-primary font-semibold"
                      >
                        <option value="Immediate">Immediate Launch (&lt; 1 month)</option>
                        <option value="Standard">Standard Execution (2-3 months)</option>
                        <option value="Long-term">Long-term R&D Alignment</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono font-semibold text-slate-500 flex items-center">
                      <MessageSquare className="h-3.5 w-3.5 mr-1.5 text-slate-450" /> Core Requirements Description
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify mathematical objectives, required node counts, validation protocols, or cloud cluster requirements..."
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-primary resize-none font-light leading-relaxed"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handleBackStep}
                      className="px-5 py-3.5 rounded-xl border border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-slate-650 hover:text-slate-850 flex items-center justify-center space-x-2 transition-all"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-grow py-3.5 rounded-xl bg-brand-primary text-white font-bold text-sm flex items-center justify-center space-x-2 hover:bg-opacity-95 transition-all shadow-sm"
                    >
                      {isSubmitting ? "Locking Handshake..." : "Transmit Partnership Payload"}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          )}

          {/* Form Security note */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-center text-[10px] text-slate-500 space-x-1 select-none">
            <ShieldCheck className="h-4 w-4 text-brand-primary" />
            <span>End-to-End TLS 1.3 encryption secured edge routing verified</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
