import React from "react";
import PropTypes from "prop-types";

function SongDurationText({ value }) {
    return (
        <p className="w-16 py-1 px-2 text-center bg-gray-900 text-gray-200 rounded-sm">
            {value}
        </p>
    );
}

SongDurationText.propTypes = {
    value: PropTypes.string.isRequired,
};

export default SongDurationText;
