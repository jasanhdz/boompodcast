import React from "react";
import { getData } from "../src/utils/api";

import Header from "../src/components/Header";
import Channels from "../src/components/Channels";

const Index = props => {
  // console.log(props);
  const { channels } = props;
  return (
    <React.Fragment>
      <Header />
      <Channels channels={channels} />
    </React.Fragment>
  );
};

Index.getInitialProps = async () => {
  let data = await getData("https://api.audioboom.com/channels/recommended");
  return { channels: data };
};

export default Index;
