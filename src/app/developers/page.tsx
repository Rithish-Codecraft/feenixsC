"use client";

import React, { useState } from "react";
import { Terminal, Send, Check, Clipboard, RefreshCw, HelpCircle, Server } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const endpointOptions = [
  {
    path: "/api/v1/research/papers",
    method: "GET",
    description: "Retrieve a list of verified research publications.",
    params: { limit: "3", category: "Distributed Consensus" },
    sampleResponse: {
      status: "success",
      results: 3,
      data: [
        {
          id: "sparse-moe-consensus",
          title: "Decentralized State Sync for Sparse Mixture-of-Experts Nodes",
          category: "Distributed Consensus",
          doi: "10.48550/arXiv.2606.09112"
        }
      ]
    }
  },
  {
    path: "/api/v1/experiments/nexus",
    method: "GET",
    description: "Get active training telemetry from Project Nexus.",
    params: {},
    sampleResponse: {
      epoch: 124,
      loss: 1.4824,
      activeNodes: 48922,
      gpuUtilization: 94.2,
      carbonOffset: 98.42
    }
  },
  {
    path: "/api/v1/leads",
    method: "POST",
    description: "Register research partnerships or enterprise inquiries.",
    params: { name: "Quantum Corp", email: "partner@quantum.com", budget: "100k-500k", message: "Sparse MoE setup" },
    sampleResponse: {
      status: "success",
      message: "Lead intake registered successfully.",
      reference_id: "lead_9a8c2f1d4"
    }
  }
];

const sdkSnippets = {
  python: `import feenixs as fx

# Instantiate edge gateway client
client = fx.Client(api_key="fx_live_key")

# Fetch latest telemetry parameters
telemetry = client.get_telemetry()
print(f"Active Edge Nodes: {telemetry.active_nodes}")`,
  javascript: `import { FeenixsClient } from '@feenixs/sdk';

// Instantiate client
const client = new FeenixsClient({ apiKey: 'fx_live_key' });

// Listen to training logs
client.on('telemetry', (metrics) => {
  console.log('Current training loss:', metrics.loss);
});`,
  go: `package main

import (
	"context"
	"fmt"
	"github.com/feenixs/sdk-go"
)

func main() {
	client := sdk.NewClient("fx_live_key")
	metrics, _ := client.GetTelemetry(context.Background())
	fmt.Printf("GPU load: %f\\n", metrics.GpuLoad)
}`
};

