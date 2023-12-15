import Podcats from "../pages/Podcats";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Player from "./Player";
import SaitBar from "./SaitBar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="flex">
      {children}
        <SaitBar />
      </div>
      <Footer />
      <Player />
    </div>
  );
}
