import axios from "axios";
import { LLM_AFFORDABLE_DESTINATION_PROMPT, LLM_POPULAR_DESTINATION_PROMPT, LLM_VACATION_PROMPT } from "../constants/constants.js";

export class LLMService {
  providerUrl;
  model;
  role = "system";
  token;
  constructor(providerUrl, model, token) {
    this.token = token;
    this.providerUrl = providerUrl;
    this.model = model;
  }

  async generateVacationItinerary(destination, duration) {
    const message = `${LLM_VACATION_PROMPT} ${destination} ${duration} days`;
    const choices = await this.#chatRequest(message);
    if (choices?.length > 0) {
      const choice = choices[0];
      console.log(choice?.message?.content);
      return JSON.parse(choice?.message?.content) ?? {};
    }
    return {};
  }

  async generatePopularDestinations(isAffordable) {
    const message = isAffordable ? LLM_AFFORDABLE_DESTINATION_PROMPT  : LLM_POPULAR_DESTINATION_PROMPT;
    const choices = await this.#chatRequest(message);
    if (choices?.length > 0) {
      const choice = choices[0];
      console.log(choice?.message?.content);
      return JSON.parse(choice?.message?.content) ?? {};
    }
    return {};
  }

  // private method
  async #chatRequest(message) {
    try {
      const res = await axios.post(
        `${this.providerUrl}/v1/chat/completions`,
        {
          messages: [{ role: this.role, content: message }],
          model: this.model,
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
      const choices = res.data?.choices ?? [];
      return choices;
    } catch (error) {
      console.error(error);
      throw Error("LLM chat request error", { cause: error });
    }
  }
}
