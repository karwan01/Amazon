import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REM0VE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(5)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <StarIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
