/* eslint-disable react/prop-types */
import { useState } from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const ImageSlides = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageSlide = (direction) => {
    if (currentImage === 0 && direction === -1) {
      return;
    }
    if (currentImage === item.images.length - 1 && direction === 1) {
      return;
    }
    setCurrentImage(currentImage + direction);
  };

  return (
    <div className="image-container">
      <img src={item.images[currentImage]} alt="" />
      <div className="item-image-arrows-container">
        <div onClick={() => handleImageSlide(-1)}>
          <ArrowBackIosOutlinedIcon
            sx={{ fontSize: "3rem" }}
            className="slide-arrow"
          />
        </div>
        <div onClick={() => handleImageSlide(1)}>
          <ArrowForwardIosOutlinedIcon
            sx={{ fontSize: "3rem" }}
            className="slide-arrow"
          />
        </div>
      </div>
      <div className="image-slides-dots-container">
        {item.images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === currentImage ? "active-dot slides-dot" : "slides-dot"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlides;
