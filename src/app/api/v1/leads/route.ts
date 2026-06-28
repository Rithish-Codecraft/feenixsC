import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, org, domain, budget, timeline, message } = body;

    // Server-side validation check
    if (!name || !email || !org || !message) {
      return NextResponse.json(
        { error: "Bad Request: Missing required credentials." },
        { status: 400 }
      );
    }

    const referenceId = `lead_${Math.random().toString(36).substring(2, 11)}`;

    console.log(`[GATEWAY Leads] Intake logged. Ref: ${referenceId}. Domain: ${domain}, Budget: ${budget}, Timeline: ${timeline}`);



    return NextResponse.json({
      status: "success",
      message: "Lead intake registered successfully.",
      reference_id: referenceId,
      processed_at: new Date().toISOString()
    });
  } catch (err) {
    console.error("Leads intake parser error", err);
    return NextResponse.json(
      { error: "Internal Server Error: Failed to parse input payload." },
      { status: 500 }
    );
  }
}
