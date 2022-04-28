import React, { useState, useEffect } from "react";
import AppContext from "../../store/app-context";
import PropTypes from "prop-types";
import axios from "axios";

export default function PlayerProvider(props) {
    const [songs, setSongs] = useState([]);
    const [activeSongIndex, setActiveSongIndex] = useState(null);

    useEffect(() => {
        async function loadSongs() {
            try {
                const res = await axios.get(`${location.origin}/api/songs`);
                console.log(res);
                if (res.data.songs.length < 1) throw "No songs in database";
                setSongs(res.data.songs);
                setActiveSongIndex(0);
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
                activeSongIndex: activeSongIndex,
                setActiveSongIndex: setActiveSongIndex,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

PlayerProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
