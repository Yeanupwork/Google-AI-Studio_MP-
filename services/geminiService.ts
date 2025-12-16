import { GoogleGenAI, Type } from "@google/genai";
import { PERSONALITIES } from "../constants";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzePersonality = async (userInput: string): Promise<AnalysisResult> => {
  try {
    const personalityList = PERSONALITIES.map(p => `${p.id}: ${p.name} (${p.description})`).join('\n');
    
    const prompt = `
      Act as a financial psychology expert. I will provide a description of a person's habits and feelings regarding money.
      You must match this person to exactly ONE of the following 10 money personalities:
      
      ${personalityList}

      Analyze the user's input and return a JSON object indicating the best match.
      The 'reasoning' should be in Chinese (Singapore), explaining why they fit this profile, addressing them directly as "你" (You).
      
      User Input: "${userInput}"
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            personalityId: {
              type: Type.STRING,
              description: "The ID of the matched personality from the provided list.",
            },
            confidence: {
              type: Type.NUMBER,
              description: "Confidence level from 0 to 1.",
            },
            reasoning: {
              type: Type.STRING,
              description: "Explanation in Chinese (Singapore) addressing the user.",
            },
          },
          required: ["personalityId", "confidence", "reasoning"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as AnalysisResult;
    }
    throw new Error("No response text");
  } catch (error) {
    console.error("Gemini analysis failed:", error);
    // Fallback or error handling
    throw error;
  }
};