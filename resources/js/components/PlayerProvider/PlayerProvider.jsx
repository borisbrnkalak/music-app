import React, { useState } from "react";
import AppContext from "../../store/app-context";
import PropTypes from "prop-types";

export default function PlayerProvider(props) {
    const [songs, setSongs] = useState([]);
    const [index, setIndex] = useState(null);

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
