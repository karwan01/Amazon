import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Products({ id, title, price, description, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        description,
        rating,
        image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(5)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Products;
