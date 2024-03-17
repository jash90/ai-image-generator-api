import "./App.css";
import { Box } from "@mui/material";
import { ImageGenerator } from "./pages";
import { GenerationQueueDisplay, JobQueueDisplay } from "./components";
import { useQueue, useImageUrls } from "./state-management";
import { useEffect } from "react";

function App() {
  const { setQueue } = useQueue();
  const { setImageUrls } = useImageUrls();
  useEffect(() => {
    const imageUrls = JSON.parse(localStorage.getItem("imageUrls"));
    const queue = JSON.parse(localStorage.getItem("queue"));
    setImageUrls(imageUrls ?? []);
    setQueue(queue ?? []);
  }, []);

  return (
    <div className="App">
      <Box sx={{ display: "flex", flexDirection: "row", padding: 20 }}>
        <Box sx={{ width: 0.8 }}>
          <ImageGenerator />
        </Box>
        <Box sx={{ width: 0.2 }}>
          <JobQueueDisplay />
          <GenerationQueueDisplay />
        </Box>
      </Box>
    </div>
  );
}

export default App;
