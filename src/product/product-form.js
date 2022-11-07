import { useState } from "react";
import "./product-form.css";

export const ProductForm = (props) => {
  const [name, setName] = useState("");
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const [price, setPrice] = useState(0);
  const onPriceChange = (event) => {
    setPrice(event.target.value);
  };

  const [seller, setSeller] = useState("");
  const onSellerChange = (event) => {
    setSeller(event.target.value);
  };
  const [location, setLocation] = useState("");
  const onLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({ name, price, seller, location });

    setName("");
    setPrice(0);
    setSeller("");
    setLocation("");
  };

  return (
    <form onSubmit={onSubmit} className="product-form">
      <h2>Product form</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={onNameChange}
      />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        id="price"
        value={price}
        onChange={onPriceChange}
      />

      <label htmlFor="seller">Seller</label>
      <input
        type="text"
        name="seller"
        id="seller"
        value={seller}
        onChange={onSellerChange}
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        value={location}
        onChange={onLocationChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
