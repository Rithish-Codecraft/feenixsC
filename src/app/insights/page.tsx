"use client";

import React, { useState } from "react";
import { Search, BookOpen, Clock, Calendar, ChevronRight, Check, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: "unifying-distributed-edge",
    title: "Unifying Distributed Edge Nodes for Sparse MoE Architectures",
    excerpt: "Exploring the challenges and synchronization primitives when coordinating training consensus across 50,000 unmanaged global consumer nodes.",
    category: "Engineering",
    readTime: "8 min read",
    date: "June 24, 2026",
    author: "R. Rithish",
    tags: ["Distributed Systems", "Sparsity", "MoE"]
  },
  {
    id: "open-scientific-collaboration",
    title: "The Future of Open Scientific Collaboration in Machine Learning",
    excerpt: "Why institutional gatekeeping harms scientific progress, and how open telemetry databases accelerate peer replication.",
    category: "Research",
    readTime: "5 min read",
    date: "June 10, 2026",
    author: "Dr. Elena Rostova",
    tags: ["Open Science", "Academic Partnerships"]
  },
  {
    id: "cryptographic-weight-safeguards",
    title: "Next-Gen Cryptographic Safeguards for Model Checkpoint Integrity",
    excerpt: "Deploying Zero-Knowledge signatures and Kyber parameter boundaries to protect neural weights against unauthorized tampering.",
    category: "Security",
    readTime: "12 min read",
    date: "May 28, 2026",
    author: "J. Chen",
    tags: ["Cryptography", "Key Exchange", "Security"]
  }
];

export default function Insights() {
  const [posts] = useState(blogPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  
  // Newsletter subscription
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Extract all unique tags
  const allTags = ["All", ...Array.from(new Set(posts.flatMap(p => p.tags)))];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 text-glow">
            Insights & Engineering Blog
          </h1>
          <p className="text-lg text-slate-655 leading-relaxed">
            Latest announcements, technical briefs, and scientific commentary written by the Feenixs core dev cell.
          </p>
        </div>

        {/* Layout: Articles vs Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article List */}
          <div className="lg:col-span-8 space-y-8">
            {/* Search and Tag filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-left">
              <div className="relative flex-grow">
                <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-350 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                />
              </div>
              <div className="flex flex-wrap gap-1.5 items-center">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold border transition-all ${
                      selectedTag === tag
                        ? "bg-brand-primary border-brand-primary text-white shadow-sm"
                        : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {tag.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles feed */}
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <article key={post.id} className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between space-y-6 group hover:border-slate-350 shadow-sm transition-colors text-left">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-xs text-slate-500 font-mono">
                      <span className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-100 text-brand-primary font-bold">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-600 text-sm leading-relaxed font-light">{post.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-500 italic">Written by: {post.author}</span>
                    <button className="text-xs font-semibold text-brand-primary hover:text-opacity-80 flex items-center space-x-1">
                      <span>Read Full Article</span>
                      <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="p-12 text-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 italic">
                No matching articles found. Clear queries to retry.
              </div>
            )}
          </div>

          {/* Sidebar Newsletter & About Callouts */}
          <div className="lg:col-span-4 space-y-8 text-left">
            {/* Newsletter widget */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <BookOpen className="h-6 w-6 text-brand-primary animate-pulse" />
              <h3 className="text-lg font-bold text-slate-900 font-mono">Subscribe to Tech Briefs</h3>
              <p className="text-xs text-slate-650 leading-relaxed font-light">
                Join our research distribution cell. Receive markdown preprints and training node updates directly in your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="researcher@institute.edu"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-350 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-primary font-mono"
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className={`w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-sm ${
                    isSubscribed
                      ? "bg-brand-success text-white"
                      : "bg-brand-primary text-white hover:bg-opacity-95"
                  }`}
                >
                  {isSubscribed ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Subscription Confirmed</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Join Dispatch List</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Quick stats box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-250 space-y-4 shadow-sm">
              <h4 className="text-xs font-mono uppercase font-semibold text-slate-500">Editorial Parameters</h4>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Frequency</span>
                  <span className="text-slate-900 font-medium">Bi-weekly briefs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Subscribers</span>
                  <span className="text-slate-900 font-medium">4,821 active researchers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Classification</span>
                  <span className="text-brand-primary font-mono font-bold">Open Access (CC-BY 4.0)</span>
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
