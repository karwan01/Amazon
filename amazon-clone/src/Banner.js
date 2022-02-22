import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner__container">
      <div className="banner__divGradient" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false} //three dots of below screen
        showThumbs={false}
        interval={5000}
      >
        <Link to="/">
          <div>
            <img
              className="banner__img"
              loading="lazy"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/April/Hero/Hero_Currency_EN_2X._CB466692686_.jpg"
              alt=""
            />
          </div>
        </Link>

        <Link to="/">
          <div>
            <img
              className="banner__img"
              loading="lazy"
              src="https://links.papareact.com/6ff"
              alt=""
            />
          </div>
        </Link>

        <Link to="/">
          <div>
            <img
              className="banner__img"
              loading="lazy"
              src="https://links.papareact.com/7ma"
              alt=""
            />
          </div>
        </Link>
      </Carousel>
    </div>
  );
}

export default Banner;
