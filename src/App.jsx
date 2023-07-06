import React, { useState, useEffect } from "react"
import OptionButton from "./components/optionButton"
import ScoreBoard from "./components/scoreBoard"
import { HAND_OPTIONS , pickComputerHand , isWinner } from "./core/core"
import "./App.css";

const App = () => {
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [winner, setWinner] = useState('')
    const [score, setScore] = useState({playerOne: 0, playerTwo: 0, ties: 0})

    const handleUserChoice = (event) => {
        setUserChoice( HAND_OPTIONS.find(option => option.name === event.target.id) )
        setComputerChoice( pickComputerHand() )
    }

    useEffect(() => {
        if (userChoice && computerChoice) {
            console.log('use effect')
            if (isWinner(userChoice, computerChoice)) {
                setWinner('usuario')
                setScore({playerOne: score.playerOne + 1, playerTwo: score.playerTwo, ties: score.ties})
            }
            else if (isWinner(computerChoice, userChoice)) {
                setWinner('computadora')
                setScore({playerOne: score.playerOne, playerTwo: score.playerTwo + 1, ties: score.ties})
            }
            else {
                setWinner('empate!') 
                setScore({playerOne: score.playerOne, playerTwo: score.playerTwo, ties: score.ties + 1})
            }
            /*setUserChoice(null)
            setComputerChoice(null)*/
        }
    }, [userChoice, computerChoice])
    
    return (
        <>
            <h1>Piedra - Papel - Tijera - Lagarto - Spock</h1>
            <ScoreBoard score={score} />
            <h1>user: {userChoice && userChoice.primaryIcon}</h1>
            <h1>computer: {computerChoice && computerChoice.secondaryIcon}</h1>
            {HAND_OPTIONS.map((option) => (
                <OptionButton key={option.name} option={option} handle={handleUserChoice} />
            ))}
            <div>Ganador: {winner}</div>
        </>
    );
}

export default App;
