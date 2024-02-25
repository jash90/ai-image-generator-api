import React from "react";
import PropTypes from "prop-types";

function ModelSelector({ model, setModel }) {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="model"
          value="gpt-4-turbo-preview"
          checked={model === "gpt-4-turbo-preview"}
          onChange={(e) => setModel(e.target.value)}
        />
        gpt-4-turbo-preview
      </label>
      <label>
        <input
          type="radio"
          name="model"
          value="gpt-3.5-turbo"
          checked={model === "gpt-3.5-turbo"}
          onChange={(e) => setModel(e.target.value)}
        />
        gpt-3.5-turbo
      </label>
    </div>
  );
}

ModelSelector.propTypes = {
  model: PropTypes.string.isRequired,
  setModel: PropTypes.func.isRequired,
};

export default ModelSelector;
