import { Product } from "./product";
import "./products.css";

export const Products = (props) => {
  if (!props.data || props.data.length === 0) {
    return (
      <div>
        <h2>Products list</h2>
        No products, please add some.
      </div>
    );
  }
  return (
    <div>
      <h2>Products list</h2>
      {props.data.map((product) => (
        <Product
          key={product.name}
          {...product}
          onAddToCart={props.onAddToCart}
        />
      ))}
    </div>
  );
};
