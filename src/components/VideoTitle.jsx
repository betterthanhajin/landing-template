import verticalArrow from "../image/verticalArrow.svg";

export function VideoTitle() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0",
        color: "white",
        zIndex: "2",
        fontSize: "30px",
        transform: "translate(-50%,-50%)",
        left: "50%",
      }}
    >
      <h2
        style={{
          fontSize: "35px",
          fontWeight: "900",
        }}
      >
        집쇼코리아는 고객사의 니즈에 맞추어 <br /> 특별한 경험을 선사합니다
      </h2>
      <div>
        <img src={verticalArrow} width={40} height={40}></img>
      </div>
    </div>
  );
}

export default VideoTitle;
