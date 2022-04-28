import React from "react";

const AppContext = React.createContext({
    songs: [],
    setSongs: () => {},
    activeSong: null,
    setActiveSong: () => {},
});

export default AppContext;
