import React from "react";

function ImageList({ imageUrls }) {
  return (
    <div>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Generated ${index}`}
          style={{ width: "100px", height: "100px", margin: "10px" }}
        />
      ))}
    </div>
  );
}

export default ImageList;
