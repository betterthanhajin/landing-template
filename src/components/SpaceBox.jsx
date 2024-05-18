import Atropos from "atropos/react";
import watercolor from "../image/watercolor.svg";
import wideImg from "../image/wideImg.png";
import { Fragment } from "react";
export function SpaceBox() {
  return (
    <div>
      {/* <Atropos activeOffset={40} shadowScale={1.05}> */}
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
