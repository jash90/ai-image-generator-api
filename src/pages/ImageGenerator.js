import React, { useState, useEffect } from "react";
import { ADVANCED_PARAMS } from "../utils/constants";
import PerformanceSelector from "../components/PerformanceSelector";
import AspectRatioSelector from "../components/AspectRatioSelector";
import StopButton from "../components/StopButton";
import JobQueueDisplay from "../components/JobQueueDisplay";
import ImageList from "../components/ImageList";
import GenerationQueueDisplay from "../components/GenerationQueueDisplay";
import localApi from "../utils/localApi";

function ImageGenerator() {
  const [inputText, setInputText] = useState("");
  const [imageUrls, setImageUrls] = useState(() => {
    const savedUrls = localStorage.getItem("imageUrls");
    return savedUrls ? JSON.parse(savedUrls) : [];
  });
  const [performanceSelection, setPerformanceSelection] =
    useState("Extreme Speed");
  const [aspectRatio, setAspectRatio] = useState("1920*1080");
  const [imageNumber, setImageNumber] = useState(1);
  const [queue, setQueue] = useState(() => {
    const savedQueue = localStorage.getItem("generationQueue");
    return savedQueue ? JSON.parse(savedQueue) : [];
  });

  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    localStorage.setItem("generationQueue", JSON.stringify(queue));
  }, [queue]);

  useEffect(() => {
    localStorage.setItem("imageUrls", JSON.stringify(imageUrls));
  }, [imageUrls]);

  useEffect(() => {
    const processQueue = async () => {
      if (!isProcessing && queue.length > 0) {
        setIsProcessing(true);
        const currentRequest = queue[0];

        const requestData = {
          prompt: currentRequest.prompt,
          negative_prompt: "",
          style_selections: ["Fooocus V2", "Fooocus Enhance", "Fooocus Sharp"],
          performance_selection: performanceSelection,
          aspect_ratios_selection: aspectRatio,
          image_number: currentRequest.imageNumber,
          image_seed: -1,
          sharpness: 2,
          guidance_scale: 4,
          base_model_name: "juggernautXL_version6Rundiffusion.safetensors",
          refiner_model_name: "None",
          refiner_switch: 0.5,
          loras: [
            {
              model_name: "sd_xl_offset_example-lora_1.0.safetensors",
              weight: 0.1,
            },
          ],
          advanced_params: ADVANCED_PARAMS,
          require_base64: false,
          async_process: false,
          webhook_url: "",
        };

        try {
          const response = await localApi.post(
            "/v1/generation/text-to-image",
            requestData,
          );
          if (response.data && Array.isArray(response.data)) {
            const newUrls = response.data.map((item) => item.url);
            setImageUrls((prevUrls) => [...prevUrls, ...newUrls]);
          }
        } catch (error) {
          console.error("Error processing request:", error);
        }

        setQueue((prevQueue) => prevQueue.slice(1));
        setIsProcessing(false);
      }
    };

    processQueue();
  }, [queue, isProcessing, performanceSelection, aspectRatio]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newRequest = {
      prompt: inputText,
      imageNumber,
      aspectRatio, // Confirm this matches the expected "aspectRatio" state format
    };
    setQueue((prevQueue) => [...prevQueue, newRequest]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text"
        />
        <input
          type="number"
          value={imageNumber}
          onChange={(e) =>
            setImageNumber(Math.min(Math.max(1, Number(e.target.value)), 32))
          }
          min="1"
          max="32"
          placeholder="Number of Images"
        />
        <button type="submit">Generate Image</button>
        <StopButton />
      </form>
      <PerformanceSelector
        performanceSelection={performanceSelection}
        setPerformanceSelection={setPerformanceSelection}
      />
      <AspectRatioSelector
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
      />
      <JobQueueDisplay />
      <ImageList imageUrls={imageUrls} />
      <GenerationQueueDisplay queue={queue} />
    </div>
  );
}

export default ImageGenerator;
