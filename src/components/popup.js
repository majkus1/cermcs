import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import promo1 from "/static/images/promo11.webp"
import promo2 from "/static/images/promo22.webp"
import promo3 from "/static/images/promo33.webp"
import promo4 from "/static/images/promo44.webp"

const Popup = ({ imageSrc, altText }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup")

    if (!hasSeenPopup) {
      setIsVisible(true)
    }
  }, [])

  const closePopup = () => {
    setIsVisible(false)
    sessionStorage.setItem("hasSeenPopup", "true")
  }

  const handleSeeMoreClick = () => {
    sessionStorage.setItem("hasSeenPopup", "true")
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="popup-backdrop" onClick={closePopup}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <h3>HITY CENOWE</h3>
        <p className="avail">Dostępne do wyczerpania zapasów.</p>
        <p className="buytel">Zakup i rezerwacja <a href="tel:+48857474947">tel: 85 74 74 947</a></p>
        <div className="promo-boxes">
          <div className="promo-img-boxes">
            <div className="promo-one">
              <img src={promo1} className="promo-img" />
              <p>BRISBANE DRĄŻONA WDF22 215x100x65mm</p>
              <p>3,80 zł/szt</p>
            </div>
            <div className="promo-one">
              <img src={promo2} className="promo-img" />
              <p>GRANITY PEŁNA VNF64 240x115x71mm</p>
              <p>6,40 zł/szt</p>
            </div>
            <div className="promo-one desk">
              <img src={promo3} className="promo-img" />
              <p>HASTINGS PEŁNA VNF61 240x115x71mm</p>
              <p>6,40 zł/szt</p>
            </div>
            <div className="promo-one desk">
              <img src={promo4} className="promo-img" />
              <p>MARGATE PEŁNA VNF21 240x115x71mm</p>
              <p>6,40 zł/szt</p>
            </div>
          </div>
          <Link to="/hity-cenowe" className="seemorehits" onClick={handleSeeMoreClick}>Zobacz więcej...</Link>
        </div>

        <button className="popup-close" onClick={closePopup}>
          X
        </button>
      </div>
    </div>
  )
}

export default Popup
