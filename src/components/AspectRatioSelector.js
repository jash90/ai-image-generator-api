import React from "react";
import PropTypes from "prop-types";

function AspectRatioSelector({ aspectRatio, setAspectRatio }) {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="aspectRatio"
          value="1920*1080"
          checked={aspectRatio === "1920*1080"}
          onChange={(e) => setAspectRatio(e.target.value)}
        />
        1920*1080
      </label>
      <label>
        <input
          type="radio"
          name="aspectRatio"
          value="1080*1920"
          checked={aspectRatio === "1080*1920"}
          onChange={(e) => setAspectRatio(e.target.value)}
        />
        1080*1920
      </label>
      <label>
        <input
          type="radio"
          name="aspectRatio"
          value="1920*1920"
          checked={aspectRatio === "1920*1920"}
          onChange={(e) => setAspectRatio(e.target.value)}
        />
        1920*1920
      </label>
    </div>
  );
}

AspectRatioSelector.propTypes = {
  aspectRatio: PropTypes.string.isRequired,
  setAspectRatio: PropTypes.func.isRequired,
};

export default AspectRatioSelector;
