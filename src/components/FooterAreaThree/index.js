import React from "react";
import { Link } from "react-router-dom";
import logo42 from "../../doc/img/logo/logo2.png";
import FooterNewsCategories from "../FooterNewsCategories";

const FooterAreaThree = () => {
  return (
    <div className="footer footer_area3 ">
      <div className="border_black" />
      <div className="space-30" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="single_footer3 mb30">
              <div className="logo">
                <Link to="/home-three">
                  <img src={logo42} alt="logo" />
                </Link>
                <div className="space-10" />
              </div>
              <p>
                Website đang hoạt động thử nghiệm và đang hoàn tất thủ tục xin
                giấy phép hoạt động
              </p>
            </div>
            {/* <div className="footer_contact">
              <h3 className="widget-title2">Newspark news services</h3>
              <div className="single_fcontact">
                <div className="fcicon">
                  <img src={phone_black} alt="phone_black" />
                </div>
                <Link to="/">On your mobile</Link>
              </div>
              <div className="single_fcontact">
                <div className="fcicon">
                  <img src={speaker_black} alt="speaker_black" />
                </div>
                <Link to="/">On smart speakers</Link>
              </div>
              <div className="single_fcontact">
                <div className="fcicon">
                  <img src={envelope_black} alt="envelope_black" />
                </div>
                <Link to="/">Contact Newspark news</Link>
              </div>
            </div> */}
            {/* <div className="twitter_feeds mb30">
              <h3 className="widget-title">Twitter feed</h3>
              {twitts.map((item, i) => (
                <Fragment key={i}>
                  <div key={i} className="single_twitter_feed">
                    <div className="twitter_feed_icon">
                      <FontAwesome name="twitter" />
                    </div>
                    <h6>
                      {item.title}… <span>{item.linkText}</span>
                    </h6>
                    <p>{item.date}</p>
                  </div>
                  {i + 1 < twitts.length ? (
                    <Fragment>
                      <div className="space-30" />
                      <div className="border_black" />
                      <div className="space-30" />
                    </Fragment>
                  ) : null}
                </Fragment>
              ))}
            </div> */}
          </div>
          <div className="col-md-6 col-lg-8">
            <div className="single_footer_nav mb30">
              <FooterNewsCategories />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <p>&copy; Copyright 2020, All Rights Reserved</p>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="copyright_menus text-right">
                <div className="language" />
                <div className="copyright_menu inline">
                  <ul>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Advertise</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy & Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
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

export default FooterAreaThree;
