import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Favorites from "./pages/Favorites";
import "./styles/layouts/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
