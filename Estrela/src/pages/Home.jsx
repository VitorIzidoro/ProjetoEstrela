import "../styles/Home.css";

export default function Home() {
  const FIXED_STARS = 5; // valor fixo

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
          <span className="stars">{FIXED_STARS}</span>
        </div>

        <div className="card">
          <h3>📅 Hoje</h3>
          <p>
            0 / 5 ações realizadas
          </p>
        </div>
      </section>

    </div>
  );
}
