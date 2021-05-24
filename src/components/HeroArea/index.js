import React, { useState } from "react";
import { useCallback } from "react";
// import Swiper from "react-id-swiper";
import { useHistory } from "react-router-dom";

import { convertPath } from "../../utils/commonFunctions";

const HeroArea = (props) => {
  const { posts } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const history = useHistory();

  const onClick = useCallback(
    (title, id) => {
      const to = convertPath(title, id);
      history.push(to);
    },
    [history]
  );
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
                  <h1 onClick={() => onClick(currentPost?.title, currentPost?.id)}>{currentPost.title}</h1>
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
    <div className="wrapper_items container">
      <div className="wrapper_carousel">{renderHeroPost()}</div>
      <div className="container d-md-block d-none">
        <div className="row">
          <div className="col-12">
            <div className="welcome_list">
              <div className="wlc_slide_demo1 d-flex">{renderListNews()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
