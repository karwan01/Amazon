import React from "react";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <p>
        Subtotal ({1}item): <b>${5.35}</b>
      </p>
      <button className="checkout__procedBtn">Proced to Checkout</button>
    </div>
  );
}

export default Subtotal;
