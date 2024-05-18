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
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <MediaTitle />
    </section>
  );
}

export default MediaContainer;
