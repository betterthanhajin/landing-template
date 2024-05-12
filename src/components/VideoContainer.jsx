import VideoTitle from "./VideoTitle";
import { React } from "react";
import newJeans from "../vedio/editVersion.mp4";

export function VideoContainer() {
  return (
    <section style={{ position: "relative", top: 0 }}>
      <video
        controls
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "100%" }}
      >
        <source src={newJeans} type="video/mp4"></source>
      </video>
      <VideoTitle />
    </section>
  );
}

export default VideoContainer;
