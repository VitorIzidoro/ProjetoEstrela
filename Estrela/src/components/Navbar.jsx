import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>⭐ Estrelas</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/loja">Loja</Link>
        <Link to="/historico">Histórico</Link>
      </div>
    </nav>
  );
}
