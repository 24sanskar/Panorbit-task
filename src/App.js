import { Route, Routes } from "react-router-dom";
import Details from "./components/details/Details";
import Home from "./components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
