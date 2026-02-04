import { useContext } from "react";
import { StarContext } from "../components/Starcontext";
import "../styles/Store.css";

export default function Store() {
  const { stars, buyItem } = useContext(StarContext);

  const ITEMS = [
    { id: 1, name: "Poema curto ✉️", price: 5, category: "Carinho" },
    { id: 2, name: "Poema longo ✉️✉️", price: 12, category: "Especial" },
    { id: 3, name: "Chocolate gostoso 🍫", price: 5, category: "Doce" },
    { id: 4, name: "Abraço demorado 🤗", price: 2, category: "Carinho" },
    { id: 5, name: "Filme juntos 🎬", price: 6, category: "Tempo juntos" },
    { id: 6, name: "Mensagem surpresa 💌", price: 4, category: "Carinho" },
    { id: 7, name: "Sim pra tudo 🫡", price: 1000, category: "Especial" },
    { id: 8, name: "Presente surpresa 🎁", price: 100, category: "Surpresa" },
    { id: 9, name: "Beijo extra 😘", price: 1, category: "Carinho" },
    { id: 10, name: "Música aleatória 🎶", price: 10, category: "Surpresa" },
    { id: 11, name: "Outro Site 🧑‍💻", price: 200, category: "Surpresa" },
    { id: 12, name: "Ligação 📞", price: 15, category: "Especial" }


  ];

  function handleBuy(item) {
    const success = buyItem(item);
    if (!success) {
      alert("Estrelas insuficientes 😢");
    } else {
      alert(`Você comprou: ${item.name} 💖`);
    }
  }

  return (
    <div className="store">
      <header className="store-header">
        <h2>💝 Lojinha do Amor</h2>
        <p>Você tem <strong>{stars} ⭐</strong></p>
      </header>

      <section className="items">
        {ITEMS.map(item => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <span className="category">{item.category}</span>
            <p className="price">{item.price} ⭐</p>

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
