import "./App.css";
import "./style/common.css";
import Header from "./components/Header";
import VideoContainer from "./components/VideoContainer";
import PhotoFrameContainer from "./components/PhotoFrameContainer";
import SpaceContainer from "./components/SpaceContainer";
import ObjectContainer from "./components/ObjectContainer";
import MediaContainer from "./components/MediaContainer";
import NewsContainer from "./components/NewsContainer";
import { ClientsContainer } from "./components/ClientsContainer";

function App() {
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
    </div>
  );
}

export default App;
