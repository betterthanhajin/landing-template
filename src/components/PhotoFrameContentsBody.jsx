import PhotoFrame from "./PhotoFrame";
import PhotoFrameText from "./PhotoFrameText";

export function PhotoFrameContentsBody() {
  return (
    <div style={{ padding: "15px" }}>
      <PhotoFrame />
      <PhotoFrameText />
    </div>
  );
}
export default PhotoFrameContentsBody;
