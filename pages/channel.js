import React from "react";
import Link from "next/link";
import { getData } from "../src/utils/api";
import Header from "../src/components/Header";
import channelStyles from "../src/styles/channelStyles";

const API = "https://api.audioboom.com/channels";
const Channel = props => {
  const { channel, audioClips, series } = props;
  console.log(props);
  return (
    <React.Fragment>
      {channelStyles}
      <Header />
      <div
        className="banner"
        style={{
          backgroundImage: `url(${channel.urls.banner_image.original})`
        }}
      />

      {series.length > 0 && (
        <div>
          <h2>Series</h2>
          <div className="channels">
            {series.map(serie => (
              <Link href={`/channel/?id=${serie.id}`}>
                <a className="channel">
                  <img src={serie.urls.logo_image.original} alt="imagen" />
                  <h2>{serie.title}</h2>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}

      <h2>Últimos Podcasts</h2>
      {audioClips.map(clip => (
        <Link href={`/podcast/?id=${clip.id}`} prefetch key={clip.id}>
          <a className="podcast">
            <h3>{clip.title}</h3>
            <div className="meta">{Math.ceil(clip.duration / 60)} minutes</div>
          </a>
        </Link>
      ))}
    </React.Fragment>
  );
};

Channel.getInitialProps = async ({ query }) => {
  const idChannel = query.id;

  let [reqChannel, reqSeries, reqAudios] = await Promise.all([
    getData(`${API}/${idChannel}`),
    getData(`${API}/${idChannel}/child_channels`),
    getData(`${API}/${idChannel}/audio_clips`)
  ]);
  return {
    channel: reqChannel.channel,
    audioClips: reqAudios.audio_clips,
    series: reqSeries.channels
  };
};

export default Channel;
