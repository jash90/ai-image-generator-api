import React from "react";
import { useImageUrls } from "../../state-management";

export const ImageList = () => {
  const { imageUrls } = useImageUrls();
  return (
    <div>
      {imageUrls.map((url, index) => (
        <a key={index} href={url}>
          <img
            src={url}
            alt={`Generated ${index}`}
            style={{ width: "10%", height: "10%", margin: "10px" }}
          />
        </a>
      ))}
    </div>
  );
};

ImageList.displayName = "ImageList";
