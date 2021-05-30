/* eslint-disable no-unused-expressions */
import React, { Fragment, useEffect, useState } from "react";
import MainMenuThree from "../../components/MainMenuThree";
import TrendingNewsThree from "../../components/TrendingNewsThree";
import BusinessCarousel from "../../components/BusinessCarousel";
import BusinessImageCarousel from "../../components/BusinessImageCarousel";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import { Link } from "react-router-dom";
import InternationalNews from "../../components/InternationalNews";
import SportsNewsTwo from "../../components/SportsNewsTwo";
import GalleryCarousel from "../../components/GalleryCarousel";
import WidgetTabThree from "../../components/WidgetTabThree";
import WidgetOpinionNews from "../../components/WidgetOpinionNews";
import CategoryFour from "../../components/CategoryFour";

import { connect } from "react-redux";
import { getAllPosts } from "../../store/actions/posts";
import { formatDataPosts, sortDateArray } from "../../utils/commonFunctions";
import { categoryNames, subCategories } from "../../utils/constants";
import { banner4 } from "../../doc/img";

// const internationalPosts = [
//   {
//     photo: international41,
//     title:
//       "sdfsdfsdfsdfsdf dfsd sdf  Investors explain COVID-19’s impact on consumer startupsfsdfsdfsfsdfsdfsdfsd",
//     description:
//       "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with"
//   },
//   {
//     photo: international42,
//     title: "Investors explain COVID-19’s impact on consumer startups",
//     description:
//       "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with"
//   },
//   {
//     photo: international43,
//     title: "Investors explain COVID-19’s impact on consumer startups",
//     description:
//       "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with"
//   },
//   {
//     photo: international44,
//     title: "Investors explain COVID-19’s impact on consumer startups",
//     description:
//       "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with"
//   },
//   {
//     photo: international45,
//     title: "Investors explain COVID-19’s impact on consumer startups",
//     description:
//       "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with"
//   },
//   {
//     photo: international43,
//     title: "Investors explain COVID-19’s impact on consumer startups",
//     description:
//       "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with"
//   }
// ];

// const financePosts2 = [
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
//   },
//   {
//     photo: finance41,
//     title: "Copa America: Luis Suarez from devastated US",
//     description:
//       "The property, complete with seates screening from room amphitheater pond with sandy"
//   }
// ];

const threeTab1 = ["Sức khỏe", "Du lịch", "Khởi nghiệp"];
const threeTab2 = ["Giáo dục", "Doanh nghiệp", "Giải trí"];

