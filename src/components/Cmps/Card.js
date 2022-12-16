import "../Styles/Card.css";
import star from "../Imgs/star.svg";
const DefaultCard = (props) => {
  return (
    <div className="defaultcard">
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="title">
        <p>Desert king</p>
        <h5>1MBT per night</h5>
      </div>
      <div className="dist">
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </div>
      <div className="stars">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
    </div>
  );
};

export default DefaultCard;
