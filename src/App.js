import { useState } from "react";
import "./App.css";
import { Cart } from "./product/cart";
import { ProductForm } from "./product/product-form";
import { Products } from "./product/products";
import { products } from "./products-data";

function App() {
  const [cart, setCart] = useState([]);
  const onAddToCart = (product) => {
    console.log("product info from App", product);

    if (cart.find((p) => p.name === product.name)) {
      setCart(
        cart.map((p) => {
          if (p.name === product.name) {
            return {
              ...p,
              quantity: p.quantity + 1,
            };
          }
          return p;
        })
      );
    } else {
      const cartProduct = {
        ...product,
        quantity: 1,
      };

      setCart([...cart, cartProduct]);
    }
  };

  const onProductSubmit = (product) => {
    console.log("created product", product);
  };

  return (
    <div className="App">
      <ProductForm onSubmit={onProductSubmit} />
      <Cart data={cart} />
      <Products data={products} onAddToCart={onAddToCart} />
    </div>
  );
}

export default App;
