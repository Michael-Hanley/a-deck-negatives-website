import React from "react";
import { Helmet } from "react-helmet";
import CardDeckAnimation from "../components/CardDeckAnimation";
import FlipCard from "../components/FlipCard";
import deckShot from "../images/deckShot.jpg";
import hand1 from "../images/hand1.jpg";
import mainLogoCard from "../images/mainLogoCard.png";
import NumberCards from "../images/NumberCards.json";
import SpecialCards from "../images/SpecialCards.json";
import { shuffle } from "../utils/shuffle";
import "./index.scss";

const cardProps = [
  ...shuffle([
    ...NumberCards,
    SpecialCards[0],
    SpecialCards[7],
    SpecialCards[13],
    SpecialCards[11],
  ]),
  mainLogoCard,
];

const IndexPage = () => {
  return (
    <main className={"page-styles"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>A Deck of Negatives</title>
        <link rel="canonical" href="https://ADeckofNegatives.com" />
      </Helmet>
      <header>
        <div className={"main-logo"}>
          <CardDeckAnimation cards={[...cardProps]} />
        </div>
      </header>
      <div className={"product-image-container"}>
        <img alt={""} src={deckShot} className={"product-image"} />
      </div>
      <h2 className={"text-header"}>A Game of Lies and Deceit</h2>
      <div className={"text-container"}>
        <div className={"text"}>
          Quake, grumble, grumble… Ahhh!
          <br />
          <br />
          The ground collapses and a sink hole swallows you and a friend! After
          the first half hour of constant screaming and endless falling, it
          dawns on you that you’ve fallen into a bottomless pit…. And this could
          take a while. Out of the sheer boredom of the ensuing hours of
          falling, you and your compadre come up with this game to complement
          the bottomless pit experience!
          <br />
          <br />
          Gather the most matching quadruplets of negatives to gain the lowest
          total number. The lower the number, the farther into the pit you’ve
          progressed.
        </div>
      </div>
      <div>
        <a
          className={"buy-button"}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.makeplayingcards.com/sell/marketplace/a-deck-of-negatives.html"
        >
          Buy Now
        </a>
      </div>
      <div>
        <img alt={""} src={hand1} className={"product-image"} />
      </div>
      <h2 className={"text-header"}>Gameplay</h2>
      <div className={"text-container"}>
        <div className={"text"}>
          Start by shuffling the deck.
          <br />
          <br />
          Each player then draws 5 cards. If any special cards are drawn,
          shuffle them back into the deck and draw a new card.
          <br />
          <br />
          If a player draws 4 matching negatives, they may take them out of play
          at any point during their turn.
          <br />
          <br />
          Once both players have 5 cards, decide who goes first...
          <br />
          <br />
          <h3>Player Turns:</h3>
          Players start their turn by drawing a card. If a special card is
          drawn, do as it says.
          <br />
          <br />
          Thereafter, the player has the option of asking their opponent for any
          negative they may want.
          <br />
          <br />
          The opponent can choose to hand over all their cards matching what
          they asked for or they can lie and just give them one (or none!)
          <br />
          <br />
          Not satisfied by your opponent’s response? Feel like you’re being lied
          to? Call their bluff!
          <br />
          <br />
          Still don’t trust them? You can choose to look at your opponents hand
          and take the cards... but be warned, if they weren’t bluffing... they
          can look at your hand and take any one card.
          <br />
          <br />
          Once the player has put down any remaining sets of four they may have
          or had gained, the next player begins their turn.
          <br />
          <br />
          Once the deck is depleted and all negatives are out of play, The
          player with the lowest total score after adding up all their cards
          wins
        </div>
      </div>
      <div className={"card-info"}>
        <div className="cards-container">
          <h2>Includes 18 special event cards</h2>
          <FlipCard
            className={"cards"}
            images={[...SpecialCards]}
            pauseTime={3000}
          />
        </div>
        <div className={"cards-container"}>
          <FlipCard
            className={"cards"}
            images={[...NumberCards]}
            pauseTime={3000}
          />
          <h2>
            Descend farther and faster into the pit by accumulating negatives!
          </h2>
        </div>
      </div>
      <div>
        <a
          className={"buy-button"}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.makeplayingcards.com/sell/marketplace/a-deck-of-negatives.html"
        >
          Buy Now
        </a>
      </div>
    </main>
  );
};

export default IndexPage;
