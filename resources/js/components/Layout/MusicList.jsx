import React from "react";

const DUMMY_SONGS = [
    {
        id: "song1",
        name: "Čierny baran",
        author: "Iby Maiga",
    },
    {
        id: "song2",
        name: "UwU song",
        author: "Some Japanese girl",
    },
];

export default function MusicList() {
    return (
        <div className="w-[30rem] fixed top-0 left-0 h-screen gradient">
            MusicList
        </div>
    );
}
