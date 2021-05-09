import React, { useState } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from "react-id-swiper";
import { convertPath } from "../../utils/commonFunctions";

const BusinessCarousel = (props) => {
  const { businessPosts } = props;
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
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  };

  if (!businessPosts?.length) {
    return null;
  }

  return (
    <div className="business_carousel nav_style4 mb30 ">
      <Swiper getSwiper={setSwiper} {...params}>
        {businessPosts.map((item, i) => (
          <div
            key={i}
            className="business_carousel_items white_bg padding20 shadow7"
          >
            <div className="single_international">
              <p className="meta before">{item.category}</p>
              <h4>
                <Link to={`/${convertPath(item.title, item.id)}`}>{item.title}</Link>
              </h4>
              <div className="row">
                <div className="col-7 align-self-center">
                  <p className="business_carousel__description">{item.description}</p>
                </div>
                <div className="col-5 align-self-center">
                  <div className="img_wrap">
                    <Link to={`/${convertPath(item.title, item.id)}`}>
                      <img src={item.photo} alt={item.caption} />
                    </Link>
                  </div>
                </div>
              </div>
              <ul className="mt20 like_cm">
                <li>
                  <Link to="/">
                    <FontAwesome name="eye" />{item.view || 0}
                  </Link>
                </li>
                {/* <li><Link to="/"><FontAwesome name="heart"/> 6745</Link></li> */}
                <li>
                  <Link to="/">
                    <FontAwesome name="share" />{item.share || 0}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Swiper>
      <div className="owl-nav">
        <div onClick={goPrev} className="owl-prev">
          <FontAwesome name="angle-left" />
        </div>
        <div onClick={goNext} className="owl-next">
          <FontAwesome name="angle-right" />
        </div>
      </div>
    </div>
  );
};

export default BusinessCarousel;
