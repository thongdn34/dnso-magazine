import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import trend31 from "../../doc/img/trending/trend31.jpg";
import SinglePost from "../SinglePost";
import FontAwesome from "../uiStyle/FontAwesome";
import { convertPath } from "../../utils/commonFunctions";

const renderRawPost = () => {
  return (
    <div className="single_post post_type3 xs-mb90 post_type15">
      <div className="post_img border-radious5">
        <div className="img_wrap">
          <Link to="/home-three">
            <img src={trend31} alt="trend31" />
          </Link>
        </div>
        <span className="tranding border_tranding">
          <FontAwesome name="bolt" />
        </span>
      </div>
      <div className="single_post_text">
        <div className="row">
          <div className="col-9 align-self-cnter">
            <div className="meta3">
              <Link to="/">TECHNOLOGY</Link>
              <Link to="/">March 26, 2020</Link>
            </div>
          </div>
          <div className="col-3 align-self-cnter">
            <div className="share_meta4 text-right">
              <ul className="inline">
                <li>
                  <Link to="/">
                    <FontAwesome name="bookmark" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesome name="share" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-5" />
        <h4>
          <Link to="/post1">
            Japan’s virus puzzled the world luck running out?
          </Link>
        </h4>
        <div className="space-10" />
        <p className="post-p">
          The property, complete with 30-seat screening from room, a 100-seat
          amphitheater and a swimming pond with sandy shower…
        </p>
      </div>
    </div>
  );
};
const TrendingNewsThree = (props) => {
  const renderFirstPost = () => {
    if (!props.posts.length) {
      return renderRawPost();
    }

    return <SinglePost post={props?.posts[0]} />;
  };

  const renderRemainingPosts = () => {
    return props.posts.slice(1).map((item, i) => (
      <Fragment key={item.title}>
        <div className="single_post type10 type16 widgets_small mb15 single-post-mb">
          <div className="post_img">
            <div className="img_wrap">
              <Link to={`/${convertPath(item?.title, item?.id)}`} title={item.title}>
                <img src={item?.thumbnail?.formats.thumbnail.url} alt={item.title} />
              </Link>
            </div>
          </div>
          <div className="single_post_text padding-right-20">
            {/* <div className="meta3">
              <Link to="/">{item.category.translatedName}</Link>
              <Link to={`/${convertPath(item?.title, item?.id)}`} title={item.title}>{convertDate(item?.updated_at)}</Link>
            </div> */}
            <h4>
              <Link to={`/${convertPath(item?.title, item?.id)}`} title={item.title}>{item.title}</Link>
            </h4>
          </div>
        </div>
        {i + 1 < props.posts.length ? (
          <Fragment>
            {/* <div className="space-5" /> */}
            <div className="border4" />
            <div className="space-15" />
          </Fragment>
        ) : null}
      </Fragment>

		))
  };
  return (
    <div className="white_bg tranding3 padding20 border-radious5 mb10 shadow7">
      <div className="row">
        <div className="col-12">
          <div className="heading">
            <h2 className="widget-title">Tin mới nhất</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="colum-70">{renderFirstPost()}</div>
        <div className="colum-30">
          <div className="popular_items scroll_bar">
            {/* {trendingNews.map((item, i) => (
              <Fragment key={i}>
                <div className="single_post type10 type16 widgets_small mb15">
                  <div className="post_img">
                    <div className="img_wrap">
                      <Link to="/">
                        <img src={item.photo} alt="thumb" />
                      </Link>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <div className="meta3">
                      <Link to="">TECHNOLOGY</Link>
                      <Link to="">March 26, 2020</Link>
                    </div>
                    <h4>
                      <Link to="/">{item.title}</Link>
                    </h4>
                  </div>
                </div>
                {i + 1 < trendingNews.length ? (
                  <Fragment>
                    <div className="space-5" />
                    <div className="border4" />
                    <div className="space-15" />
                  </Fragment>
                ) : null}
              </Fragment>
            ))} */}
						{renderRemainingPosts()}
          </div>
        </div>
      </div>
    </div>
  );
};

// const selects = (state) => ({
//   posts: state.posts.posts
// });

// export default connect(selects, null)(TrendingNewsThree);
export default TrendingNewsThree;
