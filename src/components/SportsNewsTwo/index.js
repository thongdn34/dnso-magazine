import React, { Fragment } from "react";
import { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import sports41 from "../../doc/img/sports/sports41.jpg";
import sports42 from "../../doc/img/sports/sports42.jpg";
import sports43 from "../../doc/img/sports/sports43.jpg";
import sports44 from "../../doc/img/sports/sports44.jpg";
import sports45 from "../../doc/img/sports/sports45.jpg";
import sports46 from "../../doc/img/sports/sports46.jpg";
import sports47 from "../../doc/img/sports/sports47.jpg";
import { convertPath } from "../../utils/commonFunctions";
import FontAwesome from "../uiStyle/FontAwesome";

const _sportsNews = [
  {
    photo: sports42,
    title: "Copa America: Luis Suarez from devastated US1"
  },
  {
    photo: sports43,
    title: "Copa America: Luis Suarez from devastated US2"
  },
  {
    photo: sports44,
    title: "Copa America: Luis Suarez from devastated US3"
  },
];

const SportsNewsTwo = (props) => {
  const { sportsNews, category } = props;
  const history = useHistory();

  const onClick = useCallback(
    (title, id) => {
      const to = convertPath(title, id);
      history.push(to);
    },
    [history]
  );
  let list = _sportsNews

  if (sportsNews.length) {
    list = sportsNews
  }

  return (
    <div className="sports_wrap mb30 white_bg border-radious5 shadow7 padding20">
      <div className="finance ">
        <div className="heading">
          <h3 className="widget-title">{category}</h3>
        </div>
        <div className="single_post type18">
          <div className="post_img">
            <div className="img_wrap">
              <Link to={`/${convertPath(list?.[0].title, list?.[0].id)}`}>
                <img src={list?.[0]?.photo} alt="sports41" />
              </Link>
            </div>
            <span className="batch3 date">{list?.[0]?.updateAt}</span>
          </div>
          <div className="single_post_text py0">
            <h4>
              <Link to={`/${convertPath(list?.[0].title, list?.[0].id)}`}>{list?.[0]?.title}</Link>
            </h4>
            <div className="space-10" />
            <p className="post-p">{list?.[0]?.description}</p>
            <ul className="mt10 like_cm">
              <li>
                <Link to="/">
                  <FontAwesome name="eye" />
                  {list?.[0]?.view || 0}
                </Link>
              </li>
              {/* <li><Link to="/"><FontAwesome name="heart"/> 6745</Link></li> */}
              <li>
                <Link to="/">
                  <FontAwesome name="share" />
                  {list?.[0]?.share || 0}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-30" />
        <div className="border4" />
        <div className="space-30" />
      </div>
      <div className="sport_buttom">
        {list?.slice(1).map((item, i) => (
          <Fragment key={item.title}>
            <div className="single_post type10 type16 widgets_small mb15">
              <div className="post_img">
                <div className="img_wrap">
                  <Link to={`/${convertPath(item.title, item.id)}`}>
                    <img src={item.photo} alt="thumb" />
                  </Link>
                </div>
              </div>
              <div className="single_post_text">
                <h4>
                  <Link to={`/${convertPath(item.title, item.id)}`}>{item.title}</Link>{item?.view || 0}
                </h4>
                <ul className="like_cm">
                  <li>
                    <Link to="/">
                      <FontAwesome name="eye" />{item?.share || 0}
                    </Link>
                  </li>
                  {/* <li><Link to="/"><FontAwesome name="heart"/> 6745</Link></li> */}
                </ul>
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
        ))}
        <div className="space-20" />
        <Link to="/" className="showmore">
          Xem thêm
        </Link>
      </div>
    </div>
  );
};

export default SportsNewsTwo;
