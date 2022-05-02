import React from "react";
import PropTypes from "prop-types";

export default function SongsListItem(props) {
    const selectSpecificSong = () => {
        props.onSelect(props.index);
    };

    return (
        <li
            onClick={selectSpecificSong}
            className="flex mt-6 py-3.5 justify-between items-center group hover:cursor-pointer relative first:mt-0 overflow-x-hidden "
        >
            <div className="left-info text-white">
                <div className="upper-text">
                    {`${props.author} • ${props.year}`}
                </div>
                <div className="lower-text text-xl font-bold">{props.name}</div>
            </div>
            <div className="right-info">
                <i
                    className={`fa-solid fa-circle-play text-gray-200 text-2xl transition ease duration-300 group-hover:text-[#9d65c9] ${
                        props.selected ? "text-[#9d65c9]" : ""
                    }`}
                ></i>
            </div>

            <div
                className={`line h-[2px] w-full absolute bottom-0 left-0 rounded-sm bg-[#9d65c9] mt-10 translate-x-[-100%] group-hover:translate-x-[0] transition ease-in-out delay-150 duration-[0.5s] ${
                    props.selected ? "translate-x-[0]" : ""
                }`}
            ></div>
        </li>
    );
}

SongsListItem.propTypes = {
    author: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    index: PropTypes.number.isRequired,
};
