import { cardData } from "../cardData";
import { LeftCard } from "./Component/LeftCardComponent";
import { RightCard } from "./Component/RightCardComponent";
import "./style.css";

export const Card = () => {
  return cardData.data.map((card,index) => {
    return (
      <div className="card-container" key={index}>
        <LeftCard cardsImage={card.cardsImage} />
        <RightCard
          name={card.name}
          totalCards={card.totalCards}
          price={card.price}
          total={card.total}
          description={card.description}
        />
      </div>
    );
  });
};
