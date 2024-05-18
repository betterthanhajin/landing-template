import { Clients } from "./Clients";
import ClientsTitle from "./ClientsTitle";

export function ClientsContainer() {
  return (
    <section
      style={{
        position: "relative",
        top: 0,
        zIndex: "-1",
        padding: "2rem",
        background:
          "radial-gradient(circle, rgba(237,160,245,1) 0%, rgba(152,66,227,1) 100%)",
      }}
    >
      <ClientsTitle />
      <Clients />
    </section>
  );
}
