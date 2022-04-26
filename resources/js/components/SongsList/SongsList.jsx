import React from "react";
import SongsListItem from "./SongsListItem";
import PropTypes from "prop-types";

export default function SongsList(props) {
    return (
        <div className="scrollbar overflow-y-scroll h-[calc(100%-100px)] pr-4">
            <ul>
                {props.songs.map((item) => {
                    return (
                        <SongsListItem
                            key={item.id}
                            name={item.name}
                            author={item.author}
                            year={item.year}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

SongsList.propTypes = {
    songs: PropTypes.array.isRequired,
};
