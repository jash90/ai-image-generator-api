import React from "react";
import PropTypes from "prop-types";

function ImageList({ imageUrls }) {
  return (
    <div>
      {imageUrls.map((url, index) => (
        <>
          <a key={index} href={url}>
            <img
              src={url}
              alt={`Generated ${index}`}
              style={{ width: "10%", height: "10%", margin: "10px" }}
            />
          </a>
        </>
      ))}
    </div>
  );
}

ImageList.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageList;
