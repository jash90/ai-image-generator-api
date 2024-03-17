import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import PanoramaHorizontalIcon from "@mui/icons-material/PanoramaHorizontal";
import PanoramaVerticalIcon from "@mui/icons-material/PanoramaVertical";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import { useAspectRatio } from "../../state-management";

export const AspectRatioSelector = () => {
  const { aspectRatio, setAspectRatio } = useAspectRatio();

  const handleChange = (event, newaspectRatio) => {
    setAspectRatio(newaspectRatio);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={aspectRatio}
      exclusive
      onChange={handleChange}
      aria-label="aspect-ratio"
    >
      <ToggleButton value="1920*1080">
        <PanoramaVerticalIcon />
      </ToggleButton>
      <ToggleButton value="1080*1920">
        <PanoramaHorizontalIcon />
      </ToggleButton>
      <ToggleButton value="1920*1920">
        <CropSquareIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

AspectRatioSelector.displayName = "AspectRatioSelector";
