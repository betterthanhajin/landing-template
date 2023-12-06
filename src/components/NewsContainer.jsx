import NewsComponent from "./NewsComponent";
import { NewsTitle } from "./NewsTitle";

export function NewsContainer() {
  return (
    <section
      style={{
        position: "relative",
        top: 0,
        zIndex: "-1",
        padding: "10rem 0rem",
        background:
          "radial-gradient(circle, rgba(160,207,245,1) 0%, rgba(79,66,227,1) 100%)",
        filter: "brightness(1.5)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <NewsTitle />
        <div className="newsBox">
          <NewsComponent />
          <NewsComponent />
        </div>
        <div className="newsBox">
          <NewsComponent />
          <NewsComponent />
        </div>
        <div className="newsBox">
          <NewsComponent />
          <NewsComponent />
        </div>
      </div>
    </section>
  );
}

export default NewsContainer;
