import React from "react";

function GenerationQueueDisplay({ queue }) {
  return (
    <div>
      <h3>Generation Queue</h3>
      <ul>
        {queue.map((request, index) => (
          <li key={index}>
            Prompt: {request.prompt}, Images: {request.imageNumber}, Aspect
            Ratio: {request.aspectRatio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenerationQueueDisplay;
