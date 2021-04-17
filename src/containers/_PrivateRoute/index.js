import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import TopBar from "../../components/TopBar";
import LogoArea from "../../components/LogoArea";
import MainMenu from "../../components/MainMenu";
import FooterArea from "../../components/FooterArea";
import TopBarTwo from "../../components/TopBarTwo";
import LogoAreaTwo from "../../components/LogoAreaTwo";
import MainMenuTwo from "../../components/MainMenuTwo";
import FooterAreaTwo from "../../components/FooterAreaTwo";
import LogoAreaThree from "../../components/LogoAreaThree";
import FooterAreaThree from "../../components/FooterAreaThree";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  const renderHeader = () => {
    switch (props.home_style) {
      case 2:
        return (
          <Fragment>
            {/*=== home two ===*/}
            <TopBarTwo />
            <div className="border_black" />
            <LogoAreaTwo />
            <MainMenuTwo />
          </Fragment>
        );
      case 3:
        return (
          <Fragment>
            {/*=== home three ===*/}
            <LogoAreaThree />
          </Fragment>
        );
      case 4:
        return (
          <Fragment>
            {/*=== home dark version ===*/}
            <TopBar dark={true} />
            <div className="border_white" />
            <LogoArea dark={true} className="dark-2" />
            <MainMenu dark={true} className="dark-2" />
          </Fragment>
        );
      default:
        return (
          <Fragment>
            {/*=== home one/default ===*/}
            {/* <TopBar className="white_bg"/> */}
            <div className="border_black" />
            <LogoArea className="white_bg" />
            <MainMenu />
          </Fragment>
        );
    }
  };

  const renderFooter = () => {
    switch (props.home_style) {
      case 2:
        return <FooterAreaTwo />;
      case 3:
        return <FooterAreaThree />;
      case 4:
        return <FooterArea className="dark-2" />;
      default:
        return <FooterArea className="primay_bg" />;
    }
  };
  return (
    <div className={props.parentClass}>
      {renderHeader()}
      <Route {...rest} render={(props) => <Component {...props} />} />
      {renderFooter()}
    </div>
  );
};
export default PrivateRoute;
