import { NextResponse } from "next/server";

export async function GET() {
  // Emulate live dynamic drift in telemetry values
  const epoch = Math.floor(new Date().getTime() / 15000000) % 500 + 120;
  
  // Declining training loss curve with slight noise
  const baseLoss = Math.max(1.12, 1.95 - (epoch - 120) * 0.005);
  const lossNoise = (Math.random() - 0.5) * 0.03;
  const loss = baseLoss + lossNoise;

  // Nodes fluctuate slightly
  const baseNodes = 48000;
  const nodeDrift = Math.floor((Math.random() - 0.5) * 1200);
  const activeNodes = baseNodes + nodeDrift;

  // GPU utilization, carbon offsets, and temperature
  const gpuUtilization = 92.0 + Math.random() * 6.5;
  const carbonOffset = 98.42 + (epoch - 120) * 0.12;
  const temperature = 40.5 + Math.random() * 4.2;

  return NextResponse.json({
    epoch,
    loss,
    activeNodes,
    gpuUtilization,
    carbonOffset,
    temperature
  });
}
