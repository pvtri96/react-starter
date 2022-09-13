import { Cart } from "./cart";
import { ProductForm } from "./product-form";
import { Products } from "./products";

export const ProductModule = (props) => {
  return (
    <>
      <ProductForm onSubmit={(data) => console.log("data", data)}></ProductForm>
      <Products data={props.initialProducts}></Products>
      <Cart data={props.initialCart}></Cart>
    </>
  );
};
