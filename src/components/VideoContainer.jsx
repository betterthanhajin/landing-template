import VideoTitle from "./VideoTitle";
import { React } from "react";

export function VideoContainer() {
  return (
    <section style={{ position: "relative", top: 0, zIndex: "-1" }}>
      <video
        controls
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "100%" }}
      >
        <source
          src="https://dev.zipshowkorea.com/assets/Zipshowkorea2023.5508ea02.mp4"
          type="video/mp4"
        ></source>
      </video>
      <VideoTitle />
    </section>
  );
}

export default VideoContainer;
