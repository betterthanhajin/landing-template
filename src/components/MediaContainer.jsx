import { MediaTitle } from "./MediaTitle";
import Atropos from "atropos/react";

export function MediaContainer() {
  return (
    <section
      className="mediaContainer"
      style={{
        position: "relative",
        top: 0,
        zIndex: "-1",
      }}
    >
      <MediaTitle />
      {/* <iframe
        src="https://skybox.blockadelabs.com/e/24a9569951a03eabbb6444fe8d211d4d"
        width="100%"
        height="100%"
        allow="fullscreen"
        preload="auto"
        style={{ border: "none" }}
      ></iframe> */}
      {/* <div
        style={{
          background:
            "linear-gradient(-180deg, rgb(46 78 227) 0%, rgb(79, 66, 227) 100%)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          mixBlendMode: "plus-lighter",
        }}
      ></div> */}
    </section>
  );
}

export default MediaContainer;
