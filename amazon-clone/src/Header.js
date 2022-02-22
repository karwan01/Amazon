import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      {/* Log on the left ->img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      {/* Search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 4 links  */}
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__options">
            <span className="header__optionFirstLine">hello, Karwan</span>
            <span className="header__optionSecondLine">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionFirstLine">Returns</span>
            <span className="header__optionSecondLine">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionFirstLine">Your</span>
            <span className="header__optionSecondLine">Prime</span>
          </div>
        </Link>
        {/* basket link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__numberOfItems">{basket?.length}</span>
          </div>
        </Link>
      </div>

      {/* Basket icon with number */}
    </nav>
  );
}

export default Header;
