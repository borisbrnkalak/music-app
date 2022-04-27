import React from "react";
import SongsListItem from "./SongsListItem";
import PropTypes from "prop-types";
import { Scrollbar } from "react-scrollbars-custom";

export default function SongsList(props) {
    return (
        <Scrollbar
            className="scrollbar"
            style={{ height: `calc(100% - 100px)` }}
        >
            <div className="scrollbar h-[calc(100%-100px)] pr-4">
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
        </Scrollbar>
    );
}

SongsList.propTypes = {
    songs: PropTypes.array.isRequired,
};
