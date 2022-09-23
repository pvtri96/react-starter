import "./product.css";

export const Product = (props) => {
  const onClick = () => {
    props.onUpdate({
      id: props.id,
      name: props.name,
      price: props.price,
      location: props.location,
      seller: props.seller,
    });
  };

  return (
    <div className="product-container">
      <div className="product-img">
        <img src={props.img ?? "product-placeholder.jpg"} alt="" />
      </div>
      <div className="product-info">
        <div className="product-name">Product name: {props.name}</div>
        <div className="product-price">Price: {props.price}</div>
        <div className="product-location">
          Location: {props.location ?? "Unknown"}
        </div>
        <div className="product-seller">
          Seller: {props.seller ?? "Unknown"}
        </div>
        <button onClick={onClick}>Update</button>
      </div>
    </div>
  );
};
