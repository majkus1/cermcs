import React, { useState } from "react";
import Header from "../components/header";
import Seo from "../components/seo";
import promotions from "../data/promotions.json";

const Hits = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="wrapper">
      <Seo title="Ceramika Białystok - Hity cenowe" description="ee" />
      <Header onMenuToggle={isOpen => setIsMenuOpen(isOpen)} />

      <section className={isMenuOpen ? "blurred" : ""} id="hits">
        <h3>HITY CENOWE</h3>
        <p className="avail">Dostępne do wyczerpania zapasów</p>
        <p className="buytel">
          Zakup i rezerwacja <a href="tel:+48857474947">tel: 85 74 74 947</a>
        </p>

        {/* Promocje z popupa (maksymalnie 4) */}
        <div className="promo-boxes">
          {promotions
            .filter(promo => promo.inPopup)
            .slice(0, 4) // Wyświetl te same promocje, co w popupie (maks. 4)
            .map((promo) => (
              <div key={promo.id} className="promo-one">
                <img src={promo.image} className="promo-img" alt={promo.title} />
                <p>{promo.title}</p>
                <p>{promo.price}</p>
              </div>
            ))}
        </div>

        <hr />

        {/* Pozostałe promocje */}
        <div className="promo-boxes">
          {promotions
            .filter(promo => !promo.inPopup) // Wyświetl promocje, które nie są w popupie
            .map((promo) => (
              <div key={promo.id} className="promo-one">
                <img src={promo.image} className="promo-img" alt={promo.title} />
                <p>{promo.title}</p>
                <p>{promo.price}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Hits;
