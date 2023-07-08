const HAND_OPTIONS = [
    {
        name: "rock",
        label: "Piedra",
        primaryIcon: "✊🏻",
        secondaryIcon: "✊🏿",
        beats: ["scissors", "lizard"],
    },
    {
        name: "paper",
        label: "Papel",
        primaryIcon: "✋🏻",
        secondaryIcon: "✋🏿",
        beats: ["rock", "spock"],
    },
    {
        name: "scissors",
        label: "Tijera",
        primaryIcon: "✌🏻",
        secondaryIcon: "✌🏿",
        beats: ["paper", "lizard"],
    },
    {
        name: "lizard",
        label: "Lagarto",
        primaryIcon: "🤏🏻",
        secondaryIcon: "🤏🏿",
        beats: ["paper", "spock"],
    },
    {
        name: "spock",
        label: "Spock",
        primaryIcon: "🖖🏻",
        secondaryIcon: "🖖🏿",
        beats: ["rock", "scissors"],
    },
];

const GameScore = (playerOne = 0, playerTwo = 0, ties = 0) => {
    return {
        playerOne: playerOne,
        playerTwo: playerTwo,
        ties: ties,
    };
};

const pickComputerHand = () => {
    const randomIndex = Math.floor(Math.random() * HAND_OPTIONS.length);
    return HAND_OPTIONS[randomIndex];
};

const isWinner = (selection, opponentSelection) => {
    return selection.beats.includes(opponentSelection.name);
};

export { HAND_OPTIONS, GameScore, pickComputerHand, isWinner };
