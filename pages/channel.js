import React, { useState } from "react";
import { getData } from "../utils/api";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Serie from "../components/Serie";
import PodcastListWithClick from "../components/PodcastWithClick";
import Error from "next/error";
import Modal from "../components/Modal";

const API = "https://api.audioboom.com/channels";
const Channel = props => {
  const [state, setState] = useState({ openPodcast: null });

  const openPodcast = (e, podcast) => {
    e.preventDefault();
    setState({
      openPodcast: podcast
    });
  };

  const closePodcast = e => {
    e.preventDefault();
    setState({
      openPodcast: null
    });
  };

  const { channel, audioClips, series, statusCode } = props;

  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <React.Fragment>
      <Layout title={channel.title}>
        {state.openPodcast && (
          <Modal clip={state.openPodcast} onClose={closePodcast} />
        )}
        <Banner img={channel.urls.banner_image.original} />
        {series.length > 0 && <Serie channels={series} title="Series" />}
        <PodcastListWithClick
          title="Podcast"
          audios={audioClips}
          onClickPodCast={openPodcast}
        />
      </Layout>
    </React.Fragment>
  );
};

Channel.getInitialProps = async ({ query, res }) => {
  const idChannel = query.id;
  try {
    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      getData(`${API}/${idChannel}`),
      getData(`${API}/${idChannel}/child_channels`),
      getData(`${API}/${idChannel}/audio_clips`)
    ]);

    if (reqChannel.status >= 404) {
      res.statusCode = reqChannel.status;
      return { channel: null, audioClips: null, series: null, statusCode: 404 };
    }

    return {
      channel: reqChannel.channel,
      audioClips: reqAudios.audio_clips,
      series: reqSeries.channels,
      statusCode: 200
    };
  } catch (e) {
    return { channel: null, audioClips: null, series: null, statusCode: 503 };
  }
};

export default Channel;
