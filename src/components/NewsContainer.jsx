import NewsComponent from "./NewsComponent";
import { NewsTitle } from "./NewsTitle";

export function NewsContainer() {
  return (
    <section
      style={{
        position: "relative",
        top: 0,
        zIndex: "-1",
        padding: "2rem",
        background:
          "radial-gradient(circle, rgba(160,207,245,1) 0%, rgba(79,66,227,1) 100%)",
        filter: "brightness(1.5)",
        height: "100%",
      }}
      className="block"
    >
      <NewsTitle />
      <div style={{}}>
        <div className="newsBox block" style={{ display: "flex", gap: "10px" }}>
          <NewsComponent />
          <NewsComponent />
          <NewsComponent />
        </div>
        <div
          className="newsBox hidden"
          style={{ display: "flex", gap: "10px" }}
        >
          <NewsComponent />
          <NewsComponent />
          <NewsComponent />
        </div>
      </div>
    </section>
  );
}

export default NewsContainer;
