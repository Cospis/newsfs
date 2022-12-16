import walleticn from "../Imgs/walletconnect.svg";
import arr from "../Imgs/arr.svg";
import metamask from "../Imgs/metamask.svg";
import x from "../Imgs/x.svg";
const ConnectWallet = (props) => {
  return (
    <div className="popup">
      <div className="cnct">
        <h2>Connect Wallet</h2>
        <img src={x} alt="" onClick={props.close} />
      </div>
      <p>Choose your preferred wallet:</p>
      <div className="wallet">
        <div className="w-text">
          <img src={metamask} alt="" />
          <h3>Metamask</h3>
        </div>
        <img src={arr} alt="" />
      </div>
      <div className="wallet">
        <div className="w-text">
          <img src={walleticn} alt="" />
          <h3>WalletConnect</h3>
        </div>
        <img src={arr} alt="" />
      </div>
    </div>
  );
};

export default ConnectWallet;
