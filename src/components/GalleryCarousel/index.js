import React from "react";
import { Link } from "react-router-dom";
import gallery41 from "../../doc/img/gallary/gallery41.jpg";
import gallery42 from "../../doc/img/gallary/gallery42.jpg";
import Swiper from "react-id-swiper";
import { convertPath } from "../../utils/commonFunctions";

const _galleryPosts = [
  {
    photo: gallery41,
    title:
      "Japan’s virus success has puzzled the world. Is its luck running out?"
  },
  {
    photo: gallery42,
    title:
      "Japan’s virus success has puzzled the world. Is its luck running out?"
  }
];

const GalleryCarousel = (props) => {
  const { galleryPosts } = props;
  const params = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true
    }
  };
  const renderGallery = () => {
    let list = _galleryPosts;

    if (galleryPosts.length) {
      list = galleryPosts;
    }

    return list.map((item, i) => (
      <div key={i} className="single_post post_type6 border-radious7 xs-mb30">
        <div className="post_img gradient1">
          <div className="img_wrap">
            <Link to={`/${convertPath(item.title, item.id)}`} style={{ height: '411px' }} title={item.title}>
              <img src={item.photo} alt="thumb" />
            </Link>
          </div>
        </div>
        <div className="single_post_text">
          <p className="meta meta_style4">
            {item.category} <span>&nbsp;| &nbsp; {item.updateAt}</span>
          </p>
          <h4>
            <Link to={`/${convertPath(item.title, item.id)}`} title={item.title}>{item.title}</Link>
          </h4>
        </div>
      </div>
    ));
  };
  return (
    <div className="dots_style1 mb30">
      <div className="gallary_carousel">
        <Swiper {...params}>
          {renderGallery()}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryCarousel;
