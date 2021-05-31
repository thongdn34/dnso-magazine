import React from "react";
import { Link } from "react-router-dom";
import { convertPath } from "../../utils/commonFunctions";

// const opinionPosts = [
//   {
//     photo: opinion41,
//     title: "Copa America: Luis Suarez from devastated US",
//     desc:
//       "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…"
//   },
//   {
//     photo: opinion42,
//     title: "Japan’s virus success puzzled the world luck running out?",
//     desc:
//       "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…"
//   },
//   {
//     photo: opinion42,
//     title: "Japan’s virus success puzzled the world luck running out?",
//     desc:
//       "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…"
//   },
// ];
const WidgetOpinionNews = (props) => {
  const { opinionPosts } = props;
  return (
    <div className="mb30 white_bg border-radious5 shadow7 padding20">
      <div className="heading">
        <h3 className="widget-title">Chuyên gia</h3>
      </div>
      {opinionPosts.map((item, i) => (
        <div key={i} className="single_post mb10 type18">
          <div className="post_img">
            <div className="img_wrap">
              <Link to={`/${convertPath(item.title, item.id)}`} title={item.title}>
                <img src={item.photo} alt="thumb" />
              </Link>
            </div>
          </div>
          <div className="single_post_text py0">
            <h4>
            <Link to={`/${convertPath(item.title, item.id)}`} title={item.title}>{item.title}</Link>
            </h4>
            {/* <div className="space-10" /> */}
            <p className="post-p">{item.description}</p>
            {/* <ul className="mt20 like_cm">
              <li>
                <Link to="/">
                  <FontAwesome name="eye" />
                  {item.view || 0}
                </Link>
              </li>
              <li><Link to="/"><FontAwesome name="heart"/> 6745</Link></li>
              <li>
                <Link to="/">
                  <FontAwesome name="share" />
                  {item.share || 0}
                </Link>
              </li>
            </ul> */}
          </div>
          <div className="border4"></div>
        </div>
      ))}
    </div>
  );
};

export default WidgetOpinionNews;
