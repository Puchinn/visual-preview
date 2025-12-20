"use client";

import { Plyr } from "plyr-react";
import "plyr-react/plyr.css";

export default function Video() {
  return (
    <Plyr
      source={{
        type: "video",
        sources: [
          {
            src: "5V-TDVcjo64",
            provider: "youtube",
          },
        ],
      }}
      options={{
        autopause: false,
        autoplay: true,
        muted: true,
        loop: {
          active: true,
        },
        volume: 0,
        youtube: {
          muted: true,
          loop: true,
          autoplay: true,
        },
      }}
    ></Plyr>
  );
}
