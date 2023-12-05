import "./App.css";
import "./style/common.css";
import Header from "./components/Header";
import VideoContainer from "./components/VideoContainer";
import PhotoFrameContainer from "./components/PhotoFrameContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <VideoContainer />
        <PhotoFrameContainer />
      </main>
    </div>
  );
}

export default App;
