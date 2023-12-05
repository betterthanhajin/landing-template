import SpaceBox from "./SpaceBox";
import { SpaceTitle } from "./SpaceTitle";

export function SpaceContainer() {
  return (
    <section
      style={{
        position: "relative",
        top: 0,
        zIndex: "-1",
        background: "rgb(238,174,202)",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        padding: "10rem",
      }}
    >
      <div>
        <SpaceTitle />
        <SpaceBox />
      </div>
    </section>
  );
}

export default SpaceContainer;
