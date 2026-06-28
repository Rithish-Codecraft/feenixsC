import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Bad Request: Invalid or missing email address." },
        { status: 400 }
      );
    }

    console.log(`[GATEWAY Newsletter] Registered subscriber: ${email}`);



    return NextResponse.json({
      status: "success",
      message: "Newsletter subscription confirmed.",
      email,
      subscribed_at: new Date().toISOString()
    });
  } catch (err) {
    console.error("Newsletter submission parser error", err);
    return NextResponse.json(
      { error: "Internal Server Error: Failed to parse subscription payload." },
      { status: 500 }
    );
  }
}
