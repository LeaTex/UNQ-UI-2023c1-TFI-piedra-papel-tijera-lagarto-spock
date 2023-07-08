import React from "react";

const ShowWinner = ({ winner }) => {
    const message = {
        'playerOne' : "Ganador: Humano",
        'playerTwo' : "Ganador: Computadora",
        'tie' : "Empate!",
    };
    return <h2>{message[winner]}</h2>;
};

export default ShowWinner;
