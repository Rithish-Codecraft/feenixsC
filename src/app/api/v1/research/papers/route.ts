import { NextResponse } from "next/server";

const papersData = [
  {
    id: "sparse-moe-consensus",
    title: "Decentralized State Sync for Sparse Mixture-of-Experts Nodes",
    authors: "R. Rithish, A. Kowalski, J. Chen",
    category: "Distributed Consensus",
    doi: "10.48550/arXiv.2606.09112",
    citations: 18,
    publishedAt: "June 2026"
  },
  {
    id: "spectral-embeddings",
    title: "Spectral Projection of High-Dimensional Semantic Embeddings",
    authors: "R. Rithish, H. Neumann",
    category: "NLP & Transformers",
    doi: "10.48550/arXiv.2605.08415",
    citations: 42,
    publishedAt: "May 2026"
  },
  {
    id: "green-telemetry",
    title: "Green Computing: Solar Telemetry and Carbon-Deficit Scheduling",
    authors: "A. Kowalski, S. Patel, J. Chen",
    category: "Green Computing",
    doi: "10.48550/arXiv.2604.07221",
    citations: 11,
    publishedAt: "April 2026"
  }
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit");
  const category = searchParams.get("category");

  let filtered = [...papersData];

  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (limit) {
    const lim = parseInt(limit, 10);
    if (!isNaN(lim)) {
      filtered = filtered.slice(0, lim);
    }
  }

  return NextResponse.json({
    status: "success",
    results: filtered.length,
    data: filtered
  });
}