export default function Developers() {
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState<"python" | "javascript" | "go">("python");
  const [copiedSdk, setCopiedSdk] = useState(false);
  
  // Interactive Try-It console states
  const [isLoading, setIsLoading] = useState(false);
  const [responseOutput, setResponseOutput] = useState<unknown>(null);
  const [inputs, setInputs] = useState<Record<string, string>>({});

  const endpoint = endpointOptions[selectedEndpointIndex];

  // Initialize input fields based on selected endpoint
  React.useEffect(() => {
    setInputs(endpoint.params as Record<string, string>);
    setResponseOutput(null);
  }, [selectedEndpointIndex, endpoint]);

  const handleInputChange = (key: string, val: string) => {
    setInputs((prev) => ({ ...prev, [key]: val }));
  };

  const handleTryIt = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate edge router network delays
    setTimeout(() => {
      // In POST leads, we echo back parameters
      if (endpoint.path === "/api/v1/leads") {
        setResponseOutput({
          status: "success",
          message: "Secure lead intake registered successfully.",
          reference_id: `lead_${Math.random().toString(36).substring(2, 11)}`,
          echo: inputs
        });
      } else {
        setResponseOutput(endpoint.sampleResponse);
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute -top-[30%] -left-[15%] w-[70%] h-[70%] rounded-full bg-emerald-900/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute -bottom-[30%] -right-[15%] w-[70%] h-[70%] rounded-full bg-teal-900/5 blur-[130px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Page Title header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 text-glow">
            Developer Integration Portal
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Verify training datasets, download our modular SDK packages, and experiment with our real-time API gateways inside our sandbox.
          </p>
        </div>

        {/* OpenAPI try-it playground section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-stretch">
          {/* Sidebar selector */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-2 text-slate-500 font-mono text-xs uppercase tracking-wider px-2">
              <Server className="h-4 w-4" />
              <span>Gateway Endpoints</span>
            </div>
            <div className="space-y-2">
              {endpointOptions.map((opt, idx) => (
                <button
                  key={opt.path}
                  onClick={() => setSelectedEndpointIndex(idx)}
                  className={`w-full p-4 rounded-xl text-left border transition-all duration-300 ${
                    idx === selectedEndpointIndex
                      ? "bg-white border-brand-primary/30 text-brand-primary shadow-sm scale-[1.01]"
                      : "bg-slate-50/50 border-slate-200 hover:border-slate-350 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center space-x-2.5 mb-1.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      opt.method === "POST" ? "bg-emerald-50 border border-emerald-100 text-brand-primary" : "bg-teal-50 border border-teal-100 text-brand-accent"
                    }`}>
                      {opt.method}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-900">{opt.path}</span>
                  </div>
                  <p className="text-xs text-slate-550 line-clamp-1">{opt.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Console / Play area */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm text-left">
            {/* Input Config Form */}
            <form onSubmit={handleTryIt} className="space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider font-mono">Parameters Configuration</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">Configure Parameters</h3>
                </div>

                {Object.keys(inputs).length > 0 ? (
                  <div className="space-y-4">
                    {Object.entries(inputs).map(([key, val]) => (
                      <div key={key} className="space-y-1">
                        <label className="text-[10px] font-mono uppercase font-semibold text-slate-550">{key}</label>
                        <input
                          type="text"
                          value={val}
                          onChange={(e) => handleInputChange(key, e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-primary font-mono"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 italic">This endpoint takes zero parameters.</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-brand-primary hover:bg-opacity-95 text-white font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-sm disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Transmitting Payload...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Gateway Request</span>
                  </>
                )}
              </button>
            </form>

            {/* Response output terminal */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between h-[300px] md:h-auto overflow-hidden shadow-inner">
              <div className="space-y-4 overflow-y-auto max-h-[220px]">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 border-b border-slate-200 pb-2">
                  <span>Server Response</span>
                  <span>HTTP 200 OK</span>
                </div>
                {responseOutput ? (
                  <pre className="font-mono text-xs text-brand-primary text-left">
                    <code>{JSON.stringify(responseOutput, null, 2)}</code>
                  </pre>
                ) : (
                  <div className="text-center py-12 text-slate-500 font-mono text-xs space-y-2">
                    <Terminal className="h-6 w-6 mx-auto animate-pulse" />
                    <p>Click Send Request to run sandbox telemetry.</p>
                  </div>
                )}
              </div>
              <div className="pt-3 border-t border-slate-250 text-[10px] text-slate-500 font-mono flex justify-between">
                <span>Origin Check OK</span>
                <span>Latency: {isLoading ? "..." : "92ms"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-language SDK panels */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-left shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2 font-mono">Multi-Language SDK Snippets</h2>
              <p className="text-slate-650 text-xs font-light">Run client connections securely with pre-compiled packages.</p>
            </div>
            {/* Lang selectors */}
            <div className="flex space-x-2 mt-4 md:mt-0 bg-white p-1 rounded-lg border border-slate-200 shadow-inner">
              {(["python", "javascript", "go"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setActiveLanguage(lang);
                    setResponseOutput(null);
                  }}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeLanguage === lang
                      ? "bg-brand-primary text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* SDK Code block */}
            <div className="lg:col-span-8 relative p-6 rounded-2xl bg-white border border-slate-250 font-mono text-xs text-brand-primary overflow-x-auto min-h-[180px] shadow-sm text-left">
              <button
                onClick={handleCopySnippet}
                className="absolute right-4 top-4 text-slate-550 hover:text-slate-850 transition-colors flex items-center space-x-1"
                aria-label="Copy SDK code"
              >
                {copiedSdk ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span className="text-emerald-600 text-[10px] font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Clipboard className="h-4 w-4" />
                    <span className="text-[10px]">Copy</span>
                  </>
                )}
              </button>
              <pre className="pt-4"><code>{sdkSnippets[activeLanguage]}</code></pre>
            </div>

            {/* Quickstart info */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 space-y-4 flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase font-semibold text-slate-500">Quickstart Instructions</span>
                <h4 className="font-bold text-slate-900 text-sm">Install Package via Terminal</h4>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded font-mono text-[10px] text-slate-800">
                  {activeLanguage === "python" && "pip install feenixs-client-sdk"}
                  {activeLanguage === "javascript" && "npm install @feenixs/sdk"}
                  {activeLanguage === "go" && "go get github.com/feenixs/sdk-go"}
                </div>
              </div>
              <div className="flex items-start space-x-2 text-xs text-slate-600">
                <HelpCircle className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                <span>Require client credentials generated inside the future Phase 4 client workspace portal.</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );

  function handleCopySnippet() {
    navigator.clipboard.writeText(sdkSnippets[activeLanguage]);
    setCopiedSdk(true);
    setTimeout(() => setCopiedSdk(false), 3000);
  }
}
