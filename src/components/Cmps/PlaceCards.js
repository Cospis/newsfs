import "../Styles/PlaceCards.css";
import DefaultCard from "./Card";
import p1 from "../Imgs/p1.svg";
import p2 from "../Imgs/p2.svg";
import p3 from "../Imgs/p3.svg";
import p4 from "../Imgs/p4.svg";
import p5 from "../Imgs/p5.svg";
import p6 from "../Imgs/p6.svg";
import p7 from "../Imgs/p7.svg";
import p8 from "../Imgs/p8.svg";
import p9 from "../Imgs/p9.svg";
import p10 from "../Imgs/p10.svg";
import p11 from "../Imgs/p11.svg";
import p12 from "../Imgs/p12.svg";
import p13 from "../Imgs/p13.svg";
import p14 from "../Imgs/p14.svg";
import p15 from "../Imgs/p15.svg";
import p16 from "../Imgs/p16.svg";
const PlaceCards = () => {
  return (
    <div className="placecards">
      <DefaultCard img={p1} />
      <DefaultCard img={p2} />
      <DefaultCard img={p3} />
      <DefaultCard img={p4} />
      <DefaultCard img={p5} />
      <DefaultCard img={p6} />
      <DefaultCard img={p7} />
      <DefaultCard img={p8} />
      <DefaultCard img={p9} />
      <DefaultCard img={p10} />
      <DefaultCard img={p11} />
      <DefaultCard img={p12} />
      <DefaultCard img={p13} />
      <DefaultCard img={p14} />
      <DefaultCard img={p15} />
      <DefaultCard img={p16} />
    </div>
  );
};

export default PlaceCards;
