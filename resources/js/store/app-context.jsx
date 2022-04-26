import React from "react";

const AppContext = React.createContext({
    songs: [],
    setSongs: () => {},
    index: null,
    setIndex: () => {},
});

export default AppContext;
