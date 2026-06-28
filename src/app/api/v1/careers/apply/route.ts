import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { jobId, fullName, email, fileName, coverLetter } = body;

    if (!jobId || !fullName || !email || !fileName) {
      return NextResponse.json(
        { error: "Bad Request: Missing required candidate credentials." },
        { status: 400 }
      );
    }

    const applicationTracker = `app_${Math.random().toString(36).substring(2, 11)}`;

    console.log(`[GATEWAY Careers] Application received for Job ${jobId}. Tracker: ${applicationTracker}. Letter length: ${coverLetter?.length || 0}`);



    return NextResponse.json({
      status: "success",
      message: "Application registered inside recruitment pipeline.",
      tracker_id: applicationTracker,
      candidate: { fullName, email },
      processed_at: new Date().toISOString()
    });
  } catch (err) {
    console.error("Careers submission parser error", err);
    return NextResponse.json(
      { error: "Internal Server Error: Failed to parse input payload." },
      { status: 500 }
    );
  }
}
