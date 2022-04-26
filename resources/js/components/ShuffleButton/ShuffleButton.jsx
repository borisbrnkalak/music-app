import React, { useState } from "react";
import PropTypes from "prop-types";

function ShuffleButton(props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <button
            className={`text-3xl ${
                isActive ? "text-gray-200" : "text-gray-600"
            } hover:text-gray-50 transition duration-300`}
            onClick={(e) => {
                const newIsActive = !isActive;
                setIsActive(newIsActive);
                props.onClick(e, newIsActive);
            }}
        >
            <i className="fa-solid fa-shuffle"></i>
        </button>
    );
}

ShuffleButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ShuffleButton;
