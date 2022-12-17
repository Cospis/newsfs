import DefaultCard from "./Card";
import p5 from "../Imgs/p5.svg";
import "../Styles/Inspiration.css";
const DefaultInspiration = () => {
  return (
    <div className="defaultinspiration">
      <h1>Inspiration for your next adventure</h1>
      <div className="inspiration">
        <DefaultCard img={p5} /> <DefaultCard img={p5} />{" "}
        <DefaultCard img={p5} /> <DefaultCard img={p5} />{" "}
        <DefaultCard img={p5} /> <DefaultCard img={p5} />{" "}
        <DefaultCard img={p5} /> <DefaultCard img={p5} />
      </div>
    </div>
  );
};

export default DefaultInspiration;
