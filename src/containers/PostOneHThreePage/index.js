import React, { Fragment, useEffect } from "react";
import MainMenuThree from "../../components/MainMenuThree";
import BannerSectionThree from "../../components/BannerSectionThree";
import FollowUs from "../../components/FollowUs";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import NewsLetter from "../../components/NewsLetter";
import { Link, NavLink } from "react-router-dom";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import CategoryFour from "../../components/CategoryFour";
import PostOnePagination from "../../components/PostOnePagination";

import banner4 from "../../doc/img/bg/banner4.png";
import finance41 from "../../doc/img/finance/finance41.jpg";
import single_post1 from "../../doc/img/blog/single_post1.jpg";
import author2 from "../../doc/img/author/author2.png";
import smail1 from "../../doc/img/blog/smail1.jpg";
import big1 from "../../doc/img/blog/big1.jpg";
import quote_1 from "../../doc/img/blog/quote_1.jpg";
import quote from "../../doc/img/icon/q4.png";
import big2 from "../../doc/img/blog/big2.jpg";
import OurBlogSectionTwo from "../../components/OurBlogSectionTwo";
import BlogComment from "../../components/BlogComment";
import { MarkdownPreview } from "react-marked-markdown";
import { connect } from "react-redux";
import { getAPost } from "../../store/actions/posts";

const financePosts = [
  {
    photo: finance41,
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with seates screening from room amphitheater pond with sandy"
  },
  {
    photo: finance41,
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with seates screening from room amphitheater pond with sandy"
  }
];

const PostOneHThreePage = (props) => {
  const { post, getPost } = props;

  useEffect(() => {
    const id = props.match.params.id.split("-").slice(-1)[0];

    getPost(id);
  }, [getPost, props.match.params.id]);

  return (
    <Fragment>
      <MainMenuThree />
      <div className="single-post archives layout3 post post1 padding-top-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bridcrumb">
                <Link to="/">Home</Link>
                {" / "}
                <Link to="/">{`${post?.category?.translatedName}`}</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <div className="row">
                <div className="col-6 align-self-center">
                  <div className="page_category">
                    <h4>{post?.category?.translatedName}</h4>
                  </div>
                </div>
              </div>
              <div className="space-30" />
              <div className="single_post_heading">
                <h1>{post?.title}</h1>
                <div className="space-10" />
              </div>
              <MarkdownPreview value={post?.descriptions} />
              {/* <div className="space-40" />
              <div className="tags">
                <ul className="inline">
                  <li className="tag_list">
                    <FontAwesome name="tag" /> tags
                  </li>
                  <li>
                    <Link to="/">Health</Link>
                  </li>
                  <li>
                    <Link to="/">World</Link>
                  </li>
                  <li>
                    <Link to="/">Corona</Link>
                  </li>
                </ul>
              </div> */}
              <div className="space-40" />
              <div className="border_black" />
              <div className="space-40" />
              {/* <PostOnePagination /> */}
            </div>
            <div className="col-md-6 col-lg-4">
              {/* <FollowUs title="Follow Us" /> */}
              <div className="single-post__banner banner2 mb30 border-radious5">
                <Link to="">
                  <img src={banner4} alt="banner4" />
                </Link>
              </div>
              {/* <WidgetFinanceTwo data={financePosts} title="Finance" /> */}
              {/* <NewsLetter
                titleClass="white"
                className="news_letter4 border-radious5"
              /> */}
              <CategoryFour />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="space-60" />
      <OurBlogSectionTwo /> */}
      {/* <div className="space-60"/>
            <BlogComment theme={3}/> */}
      <div className="space-60" />
      <BannerSectionThree />
    </Fragment>
  );
};

const actions = (dispatch) => ({
  getPost: (id) => dispatch(getAPost({ id }))
});

const selects = (state) => ({
  post: state.posts.post
});
export default connect(selects, actions)(PostOneHThreePage);
