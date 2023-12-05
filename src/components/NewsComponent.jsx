import newsImg from "../image/newsImg.svg";

export function NewsComponent() {
  return (
    <div
      style={{
        width: "18vw",
        height: "35vh",
        borderRadius: "10px",
        marginTop: "20px",
        background: "#F9F9FA",
      }}
    >
      <img src={newsImg} style={{ width: "100%" }}></img>
      <div>2023.09.04</div>
      <div>이노비즈 인증</div>
    </div>
  );
}
export default NewsComponent;
