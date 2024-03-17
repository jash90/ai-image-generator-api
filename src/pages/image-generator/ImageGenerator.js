import React, { useState, useEffect } from "react";
import { Button, Box, TextField } from "@mui/material";
import {
  AspectRatioSelector,
  PerformanceSelector,
  StopButton,
  ModelSelector,
  ImageList,
} from "../../components";
import {
  useQueue,
  useImageUrls,
  useAspectRatio,
  useModel,
  usePerformanceSelection,
} from "../../state-management";
import { upgradePrompt, generateImage } from "../../functions";

export const ImageGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [imageNumber, setImageNumber] = useState(1);
  const { queue, appendQueue, sliceQueue } = useQueue();
  const { model } = useModel();
  const { aspectRatio } = useAspectRatio();
  const { performanceSelection } = usePerformanceSelection();
  const { appendImageUrls } = useImageUrls();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processQueue = async () => {
      if (!isProcessing && queue.length > 0) {
        setIsProcessing(true);
        const images = await generateImage(queue[0]);
        appendImageUrls(images);
        sliceQueue(1);
        setIsProcessing(false);
      }
    };
    processQueue();
  }, [queue, isProcessing, performanceSelection, aspectRatio]);

  const createJob = async (event) => {
    event.preventDefault();
    try {
      let jobs = await upgradePrompt({
        model,
        aspectRatio,
        performanceSelection,
        inputText,
      });
      appendQueue(jobs);
    } catch (error) {
      console.error("Error processing OpenAI request:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={createJob}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            type="text"
            value={inputText}
            label="Prompt"
            variant="outlined"
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text"
          />
          <TextField
            type="number"
            value={imageNumber}
            min="1"
            max="32"
            label="Number of Images"
            variant="outlined"
            onChange={(e) =>
              setImageNumber(Math.min(Math.max(1, Number(e.target.value)), 32))
            }
          />
          <Button type="submit" variant="contained">
            Generate Image
          </Button>
          <StopButton />
        </Box>
      </form>
      <PerformanceSelector />
      <ModelSelector />
      <AspectRatioSelector />
      <ImageList />
    </Box>
  );
};

ImageGenerator.displayName = "ImageGenerator";
