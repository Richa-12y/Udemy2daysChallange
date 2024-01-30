import React from "react";

const ImageShow = (props) => {
  const { image } = props;
  return <div>{image.id}</div>;
};

export default ImageShow;
