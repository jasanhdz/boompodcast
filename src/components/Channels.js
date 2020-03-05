import React from "react";
import Link from "next/link";
import StyleJSX from "../styles/index";

const Channels = props => {
  return (
    <div className="channels">
      {props.channels.map(channel => (
        <Link href={`/channel/?id=${channel.id}`} prefetch>
          <a className="channel">
            <img src={channel.urls.logo_image.original} alt="Image channel" />
            <h2>{channel.title}</h2>
          </a>
        </Link>
      ))}
      {StyleJSX}
    </div>
  );
};

export default Channels;
