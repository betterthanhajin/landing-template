import { MediaTitle } from "./MediaTitle";
import MediaImage from "../image/media.svg";
import Atropos from "atropos/react";

export function MediaContainer() {
  return (
    <Atropos
      activeOffset={40}
      shadowScale={0.8}
      onTouchStart={(e) => (e.target.style.zIndex = 1)}
    >
      <section
        className="mediaContainer"
        style={{
          position: "relative",
          top: 0,
          zIndex: "-1",
          padding: "10rem",
          backgroundImage: `url(${MediaImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.2)",
        }}
      >
        <MediaTitle />
        <div
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
        ></div>
      </section>
    </Atropos>
  );
}

export default MediaContainer;
