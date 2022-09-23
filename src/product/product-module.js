import { useState } from "react";
import { Cart } from "./cart";
import { ProductForm } from "./product-form";
import { Products } from "./products";

export const ProductModule = (props) => {
  const [products, setProducts] = useState(props.initialProducts ?? []);

  const onProductSubmit = (product) => {
    console.log(product);
    setProducts([product, ...products]);
  };

  const [updatingProduct, setUpdatingProduct] = useState(null);

  const onProductUpdateClick = (product) => {
    console.log("update this product", product);
    setUpdatingProduct(product);
  };

  return (
    <div className="App">
      <ProductForm
        onSubmit={onProductSubmit}
        updatingProduct={updatingProduct}
      ></ProductForm>
      <Cart data={[]}></Cart>
      <Products data={products} onUpdate={onProductUpdateClick}></Products>
    </div>
  );
};
