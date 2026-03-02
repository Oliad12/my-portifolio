
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "No message provided." }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // You can use gpt-4o-mini or gpt-4o
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant. Answer the user politely and clearly. Avoid giving portfolio-specific answers.",
        },
        { role: "user", content: message },
      ],
      temperature: 0.7,
    });

    const reply = completion.choices[0].message?.content || "Sorry, I could not answer that.";

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ reply: "⚠️ Something went wrong. Please try again." }, { status: 500 });
  }
}