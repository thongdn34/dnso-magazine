import React, { Fragment, useEffect } from "react";
import MainMenuThree from "../../components/MainMenuThree";
import BannerSectionThree from "../../components/BannerSectionThree";
// import FollowUs from "../../components/FollowUs";
// import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
// import NewsLetter from "../../components/NewsLetter";
import { Link } from "react-router-dom";
// import FontAwesome from "../../components/uiStyle/FontAwesome";
import InternationalNews from "../../components/InternationalNews";

import banner4 from "../../doc/img/bg/banner4.png";
// import finance41 from "../../doc/img/finance/finance41.jpg";
import { connect } from "react-redux";
import {
  getPostsCategories,
  getPostsSubCategories,
  getPostsNestedCategories
} from "../../store/actions/categories";
import { formatDataPosts } from "../../utils/commonFunctions";

// const financePosts = [
//   {
//     photo: finance41,
//     title: "Copa America: Luis Suarez from devastated US",
//     description:
//       "The property, complete with seates screening from room amphitheater pond with sandy"
//   },
//   {
//     photo: finance41,
//     title: "Copa America: Luis Suarez from devastated US",
//     description:
//       "The property, complete with seates screening from room amphitheater pond with sandy"
//   }
// ];

const CategoriesPage = (props) => {
  const {
    match: { params },
    posts,
    getPostsSubCategories,
    getPostsNestedCategories,
    getPostsCategories
  } = props;

  useEffect(() => {
    if (params.subCategory) {
      getPostsSubCategories(params.subCategory);
    } else if (params.nestedCategory) {
      getPostsNestedCategories(params.nestedCategory);
    } else {
      getPostsCategories(params.category);
    }
  }, [params, getPostsCategories, getPostsSubCategories, getPostsNestedCategories]);

  const getTitleCategories = () => {
    let category = "";

    if (params.category) {
      category = posts[0]?.category.translatedName;
    } else if (params.subCategory) {
      category = posts[0]?.sub_categories.find(
        (i) => i.type === params.subCategory
      )?.translatedName;
    } else {
      category = posts[0]?.nested_categories.find(
        (i) => i.Sub_subcategorys === params.nestedCategory
      )?.translatedName;
    }

    return category;
  };

  return (
    <Fragment>
      <MainMenuThree />
      <div className="archives layout3 post post1 padding-top-30">
        <div className="container">
          {/* <div className="row">
            <div className="col-12">
              <div className="bridcrumb">
                <Link to="/">Home</Link> / Categories / Business
              </div>
            </div>
          </div> */}
          <div className="space-30" />
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="categories_title">
                    <h2>
                      <Link to="/">{getTitleCategories()}</Link>
                    </h2>
                  </div>
                </div>
              </div>
              <InternationalNews data={formatDataPosts(posts)} title />
              {/* <div className="cpagination v4 padding5050">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="page-link" to="/" aria-label="Previous">
                        <span aria-hidden="true">
                          <FontAwesome name="caret-left" />
                        </span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/">
                        ..
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/">
                        5
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/" aria-label="Next">
                        <span aria-hidden="true">
                          <FontAwesome name="caret-right" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
            <div className="col-md-6 col-lg-4">
              {/* <FollowUs title="Follow Us" /> */}
              <div className="banner2 mb30 border-radious5">
                <Link to="/">
                  <img src={banner4} alt="banner4" />
                </Link>
              </div>
              {/* <WidgetFinanceTwo data={financePosts} title="Finance" /> */}
              {/* <NewsLetter
                titleClass="white"
                className="news_letter4 border-radious5"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <BannerSectionThree />
    </Fragment>
  );
};

const selects = (state) => ({
  posts: state.posts.posts,
  count: state.posts.count,
});

const actions = (dispatch) => ({
  getPostsCategories: (category) => dispatch(getPostsCategories(category)),
  getPostsSubCategories: (category) =>
    dispatch(getPostsSubCategories(category)),
  getPostsNestedCategories: (category) =>
    dispatch(getPostsNestedCategories(category))
});

export default connect(selects, actions)(CategoriesPage);
