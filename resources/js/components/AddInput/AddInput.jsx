import React from "react";
import PropTypes from "prop-types";

function AddInput(props) {
    return (
        <div className="flex items-baseline">
            <label htmlFor={`${props.name}-input`} className="text-gray-400">
                {props.label}
            </label>
            <input
                className="bg-gray-900 text-gray-200 border-none px-4 py-2 rounded-md ml-4"
                type={props.type}
                placeholder={props.label}
                id={`${props.name}-input`}
                onChange={props.onChange}
            />
        </div>
    );
}

AddInput.defaultProps = {
    type: "text",
};
AddInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
};

export default AddInput;
