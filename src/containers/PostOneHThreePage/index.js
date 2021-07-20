import React, { Fragment, useEffect } from "react";
import MainMenuThree from "../../components/MainMenuThree";
import BannerSectionThree from "../../components/BannerSectionThree";
import { Link } from "react-router-dom";
import CategoryFour from "../../components/CategoryFour";

import { MarkdownPreview } from "react-marked-markdown";
import { connect } from "react-redux";
import { getAPost } from "../../store/actions/posts";
import { banner4 } from "../../doc/img";
import { Helmet } from "react-helmet";

const PostOneHThreePage = (props) => {
  const { post, getPost, description } = props;

  useEffect(() => {
    const id = props.match.params.id.split("-").slice(-1)[0];

    getPost(id);
  }, [getPost, props.match.params.id]);

  useEffect(() => {
    if (post) {
      document.getElementsByTagName("meta")["description"].content = description;
      document.getElementsByTagName("meta")["og:image"].content =
        post.thumbnail?.formats.thumbnail?.url;
      document.getElementsByTagName("meta")["og:image:alt"].content =
        post.thumbnail?.formats.thumbnail?.hash;
    }
  }, [description, post]);

  return (
    <Fragment>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
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
  post: state.posts.post,
  title: state.meta.title,
  description: state.meta.description
});
export default connect(selects, actions)(PostOneHThreePage);
