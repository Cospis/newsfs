import "../Styles/PlaceCards.css";
import DefaultCard from "./Card";
import p5 from "../Imgs/p5.svg";
const PlaceCards = () => {
  return (
    <div className="placecards">
      <DefaultCard img={p5} /> <DefaultCard img={p5} /> <DefaultCard img={p5} />{" "}
      <DefaultCard img={p5} /> <DefaultCard img={p5} /> <DefaultCard img={p5} />{" "}
      <DefaultCard img={p5} /> <DefaultCard img={p5} /> <DefaultCard img={p5} />{" "}
      <DefaultCard img={p5} /> <DefaultCard img={p5} /> <DefaultCard img={p5} />{" "}
      <DefaultCard img={p5} /> <DefaultCard img={p5} /> <DefaultCard img={p5} />{" "}
      <DefaultCard img={p5} />
    </div>
  );
};

export default PlaceCards;
