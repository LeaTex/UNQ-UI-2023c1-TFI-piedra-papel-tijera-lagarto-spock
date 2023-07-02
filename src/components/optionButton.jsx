import React from "react";
import "../styles/optionButton.css";

const OptionButton = ({ option , handle}) => {
    return (
        <button className="optionButton" id={option.name} onClick={handle} title={option.label}>{option.icon}</button>
    );
};

export default OptionButton;
