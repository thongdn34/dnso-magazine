import React, { Fragment } from "react";
import { toast, ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import Routes from "../__Routes";
import ScrollTopButton from "../../components/ScrollTopButton";
import ScrollToTop from "../../hooks/ScrollToTop";
import { Helmet } from "react-helmet";
import { logo2 } from "../../doc/img";

const App = (props) => {
  const { error, success } = props;
  if (error) toast.error(error);
  if (success) toast.success(success);
  return (
    <Fragment>
      <Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>{props.title}</title>
        <meta property="og:image" itemprop="thumbnailUrl" content={logo2} />
        <meta property="og:image:alt" content="A red word with a white word" />
        <meta name="description" content={props.description}/>
        <meta name="keywords"/>
        <meta name="author"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site"/>
        <meta name="twitter:image"/>
        <meta name="twitter:description"/>
        <meta property="og:url" itemProp="url" content="https://doanhnghiepdautu.vn" />
        <meta property="og:title" itemProp="headline" content="Web site tin tức doanh nghiệp đầu tư" />
        <meta property="og:description" itemProp="description" content="Doanhnghiepdautu.vn tin tức mới nhất - Thông tin nhanh & chính xác được cập nhật hàng giờ. Đọc báo tin tức online Việt Nam & Thế giới nóng nhất trong ngày về thể thao, thời sự, pháp luật, kinh doanh,..." />
        {/* <meta property="og:image"/> */}
        {/* <meta property="og:image" itemprop="thumbnailUrl" content="https://s1.vnecdn.net/vnexpress/restruct/i/v391/logo_default.jpg"></meta> */}
        <meta property="og:type" content="website"/>
        <meta name="robots" content="index, follow"/>
        <meta name="theme-color" content="#ff9900"/>
        <meta name="msapplication-TileColor" content="#ff9900"/>
        <meta name="msapplication-config" content="undefinedbrowserconfig.xml"/>
        <link rel="manifest" href="undefinedmanifest.json"/>
        <link rel="apple-touch-icon" sizes="180x180" href="undefinedassets/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="undefinedassets/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="undefinedassets/icons/favicon-16x16.png"/>
        <link rel="shortcut icon" href="undefinedassets/icons/favicon.ico"/>
      </Helmet>
      {props.loading && <h1>loading...</h1>}
      <ScrollToTop />
      <Routes />
      <ToastContainer position="top-center" />
      <ScrollTopButton />
    </Fragment>
  );
};

const MapStateToProps = (state) => {
  return {
    title: state.meta.title,
    description: state.meta.description
  };
};

export default connect(MapStateToProps)(App);
