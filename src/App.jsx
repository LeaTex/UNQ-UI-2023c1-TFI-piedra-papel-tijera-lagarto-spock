import React, { useState, useEffect } from "react"
import OptionButton from "./components/optionButton"
import ScoreBoard from "./components/scoreBoard"
import ShowWinner from "./components/showWinner"
import { HAND_OPTIONS, GameScore, pickComputerHand , isWinner } from "./core/core"
import "./App.css";

const App = () => {
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [winner, setWinner] = useState(null)
    const [score, setScore] = useState(GameScore(0,0,0))

    const handleUserChoice = (event) => {
        setUserChoice( HAND_OPTIONS.find(option => option.name === event.target.id) )
        setComputerChoice( pickComputerHand() )
    }

    const handleResetGame = () => {
        setScore(GameScore(0,0,0))
        setWinner(null)
        setUserChoice(null)
        setComputerChoice(null)
    };

    useEffect(() => {
        if (userChoice && computerChoice) {
            if (isWinner(userChoice, computerChoice)) {
                setWinner('playerOne')
                setScore(GameScore(score.playerOne + 1, score.playerTwo, score.ties))
            }
            else if (isWinner(computerChoice, userChoice)) {
                setWinner('playerTwo')
                setScore(GameScore(score.playerOne, score.playerTwo + 1, score.ties))
            }
            else {
                setWinner('tie')
                setScore(GameScore(score.playerOne, score.playerTwo, score.ties + 1))
            }
        }
    }, [userChoice, computerChoice])
    
    return (
        <>
            <h1>Piedra - Papel - Tijera - Lagarto - Spock</h1>
            <div className="gameContainer">
                <div className="handsContainer">
                    {HAND_OPTIONS.map((option) => (
                        <OptionButton key={option.name} option={option} handle={handleUserChoice} />
                    ))}
                </div>
                <div className="choicesContainer">
                    <div>
                        <div className="avatar">👨🏻</div>
                        <div className="choice">{userChoice && userChoice.primaryIcon}</div>
                    </div>
                    <div>
                        <div className="avatar">🤖</div>
                        <div className="choice">{computerChoice && computerChoice.secondaryIcon}</div>
                    </div>
                </div>
                {winner && <ShowWinner winner={winner}/>}
                <ScoreBoard score={score} />
                <button className="resetButton" onClick={handleResetGame}><h2>Resetear</h2></button>
            </div>
        </>
    );
}

export default App;
