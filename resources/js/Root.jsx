import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import MusicPlayer from "./components/Layout/MusicPlayer";
import MusicList from "./components/Layout/MusicList";

export default function Root() {
    return (
        <Fragment>
            <MusicList />
            <MusicPlayer />
        </Fragment>
    );
}

let app = document.getElementById("app");
if (app) {
    const root = createRoot(app);
    root.render(<Root />);
}
