import React from "react";
import ImageShow from "./ImageShow";
import "./imageList.css";

const ImageList = (props) => {
  const { images } = props;

  const renderImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderImages}</div>;
};

export default ImageList;
