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
        background: "#F1F4FC",
      }}
    >
      <ClientsTitle />
      <Clients />
    </section>
  );
}
