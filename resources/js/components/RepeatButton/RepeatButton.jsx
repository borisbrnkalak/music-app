import React, { useState } from "react";
import PropTypes from "prop-types";

function RepeatButton(props) {
    const [isRepeatingOne, setIsRepeatingOne] = useState(false);
    return (
        <button
            className={`text-3xl ${
                isRepeatingOne ? "text-gray-200" : "text-gray-600"
            } hover:text-gray-50 transition duration-300`}
            onClick={(e) => {
                const newMode = !isRepeatingOne;
                setIsRepeatingOne(newMode);
                props.onClick(e, newMode);
            }}
        >
            <i className="fa-solid fa-repeat"></i>
        </button>
    );
}

RepeatButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default RepeatButton;
