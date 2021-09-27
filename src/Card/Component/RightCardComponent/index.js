import { useState } from "react";
import "./style.css";
export const RightCard = ({ name, totalCards, price, total, description }) => {
  const [packsQuantity, setPacksQuantity] = useState(1);
  const decrementPackQuantity =()=>{
    if(packsQuantity>1){
        setPacksQuantity(packsQuantity - 1)
    }
  }
  return (
    <div className="card-right-container">
      <h2>{name}</h2>
      <div className="card-right-total-card-number">
        {totalCards} card in packs
      </div>
      <div className="card-right-price">$ {packsQuantity * price}</div>
      <div className="card-right-button-container">
        <div className="card-right-packs-quantity-container">
          <div
            className="card-right-packs-decrement-quantity-button"
            onClick={decrementPackQuantity}
          >
            -
          </div>
          <span className="card-right-packs-quantity-number">
            {packsQuantity}
          </span>
          <div
            className="card-right-packs-increment-quantity-button"
            onClick={() => setPacksQuantity(packsQuantity + 1)}
          >
            +
          </div>
        </div>

        <button className="card-right-buy-button" type="submit">
          Buy Packs
        </button>
      </div>
      <div className="card-right-total-number">{total} Total</div>
      <div className="card-right-seperation-div"></div>
      <h3>Pack Details</h3>
      <p>{description}</p>
    </div>
  );
};
