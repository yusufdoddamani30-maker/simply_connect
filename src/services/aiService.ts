import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const generateAIResponse = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [...history, { role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: "You are CampusNet AI, a helpful assistant for university students. You help them find teammates, suggest project ideas, give career advice, and help with technical questions. Keep responses concise and encouraging.",
      }
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later!";
  }
};
