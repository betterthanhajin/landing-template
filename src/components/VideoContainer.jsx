import VideoTitle from "./VideoTitle";

export function VideoContainer() {
  return (
    <section style={{ position: "relative", top: 0, zIndex: "-1" }}>
      <video
        autoPlay={true}
        loop={true}
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
