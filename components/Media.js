import Link from "next/link";
import media from "./styles/media";

const Media = props => {
  const { clip } = props;
  return (
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
      {media}
    </div>
  );
};

export default Media;
