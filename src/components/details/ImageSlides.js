/* eslint-disable react/prop-types */
import { useState } from "react";
// import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const ImageSlides = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(1);

  const plusSlides = (n) => {
    let next = currentImage + n;
    if (next > item.images.length) {
      next = 1;
    } else if (next < 1) {
      next = item.images.length;
    }
    setCurrentImage(next);
  };

  const currentSlide = (n) => {
    setCurrentImage(n);
  };

  return (
    <div className="slideshow-container">
      <div className="slides-container">
        {item.images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                currentImage === index + 1 ? "active-slide" : "hidden-slides"
              }
            >
              <img src={image} alt="" />
            </div>
          );
        })}
        <div className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </div>
        <div className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </div>
      </div>
      <div className="thumbnail-container">
        {item.images.map((image, index) => {
          return (
            <img
              key={index}
              className={
                currentImage === index + 1
                  ? "active-thumbnail image-thumbnail"
                  : "image-thumbnail"
              }
              src={image}
              alt=""
              onClick={() => currentSlide(index + 1)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlides;
