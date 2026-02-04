import { useContext } from "react";
import { StarContext } from "../components/Starcontext";
import "../styles/history.css";

export default function History() {
  const { purchases, useItem } = useContext(StarContext);

  return (
    <div className="history">
      <header className="history-header">
        <h2>🎁 Seus itens</h2>
        <p>{purchases.length} item(ns)</p>
      </header>

      {purchases.length === 0 ? (
        <div className="empty">
          <p>Você ainda não tem itens 💔</p>
        </div>
      ) : (
        <section className="history-list">
          {purchases.map((item, index) => (
            <div key={index} className="history-card">
              <span className="item-name">{item.name}</span>

              <button
                className="use-btn"
                onClick={() => useItem(index)}
              >
                Usar 💖
              </button>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
