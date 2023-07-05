import React from "react";
import "./Home.css";
import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function Home({ props }) {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://i.gadgets360cdn.com/large/amazon_prime_129_1633697887204.jpg"
          alt="Amazon Home page banner"
        /> */}

<div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 home__image"
                src="https://m.media-amazon.com/images/I/71WOnoALOFL._SX3000_.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 home__image"
                src="https://m.media-amazon.com/images/I/61STk08CFwL._SX3000_.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 home__image"
                src="https://m.media-amazon.com/images/I/71ZpfBLKxSL._SX3000_.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 home__image"
                src="https://m.media-amazon.com/images/I/510Rmi-4XVL._SX3000_.jpg"
                alt="Fourth slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="home__row">
          <Product
            id="1001"
            title="The Road to React
            Your journey to master plain yet pragmatic React.js"
            price={599}
            image="https://m.media-amazon.com/images/I/41DA89Z1RIL._SL500_.jpg"
            rating={4}
          />

          <Product
            id="1002"
            title="Apple 2022 12.9-inch iPad Pro (Wi-Fi, 256GB) - Space Grey (6th Generation)"
            price={49999}
            image="https://m.media-amazon.com/images/I/81c+9BOQNWL._SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1003"
            title="Godrej 564 L Multi Air Flow System Refrigerator"
            price={28708}
            image="https://m.media-amazon.com/images/I/51fOinp-IqL._SX679_.jpg"
            rating={3}
          />

          <Product
            id="1004"
            title="PHILIPS 9W B22 LED Cool Day Light LED Bulb, Pack of 5 (929001176714)"
            price={725}
            image="https://m.media-amazon.com/images/I/51A-+wfKBeL._AC_UF894,1000_QL80_.jpg"
            rating={4}
          />
          <Product
            id="1005"
            title="20W 20 WATT 7MM HOT MELT Glue Gun with ON Off Switch and LED Indicator (Free 10 Transparent Glue Sticks)"
            price={219}
            image="https://m.media-amazon.com/images/I/71e943N-zYL._SY450_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="1006"
            title="Acer Nitro Vg270 S 27 Inch (68.58 Cm) LCD 1920 x 1080 Pixels Monitor with LED Backlight Full Hd IPS Gaming I 0.5 Ms Response Time I 165Hz Refresh Rate I HDR 10 I AMD Radeon Free Sync I (Black)"
            price={13970}
            image="https://m.media-amazon.com/images/I/81HK954c4LL._SX425_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
