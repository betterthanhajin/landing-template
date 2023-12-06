import "../style/footer.css";
import logo from "../image/zipshowLogo.svg";
import blog from "../image/w_blog.png";
import instagram from "../image/w_instagram.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <a href="/">
            <img src={logo} className="logo" alt="Logo" />
          </a>
          <div className="footer_info_wrap">
            <div className="footer_info">
              <div>
                <b>Tel</b>
                <p>
                  <span>070-5180-0011</span> <br />
                  &#40;평일 10:00 ~ 17:00, 토·일요일·공휴일 휴무&#41;
                </p>
              </div>
              <div>
                <b>E-Mail</b>
                <p>zipshowkorea@gmail.com</p>
              </div>
              <div>
                <b>Fax</b>
                <p>050-4399-1226</p>
              </div>
            </div>
            <div className="footer_sns">
              <a href="https://blog.naver.com/zipshowkorea" target="_blank">
                <img src={blog} alt="집쇼코리아 블로그"></img>
              </a>
              <a href="https://www.instagram.com/zipshowkorea/" target="_blank">
                <img src={instagram} alt="집쇼코리아 인스타그램"></img>
              </a>
            </div>
          </div>
          <ul className="footer_address">
            <li>기업명:(주)집쇼코리아</li>
            <li>대표:홍상용</li>
            <li>주소:인천광역시 부평구 부평대로293, 부평테크시티 905호</li>
            <li>사업자번호:388-88-01168</li>
            <li>통신판매업신고번호:제2020-인천부평-0929호</li>
            <li>비디오물제작업신고번호:제2020-인천부평-0929호</li>
            <li>소프트웨어사업자신고번호:B21-222455</li>
            <li>출판사신고번호:제2021-000012호</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
