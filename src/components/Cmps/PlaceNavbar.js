import "../Styles/PlaceNavbar.css";
import settings from "../Imgs/settings.svg";
const PlaceNavbar = () => {
  return (
    <div className="placenavbar">
      <ul>
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantast city</li>
        <li>beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
        <li>
          <button>
            <p> Location</p>
            <img src={settings} id="set-btn" alt="" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PlaceNavbar;
