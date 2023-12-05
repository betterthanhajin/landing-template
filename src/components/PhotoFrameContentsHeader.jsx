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
        <li>실감 미디어</li>
        <li>AR 콘텐츠</li>
        <li>공간3D 스캔</li>
        <li>유물 스캔</li>
        <li>XR영상 제작</li>
      </ul>
    </header>
  );
}

export default PhotoFrameContentsHeader;
