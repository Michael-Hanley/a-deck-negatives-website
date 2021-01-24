import React, { useState } from "react";
import { animated, interpolate, useSprings } from "react-spring";
import { useDrag } from "react-use-gesture";
import "./CardDeckAnimation.scss";

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (i) => ({
  x: 0,
  rot: 0,
  scale: 1.5,
  y: -1000,
});

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const CardDeck = (props) => {
  const { cards } = props;

  const [gone] = useState(() => new Set());
  const [springs, setSprings] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({
      args: [index],
      down: mouseDown,
      movement: [mx],
      direction: [xDir],
      velocity,
    }) => {
      const flyOutTrigger = velocity > 0.2;
      const direction = xDir < 0 ? -1 : 1;

      if (!mouseDown && flyOutTrigger) gone.add(index);

      setSprings((i) => {
        if (index !== i) return;

        const isGone = gone.has(index);

        const nextXPosition = (() => {
          if (isGone) return (200 + window.innerWidth) * direction;
          else if (mouseDown) return mx;
          else return 0;
        })();

        const tension = (() => {
          if (mouseDown) return 800;
          else if (isGone) return 200;
          else return 500;
        })();

        const rotation = mx / 100 + (isGone ? direction * 10 * velocity : 0);
        const scale = mouseDown ? 1.1 : 1;

        return {
          x: nextXPosition,
          rot: rotation,
          scale,
          delay: undefined,
          config: {
            friction: 50,
            tension: tension,
          },
        };
      });
      if (!mouseDown && gone.size === cards.length)
        setTimeout(() => gone.clear() || setSprings((i) => to(i)), 600);
    }
  );
  return springs.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
          backgroundImage: `url(${cards[i]})`,
        }}
      />
    </animated.div>
  ));
};

const CardDeckAnimation = ({ cards }) => (
  <div id={"DeckRoot"}>
    <CardDeck cards={[...cards]} />
  </div>
);

export default CardDeckAnimation;
