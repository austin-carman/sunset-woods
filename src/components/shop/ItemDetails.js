import { useState } from "react";

const ItemDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    // eslint-disable-next-line no-undef
    process.env.PUBLIC_URL + "/blue.png",
    // eslint-disable-next-line no-undef
    process.env.PUBLIC_URL + "/blue.png",
    // eslint-disable-next-line no-undef
    process.env.PUBLIC_URL + "/blue.png",
    // eslint-disable-next-line no-undef
    process.env.PUBLIC_URL + "/blue.png",
    // eslint-disable-next-line no-undef
    process.env.PUBLIC_URL + "/blue.png",
  ];

  const handleImageSlide = (direction) => {
    console.log("direction: ", direction);
    if (currentImage === 0 && direction === -1) {
      return;
    }
    if (currentImage === images.length - 1 && direction === 1) {
      return;
    }
    setCurrentImage(currentImage + direction);
  };

  return (
    <>
      <div className="item-order-container">
        <div className="image-container">
          <img src={images[currentImage]} alt="" />
          <div className="item-image-arrows-container">
            <div onClick={() => handleImageSlide(-1)}>Left</div>
            <div onClick={() => handleImageSlide(1)}>right</div>
          </div>
          <div className="image-slides-dots-container">
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === currentImage
                      ? "active-dot slides-dot"
                      : "slides-dot"
                  }
                ></div>
              );
            })}
          </div>
        </div>
        <div className="item-order-options">
          <div>
            <h2>Title</h2>
            <h4>Subtitle</h4>
            <div>Length</div>
            <div>Width</div>
            <div>Wood Type</div>
            <div>Leaf Extension</div>
            <div>Quantity</div>
            <h3>Base Price</h3>
            <h3>Total Price - Base + Customizations</h3>
          </div>
          <div>
            <div>Payment Options</div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="item-details-container">Details Container</div>
    </>
  );
};

export default ItemDetails;
