import React from "react";
import image from "../../assets/images/image0.jpg";

function Image() {
  return (
    <div className="w-full bg-gray-200">
      <img src={image} alt="Sample Image" className="w-full max-w-full h-187" />
    </div>
  );
}

export default Image;
