import React, { useState, useEffect } from "react";
import AppContext from "../../store/app-context";
import PropTypes from "prop-types";
import axios from "axios";

export default function PlayerProvider(props) {
    const [songs, setSongs] = useState([]);
    const [index, setIndex] = useState(null);

    useEffect(() => {
        async function loadSongs() {
            try {
                const res = await axios.get(`${location.origin}/api/songs`);
                setSongs(res.data.songs);
            } catch (error) {
                console.error(error);
            }
        }
        loadSongs();
    }, []);

    return (
        <AppContext.Provider
            value={{
                songs: songs,
                setSongs: setSongs,
                index: index,
                setIndex: setIndex,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

PlayerProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
