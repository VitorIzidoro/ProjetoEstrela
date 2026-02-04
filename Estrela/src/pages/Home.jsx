import { useContext } from "react";
import { StarContext } from "../components/StarContext";
import "../styles/Home.css";

export default function Home() {
  const { stars, addStar, actionsToday, DAILY_LIMIT } =
    useContext(StarContext);

  function handleAction() {
    const success = addStar();
    if (!success) {
      alert("Limite diário de boas ações atingido 😅");
    }
  }

  return (
    <div className="home">
      <section className="hero">
        <h2>Bem-vindo 👋</h2>
        <p>
          Cada coisa que você fizer certo te rende uma estrela.
          Junte estrelas e troque por recompensas na loja ⭐
        </p>
      </section>

      <section className="cards">
        <div className="card">
          <h3>⭐ Suas estrelas</h3>
          <span className="stars">{stars}</span>
        </div>

        <div className="card">
          <h3>📅 Hoje</h3>
          <p>
            {actionsToday} / {DAILY_LIMIT} ações realizadas
          </p>
        </div>
      </section>

      <section className="action">
        <button onClick={handleAction}>
          Registrar boa ação
        </button>
      </section>
    </div>
  );
}
