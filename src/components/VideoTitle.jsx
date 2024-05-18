import verticalArrow from "../image/verticalArrow.svg";

export function VideoTitle() {
  //useEffect(() => {
  const scrollTop = () => {
    let next = 1;
    let section = document.getElementsByTagName("section");
    window.scrollTo({
      top: section[next].offsetTop,
      behavior: "smooth",
    });
  };
  //}, []);
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
          fontSize: "40px",
          fontWeight: "900",
          textWrap: "balance",
        }}
        className="videoTitle"
      >
        뉴진스는 고객사의 니즈에 맞추어 <br /> 특별한 경험을 선사합니다
      </h2>
      <div className="arrow" style={{ cursor: "pointer" }} onClick={scrollTop}>
        <img src={verticalArrow} width={40} height={40} alt="arrow"></img>
      </div>
    </div>
  );
}

export default VideoTitle;
