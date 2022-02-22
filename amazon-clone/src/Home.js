import React, { useState } from "react";
import Banner from "./Banner";
import Products from "./Products";
import "./Home.css";

function Home() {
  // const [product, setProduct] = useState([]);
  return (
    <div>
      <Banner />
      {/* ProductFeed */}
      <div className="home__row">
        <Products
          id={34534}
          title={"title"}
          price={445123}
          description={"description"}
          category={"category"}
          image={"https://links.papareact.com/6ff"}
        />
        <Products
          id={125543}
          title={"title"}
          price={123}
          description={"description"}
          category={"category"}
          image={"https://links.papareact.com/6ff"}
        />
        <Products
          id={12553}
          title={"title"}
          price={123}
          description={"description"}
          category={"category"}
          image={"https://links.papareact.com/6ff"}
        />
      </div>
      <div className="home__row">
        <Products
          id={123}
          title={"title"}
          price={123}
          description={"description"}
          category={"category"}
          image={"https://links.papareact.com/6ff"}
        />
        <Products
          id={1245453}
          title={"title"}
          price={123}
          description={"description"}
          category={"category"}
          image={"https://links.papareact.com/6ff"}
        />
      </div>
      <div className="home__row">
        <Products
          id={1223423443}
          title={"title"}
          price={123}
          description={"description"}
          rating={5}
          image={"https://links.papareact.com/6ff"}
        />
      </div>
    </div>
  );
}
export default Home;
