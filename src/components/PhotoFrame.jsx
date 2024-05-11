import wideImg from "../image/wideImg.png";
import wideImg2 from "../image/wideImg2.png";
import wideImg3 from "../image/wideImg3.png";
import wideImg4 from "../image/wideImg4.png";
import wideImg5 from "../image/wideImg5.png";
import wideImg6 from "../image/wideImg5.png";
import Atropos from "atropos/react";

export function PhotoFrame() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Atropos
          activeOffset={40}
          shadowScale={0.8}
          onTouchStart={(e) => (e.target.style.zIndex = 1)}
        >
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
              <img
                src={wideImg}
                style={{ width: "28vw", height: "23vh" }}
                alt="wideImg"
              ></img>
            </div>
          </div>
        </Atropos>
        <Atropos
          activeOffset={40}
          shadowScale={0.8}
          onTouchStart={(e) => (e.target.style.zIndex = 1)}
        >
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
                style={{
                  width: "18vw",
                  height: "18vh",
                  filter: "grayscale(1)",
                }}
                alt="wideImg"
              ></img>
            </div>
          </div>
        </Atropos>
        <Atropos
          activeOffset={40}
          shadowScale={0.8}
          onTouchStart={(e) => (e.target.style.zIndex = 1)}
        >
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
                style={{
                  width: "18vw",
                  height: "20vh",
                  filter: "grayscale(1)",
                }}
                alt="wideImg"
              ></img>
            </div>
          </div>
        </Atropos>
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
        <Atropos
          activeOffset={40}
          shadowScale={0.8}
          onTouchStart={(e) => (e.target.style.zIndex = 1)}
        >
          <div
            style={{
              backgroundColor: "#ECE9E1",
              width: "14vw",
              height: "20vh",
              border: "6px solid #261E18",
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
                src={wideImg4}
                style={{
                  width: "14vw",
                  height: "20vh",
                  filter: "grayscale(1)",
                }}
                alt="wideImg"
              ></img>
            </div>
          </div>
        </Atropos>
        <Atropos
          activeOffset={40}
          shadowScale={0.8}
          onTouchStart={(e) => (e.target.style.zIndex = 1)}
        >
          <div
            style={{
              backgroundColor: "#ECE9E1",
              width: "25vw",
              height: "20vh",
              border: "6px solid #261E18",
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
                src={wideImg5}
                style={{
                  width: "25vw",
                  height: "20vh",
                  filter: "grayscale(1)",
                }}
                alt="wideImg"
              ></img>
            </div>
          </div>
        </Atropos>
        <Atropos
          activeOffset={40}
          shadowScale={0.8}
          onTouchStart={(e) => (e.target.style.zIndex = 1)}
        >
          <div
            style={{
              backgroundColor: "#ECE9E1",
              width: "18vw",
              height: "20vh",
              border: "6px solid #261E18",
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
                src={wideImg6}
                style={{
                  width: "18vw",
                  height: "20vh",
                  filter: "grayscale(1)",
                }}
                alt="wideImg"
              ></img>
            </div>
          </div>
        </Atropos>
      </div>
    </div>
  );
}
export default PhotoFrame;
