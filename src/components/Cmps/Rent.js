import "../Styles/Rent.css";
import p5 from "../Imgs/p5.svg";
const DefaultRent = () => {
  return (
    <div className="defaultrent">
      <div className="text">
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="search">
          <input type="text" placeholder="Search for location"></input>
          <button id="search">Search</button>
        </div>
      </div>
      <div className="image">
        <div className="img1">
          <img src={p5} id="first" alt="" />
          <img src={p5} id="second" alt="" />
        </div>
        <div className="img2">
          <img src={p5} id="first" alt="" />
          <img src={p5} id="second" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DefaultRent;