const HomePageThree = (props) => {
  const { posts } = props;
  const getPosts = () => {
    props?.getAllPosts();
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLatedPosts = () => {
    if (props.posts.length <= 10) {
      return posts;
    }

    return posts.slice(0, 10);
  };

  // const getHottestPost = () => {
  //   return posts.reduce((acc, curr) => {
  //     if (curr.isHottest) {
  //       return [
  //         ...acc,
  //         {
  //           id: curr?.id,
  //           photo:
  //             curr?.thumbnail.formats.medium?.url ||
  //             curr?.thumbnail.formats.thumbnail?.url,
  //           category: curr?.category.translatedName,
  //           title: curr?.title,
  //           date: convertDate(curr?.updated_at)
  //         }
  //       ];
  //     }

  //     return acc;
  //   }, []);
  // };

  const getLatedParticularPosts = (
    type = "",
    offset = 0,
    isSubCategory = false
  ) => {
    let res;
    let field = isSubCategory ? "sub_categories" : "category";

    if (isSubCategory) {
      res = props.posts.filter((item) =>
        item?.[`${field}`]?.some((i) => i.type === type)
      );
    } else {
      res = props.posts.filter((item) => item?.[`${field}`]?.type === type);
    }

    res = res.filter((item) => !getLatedPosts().some((i) => i.id === item.id));
    
    if (offset) {
      res = res.slice(0, offset);
    }
    return formatDataPosts(res);
  };

  // console.log("===posts", getLatedParticularPosts(subCategories.FINANCE, 4, true));

  return (
    <Fragment>
      <div className="wrapper_welcome">
        <MainMenuThree className="home4menu" />
        {/* <HeroArea posts={getHottestPost()} /> */}
        <div className="bg4">
          <div className="total3 mb30">
            <div className="container">
              <div className="row padding-top-10">
                <div className="col-md-12 col-xl-8 padding-right-5">
                  <TrendingNewsThree posts={getLatedPosts()} />
                  <div className="row">
                    <div className="col-md-6 padding-right-5">
                      <SportsNewsTwo
                        category="Bất động sản"
                        sportsNews={getLatedParticularPosts(
                          subCategories.LANDS,
                          3,
                          true
                        )}
                      />
                    </div>
                    <div className="col-md-6 padding-left-5">
                      <GalleryCarousel
                        galleryPosts={getLatedParticularPosts(
                          categoryNames.VIEWS
                        )}
                      />
                      <WidgetTabThree
                        categories={threeTab1}
                        tab1={getLatedParticularPosts(
                          subCategories.HEALTHS,
                          3,
                          true
                        )}
                        tab2={getLatedParticularPosts(
                          subCategories.TRAVELS,
                          3,
                          true
                        )}
                        tab3={getLatedParticularPosts(
                          subCategories.STARTUPS,
                          3,
                          true
                        )}
                      />
                    </div>
                  </div>
                  <BusinessCarousel
                    businessPosts={getLatedParticularPosts(
                      categoryNames.BUSINESS
                    )}
                  />
                  <BusinessImageCarousel
                    populerPosts={getLatedParticularPosts(
                      categoryNames.CULTURALS,
                      4
                    )}
                    galleryPosts={getLatedParticularPosts(
                      categoryNames.LIFESTYLES,
                      4
                    )}
                  />
                </div>
                <div className="col-md-6 col-xl-4 d-md-none d-xl-block padding-left-5">
                  <WidgetFinanceTwo
                    data={getLatedParticularPosts(
                      subCategories.FINANCE,
                      4,
                      true
                    )}
                    title="Tài chính"
                  />
                  <div className="banner2 mb30 border-radious5">
                    <Link to="/">
                      <img src={banner4} alt="banner4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <VIdeoNewsSection /> */}
          </div>
          <div className="inernational4">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-xl-8">
                  <InternationalNews
                    data={getLatedParticularPosts(categoryNames.EVENTS)}
                    className="mb30"
                    title="Sự kiện"
                    showMore={true}
                  />
                  <BusinessCarousel
                    businessPosts={getLatedParticularPosts(
                      categoryNames.TECHNOLOGIES
                    )}
                  />
                  {/* <InternationalNews
                    data={getLatedParticularPosts(categoryNames.TECHNOLOGIES)}
                    className="mb30"
                    title="Công nghệ"
                    showMore={true}
                  /> */}
                  {/* <div className="banner_area mb30 xs-mt60">
                    <Link to="/">
                      <img src={banner42} alt="banner42" />
                    </Link>
                  </div> */}
                  {/* <ScienceNews
                    posts={getLatedParticularPosts(categoryNames.TECHNOLOGIES)}
                  /> */}
                  <div className="row">
                    <div className="col-md-6">
                      <SportsNewsTwo
                        category="Thương mại"
                        sportsNews={getLatedParticularPosts(
                          subCategories.COMMERCES,
                          7,
                          true
                        )}
                      />
                    </div>
                    <div className="col-md-6">
                      <GalleryCarousel
                        galleryPosts={getLatedParticularPosts(
                          subCategories.BOOKS,
                          4
                        )}
                      />
                      <WidgetTabThree
                        categories={threeTab2}
                        tab1={getLatedParticularPosts(
                          subCategories.EDUCATIONS,
                          5,
                          true
                        )}
                        tab2={getLatedParticularPosts(
                          subCategories.ENTERPRISES,
                          5,
                          true
                        )}
                        tab3={getLatedParticularPosts(
                          subCategories.EXISTENCES,
                          5,
                          true
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-xl-4">
                  <div className="row">
                    <div className="col-lg-6 col-xl-12 col-md-6">
                      {/* <FollowUs
                        className="padding20 white_bg shadow7"
                        title="Follow Us"
                      /> */}
                      <WidgetOpinionNews
                        opinionPosts={getLatedParticularPosts(
                          subCategories.EXPERTS,
                          0,
                          true
                        )}
                      />
                    </div>
                    <div className="col-md-6 col-xl-12">
                      {/* <NewsLetter
                        titleClass="white"
                        className="news_letter4 border-radious5"
                      /> */}
                      <CategoryFour />
                      {/* <WidgetFinanceTwo
                        data={financePosts2}
                        title="Inernational"
                      /> */}
                      <div className="banner2 mb30 border-radious5  d-md-none d-xl-block">
                        <Link to="/">
                          <img src={banner4} alt="banner4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-60" />
        </div>
      </div>
    </Fragment>
  );
};

const actions = (dispatch) => ({
  getAllPosts: () => dispatch(getAllPosts())
});

const selects = (state) => ({
  posts: state.posts.posts
});

export default connect(selects, actions)(HomePageThree);
