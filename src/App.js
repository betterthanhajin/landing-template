import "./App.css";
import "./style/common.css";
import Header from "./components/Header";
import VideoContainer from "./components/VideoContainer";
import PhotoFrameContainer from "./components/PhotoFrameContainer";
import SpaceContainer from "./components/SpaceContainer";
import ObjectContainer from "./components/ObjectContainer";
import MediaContainer from "./components/MediaContainer";
import NewsContainer from "./components/NewsContainer";
import Footer from "./components/Footer";
import { ClientsContainer } from "./components/ClientsContainer";
import { useEffect } from "react";
import "atropos/css";
import { useLax } from "use-lax";
import { elements } from "./lax-config";

function App() {
  useLax({
    drivers: [
      {
        name: "scrollY",
        // getValueFn: () => window.scrollY,

        getValueFn: () => document.documentElement.scrollTop,
        options: { frameStep: 1 },
      },
    ],
    elements,
  });
  useEffect(() => {
    let navbarMenu = document.querySelectorAll(".nav-bar li");
    let section = document.getElementsByTagName("section");
    let pageNum = 0;
    for (var i = 0; i < navbarMenu.length; i++) {
      (function (idx) {
        navbarMenu[idx].onclick = function () {
          pageNum = idx;
          window.scrollTo({
            top: section[pageNum].offsetTop,
            behavior: "smooth",
          });
        };
      })(i);
    }
    const arrow = document.querySelector(".arrow");
    arrow.addEventListener("click", () => {
      window.scrollTo({
        top: section[1].offsetTop,
        behavior: "smooth",
      });
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <VideoContainer />
        <PhotoFrameContainer />
        <SpaceContainer />
        <ObjectContainer />
        <MediaContainer />
        <NewsContainer />
        <ClientsContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
