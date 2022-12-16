import "../Styles/Footer.css";
import metawhite from "../Imgs/metawhite.svg";
import facebook from "../Imgs/facebook.svg";
import twitter from "../Imgs/twitter.svg";
import instagram from "../Imgs/instagram.svg";
import copyright from "../Imgs/copyright.svg";
const DefaultFooter = () => {
  return (
    <div className="defaultfooter">
      <div className="meta-title">
        <div className="t1">
          <img src={metawhite} alt="" />
          <h1>Metabnb</h1>
        </div>
        <div className="social">
          <img src={facebook} alt="" />
          <img src={instagram} id="igsocial" alt="" />
          <img src={twitter} alt="" />
        </div>
        <div className="copyright">
          <img src={copyright} alt="" />
          <p>2022 Metabnb</p>
        </div>
      </div>
      <div className="meta-lists">
        {" "}
        <ul>
          <li id="title">Community</li>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
        <ul>
          <li id="title">Places</li>
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn More</li>
        </ul>
        <ul>
          <li id="title">About us</li>
          <li>Road map</li>
          <li>creators</li>
          <li>career</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default DefaultFooter;
