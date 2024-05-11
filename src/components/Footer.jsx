import "../style/footer.css";
import logo from "../image/NEWJEANS.svg";
import blog from "../image/w_blog.png";
import instagram from "../image/w_instagram.png";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="wrap" style={{ display: "flex", gap: "3rem" }}>
          <a href="/" style={{ marginLeft: "9px" }}>
            <img src={logo} className="logo" alt="Logo" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
