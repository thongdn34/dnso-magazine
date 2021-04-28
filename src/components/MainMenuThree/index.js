import React, { Fragment, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import SidebarMenu from "../SidebarMenu";
import SearchModal from "../SearchModal";

const menus = [
  {
    id: 1,
    linkText: "Thời sự",
    link: "/",
    child: false,
    // icon: "angle-down",
    submenu: [
      //   {
      //     id: 11,
      //     link: "/",
      //     linkText: "Home 1"
      //   },
      //   {
      //     id: 12,
      //     link: "/dark",
      //     linkText: "Home Dark"
      //   },
      //   {
      //     id: 13,
      //     new: true,
      //     link: "/home-two",
      //     linkText: "Home 2"
      //   },
      //   {
      //     id: 14,
      //     link: "/home-three",
      //     linkText: "Home 3"
      //   }
    ]
  },
  {
    id: 2,
    linkText: "Góc nhìn",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 21,
        link: "/about",
        linkText: "About"
      },
      {
        id: 22,
        link: "/archive",
        linkText: "Archive"
      },
      {
        id: 23,
        link: "/contact",
        linkText: "Contact Us"
      },
      {
        id: 24,
        link: "/404",
        linkText: "404"
      }
    ]
  },
  // {
  //   id: 3,
  //   linkText: "Posts",
  //   child: true,
  //   icon: "angle-down",
  //   submenu: [
  //     {
  //       id: 31,
  //       child: true,
  //       linkText: "General Posts",
  //       third_menu: [
  //         {
  //           id: 311,
  //           link: "/post1",
  //           linkText: "Post 1"
  //         },
  //         {
  //           id: 312,
  //           link: "/post2",
  //           linkText: "Post 2"
  //         },
  //         {
  //           id: 313,
  //           link: "/post3",
  //           linkText: "Post 3"
  //         }
  //       ]
  //     },
  //     {
  //       id: 32,
  //       child: true,
  //       linkText: "Video Posts",
  //       third_menu: [
  //         {
  //           id: 321,
  //           link: "/video_post1",
  //           linkText: "Video Style 1"
  //         },
  //         {
  //           id: 322,
  //           link: "/video_post2",
  //           linkText: "Video Style 2"
  //         },
  //         {
  //           id: 323,
  //           link: "/video_post3",
  //           linkText: "Video Style 3"
  //         }
  //       ]
  //     },
  //     {
  //       id: 33,
  //       child: true,
  //       linkText: "Audio Posts",
  //       third_menu: [
  //         {
  //           id: 331,
  //           link: "/audio_post1",
  //           linkText: "Audio Style 1"
  //         },
  //         {
  //           id: 332,
  //           link: "/audio_post2",
  //           linkText: "Audio Style 2"
  //         },
  //         {
  //           id: 333,
  //           link: "/audio_post3",
  //           linkText: "Audio Style 3"
  //         }
  //       ]
  //     },
  //     {
  //       id: 34,
  //       child: true,
  //       linkText: "Sidebars",
  //       third_menu: [
  //         {
  //           id: 341,
  //           link: "/post1",
  //           linkText: "Right Sidebar"
  //         },
  //         {
  //           id: 342,
  //           link: "/left_post2",
  //           linkText: "Left Sidebar"
  //         },
  //         {
  //           id: 343,
  //           link: "/post2",
  //           linkText: "No Sidebar"
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    id: 4,
    linkText: "Thế giới",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 41,
        link: "/business",
        linkText: "Business"
      },
      {
        id: 42,
        link: "/entertainment",
        linkText: "Entertainment"
      },
      {
        id: 43,
        link: "/features",
        linkText: "Features"
      },
      {
        id: 44,
        link: "/sports",
        linkText: "Sports"
      },
      {
        id: 45,
        link: "/trending",
        linkText: "Trending"
      }
    ]
  },
  {
    id: 5,
    linkText: "Kinh doanh",
    link: "/world"
  },
  {
    id: 6,
    linkText: "Giải trí",
    link: "/sports"
  },
  {
    id: 7,
    linkText: "Thể thao",
    link: "/sports"
  },
  {
    id: 8,
    linkText: "Pháp luật",
    link: "/contact"
  },
  {
    id: 9,
    linkText: "Giáo dục",
    link: "/contact"
  },
  {
    id: 10,
    linkText: "Sức khỏe",
    link: "/contact"
  },
  {
    id: 11,
    linkText: "Đời sống",
    link: "/contact"
  },
  {
    id: 12,
    linkText: "Du lịch",
    link: "/contact"
  },
  {
    id: 13,
    linkText: "Khoa học",
    link: "/contact"
  }
];
const MainMenuThree = ({ className }) => {
  const [searchShow, setSearchShow] = useState(false);
  const [sideShow, setSideShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  const handleScroll = () => {
    if (headerRef.current) {
      const offset = window.scrollY;
      setIsSticky(offset > 150);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div
        ref={headerRef}
        className={`menu4 ${className ? className : ""} ${
          isSticky ? "sticky" : ""
        }`}
      >
        <div className="container">
          <div className="main-menu">
            <div className="main-nav clearfix is-ts-sticky">
              <div className="row justify-content-between">
                <nav className="navbar navbar-expand-lg align-self-center">
                  <div className="site-nav-inner">
                    <button
                      className="navbar-toggler"
                      onClick={() => setSideShow(true)}
                    >
                      <FontAwesome name="bars" />
                    </button>
                    <div
                      id="navbarSupportedContent"
                      className="collapse navbar-collapse navbar-responsive-collapse"
                    >
                      <ul className="nav navbar-nav" id="scroll">
                        {menus.length > 0
                          ? menus.map((item, i) => (
                              <li
                                key={i}
                                className={`
												${item.child ? "dropdown" : ""}
												nav-item`}
                              >
                                {item.child ? (
                                  <NavLink
                                    onClick={(e) => e.preventDefault()}
                                    to="/"
                                    className="menu-dropdown"
                                    data-toggle="dropdown"
                                  >
                                    {item.linkText}
                                    <FontAwesome name={item.icon} />
                                  </NavLink>
                                ) : (
                                  <NavLink
                                    to={item.link}
                                    className="menu-dropdown"
                                    data-toggle="dropdown"
                                  >
                                    {item.linkText}
                                    <FontAwesome name={item.icon} />
                                  </NavLink>
                                )}

                                {item.child ? (
                                  <ul className="dropdown-menu" role="menu">
                                    {item.submenu.map((sub_item, i) => (
                                      <li
                                        key={i}
                                        className={`${
                                          sub_item.child
                                            ? "dropdown-submenu"
                                            : null
                                        }
														`}
                                      >
                                        {sub_item.child ? (
                                          <NavLink
                                            onClick={(e) => e.preventDefault()}
                                            to="/"
                                          >
                                            {sub_item.linkText}
                                          </NavLink>
                                        ) : (
                                          <NavLink to={sub_item.link}>
                                            {sub_item.linkText}
                                          </NavLink>
                                        )}
                                        {sub_item.third_menu ? (
                                          <ul className="dropdown-menu">
                                            {sub_item.third_menu.map(
                                              (third_item, i) => (
                                                <li key={i}>
                                                  <NavLink to={third_item.link}>
                                                    {third_item.linkText}
                                                  </NavLink>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        ) : null}
                                      </li>
                                    ))}
                                  </ul>
                                ) : null}
                              </li>
                            ))
                          : null}
                      </ul>
                    </div>
                    <SidebarMenu
                      className="themeDark"
                      sideShow={sideShow}
                      setSideShow={setSideShow}
                      menus={menus}
                    />
                  </div>
                </nav>
                {/* <div className="col-lg-2 text-right align-self-center">
                  <div
                    className="search4"
                    onClick={() => setSearchShow(!searchShow)}
                  >
                    <FontAwesome name="search" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchShow ? (
        <SearchModal setSearchShow={setSearchShow} searchShow={searchShow} />
      ) : null}
    </Fragment>
  );
};

export default MainMenuThree;
