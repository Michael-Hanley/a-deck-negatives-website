import React, { useEffect, useState } from "react";
import { animated as a, useSpring } from "react-spring";
import "./FlipCard.scss";

const FlipCard = (props) => {
  const { images, pauseTime, onFlip, className } = props;

  const [flipped, setFlipped] = useState(true);
  const [currentCard, setCurrentCard] = useState({
    front: 0,
    back: 1,
  });

  const getCards = () => {
    if (currentCard.front > currentCard.back) {
      if (currentCard.front === images.length - 1) {
        if (currentCard.back !== 0) return { ...currentCard, back: 0 };
        else return { ...currentCard, front: 1 };
      } else return { ...currentCard, back: currentCard.front + 1 };
    }
    if (currentCard.front < currentCard.back) {
      if (currentCard.back === images.length - 1) {
        if (currentCard.front !== 0) return { ...currentCard, front: 0 };
        else return { ...currentCard, back: 1 };
      } else return { ...currentCard, front: currentCard.back + 1 };
    }
  };

  const setCard = () => {
    if (onFlip) onFlip();
    setCurrentCard({ ...getCards() });
    setFlipped(!flipped);
  };

  useEffect(() => {
    const interval = setInterval(
      setCard,
      Math.floor(Math.random() * 1000) + pauseTime
    );
    return () => clearInterval(interval);
  });

  return (
    <div
      className={className}
      role={"button"}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setCard()}
      onClick={() => setCard()}
    >
      <FlipCardAnimation
        front={images[currentCard.front]}
        back={images[currentCard.back]}
        flipped={flipped}
      />
    </div>
  );
};

const FlipCardAnimation = (props) => {
  const { front, back, flipped } = props;

  const { transform, opacity } = useSpring(
    {
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 },
    },
    [flipped]
  );

  return (
    <div className={"flip-card-container"}>
      <a.img
        alt={""}
        className={"flip-card"}
        src={front}
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      />
      <a.img
        alt={""}
        className={"flip-card"}
        src={back}
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      />
    </div>
  );
};

export default FlipCard;
