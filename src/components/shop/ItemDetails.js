const ItemDetails = () => {
  // eslint-disable-next-line no-undef
  const image = process.env.PUBLIC_URL + "/blue.png";

  return (
    <>
      <div className="item-details-order-container">
        <div>
          <img src={image} alt="item image" />
          <div className="item-details-gallery">
            <img src={image} alt="item image" />
            <img src={image} alt="item image" />
            <img src={image} alt="item image" />
            <img src={image} alt="item image" />
            <img src={image} alt="item image" />
          </div>
        </div>
        <div className="item-order-content">
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
      <div>Details Container</div>
    </>
  );
};

export default ItemDetails;
