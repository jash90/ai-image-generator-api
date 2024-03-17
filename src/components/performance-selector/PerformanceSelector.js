import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { usePerformanceSelection } from "../../state-management";

export const PerformanceSelector = () => {
  const { performanceSelection, setPerformanceSelection } =
    usePerformanceSelection();

  const handleChange = (event, newPerformance) => {
    setPerformanceSelection(newPerformance);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={performanceSelection}
      exclusive
      onChange={handleChange}
      aria-label="performance"
    >
      <ToggleButton value="Speed">Speed</ToggleButton>
      <ToggleButton value="Quality">Quality</ToggleButton>
      <ToggleButton value="Extreme Speed">Extreme Speed</ToggleButton>
    </ToggleButtonGroup>
  );
};

PerformanceSelector.displayName = "PerformanceSelector";
