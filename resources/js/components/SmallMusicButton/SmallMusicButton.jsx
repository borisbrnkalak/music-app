import React from "react";
import PropTypes from "prop-types";

export default function SmallMusicButton(props) {
    return (
        <button
            className="text-3xl text-gray-400 hover:text-gray-50 transition duration-300"
            onClick={props.onClick}
        >
            {props.icon}
        </button>
    );
}

SmallMusicButton.defaultProps = {
    onClick: () => {},
};

SmallMusicButton.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.node.isRequired,
};
