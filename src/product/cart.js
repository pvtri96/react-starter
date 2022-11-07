import "./cart.css";
import { Product } from "./product";

export const Cart = (props) => {
  if (!props.data || props.data.length === 0) {
    return (
      <div>
        <h2>Cart</h2>
        Empty cart, please add some.
      </div>
    );
  }
  return (
    <div>
      <h2>Cart</h2>
      {props.data.map((product) => (
        <Product key={product.name} {...product} />
      ))}
    </div>
  );
};
