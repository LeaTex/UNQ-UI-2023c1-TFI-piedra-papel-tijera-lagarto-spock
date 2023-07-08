import React from "react";
import "../styles/scoreBoard.css";

const ScoreBoard = ( {score} ) => {
    return (
        <div className="scoresContainer">
            <div className="scoresColumn">
                <h3>Humano</h3>
                <h2>{score.playerOne}</h2>
            </div>
            <div className="scoresColumn">
                <h3>Empates</h3>
                <h2>{score.ties}</h2>
            </div>
            <div className="scoresColumn">
                <h3>Computadora</h3>
                <h2>{score.playerTwo}</h2>
            </div>
        </div>
    );
};

export default ScoreBoard;
