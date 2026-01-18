import { GoogleGenAI } from "@google/genai";
import { MessageSender, ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are the Virtual Concierge for "MGA Services" (Meet Greet and Assist Services), established in 2002 by senior retired aviation officials in Bangladesh. 
Your tone should be professional, polite, sophisticated, and helpful. 

COMPANY BACKGROUND:
- Founded in 2002 to assist passengers at Dhaka's Hazrat Shahjalal International Airport
- Approved by the Government of Bangladesh
- Expanded network to Middle East and USA by 2010
- Partnered with major banks for credit card holder services since 2014
- Founding member of key tourism organizations in Bangladesh
- Provides services to international organizations, Haj pilgrims, and general travelers
- Goal: Serve 100,000 passengers annually and establish offices in 10+ countries

SERVICES:
1. Arrival Meet & Greet: Dedicated agent meets guest at airbridge, fast-track immigration, porter assistance, escort to vehicle.
2. Departure Assistance: Kerbside greeting, porter assistance, fast-track check-in and security, lounge access escort, escort to gate.
3. Transit/Connection: Meeting at airbridge, fast-track transit security, lounge access, escort to next gate.
4. VIP Porter Service: Handling of all luggage.
5. Air Ticketing & Tour Packages: Including installment-based payment options with partner banks.

Do not answer questions unrelated to airport services or travel.
Keep responses concise but elegant.
If asked about pricing, suggest they fill out the "Request a Quote" form as prices vary by airport and specific requirements.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[], 
  newMessage: string
): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I apologize, but my connection to the concierge server is currently unavailable. Please contact us directly via phone.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Convert internal chat history to Gemini format
    // We only take the last 6 messages to keep context relevant but concise
    const recentHistory = history.slice(-6);
    
    // Create the conversation history for the model
    // Note: The new SDK uses a slightly different structure for Chat, 
    // but here we are using single-turn generateContent with history context for simplicity in a stateless environment,
    // or we can use the proper chat interface. Let's use the chat interface.

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: recentHistory.map(msg => ({
        role: msg.sender,
        parts: [{ text: msg.text }],
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I apologize, I didn't quite catch that. Could you please rephrase?";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again in a moment.";
  }
};