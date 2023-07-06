import React from "react"
import "../styles/optionButton.css"

const OptionButton = ({ option , handle}) => {
    return (
        <button className="optionButton" id={option.name} onClick={handle} title={option.label}>{option.primaryIcon}</button>
    );
};

export default OptionButton;
