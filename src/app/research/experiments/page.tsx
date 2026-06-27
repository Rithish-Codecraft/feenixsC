"use client";

import React, { useState, useEffect } from "react";
import { Activity, Cpu, RefreshCw, Layers, ShieldCheck, Terminal, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Local interface for polling metrics
interface TelemetryMetrics {
  epoch: number;
  loss: number;
  activeNodes: number;
  gpuUtilization: number;
  carbonOffset: number; // metric tons
  temperature: number; // average Celsius
}

export default function Experiments() {
  const [metrics, setMetrics] = useState<TelemetryMetrics>({
    epoch: 124,
    loss: 1.482,
    activeNodes: 48922,
    gpuUtilization: 94.2,
    carbonOffset: 98.42,
    temperature: 42.1
  });
  
  const [lossHistory, setLossHistory] = useState<number[]>([1.95, 1.82, 1.74, 1.68, 1.62, 1.57, 1.52, 1.482]);
  const [isPolling, setIsPolling] = useState(true);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[17:42:01] HANDSHAKE: Node-Cluster AP-South established.",
    "[17:42:15] OPTIMIZER: sparse-MoE dynamic projection initialized.",
    "[17:43:00] SCHEDULER: solar index 0.82; migrating workloads to Central India.",
    "[17:44:10] CONVERGENCE: Checkpoint-124 saved successfully."
  ]);

  useEffect(() => {
    if (!isPolling) return;

    const interval = setInterval(async () => {
      try {
        // Fetch from local mock API
        const res = await fetch("/api/v1/experiments/nexus");
        if (res.ok) {
          const data: TelemetryMetrics = await res.json();
          setMetrics(data);
          setLossHistory((prev) => {
            const next = [...prev, data.loss];
            if (next.length > 12) next.shift(); // keep last 12
            return next;
          });
          
          // Generate active logs
          const timestamp = new Date().toLocaleTimeString("en-US", { hour12: false });
          const newLogs = [
            `[${timestamp}] NODES: consensus verification from ${data.activeNodes.toLocaleString()} clients.`,
            `[${timestamp}] COMPUTE: GPU average load stable at ${data.gpuUtilization.toFixed(1)}%.`,
            `[${timestamp}] GRID: Solar deficit migration running; Temp ${data.temperature.toFixed(1)}°C.`
          ];
          setTerminalLogs((prev) => {
            const next = [...prev, newLogs[Math.floor(Math.random() * newLogs.length)]];
            if (next.length > 8) next.shift();
            return next;
          });
        }
      } catch (err) {
        console.error("Telemetry poll failed", err);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPolling]);

  // SVG Chart Dimensions
  const chartWidth = 500;
  const chartHeight = 200;
  const padding = 30;

  // Render SVG path coordinates based on lossHistory
  const getSvgPath = () => {
    if (lossHistory.length < 2) return "";
    const minVal = 1.0;
    const maxVal = 2.2;
    const valRange = maxVal - minVal;
    
    return lossHistory.map((val, index) => {
      const x = padding + (index / (lossHistory.length - 1)) * (chartWidth - padding * 2);
      // Invert Y coordinate since SVG (0,0) is top-left
      const y = chartHeight - padding - ((val - minVal) / valRange) * (chartHeight - padding * 2);
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    }).join(" ");
  };

  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[30%] -right-[15%] w-[70%] h-[70%] rounded-full bg-emerald-900/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute -bottom-[30%] -left-[15%] w-[70%] h-[70%] rounded-full bg-teal-900/5 blur-[130px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-slate-200 pb-8">
          <div className="text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 text-glow mb-4">
              Project Nexus Telemetry
            </h1>
            <p className="text-slate-600 max-w-2xl leading-relaxed text-sm font-light">
              Live training logs and green computing offsets for our Mixture-of-Experts (MoE) neural architecture framework.
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button
              onClick={() => setIsPolling(!isPolling)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold flex items-center space-x-2 border transition-all ${
                isPolling 
                  ? "bg-emerald-50 border-brand-primary/30 text-brand-primary shadow-sm" 
                  : "bg-white border-slate-200 text-slate-500 hover:text-slate-800"
              }`}
            >
              <RefreshCw className={`h-4 w-4 ${isPolling ? "animate-spin" : ""}`} />
              <span>{isPolling ? "LIVE TELEMETRY POLLING" : "TELEMETRY PAUSED"}</span>
            </button>
          </div>
        </div>

        {/* Dashboard Grid metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
            <div className="flex justify-between items-center text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider font-mono">Current Epoch</span>
              <Layers className="h-5 w-5 text-brand-primary" />
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-extrabold font-mono text-slate-900">Epoch {metrics.epoch}</span>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">120k Steps Complete</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
            <div className="flex justify-between items-center text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider font-mono">Training Loss</span>
              <Activity className="h-5 w-5 text-brand-primary animate-pulse" />
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-extrabold font-mono text-brand-primary">{metrics.loss.toFixed(4)}</span>
              <p className="text-[10px] text-emerald-600 uppercase tracking-wider font-semibold">Converging steadily</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
            <div className="flex justify-between items-center text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider font-mono">Global Edge Nodes</span>
              <Cpu className="h-5 w-5 text-brand-accent" />
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-extrabold font-mono text-slate-900">{metrics.activeNodes.toLocaleString()}</span>
              <p className="text-[10px] text-emerald-600 uppercase tracking-wider font-semibold">99.8% consensus rate</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
            <div className="flex justify-between items-center text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider font-mono">Green Carbon Offset</span>
              <ShieldCheck className="h-5 w-5 text-brand-primary" />
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-extrabold font-mono text-brand-primary">{metrics.carbonOffset.toFixed(2)} t</span>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Co-located Solar networks</p>
            </div>
          </div>
        </div>

        {/* Charts & System console logs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* SVG training chart */}
          <div className="lg:col-span-2 p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-sm text-left">
            <div className="mb-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-800">Epoch Loss Vector Chart</h3>
              <p className="text-[10px] text-slate-550 uppercase tracking-wider font-semibold">Declining cross-entropy validation loss</p>
            </div>
            <div className="relative w-full h-[220px] bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center p-4">
              {/* Dynamic SVG Line */}
              <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="text-brand-primary font-mono text-[10px]">
                {/* Horizontal gridlines */}
                <line x1={padding} y1={padding} x2={chartWidth - padding} y2={padding} stroke="#e2e8f0" strokeDasharray="4 4" />
                <line x1={padding} y1={chartHeight / 2} x2={chartWidth - padding} y2={chartHeight / 2} stroke="#e2e8f0" strokeDasharray="4 4" />
                <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding} y2={chartHeight - padding} stroke="#cbd5e1" />
                
                {/* Labels */}
                <text x={padding - 5} y={padding + 3} textAnchor="end" fill="#475569">2.2</text>
                <text x={padding - 5} y={chartHeight / 2 + 3} textAnchor="end" fill="#475569">1.6</text>
                <text x={padding - 5} y={chartHeight - padding + 3} textAnchor="end" fill="#475569">1.0</text>
                
                <path
                  d={getSvgPath()}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transition-all duration-500"
                />

                {/* Pulsing endpoint */}
                {lossHistory.length > 0 && (
                  <circle
                    cx={padding + (lossHistory.length - 1) / (lossHistory.length - 1) * (chartWidth - padding * 2)}
                    cy={chartHeight - padding - ((lossHistory[lossHistory.length - 1] - 1.0) / 1.2) * (chartHeight - padding * 2)}
                    r="4"
                    fill="#2D6A4F"
                    className="animate-ping"
                  />
                )}
              </svg>
            </div>
          </div>

          {/* System Console Logs */}
          <div className="lg:col-span-1 p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between h-[300px] lg:h-auto shadow-sm text-left">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-800">Node Cluster Stream</h3>
                <Terminal className="h-4 w-4 text-brand-primary" />
              </div>
              <div className="space-y-3 font-mono text-xs text-brand-primary leading-relaxed overflow-y-auto max-h-[220px]">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-slate-400 select-none">&gt;&gt;</span>
                    <span className="break-all">{log}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[10px] text-slate-500 flex justify-between">
              <span>Host node: primary_india</span>
              <span>WAF Secure</span>
            </div>
          </div>
        </div>

        {/* Technical architecture constraints callout */}
        <div className="p-6 rounded-2xl border border-amber-500/30 bg-amber-50/50 flex items-start space-x-4 text-left">
          <AlertTriangle className="h-6 w-6 text-brand-warning shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 text-sm">Carbon-Weighted Sync Constraints</h4>
            <p className="text-xs text-slate-700 leading-relaxed font-light">
              Feenixs node schedulers migrate sparsity weights dynamic consensus bounds based on green power profiles. Nodes relying strictly on fossil grid energy operate with throttled priorities during peak grid load, keeping overall emissions deficit to a absolute minimum.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
