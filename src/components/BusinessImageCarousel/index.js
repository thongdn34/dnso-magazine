import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import FontAwesome from "../uiStyle/FontAwesome";
import { convertPath } from "../../utils/commonFunctions";

// import pop51 from '../../doc/img/popular/pop51.jpg';
// import pop52 from '../../doc/img/popular/pop52.jpg';
// import pop53 from '../../doc/img/popular/pop53.jpg';
// import pop54 from '../../doc/img/popular/pop54.jpg';
// import pop56 from '../../doc/img/popular/pop56.jpg';
// import gallery42 from '../../doc/img/gallary/gallery42.jpg';

// const populerPosts = [
//     {
//         photo: pop51,
//         title: 'The city with highest quality of life in world.'
//     },
//     {
//         photo: pop52,
//         title: 'The city with highest quality of life in world.'
//     },
//     {
//         photo: pop53,
//         title: 'The city with highest quality of life in world.'
//     },
//     {
//         photo: pop54,
//         title: 'The city with highest quality of life in world.'
//     },
//     {
//         photo: pop56,
//         title: 'The city with highest quality of life in world.'
//     },
// ];

// const galleryPosts = [
//     {
//         photo: gallery42,
//         title: 'apan’s virus success has puzzled the world. Is its luck running out?'
//     },
//     {
//         photo: gallery42,
//         title: 'apan’s virus success has puzzled the world. Is its luck running out?'
//     },
//     {
//         photo: gallery42,
//         title: 'apan’s virus success has puzzled the world. Is its luck running out?'
//     },
// ];

const BusinessImageCarousel = (props) => {
  const { galleryPosts, populerPosts } = props;
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
    slidesPerView: 1,
    loop: true
  };

  const renderSwiper = (list) => {
    return (
      <div className="image_carousel nav_style4 mb30">
        <Swiper getSwiper={setSwiper} {...params}>
          {list.map((item, i) => (
            <div
              key={i}
              className="single_post gradient1 post_type6 border-radious7 xs-mb30"
            >
              <div className="post_img gradient1">
                <div className="img_wrap">
                  <Link to={`/${convertPath(item.title, item.id)}`}>
                    <img src={item.photo} alt="thumb" />
                  </Link>
                </div>
              </div>
              <div className="single_post_text">
                <p className="meta meta_style4">
                  Business <span>&nbsp;| &nbsp; March 26, 2020</span>
                </p>
                <h4>
                  <Link to="/video_post1">{item.title}</Link>
                </h4>
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

  const renderVerticalList = (list) => {
    return list.map((item, i) => {
      return (
        <Fragment key={i}>
          <div className="single_post type10 type16 type22 widgets_small mb15">
            <div className="post_img">
              <div className="img_wrap">
                <Link to={`/${convertPath(item.title, item.id)}`}>
                  <img src={item.photo} alt="thumb" />
                </Link>
              </div>
            </div>
            <div className="single_post_text">
              <h4>
                <Link to={`/${convertPath(item.title, item.id)}`}>
                  {item.title}
                </Link>
              </h4>
            </div>
          </div>
          {i + 1 < list.length ? (
            <Fragment>
              <div className="space-15" />
              <div className="border4" />
              <div className="space-15" />
            </Fragment>
          ) : null}
        </Fragment>
      );
    });
  };

  return (
    <div className="row">
      {/* <div className="col-lg-7">{renderSwiper(galleryPosts)}</div> */}
      <div className="col-lg-6">
        <div className="padding20 white_bg border-radious5">
          <p className="meta before">{galleryPosts?.[0]?.category}</p>
          <div className="space-15" />
          {renderVerticalList(galleryPosts)}
        </div>
      </div>
      {populerPosts?.length ? (
        <div className="col-lg-6">
          <div className="padding20 white_bg border-radious5">
            <p className="meta before">{populerPosts?.[0]?.category}</p>
            <div className="space-15" />
            {renderVerticalList(populerPosts)}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BusinessImageCarousel;
