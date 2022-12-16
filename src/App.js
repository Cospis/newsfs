import DefaultFooter from "./components/Cmps/Footer";
import DefaultHome from "./components/Cmps/Home";
import DefaultPlace from "./components/Cmps/Place";
import DefaultNavbar from "./components/Cmps/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <DefaultNavbar />
      <Routes>
        <Route path="/" element={<DefaultHome />} />
        <Route path="/nft" element={<DefaultHome />} />
        <Route path="/comm" element={<DefaultHome />} />
        <Route path="/place" element={<DefaultPlace />} />
      </Routes>
      <DefaultFooter />
    </div>
  );
}

export default App;
