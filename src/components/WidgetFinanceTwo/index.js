import React from "react";
import { Link } from "react-router-dom";
import { convertPath } from "../../utils/commonFunctions";
import FontAwesome from "../uiStyle/FontAwesome";

const WidgetFinanceTwo = ({ title, data }) => {
  return (
    <div className="finance mb30 white_bg border-radious5 shadow7 padding20">
      <div className="heading">
        <h3 className="widget-title">{title}</h3>
      </div>
      {data.map((item, i) => (
        <div key={item.title} className="single_post mb30 type18">
          <div className="post_img">
            <div className="img_wrap">
              <Link to={`/${convertPath(item.title, item.id)}`} title={item.title}>
                <img src={item.photo} alt="thumb" />
              </Link>
            </div>
            <span className="batch3 date">{item.updateAt}</span>
          </div>
          <div className="single_post_text py0">
            <h4>
              <Link to={`/${convertPath(item.title, item.id)}`} title={item.title}>
                {item.title}
              </Link>
            </h4>
            <div className="space-10" />
            <p className="post-p">{item.description}</p>
            <ul className="mt10 like_cm">
              <li>
                <Link to="/">
                  <FontAwesome name="eye" /> {item.view || 0}
                </Link>
              </li>
              {/* <li><Link to="/"><FontAwesome name="heart"/> 6745</Link></li> */}
              <li>
                <Link to="/">
                  <FontAwesome name="share" /> {item.share || 0}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WidgetFinanceTwo;
