import React from "react";
import SongsListItem from "./SongsListItem";
import PropTypes from "prop-types";
import SimpleBar from "simplebar-react";
import "./simplebar.css";

export default function SongsList(props) {
    return (
        <SimpleBar style={{ height: `calc(100% - 100px)` }}>
            <div className="scrollbar h-full pr-8">
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
        </SimpleBar>
    );
}

SongsList.propTypes = {
    songs: PropTypes.array.isRequired,
};
