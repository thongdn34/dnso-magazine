import React, { Fragment, useEffect, useLayoutEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import Routes from "../__Routes";
import ScrollTopButton from "../../components/ScrollTopButton";
import ScrollToTop from "../../hooks/ScrollToTop";
import { logo2 } from "../../doc/img";
import { Helmet } from "react-helmet";
const App = (props) => {
  // if (error) toast.error(error);
  // if (success) toast.success(success);
  return (
    <Fragment>
      <Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>{props.title}</title>
        <meta name="description" content={props.description}/>
        <meta name="keywords"/>
        <meta name="author"/>
        <meta name="twitter:card" content="summary"/> .
        <meta name="twitter:site"/>
        <meta name="twitter:image"/>
        <meta name="twitter:description"/>
        <meta property="og:url"/>
        <meta property="og:title"/>
        <meta property="og:description"/>
        {/* <meta property="og:image"/> 
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
