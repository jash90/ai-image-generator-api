import React from "react";
import localApi from "../utils/localApi";

function StopButton() {
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

  return <button onClick={handleStop}>Stop</button>;
}

export default StopButton;
