"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, DollarSign, Upload, Check, X, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openPositions = [
  {
    id: "dist-systems-eng",
    title: "Distributed Systems Engineer (consensus)",
    department: "Engineering",
    location: "Remote (Global)",
    salary: "$120k - $160k",
    description: "Build low-latency replication controllers and synchronization consensus modules across consumer edge-node topologies.",
    requirements: ["Deep understanding of Go or Rust systems programming", "Experience with consensus protocols (Raft, Paxos, or custom p2p)", "Knowledge of network layers and TCP/UDP optimizations"]
  },
  {
    id: "ml-researcher-moe",
    title: "Machine Learning Researcher - Mixture-of-Experts",
    department: "Research",
    location: "Remote / India",
    salary: "$140k - $180k",
    description: "Refine low-rank adapter networks and sparse attention paths inside decentralized transformer models.",
    requirements: ["PhD or equivalent research history in deep learning", "Familiarity with sparse attention and adapter routing mechanics", "Strong PyTorch and custom CUDA kernel capabilities"]
  },
  {
    id: "devops-scheduler",
    title: "DevOps Engineer - GPU Cluster Schedulers",
    department: "Engineering",
    location: "Remote",
    salary: "$110k - $140k",
    description: "Coordinate dynamic carbon-offset workloads across globally distributed solar co-located clusters.",
    requirements: ["Strong experience with Kubernetes and custom CRDs", "Familiarity with GPU telemetry monitoring (Prometheus, NVML)", "Python scripting and automation tooling expertise"]
  }
];

export default function Careers() {
  const [positions] = useState(openPositions);
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLoc, setSelectedLoc] = useState("All");
  
  // Modal application form state
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  
  // Simulated file upload states
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const selectedJob = positions.find(j => j.id === activeJobId);

  // Filters
  const filteredJobs = positions.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesLoc = selectedLoc === "All" || 
      (selectedLoc === "Remote" && job.location.includes("Remote")) ||
      (selectedLoc === "India" && job.location.includes("India"));
    return matchesDept && matchesLoc;
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate file upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 20;
        });
      }, 100);
    }
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !uploadedFile) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/v1/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobId: activeJobId,
          fullName,
          email,
          fileName: uploadedFile.name,
          coverLetter
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          // Reset modal states
          setSubmitSuccess(false);
          setActiveJobId(null);
          setFullName("");
          setEmail("");
          setCoverLetter("");
          setUploadedFile(null);
          setUploadProgress(0);
        }, 3000);
      }
    } catch (err) {
      console.error("Application post failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Page header title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 text-glow">
            Join the Research Frontier
          </h1>
          <p className="text-lg text-slate-655 leading-relaxed">
            We are looking for elite systems programmers, cryptography architects, and compiler researchers to join our global remote workforce.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-2xl mx-auto shadow-sm">
          {/* Department selector */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase font-semibold text-slate-500 block">Department</span>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="bg-white border border-slate-300 text-xs text-slate-800 rounded px-3 py-1.5 focus:outline-none focus:border-brand-primary font-semibold"
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Research">Research</option>
            </select>
          </div>
          {/* Location selector */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase font-semibold text-slate-500 block">Geography</span>
            <select
              value={selectedLoc}
              onChange={(e) => setSelectedLoc(e.target.value)}
              className="bg-white border border-slate-300 text-xs text-slate-800 rounded px-3 py-1.5 focus:outline-none focus:border-brand-primary font-semibold"
            >
              <option value="All">All Locations</option>
              <option value="Remote">Remote</option>
              <option value="India">India</option>
            </select>
          </div>
        </div>

        {/* Positions catalog list */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-350 shadow-sm transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-3 text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-100 text-[10px] font-mono text-brand-primary font-bold tracking-wide uppercase">
                      {job.department}
                    </span>
                    <span className="flex items-center text-xs text-slate-500 font-medium">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      {job.location}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{job.title}</h2>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">{job.description}</p>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-150">
                  <span className="text-sm font-mono font-bold text-slate-800 flex items-center">
                    <DollarSign className="h-4 w-4 text-brand-primary" />
                    {job.salary}
                  </span>
                  <button
                    onClick={() => setActiveJobId(job.id)}
                    className="px-5 py-2.5 rounded-lg bg-brand-primary text-white text-xs font-bold hover:bg-opacity-95 transition-all shadow-sm"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 italic">
              No open roles fit selected filter parameters. Re-adjust filters.
            </div>
          )}
        </div>
      </main>

      {/* Slide-In / Overlaid Application Modal Form */}
      <AnimatePresence>
        {activeJobId && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveJobId(null)}
              className="absolute inset-0 bg-slate-950"
            />
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 md:p-8 space-y-6 shadow-xl z-10 text-left"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono uppercase font-semibold text-brand-primary font-bold">Application Form</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedJob.title}</h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">{selectedJob.location} {"//"} {selectedJob.department}</p>
                </div>
                <button
                  onClick={() => setActiveJobId(null)}
                  className="p-1.5 rounded hover:bg-slate-100 text-slate-500 hover:text-slate-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {submitSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center font-mono">
                  <div className="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-brand-primary animate-bounce">
                    <Check className="h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Application Submitted!</h4>
                  <p className="text-xs text-slate-500">Intake server logged metrics. We will reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase font-semibold text-slate-500">Full Name</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Dr. Jordan Miller"
                        className="w-full px-3 py-2 bg-white border border-slate-350 rounded text-slate-900 focus:outline-none focus:border-brand-primary font-semibold"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase font-semibold text-slate-500">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jordan.miller@institute.edu"
                        className="w-full px-3 py-2 bg-white border border-slate-350 rounded text-slate-900 focus:outline-none focus:border-brand-primary font-mono"
                      />
                    </div>
                  </div>

                  {/* Resume upload */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase font-semibold text-slate-500 block">CV / Resume File</label>
                    <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-slate-450 transition-colors bg-slate-50">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="space-y-2 text-slate-600">
                        <Upload className="h-6 w-6 mx-auto text-slate-500" />
                        <p className="font-semibold text-[11px]">Click to upload or drag files here</p>
                        <p className="text-[9px]">PDF, DOCX up to 10MB maximum limit.</p>
                      </div>
                    </div>

                    {/* Progress indicator */}
                    {uploadedFile && (
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-brand-primary shrink-0" />
                        <div className="flex-grow space-y-1">
                          <div className="flex justify-between font-mono text-[9px] text-slate-500">
                            <span className="truncate max-w-[150px]">{uploadedFile.name}</span>
                            <span>{uploadProgress}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-primary transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase font-semibold text-slate-500">Cover Letter (Optional)</label>
                    <textarea
                      rows={4}
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      placeholder="Brief summary of research experience, github handles, published papers, or interest in distributed compute topologies..."
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-primary resize-none font-light leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isUploading}
                    className="w-full py-3 rounded-xl bg-brand-primary text-white font-bold text-sm hover:bg-opacity-95 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Uploading Credentials..." : "Submit Application"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
