import React from "react";
import "../styles/scoreBoard.css";

const ScoreBoard = ( {score} ) => {
    return (
        <>
            <div className="scoresContainer">
                <div>
                    <div>Jugador 1</div>
                    <div>{score.playerOne}</div>
                </div>
                <div>
                    <div>Empates</div>
                    <div>{score.ties}</div>
                </div>
                <div>
                    <div>Jugador 2</div>
                    <div>{score.playerTwo}</div>
                </div>
            </div>
        </>
    );
};

export default ScoreBoard;
