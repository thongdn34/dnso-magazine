import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import FontAwesome from "../uiStyle/FontAwesome";
import tempIcon from "../../doc/img/icon/s4.png";
import logo from "../../doc/img/logo/logo2.png";

const LogoAreaThree = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  return (
    <div className="logo_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 align-self-center">
            <div className="logo4">
              <Link to="/index">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 align-self-center">
            <div className="row justify-content-end">
              <div className="space-5" />
              <div className="col-md-6 col-lg-5 align-self-center">
                <div className="v3datentemp">
                  <div className="date4">
                    <h5>
                      Thursday <span>March 26, 2020</span>
                    </h5>
                  </div>
                  <div className="temp d-none d-lg-block">
                    <div className="temp_wap">
                      <div className="temp_icon">
                        <img src={tempIcon} alt="icon" />
                      </div>
                      <h3 className="temp_count">13</h3>
                      <p>San Francisco</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 align-self-center fix_width_social">
                <div className="social4 text-right">
                  <ul className="inline">
                    <li>
                      <Link to="/">
                        <FontAwesome name="twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesome name="facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesome name="youtube-play" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FontAwesome name="instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoAreaThree;
