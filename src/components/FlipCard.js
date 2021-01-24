import React, { useState, useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring'

const FlipCard = (props) => {
    const { images, pauseTime, onFlip } = props;
    
    const [flipped, setFlipped] = useState(true);
    const [currentCard, setCurrentCard] = useState({
        front: 0,
        back: 1,
    });



    const getCards = () => {
        if (currentCard.front > currentCard.back) {
            if (currentCard.front === (images.length - 1)) {
                if (currentCard.back !== 0) return { ...currentCard, back: 0 }
                else return { ...currentCard, front: 1 }
            }
            else return { ...currentCard, back: currentCard.front + 1 }
        }
        if (currentCard.front < currentCard.back) {
            if (currentCard.back === (images.length - 1)) {
                if (currentCard.front !== 0) return { ...currentCard, front: 0 }
                else return { ...currentCard, back: 1 }
            }
            else return { ...currentCard, front: currentCard.back + 1 }
        }
    }

    const setCard = () => {
        setFlipped(state => {
            console.log(!state.flipped);
            if (onFlip) onFlip();
            setCurrentCard({...getCards()});
            return !flipped;
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCard()
        }, pauseTime);
        return () => clearTimeout(timer);
    })

    return (
        <div className={"flip-container"} onClick={() => setCard()}>
            <FlipCardAnimation front={images[currentCard.front]} back={images[currentCard.back]} flipped={flipped} />
        </div>
    );
}

const FlipCardAnimation = (props) => {
    const { front, back, flipped, onRest } = props;

    console.log(front, back, flipped)

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    }, [flipped])

    return (
        <>
            <a.img className={"flip-card"} src={front} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
            <a.img className={"flip-card"} src={back} style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }} />
        </>
    );
}

export default FlipCard;