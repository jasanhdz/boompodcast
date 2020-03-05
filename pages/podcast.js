import React from "react";
import Link from "next/link";
import { getData } from "../src/utils/api";
import audio from "../src/styles/audio";

const API_AUDIO = "https://api.audioboom.com/audio_clips";
const PodCast = props => {
  const clip = props.clip;
  return (
    <div>
      {audio}
      <header>Podcasts</header>

      <div className="modal">
        <div className="clip">
          <nav>
            <Link href={`/channel?id=${clip.channel.id}`}>
              <a className="close">&lt; Volver</a>
            </Link>
          </nav>

          <picture>
            <div
              style={{
                backgroundImage: `url(${clip.urls.image ||
                  clip.channel.urls.logo_image.original})`
              }}
            />
          </picture>

          <div className="player">
            <h3>{clip.title}</h3>
            <h6>{clip.channel.title}</h6>
            <audio controls autoPlay={true}>
              <source src={clip.urls.high_mp3} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
};

PodCast.getInitialProps = async ({ query }) => {
  const idMp3 = query.id;
  let data = await getData(`${API_AUDIO}/${idMp3}.mp3`);
  return { clip: data.audio_clip };
};

export default PodCast;
