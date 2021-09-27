import { useState } from "react";
import "./style.css";

export const LeftCard = ({ cardsImage }) => {
  const [imageIndex, setImageIndex] = useState(cardsImage[0]);
  const array = () => {
    const exist = cardsImage.find((cardImage) => cardImage === imageIndex);
    if (exist) {
      return cardsImage.filter((cardImage) => cardImage !== imageIndex);
    }
    return cardsImage;
  };
  return (
    <div className="card-left-container">
      <img className={`card-left-big-image ${imageIndex && "card-left-image-animation"}`} src={imageIndex} alt="clicked card info"/>
      <div className="card-left-image-container">
        {array().map((cardImage, index) => (
          <img
            key={index}
            className="card-left-image"
            src={cardImage}
            onClick={() => setImageIndex(cardImage)}
            alt="card info"
          />
        ))}
      </div>
    </div>
  );
};
