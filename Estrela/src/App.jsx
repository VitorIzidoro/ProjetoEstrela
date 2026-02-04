import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import History from "./pages/History";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Store />} />
        <Route path="/historico" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
