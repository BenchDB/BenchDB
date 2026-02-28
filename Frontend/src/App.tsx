import { Routes, Route } from "react-router-dom";

import Home from "./pages/main/Home";
import Login from "./pages/main/Login";
import Register from "./pages/main/Register";

import Vps from "./pages/benchmarks/Vps";
import Dedicated from "./pages/benchmarks/Dedicated";
import Cloud from "./pages/benchmarks/Cloud";
import BareMetal from "./pages/benchmarks/BareMetalCloud";
import Ask from "./pages/benchmarks/Ask";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vps" element={<Vps />} />
        <Route path="/dedicated" element={<Dedicated />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/bare-metal-cloud" element={<BareMetal />} />
        <Route path="/ask" element={<Ask />} />
      </Routes>
    </>
  );
}