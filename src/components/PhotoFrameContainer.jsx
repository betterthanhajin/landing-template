import PhotoFrameContentsHeader from "./PhotoFrameContentsHeader";
import PhotoFrameContentsBody from "./PhotoFrameContentsBody";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import wideImg from "../image/wideImg.png";
import wideImg2 from "../image/wideImg2.png";
import wideImg3 from "../image/wideImg3.png";
import wideImg4 from "../image/wideImg4.png";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export function PhotoFrameContainer() {
  return (
    <section
      className="photoFrameContainer"
      style={{
        position: "relative",
        backgroundColor: "#CDC4AA",
        padding: "30px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="frameBox"
        style={{ transform: "scale(0.6)", marginLeft: "540px" }}
      ></div>
      <div
        className="frameBox"
        style={{ transform: "scale(0.7)", marginLeft: "360px" }}
      ></div>
      <div
        className="frameBox"
        style={{ transform: "scale(0.8)", marginLeft: "180px" }}
      ></div>
      <div className="frameBox" style={{ transform: "scale(0.9)" }}></div>
      <div
        className="frameBox"
        style={{ width: "calc(90% - 180px)", marginLeft: "-180px" }}
      >
        <PhotoFrameContentsHeader />
        <PhotoFrameContentsBody />
      </div>
      <div
        className="swiper-container"
        style={{ width: "100%", height: "100%", display: "none" }}
      >
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div
              style={{ width: "100%", height: "830px", position: "relative" }}
            >
              <img
                src={wideImg}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                }}
                alt="wideImg"
              ></img>
              <img
                src={wideImg}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  filter: "blur(20px)",
                }}
                alt="wideImg"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                height: "830px",
                position: "relative",
              }}
            >
              <img
                src={wideImg2}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                }}
                alt="wideImg"
              ></img>
              <img
                src={wideImg2}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  filter: "blur(20px)",
                }}
                alt="wideImg"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{ width: "100%", height: "830px", position: "relative" }}
            >
              <img
                src={wideImg3}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                }}
                alt="wideImg"
              ></img>
              <img
                src={wideImg3}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  filter: "blur(20px)",
                }}
                alt="wideImg"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{ width: "100%", height: "830px", position: "relative" }}
            >
              <img
                src={wideImg4}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                }}
                alt="wideImg"
              ></img>
              <img
                src={wideImg4}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  filter: "blur(20px)",
                }}
                alt="wideImg"
              ></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default PhotoFrameContainer;
