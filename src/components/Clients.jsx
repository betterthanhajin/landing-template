import Client01 from "../image/client_01.svg";
import Client02 from "../image/client_02.svg";

export function Clients() {
  return (
    <div>
      <div className="fcloud01">
        <img src={Client01} style={{ width: "18vw", height: "20vh" }}></img>
        <img src={Client01} style={{ width: "18vw", height: "20vh" }}></img>
        <img src={Client01} style={{ width: "18vw", height: "20vh" }}></img>
        <img src={Client01} style={{ width: "18vw", height: "20vh" }}></img>
      </div>
      <div className="fcloud02">
        <img src={Client02} style={{ width: "15vw", height: "15vh" }}></img>
        <img src={Client02} style={{ width: "15vw", height: "15vh" }}></img>
        <img src={Client02} style={{ width: "15vw", height: "15vh" }}></img>
        <img src={Client02} style={{ width: "15vw", height: "15vh" }}></img>
      </div>
    </div>
  );
}
