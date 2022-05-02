import React from "react";

const AppContext = React.createContext({
    songs: [],
    setSongs: () => {},
    activeSongIndex: null,
    setActiveSongIndex: () => {},
    isPlaying: false,
    setIsPlaying: () => {},
});

export default AppContext;
