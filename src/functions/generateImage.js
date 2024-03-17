import { GENERATE_IMAGE_FROM_TEXT_REQUEST_DATA, localApi } from "../utils";
export const generateImage = async ({
  prompt,
  performanceSelection,
  aspectRatio,
  imageNumber,
}) => {
  try {
    const { data } = await localApi.post("/v1/generation/text-to-image", {
      ...GENERATE_IMAGE_FROM_TEXT_REQUEST_DATA,
      prompt: prompt,
      performance_selection: performanceSelection,
      aspect_ratios_selection: aspectRatio,
      image_number: imageNumber,
    });
    let images = [];
    if (data && Array.isArray(data)) {
      images = data.map((item) =>
        item.url.replace(
          "http://127.0.0.1:8888",
          process.env.REACT_APP_API_BASE_URL,
        ),
      );
    }
    return images;
  } catch (error) {
    console.error("Error processing request:", error);
  }
};
