import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Matcher from "./pages/Matcher";
import Result from "./pages/Result";
import CareerTips from "./pages/CareerTips";
import About from "./pages/About";  

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matcher" element={<Matcher />} />
      <Route path="/result" element={<Result />} />
      <Route path="/career" element={<CareerTips />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;