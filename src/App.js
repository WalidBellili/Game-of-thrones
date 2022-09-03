import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import "./styles/layouts/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
