import Atropos from "atropos/react";
import watercolor from "../image/watercolor.svg";
export function SpaceTitle() {
  return (
    <div style={{ color: "white", textAlign: "left", fontWeight: "bold" }}>
      <div
        style={{
          color: "white",
          textAlign: "left",
          fontWeight: "bold",
          // position: "absolute",
          // top: 0,
          padding: "2rem",
        }}
      >
        <p style={{ fontSize: "24px", fontWeight: "lighter" }}>
          관객이 동화될 수 있는 몰입감을 선사
        </p>
        <h2 style={{ fontSize: "50px" }}>
          특별한 경험을 주는
          <br />
          뉴진스
        </h2>
        <Atropos
          activeOffset={40}
          shadowScale={1.05}
          onEnter={() => console.log("Enter")}
          onLeave={() => console.log("Leave")}
          onRotate={(x, y) => console.log("Rotate", x, y)}
        >
          <div>
            <img
              src={watercolor}
              style={{ width: "100%" }}
              alt="watercolor"
            ></img>
          </div>
        </Atropos>
      </div>
    </div>
  );
}
