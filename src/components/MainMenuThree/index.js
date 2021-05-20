import React, { Fragment, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import SidebarMenu from "../SidebarMenu";
import SearchModal from "../SearchModal";
import { menus } from "../../utils/constants";
import logo from "../../doc/img/logo/logo1.png";

const MainMenuThree = ({ className }) => {
  const [searchShow, setSearchShow] = useState(false);
  const [sideShow, setSideShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (headerRef.current) {
      const offset = window.scrollY;
      setIsSticky(offset > 150);
    }
  };

  const renderThirdMenu = (list) => {
    return list.map((item) => (
      <li key={item.id}>
        <NavLink to={item.link}>{item.linkText}</NavLink>
      </li>
    ));
  };

  const renderSubMenu = (list) => {
    return list.map((item) => (
      <li key={item.id} className={`${item.child ? "dropdown-submenu" : null}`}>
        {item.child ? (
          <NavLink to={item.link}>
            {item.linkText}
          </NavLink>
        ) : (
          <NavLink to={item.link}>{item.linkText}</NavLink>
        )}
        {item.third_menu ? (
          <ul className="dropdown-menu">{renderThirdMenu(item.third_menu)}</ul>
        ) : null}
      </li>
    ));
  };

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
                      <NavLink to="/">
                        <img
                          className={`navbar__mini-logo ${
                            isSticky ? "--active" : ""
                          }`}
                          src={logo}
                          alt="logo1"
                          width={40}
                          height={40}
                        />
                      </NavLink>
                      <ul className="nav navbar-nav" id="scroll">
                        {menus.length > 0
                          ? menus.map((item, i) => (
                              <li
                                key={item.id}
                                className={`
										${item.child ? "dropdown" : ""}
										nav-item`}
                              >
                                <NavLink
                                  to={item.link}
                                  className="menu-dropdown"
                                  data-toggle="dropdown"
                                >
                                  {item.linkText}
                                  <FontAwesome name={item.icon} />
                                </NavLink>
                                {item.child ? (
                                  <ul className="dropdown-menu" role="menu">
                                    {renderSubMenu(item.submenu)}
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
                  <div className="search-bar col-lg-5 text-right align-self-center justify-content-end">
                    <input
                      className={searchShow ? "--active" : ""}
                      type="search"
                      placeholder="Tìm kiếm"
                    />
                    <div
                      className="search4"
                      onClick={() => setSearchShow(!searchShow)}
                    >
                      <FontAwesome name="search" />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {searchShow ? (
        <SearchModal setSearchShow={setSearchShow} searchShow={searchShow} />
      ) : null} */}
    </Fragment>
  );
};

export default MainMenuThree;
