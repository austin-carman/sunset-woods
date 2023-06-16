const ItemDetails = () => {
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

  return (
    <>
      <div className="item-container">
        <div className="item-images-container">
          <img className="item-main-image" src={images[0]} alt="" />
          <div className="item-images-gallery">
            {images.map((image, index) => {
              return <img key={index} src={image} alt="" />;
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
