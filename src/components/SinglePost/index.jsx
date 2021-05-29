import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import { convertDate, convertPath } from "../../utils/commonFunctions";
import { useCallback } from "react";

const SinglePost = (props) => {
  const { post } = props;
  const history = useHistory();

  const onClick = useCallback(
    (title, id) => {
      const to = convertPath(title, id);
      history.push(to);
    },
    [history]
  );

  return (
    <div className="single_post post_type3 xs-mb90 post_type15">
      <div className="post_img border-radious5">
        <div className="img_wrap">
          <Link to={`/${convertPath(post?.title, post?.id)}`} title={post.title}>
            <img
              src={
                post?.thumbnail.formats.medium?.url ||
                post?.thumbnail.formats.thumbnail.url
              }
              alt={post.caption}
            />
          </Link>
        </div>
        <span className="tranding border_tranding">
          <FontAwesome name="bolt" />
        </span>
      </div>
      <div className="single_post_text">
        {/* <div className="row">
          <div className="col-9 align-self-cnter">
            <div className="meta3">
              <Link to={`/${convertPath(post?.title, post?.id)}`} title={post.title}>{post?.category.translatedName}</Link>
              <Link to={`/${convertPath(post?.title, post?.id)}`} title={post.title}>{convertDate(post?.updated_at)}</Link>
            </div>
          </div>
          {post?.isCanShare && (
            <div className="col-3 align-self-cnter">
              <div className="share_meta4 text-right">
                <ul className="inline">
                  <li>
                    <Link to="/">
                      <FontAwesome name="share" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div> */}
        {/* <div className="space-5" /> */}
        <h4>
          <Link to={`/${convertPath(post?.title, post?.id)}`} title={post.title}>{post?.title}</Link>
        </h4>
        {/* <div className="space-10" /> */}
        <p className="post-p" onClick={() => onClick(post.title, post.id)}>
          {post?.subDescription || post?.subDescrtiption}
        </p>
      </div>
    </div>
  );
};

SinglePost.propType = {
  post: PropTypes.any.isRequired,
  isCanShare: PropTypes.bool
};

export default SinglePost;
