import Atropos from "atropos/react";
import watercolor from "../image/watercolor.svg";
import wideImg from "../image/wideImg.png";
import { Fragment } from "react";
export function SpaceBox() {
  return (
    <div>
      {/* <Atropos activeOffset={40} shadowScale={1.05}> */}
      <div
        className="fcloud04"
        style={{ position: "absolute", left: 100, bottom: 100 }}
      >
        <h2
          style={{
            fontSize: "5rem",
            color: "#6c34dc",
            mixBlendMode: "color-burn",
          }}
        >
          NEWJEANS 2024
        </h2>
      </div>
      <div
        className="fcloud03"
        style={{ position: "absolute", right: 100, top: 300 }}
      >
        <h2
          style={{
            fontSize: "5rem",
            color: "#6c34dc",
            mixBlendMode: "color-burn",
          }}
        >
          HOW TO SWEET?
        </h2>
      </div>

      <div
        style={{
          position: "absolute",
          top: 300,
          left: "30%",
          height: "500px",
          transform: "translate(-30%, 10px)",
          zIndex: 300,
        }}
      >
        <img
          src={wideImg}
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.8,
          }}
          alt="wideImg"
        ></img>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 200,
          height: "1000px",
          mixBlendMode: "multiply",
        }}
      >
        <img
          src={watercolor}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt="watercolor"
        ></img>
      </div>
      <div
        style={{
          position: "absolute",
          top: -100,
          right: 0,
          zIndex: 200,
          height: "1000px",
          mixBlendMode: "multiply",
        }}
      >
        <img
          src={watercolor}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt="watercolor"
        ></img>
      </div>
      {/* </Atropos> */}
    </div>
  );
}

export default SpaceBox;
