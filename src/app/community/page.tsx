"use client";

import React, { useState } from "react";
import { Calendar, Award, MessageSquare, ArrowUpRight, Zap, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const leaderboardData = [
  { rank: 1, node: "node_cluster_ap_south_89", country: "India 🇮🇳", uptime: "99.98%", power: "1,240 TFLOPS" },
  { rank: 2, node: "node_solar_us_west_12", country: "United States 🇺🇸", uptime: "99.92%", power: "942 TFLOPS" },
  { rank: 3, node: "node_wind_eu_central_4", country: "Germany 🇩🇪", uptime: "99.88%", power: "710 TFLOPS" },
  { rank: 4, node: "node_hydro_la_east_32", country: "Brazil 🇧🇷", uptime: "99.79%", power: "605 TFLOPS" }
];

const scheduledEvents = [
  { date: "July 8, 2026", title: "Decentralized Sparse State Sync Meeting", time: "14:00 UTC", desc: "Reviewing optimistic weight projection convergence parameters under simulated packet drop." },
  { date: "July 22, 2026", title: "Kyber Cryptographic Parameter Audit", time: "16:00 UTC", desc: "Discussion on post-quantum secure handshakes across multi-region server nodes." }
];

export default function Community() {
  const [leaderboard] = useState(leaderboardData);
  const [events] = useState(scheduledEvents);

  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      {/* Background visual templates */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-100 text-xs font-mono text-brand-primary font-bold tracking-wide uppercase">
            The Collective
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 text-glow mt-2">
            Decentralized Scientific Alliance
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Collaborate on open AI architectures, audit consensus algorithms, and register solar-connected nodes on the edge grid.
          </p>
        </div>

        {/* Discord / Invite CTA card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 mb-16 shadow-sm">
          <div className="space-y-3 text-left">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
              <MessageSquare className="h-6 w-6 text-brand-primary mr-3 animate-pulse" />
              <span>Connect on Discord Gateway</span>
            </h2>
            <p className="text-slate-650 text-sm max-w-xl font-light">
              Join 5,482 active researchers and systems architects coordinating sparse neural training benchmarks in our open forums.
            </p>
          </div>
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-brand-primary text-white font-bold text-sm hover:bg-opacity-95 transition-all flex items-center space-x-2 shrink-0 group shadow-sm"
          >
            <span>Launch Community Discord</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Leaderboard vs Events grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Node Leaderboard */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4 text-left">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-800">Node Contribution Leaderboard</h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Active telemetry computation capacity rankings</p>
                </div>
                <Award className="h-5 w-5 text-yellow-500" />
              </div>

              <div className="overflow-x-auto text-left">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-mono">
                      <th className="py-2">Rank</th>
                      <th className="py-2">Node Identifier</th>
                      <th className="py-2">Geography</th>
                      <th className="py-2">Uptime</th>
                      <th className="py-2 text-right">Throughput</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-light text-slate-700">
                    {leaderboard.map((item) => (
                      <tr key={item.rank} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 font-mono font-bold text-brand-primary">#{item.rank}</td>
                        <td className="py-3 font-mono truncate max-w-[120px]">{item.node}</td>
                        <td className="py-3">{item.country}</td>
                        <td className="py-3 font-mono">{item.uptime}</td>
                        <td className="py-3 font-mono text-right text-brand-primary font-semibold">{item.power}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200 text-[10px] text-slate-500 flex justify-between">
              <span>Updated: Real-time via Supabase</span>
              <span className="flex items-center text-brand-primary font-mono"><Zap className="h-3.5 w-3.5 mr-1" /> CONSENSUS MATCH</span>
            </div>
          </div>

          {/* Event Schedule Calendar */}
          <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-sm text-left">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-800">Upcoming Sync Events</h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Scheduled academic open meetings</p>
                </div>
                <Calendar className="h-5 w-5 text-brand-accent" />
              </div>

              <div className="space-y-4">
                {events.map((ev, index) => (
                  <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-mono font-semibold">
                      <span className="text-brand-primary">{ev.date}</span>
                      <span className="text-slate-500">{ev.time}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">{ev.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">{ev.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200 text-[10px] text-slate-600 flex items-start space-x-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
              <span>All sync meetings occur over open-source Jitsi routers and are completely public.</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
