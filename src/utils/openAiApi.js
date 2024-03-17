import axios from "axios";

export const openAiApi = axios.create({
  baseURL: "https://api.openai.com/v1/",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    "Content-Type": "application/json",
    "OpenAI-Organization": process.env.REACT_APP_ORGANIZATION_ID,
  },
});
