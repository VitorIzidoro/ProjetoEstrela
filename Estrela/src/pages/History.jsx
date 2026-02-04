import { useContext } from "react";
import { StarContext } from "../components/Starcontext";
import "../styles/History.css";

export default function History() {
  const { purchases, getPurchaseSummary } = useContext(StarContext);

  const summary = purchases.length > 0 ? getPurchaseSummary() : [];

  return (
    <div className="history">
      <header className="history-header">
        <h2>Histórico de Compras</h2>
        <p>{purchases.length} item(ns) comprado(s)</p>
      </header>

      {summary.length === 0 ? (
        <div className="empty">
          <p>🛒 Nenhuma compra realizada ainda</p>
        </div>
      ) : (
        <section className="history-list">
          {summary.map((item, index) => (
            <div key={index} className="history-card">
              <span className="item-name">{item.name}</span>
              <span className="item-qty">x{item.qty}</span>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
