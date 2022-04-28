import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppContext from "../../store/app-context";

export default function SongsListItem(props) {
    //That yellow #f7ec77

    const { activeSong, setActiveSong } = useContext(AppContext);

    const selectSpecificSong = () => {
        setActiveSong(props.song);
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
                <i className="fa-solid fa-circle-play text-gray-200 text-2xl transition ease duration-300 group-hover:text-[#9d65c9]"></i>
            </div>

            <div className="line h-[2px] w-full absolute bottom-0 left-0 rounded-sm bg-[#9d65c9] mt-10 translate-x-[-100%] group-hover:translate-x-[0] transition ease-in-out delay-150 duration-[0.5s]"></div>
        </li>
    );
}

SongsListItem.propTypes = {
    author: PropTypes.string,
    name: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    song: PropTypes.object,
};
