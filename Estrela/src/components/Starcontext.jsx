import { createContext, useEffect, useState } from "react";

export const StarContext = createContext();

export function StarProvider({ children }) {
  // 🔹 Estados iniciando do localStorage
  const [stars, setStars] = useState(() => {
    return Number(localStorage.getItem("stars")) || 0;
  });

  const [actionsToday, setActionsToday] = useState(() => {
    return Number(localStorage.getItem("actionsToday")) || 0;
  });

  const [purchases, setPurchases] = useState(() => {
    return JSON.parse(localStorage.getItem("purchases")) || [];
  });

  const DAILY_LIMIT = 5;

  // 🔹 Salvar no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("stars", stars);
  }, [stars]);

  useEffect(() => {
    localStorage.setItem("actionsToday", actionsToday);
  }, [actionsToday]);

  useEffect(() => {
    localStorage.setItem("purchases", JSON.stringify(purchases));
  }, [purchases]);

  // ⭐ Adicionar estrela
  function addStar() {
    if (actionsToday >= DAILY_LIMIT) return false;

    setStars(prev => prev + 1);
    setActionsToday(prev => prev + 1);
    return true;
  }

  // 🛒 Comprar item
  function buyItem(item) {
    if (stars < item.price) return false;

    setStars(prev => prev - item.price);
    setPurchases(prev => [...prev, item]);
    return true;
  }

  // 📦 Resumo das compras
  function getPurchaseSummary() {
    const summary = {};

    purchases.forEach(item => {
      summary[item.name] = (summary[item.name] || 0) + 1;
    });

    return Object.entries(summary).map(([name, qty]) => ({
      name,
      qty
    }));
  }

  return (
    <StarContext.Provider
      value={{
        stars,
        addStar,
        buyItem,
        purchases,
        getPurchaseSummary,
        actionsToday,
        DAILY_LIMIT
      }}
    >
      {children}
    </StarContext.Provider>
  );
}
