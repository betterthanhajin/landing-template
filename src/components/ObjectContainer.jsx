import ObjectBox from "./ObjectBox";
import { ObjectTitle } from "./ObjectTitle";

export function ObjectContainer() {
  return (
    <section
      style={{
        position: "relative",
        top: 0,
        zIndex: "-1",
        background: "rgb(237,160,245)",
        background:
          "radial-gradient(circle, rgba(237,160,245,1) 0%, rgba(152,66,227,1) 100%)",
        padding: "10rem",
      }}
    >
      <ObjectTitle />
      <ObjectBox />
    </section>
  );
}

export default ObjectContainer;
