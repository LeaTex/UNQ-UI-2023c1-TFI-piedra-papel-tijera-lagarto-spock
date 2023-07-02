const HAND_OPTIONS = [
    {
        name: "rock",
        label: "Piedra",
        icon: "✊",
        beats: ["scissors", "lizard"],
    },
    {
        name: "paper",
        label: "Papel",
        icon: "✋",
        beats: ["rock", "spock"],
    },
    {
        name: "scissors",
        label: "Tijera",
        icon: "✌",
        beats: ["paper", "lizard"],
    },
    {
        name: "lizard",
        label: "Lagarto",
        icon: "🤏",
        beats: ["paper", "spock"],
    },
    {
        name: "spock",
        label: "Spock",
        icon: "🖖",
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
