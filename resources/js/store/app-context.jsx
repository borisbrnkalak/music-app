import React from "react";

const AppContext = React.createContext({
    songs: [],
    setSongs: () => {},
    activeSongIndex: null,
    setActiveSongIndex: () => {},
});

export default AppContext;
