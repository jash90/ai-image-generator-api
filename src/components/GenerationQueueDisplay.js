import React from "react";
import PropTypes from "prop-types";

function GenerationQueueDisplay({ queue }) {
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
}

GenerationQueueDisplay.propTypes = {
  queue: PropTypes.arrayOf(
    PropTypes.shape({
      prompt: PropTypes.string.isRequired,
      imageNumber: PropTypes.number.isRequired,
      aspectRatio: PropTypes.string.isRequired,
      performanceSelection: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default GenerationQueueDisplay;
