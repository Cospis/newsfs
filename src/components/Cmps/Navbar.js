import React, { useState } from "react";
import metalogo from "../Imgs/metabnb.svg";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import ConnectWallet from "./Popup";
const DefaultNavbar = () => {
  const [show, setShow] = useState(false);
  const buttonclick = () => {
    console.log(show);
    setShow(!show);
  };
  return (
    <div className="meta-navbar">
      <div className="meta-img">
        <img src={metalogo} alt="" />
      </div>
      <div className="navlist">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/place">Place to stay</Link>
          </li>
          <li>
            <Link to="/nft">NFTs</Link>
          </li>
          <li>
            <Link to="/comm">Community</Link>
          </li>
        </ul>
      </div>
      <div className="nav-btn">
        <button onClick={buttonclick}>Connect wallet</button>
      </div>
      {show && <ConnectWallet close={buttonclick} />}
    </div>
  );
};

export default DefaultNavbar;
