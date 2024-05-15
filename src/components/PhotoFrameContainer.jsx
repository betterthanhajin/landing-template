import PhotoFrameContentsHeader from "./PhotoFrameContentsHeader";
import PhotoFrameContentsBody from "./PhotoFrameContentsBody";
// import grayscale from "../image/grayscaleTest.svg";
export function PhotoFrameContainer() {
  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#CDC4AA",
        padding: "30px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="frameBox"
        style={{ transform: "scale(0.6)", marginLeft: "540px" }}
      ></div>
      <div
        className="frameBox"
        style={{ transform: "scale(0.7)", marginLeft: "360px" }}
      ></div>
      <div
        className="frameBox"
        style={{ transform: "scale(0.8)", marginLeft: "180px" }}
      ></div>
      <div className="frameBox" style={{ transform: "scale(0.9)" }}></div>
      <div
        className="frameBox"
        style={{ width: "calc(90% - 180px)", marginLeft: "-180px" }}
      >
        <PhotoFrameContentsHeader />
        <PhotoFrameContentsBody />
      </div>
    </section>
  );
}

export default PhotoFrameContainer;
