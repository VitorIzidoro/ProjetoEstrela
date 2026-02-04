import { useContext } from "react";
import { StarContext } from "../components/StarContext";
import "../styles/Store.css";

const ITEMS = [
  { id: 1, name: "Café ☕", price: 3 },
  { id: 2, name: "Chocolate 🍫", price: 5 },
  { id: 3, name: "Dia de descanso 😌", price: 10 }
];

export default function Store() {
  const { stars, buyItem } = useContext(StarContext);

  function handleBuy(item) {
    const success = buyItem(item);
    if (!success) {
      alert("Estrelas insuficientes 😢");
    }
  }

  return (
    <div className="store">
      <header className="store-header">
        <h2>Loja</h2>
        <p>Você tem <strong>{stars} ⭐</strong></p>
      </header>

      <section className="items">
        {ITEMS.map(item => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>{item.price} ⭐</p>

            <button
              disabled={stars < item.price}
              onClick={() => handleBuy(item)}
            >
              Comprar
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
