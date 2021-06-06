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
