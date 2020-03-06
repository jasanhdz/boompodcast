import React from "react";
import Error from "./_error";

import { getData } from "../utils/api";
import Layout from "../components/Layout";
import ChannelGrid from "../components/ChannelGrid";

const Index = props => {
  const { channels, statusCode } = props;
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout title="Podcast">
      <ChannelGrid channels={channels} />
    </Layout>
  );
};

Index.getInitialProps = async ({ res }) => {
  try {
    let data = await getData("https://api.audioboom.com/channels/recommended");
    return { channels: data, statusCode: 200 };
  } catch (e) {
    res.statusCode = 503;
    return { channels: null, statusCode: 503 };
  }
};

export default Index;
