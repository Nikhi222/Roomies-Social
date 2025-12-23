
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client using the required named parameter and environment variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCityVibe = async (city: string = "Delhi NCR") => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a high-end social concierge for 'Roomies Social'. 
      Generate a sophisticated, high-energy update about the elite social scene in ${city} (Delhi, Noida, Gurugram). 
      Reference specific cult-favorite spots like 32nd Avenue, Dhan Mill, Cyber Hub, or Sector 104 Noida. 
      The tone should be 'Insider Secret'. Maximum 12 words. Exactly 2 emojis.`,
      config: {
        temperature: 0.8,
      }
    });
    // Access the .text property directly as per the latest SDK guidelines.
    return response.text;
  } catch (error) {
    console.error("Error fetching city vibe:", error);
    return "32nd Avenue is glowing tonight! ✨ Dhan Mill is where the cult vibe is at. 🥂";
  }
};
