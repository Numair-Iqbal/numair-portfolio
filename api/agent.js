import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

export default async function handler(req, res) {
  const { question } = req.body;

  // Safety check: reject empty or overly long questions
  if (!question || question.length > 300) {
    return res.status(400).json({ reply: "Please keep your question short." });
  }

  // Rate limiting (per visitor: max 8 questions per 60 seconds)
  const now = Date.now();
  const ip = req.headers["x-forwarded-for"] || "unknown";
  global.rateLimitStore = global.rateLimitStore || {};
  const record = global.rateLimitStore[ip] || { count: 0, start: now };

  if (now - record.start > 60000) {
    record.count = 0;
    record.start = now;
  }
  record.count++;
  global.rateLimitStore[ip] = record;

  if (record.count > 8) {
    return res.status(429).json({ reply: "Too many questions, please wait a bit and try again." });
  }

  // Call the Groq API
  console.log("KEY LOADED:", process.env.GROQ_API_KEY ? process.env.GROQ_API_KEY.slice(0, 8) + "..." : "MISSING");
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      max_tokens: 300,
      messages: [
        {
          role: "system",
          content: "You are Numair Iqbal's personal AI agent — a Backend AI Engineering intern who built the Medical AI Assistant (MedBot) and the Embeddable Widget & Lead-Capture Platform. Only answer questions about his work, skills, and projects."
        },
        { role: "user", content: question }
      ]
    })
  });

  const data = await response.json();
  console.log("GROQ RESPONSE:", JSON.stringify(data));
  res.status(200).json({ reply: data.choices?.[0]?.message?.content || "Error: check terminal logs" });
}