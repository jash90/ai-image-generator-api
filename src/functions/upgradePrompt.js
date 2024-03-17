import {
  SYSTEM_MESSAGE_CONTENT,
  USER_MESSAGE_CONTENT,
  openAiApi,
} from "../utils";

export async function upgradePrompt({
  model,
  inputText,
  aspectRatio,
  performanceSelection,
  mock = false,
}) {
  if (mock) {
    return [
      {
        aspectRatio: "1920*1080",
        imageNumber: 2,
        performanceSelection: "Extreme Speed",
        prompt:
          "Create an image of a futuristic city skyline at night. The city should be illuminated with neon lights and have flying cars zipping through the sky. The buildings should be sleek and modern, with large holographic billboards displaying vibrant advertisements.",
      },
    ];
  }

  try {
    const response = await openAiApi.post("chat/completions", {
      model,
      messages: [
        {
          role: "system",
          content: SYSTEM_MESSAGE_CONTENT,
        },
        {
          role: "user",
          content: USER_MESSAGE_CONTENT(
            inputText,
            aspectRatio,
            performanceSelection,
          ),
        },
      ],
    });
    return JSON.parse(response.data.choices[0].message.content);
  } catch (error) {
    console.error("Error sending message to OpenAI:", error);
  }
}
