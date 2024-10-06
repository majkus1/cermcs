import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import promotions from "../data/promotions.json";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsVisible(true);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenPopup", "true");
  };

  const handleSeeMoreClick = () => {
    sessionStorage.setItem("hasSeenPopup", "true");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-backdrop" onClick={closePopup}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <h3>HITY CENOWE</h3>
        <p className="avail">Dostępne do wyczerpania zapasów.</p>
        <p className="buytel">
          Zakup i rezerwacja <a href="tel:+48857474947">tel: 85 74 74 947</a>
        </p>
        <div className="promo-boxes">
          {promotions
            .filter(promo => promo.inPopup)
            .slice(0, 4) // Maksymalnie 4 promocje
            .map((promo) => (
              <div key={promo.id} className="promo-one">
                <img src={promo.image} className="promo-img" alt={promo.title} />
                <p>{promo.title}</p>
                <p>{promo.price}</p>
              </div>
            ))}
        </div>
        <Link to="/hity-cenowe" className="seemorehits" onClick={handleSeeMoreClick}>
          Zobacz więcej...
        </Link>
        <button className="popup-close" onClick={closePopup}>
          X
        </button>
      </div>
    </div>
  );
};

export default Popup;
