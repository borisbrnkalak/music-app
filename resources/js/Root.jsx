import React from "react";
import { createRoot } from "react-dom/client";
import MusicPlayer from "./components/Layout/MusicPlayer";
import MusicList from "./components/Layout/MusicList";

export default function Root() {
    return (
        <div className="w-full relative">
            <MusicList />
            <MusicPlayer />
        </div>
    );
}

let app = document.getElementById("app");
if (app) {
    const root = createRoot(app);
    root.render(<Root />);
}
