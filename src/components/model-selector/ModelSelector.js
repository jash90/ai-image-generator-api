import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useModel } from "../../state-management";
export const ModelSelector = () => {
  const { model, setModel } = useModel();

  const handleChange = (event, newModel) => {
    setModel(newModel);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={model}
      exclusive
      onChange={handleChange}
      aria-label="model"
    >
      <ToggleButton value="gpt-4-turbo-preview">gpt-4</ToggleButton>
      <ToggleButton value="gpt-3.5-turbo">gpt-3.5</ToggleButton>
    </ToggleButtonGroup>
  );
};

ModelSelector.displayName = "ModelSelector";
