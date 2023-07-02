import React, { useState, useEffect } from "react";
import OptionButton from "./components/optionButton";
import { HAND_OPTIONS , pickComputerHand , isWinner } from "./core/core";
import "./App.css";

function App() {
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [winner, setWinner] = useState('')

    const handleUserChoice = (event) => {
        event.preventDefault()
        setUserChoice( HAND_OPTIONS.find(option => option.name === event.target.id) )
        setComputerChoice( pickComputerHand() )
    }

    useEffect(() => {
        if (userChoice && computerChoice) {
            console.log('use effect')
            isWinner(userChoice, computerChoice)
                ? setWinner('usuario')
                : isWinner(computerChoice, userChoice)
                    ? setWinner('computadora')
                    : setWinner('empate!');
            setUserChoice(null)
            setComputerChoice(null)
        }
    }, [userChoice, computerChoice])
    
    return (
        <>
            {HAND_OPTIONS.map((option) => (
                <OptionButton key={option.name} option={option} handle={handleUserChoice} />
            ))}
            <div>Ganador: {winner}</div>
        </>
    );
}

export default App;
