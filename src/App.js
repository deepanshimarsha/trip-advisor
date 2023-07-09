import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Destination from "./pages/Destination";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:continentId" element={<Countries />} />
        <Route path="/:continentId/:countrytId" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
