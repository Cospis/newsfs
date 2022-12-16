import "../Styles/Rent.css";
import image3 from "../Imgs/image3.svg";
import image4 from "../Imgs/image4.svg";
import image5 from "../Imgs/image5.svg";
import image6 from "../Imgs/image6.svg";
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
          <img src={image4} id="first" alt="" />
          <img src={image6} id="second" alt="" />
        </div>
        <div className="img2">
          <img src={image3} id="first" alt="" />
          <img src={image5} id="second" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DefaultRent;
