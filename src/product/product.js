import "./product.css";

export const Product = (props) => {
  const onAddToCart = () => {
    const product = {
      name: props.name,
      price: props.price,
      seller: props.seller,
      location: props.location,
    };
    console.log("product add to cart", product);
    props.onAddToCart(product);
  };

  return (
    <div className="product-container">
      <div className="product-img">
        <img src={props.img ?? "product-placeholder.jpg"} alt="" />
      </div>
      <div className="product-info">
        <span className="product-name">Name: {props.name}</span>
        {props.quantity && (
          <span className="product-name">Quantity: ({props.quantity})</span>
        )}
        <span className="product-price">Price: {props.price} VND</span>
        <span className="product-seller">Seller: {props.seller}</span>
        <span className="product-location">Location: {props.location}</span>
        {props.onAddToCart && (
          <button onClick={onAddToCart}>Add to cart</button>
        )}
      </div>
    </div>
  );
};
