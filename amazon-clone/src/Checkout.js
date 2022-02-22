import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      {basket?.length === 0 ? (
        <div className="checkout__divEmpty">
          <ShoppingBasketIcon className="checkout__emptyIcon" />
          <div className="">
            <h2>Your Amazon Cart is empty</h2>
            <Link to="/checkout">See recommendations</Link>
          </div>
        </div>
      ) : (
        <div className="checkout__container">
          {/* List out all of the Checkout Products */}

          <div>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
          <div className="checkout__subtotal">
            {basket.length > 0 && <Subtotal />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
