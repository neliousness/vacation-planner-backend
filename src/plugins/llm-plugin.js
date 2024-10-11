import { LLM_API_KEY } from "../constants/constants.js";
import { LLMService } from "../services/llm_service.js";

const llmPlugin = {
  name: "llm",
  register: async function (server) {
    const url = "https://api.groq.com/openai";
    const model = "llama-3.1-8b-instant";
    const token = LLM_API_KEY; //process.env[`MONGODB_URI`]
    const service = new LLMService(url, model, token);
    server.app.llm = service;
  },
};

export default llmPlugin;
