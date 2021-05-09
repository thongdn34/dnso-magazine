import React, { useState } from "react";
import Swiper from "react-id-swiper";

import hero1 from "../../doc/img/bg/hero1.jpg";
import hero2 from "../../doc/img/bg/hero2.jpg";
import hero3 from "../../doc/img/bg/hero3.jpg";

const slider = [
  {
    photo: hero1,
    category: "Business",
    date: "March 2020",
    title:
      "Setting politics aside, Sequoia raises $3.4 billion for US and China investments"
  },
  {
    photo: hero2,
    category: "Business",
    date: "March 2020",
    title:
      "Setting politics aside, Sequoia raises $3.4 billion for US and China investments"
  },
  {
    photo: hero3,
    category: "Business",
    date: "March 2020",
    title:
      "Setting politics aside, Sequoia raises $3.4 billion for US and China investments"
  },
  {
    photo: hero1,
    category: "Business",
    date: "March 2020",
    title:
      "Setting politics aside, Sequoia raises $3.4 billion for US and China investments"
  }
];
const HeroArea = (props) => {
  const { posts } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const params = {
    activeSlideKey: activeIndex,
    effect: "fade"
  };

  const renderHeroPost = () => {
    if (!posts[0]) {
      return null;
    }

    const currentPost = posts[activeIndex];
    return (
      <div
        className="welcome4_area_wrap wlc_overlay"
        style={{
          background: `url(${currentPost.photo}) center/contain no-repeat`
        }}
      >
        <div className="welcome4_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="welcome_txt">
                  <p className="title_meta">
                    {currentPost.category} <span>| {currentPost.date}</span>
                  </p>
                  <h1>{currentPost.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderListNews = () => {
    if (!posts[0]) {
      return null;
    }

    return posts?.map((item, index) => (
      <div
        key={item.title}
        className={`single_news_list ${activeIndex === index ? "active" : ""}`}
        onClick={() => setActiveIndex(index)}
      >
        <p>
          <span>{`0${index + 1}`}</span> {item.category}
        </p>
        <h4>{item.title}</h4>
      </div>
    ));
  };
  return (
    <div className="wrapper_items">
      <div className="wrapper_carousel">{renderHeroPost()}</div>
      <div className="container d-md-block d-none">
        <div className="row">
          <div className="col-12">
            <div className="welcome_list">
              <div className="wlc_slide_demo1 d-flex">
                {renderListNews()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
