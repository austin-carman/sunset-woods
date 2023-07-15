/* eslint-disable react/prop-types */
import { useState } from "react";

const ImageSlides = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(1);

  // move to last or next slide -> n will be -1 or +1
  const changeImageSlide = (n) => {
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
            // Large Image
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
        {/* Previous arrow */}
        <div className="prev" onClick={() => changeImageSlide(-1)}>
          &#10094;
        </div>
        {/* Next arrow */}
        <div className="next" onClick={() => changeImageSlide(1)}>
          &#10095;
        </div>
      </div>
      {/* Image Thumbnail Container */}
      <div className="thumbnail-container">
        {item.images.map((image, index) => {
          return (
            // Image Thumbnail
            <img
              key={index}
              className={
                currentImage === index + 1
                  ? "active-thumbnail image-thumbnail"
                  : "image-thumbnail not-active-thumbnail"
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
