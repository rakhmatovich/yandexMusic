import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Podcats from "./pages/Podcats";
import ChartUz from "./components/ChartUz";
import Detyam from "./components/Detyam";
import SaitBar from "./components/SaitBar";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/podcast" element={<Podcats />} />
        <Route path="/chart" element={<ChartUz />} />
        <Route path="/detyam" element={<Detyam />} />
        <Route path="/saitbar" element={<SaitBar />} />
      </Routes>
    </BrowserRouter>
  );
}
