import "../Styles/Nft.css";
import metapic from "../Imgs/metapic.svg";
const DefaultNFT = () => {
  return (
    <div className="defaultnft">
      <div className="text">
        <h1> Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button>Learn more</button>
      </div>
      <div className="img">
        <img src={metapic} alt="" />
      </div>
    </div>
  );
};

export default DefaultNFT;
