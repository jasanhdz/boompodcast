import React from "react";
import { getData } from "../utils/api";
import Layout from "../components/Layout";
import Media from "../components/Media";

const API_AUDIO = "https://api.audioboom.com/audio_clips";
const PodCast = props => {
  const clip = props.clip;
  return (
    <React.Fragment>
      <Layout title={clip.title}>
        <Media clip={clip} />
      </Layout>
    </React.Fragment>
  );
};

PodCast.getInitialProps = async ({ query }) => {
  const idMp3 = query.id;
  let data = await getData(`${API_AUDIO}/${idMp3}.mp3`);
  return { clip: data.audio_clip };
};

export default PodCast;
