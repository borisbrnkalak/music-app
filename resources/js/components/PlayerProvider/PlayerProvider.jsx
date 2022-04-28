import React, { useState, useEffect } from "react";
import AppContext from "../../store/app-context";
import PropTypes from "prop-types";
import axios from "axios";

export default function PlayerProvider(props) {
    const [songs, setSongs] = useState([]);
    const [activeSong, setActiveSong] = useState(null);

    useEffect(() => {
        async function loadSongs() {
            try {
                const res = await axios.get(`${location.origin}/api/songs`);
                console.log(res);
                if (res.data.songs.length < 1) throw "No songs in database";
                setSongs(res.data.songs);
                setActiveSong(
                    res.data.songs[0]
                        ? res.data.songs[0]
                        : {
                              id: -1,
                              name: "No song selected",
                              author: null,
                              year: null,
                              duration: null,
                              audio: null,
                              image: null,
                          }
                );
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
                activeSong: activeSong,
                setActiveSong: setActiveSong,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

PlayerProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
