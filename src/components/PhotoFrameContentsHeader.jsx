export function PhotoFrameContentsHeader() {
  return (
    <header
      style={{
        padding: "30px",
        display: "flex",
        justifyContent: "space-between",
        height: "30px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            display: "block",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            flexShrink: 0,
            backgroundColor: "#131313",
          }}
        ></span>
        <span
          style={{ fontWeight: "800", color: "#261E18", marginLeft: "5px" }}
        >
          SPECIALITY
        </span>
      </div>
      <ul
        className="frame-nav-bar"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "25px",
          padding: "10px 20px",
          fontSize: "12px",
          fontWeight: "bold",
          cursor: "pointer",
          height: "18px",
        }}
      >
        <li>뉴진스 미디어</li>
        <li>뉴진스 콘텐츠</li>
        <li>뉴진스</li>
        <li>특별함</li>
        <li>뉴진스 영상</li>
      </ul>
    </header>
  );
}

export default PhotoFrameContentsHeader;
