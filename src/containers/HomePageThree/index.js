/* eslint-disable no-unused-expressions */
import React, { Fragment, useEffect, useState } from "react";
import MainMenuThree from "../../components/MainMenuThree";
import HeroArea from "../../components/HeroArea";
import TrendingNewsThree from "../../components/TrendingNewsThree";
import BusinessCarousel from "../../components/BusinessCarousel";
import BusinessImageCarousel from "../../components/BusinessImageCarousel";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import { Link } from "react-router-dom";
import VIdeoNewsSection from "../../components/VIdeoNewsSection";
import InternationalNews from "../../components/InternationalNews";
import ScienceNews from "../../components/ScienceNews";
import SportsNewsTwo from "../../components/SportsNewsTwo";
import GalleryCarousel from "../../components/GalleryCarousel";
import WidgetTabThree from "../../components/WidgetTabThree";
import FollowUs from "../../components/FollowUs";
import WidgetOpinionNews from "../../components/WidgetOpinionNews";
import NewsLetter from "../../components/NewsLetter";
import CategoryFour from "../../components/CategoryFour";

import banner4 from "../../doc/img/bg/banner4.png";
import banner42 from "../../doc/img/bg/banner42.png";
import finance41 from "../../doc/img/finance/finance41.jpg";
import international41 from "../../doc/img/international/international41.jpg";
import international42 from "../../doc/img/international/international42.jpg";
import international43 from "../../doc/img/international/international43.jpg";
import international44 from "../../doc/img/international/international44.jpg";
import international45 from "../../doc/img/international/international45.jpg";
import { connect } from "react-redux";
import { getAllPosts } from "../../store/actions/posts";
import { convertDate, sortDateArray } from "../../utils/commonFunctions";
import { categoryNames, subCategories } from "../../utils/constants";

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

const HomePageThree = (props) => {
  const { posts } = props;
  const getPosts = () => {
    props?.getAllPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getLatedPosts = () => {
    if (props.posts.length <= 10) {
      return posts;
    }

    return sortDateArray(posts).slice(0, 10);
  };

  const getHottestPost = () => {
    return posts.reduce((acc, curr) => {
      if (curr.isHottest) {
        return [...acc, {
          photo:
            curr?.thumbnail.formats.medium?.url ||
            curr?.thumbnail.formats.thumbnail?.url,
          category: curr?.category.translatedName,
          title: curr?.title,
          date: convertDate(curr?.updated_at)
        }]
      }

      return acc
    }, [])
  }

  const getLatedParticularPosts = (
    type = "",
    isSubCategory = false,
    offset = 0
  ) => {
    let res;
    let field = isSubCategory ? "sub_categories" : "category";

    if (isSubCategory) {
      res = props.posts
        .filter((item) => item?.[`${field}`]?.some((i) => i.type === type))
        .slice(0);
    } else {
      res = props.posts
        .filter((item) => item?.[`${field}`]?.type === type)
        .slice(0);
    }

    if (offset) {
      res = res.slice(0, offset);
    }

    res = res.reduce((acc, curr) => {
      return [
        ...acc,
        {
          photo:
            curr?.thumbnail.formats.medium?.url ||
            curr?.thumbnail.formats.thumbnail?.url,
          caption: curr?.thumbnail?.caption,
          title: curr?.title,
          description: curr?.subDescription,
          view: curr.view,
          share: curr.share,
          category: curr?.category.translatedName,
          updateAt: convertDate(curr?.updated_at)
        }
      ];
    }, []);

    return sortDateArray(res);
  };

  console.log("===posts", getHottestPost());

  return (
    <Fragment>
      <div className="wrapper_welcome">
        <MainMenuThree className="home4menu" />
        <HeroArea posts={getHottestPost()} />
        <div className="bg4">
          <div className="space-60" />
          <div className="total3 mb30">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-xl-8">
                  <TrendingNewsThree posts={getLatedPosts()} />
                  <BusinessCarousel
                    businessPosts={getLatedParticularPosts(
                      categoryNames.BUSINESS
                    )}
                  />
                  <BusinessImageCarousel
                    populerPosts={getLatedParticularPosts(
                      categoryNames.CULTURALS,
                      false,
                      5
                    )}
                    galleryPosts={getLatedParticularPosts(
                      categoryNames.LIFESTYLES
                    )}
                  />
                </div>
                <div className="col-md-6 col-xl-4 d-md-none d-xl-block">
                  <WidgetFinanceTwo
                    data={getLatedParticularPosts(
                      categoryNames.INVESTS,
                      false,
                      3
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
                  {/* <div className="banner_area mb30 xs-mt60">
                    <Link to="/">
                      <img src={banner42} alt="banner42" />
                    </Link>
                  </div> */}
                  <ScienceNews
                    posts={getLatedParticularPosts(categoryNames.TECHNOLOGIES)}
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <SportsNewsTwo
                        sportsNews={getLatedParticularPosts(
                          categoryNames.VIEWS,
                          false,
                          7
                        )}
                      />
                    </div>
                    <div className="col-md-6">
                      <GalleryCarousel
                        galleryPosts={getLatedParticularPosts(
                          categoryNames.ADVISORIES
                        )}
                      />
                      <WidgetTabThree
                        tab1={getLatedParticularPosts(
                          subCategories.HEALTHS,
                          true,
                          5
                        )}
                        tab2={getLatedParticularPosts(
                          subCategories.TRAVELS,
                          true,
                          5
                        )}
                        tab3={getLatedParticularPosts(
                          subCategories.STARTUPS,
                          true,
                          5
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
