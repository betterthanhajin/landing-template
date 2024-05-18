import Logo from "../image/NEWJEANS.svg";
import Arrow from "../image/arrow.svg";

export function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "30px",
        borderBottom: "1px solid white",
        padding: "10px",
        backdropFilter: "blur(25px)",
        zIndex: 50,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" width={100}></img>
      </div>
      <ul
        className="nav-bar"
        style={{
          color: "white",
          display: "flex",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        <li style={{ display: "flex", alignItems: "center" }}>
          <span>MAIN</span>
          <img src={Arrow} width={7} alt="arrow"></img>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <span>SPECIALITY</span>
          <img src={Arrow} width={7} alt="arrow"></img>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <span>NEWJEANS</span>
          <img src={Arrow} width={7} alt="arrow"></img>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <span>NEWS</span>
          <img src={Arrow} width={7} alt="arrow"></img>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <span>CLIENTS</span>
          <img src={Arrow} width={7} alt="arrow"></img>
        </li>
      </ul>
    </header>
  );
}

export default Header;
