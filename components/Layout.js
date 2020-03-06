import React from "react";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

import Header from "./Header";
import global from "./styles/global";

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = props => {
  const { children, title } = props;
  return (
    <React.Fragment>
      {global}
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Layout;
