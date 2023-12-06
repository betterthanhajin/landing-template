import Logo from "../image/zipshowLogo.svg";
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
        borderBottom: "1px solid white",
        padding: "10px 0px",
        backdropFilter: "blur(25px)",
        zIndex: 50,
      }}
    >
      <div>
        <img src={Logo} alt="logo" width={150}></img>
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
        <li>
          MAIN<img src={Arrow} width={7} alt="arrow"></img>
        </li>
        <li>
          SPECIALITY<img src={Arrow} width={7} alt="arrow"></img>
        </li>
        <li>
          BUSINESS<img src={Arrow} width={7} alt="arrow"></img>
        </li>
        <li>
          PROJECTS<img src={Arrow} width={7} alt="arrow"></img>
        </li>
        <li>
          CERTIFICATION<img src={Arrow} width={7} alt="arrow"></img>
        </li>
        <li>
          NEWS<img src={Arrow} width={7} alt="arrow"></img>
        </li>
        <li>
          OUR CLIENTS<img src={Arrow} width={7} alt="arrow"></img>
        </li>
      </ul>
    </header>
  );
}

export default Header;
