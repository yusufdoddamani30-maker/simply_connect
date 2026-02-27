import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const generateAIResponse = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
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

export const generateProjectIdea = async (skills: string[], interests: string[]) => {
  try {
    const prompt = `Generate a unique and practical project idea for a university student with the following skills: ${skills.join(', ')} and interests: ${interests.join(', ')}. Provide a title, a short description, and a list of 3 key features.`;
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            features: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "description", "features"]
        }
      }
    });
    
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Project Idea Error:", error);
    return null;
  }
};

export const optimizeResume = async (resumeData: any) => {
  try {
    const prompt = `Analyze the following resume data and provide 3 specific suggestions to improve it for ATS systems and campus placements. Resume Data: ${JSON.stringify(resumeData)}`;
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER, description: "Optimization score from 0 to 100" },
            suggestions: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["score", "suggestions"]
        }
      }
    });
    
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Resume Optimization Error:", error);
    return null;
  }
};
