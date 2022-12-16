import DefaultCard from "./Card";
import I1 from "../Imgs/I1.svg";
import I2 from "../Imgs/I2.svg";
import I3 from "../Imgs/I3.svg";
import I4 from "../Imgs/I4.svg";
import I5 from "../Imgs/I5.svg";
import I6 from "../Imgs/I6.svg";
import I7 from "../Imgs/I7.svg";
import I8 from "../Imgs/I8.svg";
import "../Styles/Inspiration.css";
const DefaultInspiration = () => {
  return (
    <div className="defaultinspiration">
      <h1>Inspiration for your next adventure</h1>
      <div className="inspiration">
        <DefaultCard img={I1} />
        <DefaultCard img={I2} />
        <DefaultCard img={I3} />
        <DefaultCard img={I4} />
        <DefaultCard img={I5} />
        <DefaultCard img={I6} />
        <DefaultCard img={I7} />
        <DefaultCard img={I8} />
      </div>
    </div>
  );
};

export default DefaultInspiration;
