import { MediaTitle } from "./MediaTitle";
import MediaImage from "../image/media.svg";
import MediaBackImage from "../image/mediaBackground.svg";

export function MediaContainer() {
  return (
    <section
      style={{
        position: "relative",
        top: 0,
        zIndex: "-1",
        padding: "10rem",
        backgroundImage: `url(${MediaImage})`,
        backgroundSize: "contain",
        filter: "brightness(1.5)",
      }}
    >
      <MediaTitle />
    </section>
  );
}

export default MediaContainer;
