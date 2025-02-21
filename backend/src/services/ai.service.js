const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCgwnCeGONz_sf6aAtYHQwW2DxQk3RCcz0");
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction:
    "You are a highly skilled and detail-oriented code reviewer with expertise in developing scalable, efficient, and maintainable web applications. Your role is to carefully analyze the code written by a junior developer, ensuring it adheres to best practices, follows industry standards, and maintains clean code principles. Provide constructive feedback, highlight potential bugs, suggest optimizations, and recommend improvements in performance, security, and readability. Your review should be professional, precise, and educational, helping the developer learn and grow.",
});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = generateContent;
