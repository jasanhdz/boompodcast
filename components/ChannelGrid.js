import React from "react";
import { Link } from "../routes";
import styles from "./styles/index";
import slug from "../helpers/slug";

const Channels = props => {
  return (
    <div className="channels">
      {props.channels.map(channel => (
        <Link
          route="channel"
          params={{
            slug: slug(channel.title),
            id: channel.id
          }}
          prefetch
        >
          <a className="channel">
            <img src={channel.urls.logo_image.original} alt="Image channel" />
            <h2>{channel.title}</h2>
          </a>
        </Link>
      ))}
      {styles}
    </div>
  );
};

export default Channels;
