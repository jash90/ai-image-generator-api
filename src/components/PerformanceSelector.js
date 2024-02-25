import React from "react";
import PropTypes from "prop-types";

function PerformanceSelector({
  performanceSelection,
  setPerformanceSelection,
}) {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="performance"
          value="Speed"
          checked={performanceSelection === "Speed"}
          onChange={(e) => setPerformanceSelection(e.target.value)}
        />
        Speed
      </label>
      <label>
        <input
          type="radio"
          name="performance"
          value="Quality"
          checked={performanceSelection === "Quality"}
          onChange={(e) => setPerformanceSelection(e.target.value)}
        />
        Quality
      </label>
      <label>
        <input
          type="radio"
          name="performance"
          value="Extreme Speed"
          checked={performanceSelection === "Extreme Speed"}
          onChange={(e) => setPerformanceSelection(e.target.value)}
        />
        Extreme Speed
      </label>
    </div>
  );
}

PerformanceSelector.propTypes = {
  performanceSelection: PropTypes.string.isRequired,
  setPerformanceSelection: PropTypes.func.isRequired,
};

export default PerformanceSelector;
