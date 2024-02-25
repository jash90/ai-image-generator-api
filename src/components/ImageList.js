import React from "react";
import PropTypes from "prop-types";

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

ImageList.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageList;
