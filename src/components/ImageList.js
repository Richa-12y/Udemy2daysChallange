import React from "react";
import ImageShow from "./ImageShow";

const ImageList = (props) => {
  const { images } = props;

  const renderImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div>{renderImages}</div>;
};

export default ImageList;
