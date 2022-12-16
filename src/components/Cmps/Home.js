import DefaultInspiration from "./Inspiration";
import DefaultNFT from "./Nft";
import DefaultRent from "./Rent";
import DEfaultToken from "./Token";
const DefaultHome = () => {
  return (
    <div className="home">
      <DefaultRent />
      <DEfaultToken />
      <DefaultInspiration />
      <DefaultNFT />
    </div>
  );
};

export default DefaultHome;
