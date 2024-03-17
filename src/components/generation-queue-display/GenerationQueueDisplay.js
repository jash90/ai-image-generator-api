import React from "react";
import { useQueue } from "../../state-management";

export const GenerationQueueDisplay = () => {
  const { queue } = useQueue();

  return (
    <div>
      <h3>Generation Queue</h3>
      <ul>
        {queue.map((request, index) => (
          <li key={index}>
            {`Prompt: ${request.prompt}, Images: ${request.imageNumber}, Aspect
            Ratio: ${request.aspectRatio}
            Performance: ${request.performanceSelection}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

GenerationQueueDisplay.displayName = "GenerationQueueDisplay";
