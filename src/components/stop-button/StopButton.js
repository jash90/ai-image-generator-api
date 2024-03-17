import React from "react";
import { Button } from "@mui/material";
import { localApi } from "../../utils";

export const StopButton = () => {
  const handleStop = async (event) => {
    event.preventDefault();
    try {
      // Directly using the endpoint URL in the axios.post call
      await localApi.post("/v1/generation/stop");
      console.log("Generation stopped successfully");
    } catch (error) {
      console.error("Error stopping generation:", error);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleStop}>
      Stop
    </Button>
  );
};

StopButton.displayName = "StopButton";
