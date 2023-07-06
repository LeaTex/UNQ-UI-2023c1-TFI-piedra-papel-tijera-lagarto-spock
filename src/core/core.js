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

const pickComputerHand = () => {
    const randomIndex = Math.floor(Math.random() * HAND_OPTIONS.length);
    return HAND_OPTIONS[randomIndex];
};

const isWinner = (selection, opponentSelection) => {
    return selection.beats.includes(opponentSelection.name);
};

export { HAND_OPTIONS , pickComputerHand , isWinner };
