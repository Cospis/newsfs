import "../Styles/Token.css";
import mbtoken from "../Imgs/mbtoken.svg";
import opensea from "../Imgs/opensea.svg";
import metamask from "../Imgs/metamask.svg";
const DEfaultToken = () => {
  return (
    <div className="defaulttoken">
      <div className="sect">
        <img src={mbtoken} alt="" />
        <h5>MBToken</h5>
      </div>
      <div className="sect">
        <img src={metamask} alt="" />
        <h5>METAMASK</h5>
      </div>
      <div className="sect">
        <img src={opensea} alt="" />
        <h5>OpenSea </h5>
      </div>
    </div>
  );
};

export default DEfaultToken;
