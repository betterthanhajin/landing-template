import wideImg from "../image/wideImg.svg";
import wideImg2 from "../image/wideImg2.svg";
import wideImg3 from "../image/wideImg3.svg";

export function PhotoFrame() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            width: "30vw",
            height: "23vh",
            border: "6px solid #261E18",
            padding: "0.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flex: "1 0 0",
              alignSelf: "stretch",
            }}
          >
            <img src={wideImg} style={{ width: "28vw", height: "23vh" }}></img>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ECE9E1",
            width: "18vw",
            height: "18vh",
            border: "6px solid #261E18",
            padding: "0.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flex: "1 0 0",
              alignSelf: "stretch",
            }}
          >
            <img
              src={wideImg2}
              style={{ width: "18vw", height: "18vh", filter: "grayscale" }}
            ></img>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ECE9E1",
            width: "18vw",
            height: "20vh",
            border: "6px solid #261E18",
            padding: "0.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flex: "1 0 0",
              alignSelf: "stretch",
            }}
          >
            <img
              src={wideImg3}
              style={{ width: "18vw", height: "20vh", filter: "grayscale" }}
            ></img>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "18px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ECE9E1",
            width: "14vw",
            height: "20vh",
            border: "6px solid #261E18",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#ECE9E1",
            width: "25vw",
            height: "20vh",
            border: "6px solid #261E18",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#ECE9E1",
            width: "18vw",
            height: "20vh",
            border: "6px solid #261E18",
          }}
        ></div>
      </div>
    </div>
  );
}
export default PhotoFrame;
