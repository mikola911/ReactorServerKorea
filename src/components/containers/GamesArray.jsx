import React from "react";
import GameCard from "./GameCard";
import gameList from "../../gameList";

export default function GameArray() {
    // console.log(gameList);
    const gameElement = gameList.map(game => (
        <GameCard key={game.gameName} content={game} />
    ));
    return <div className="row">{gameElement}</div>;
}
