import React, { useState } from "react";
import SongsList from "../SongsList";

const DUMMY_SONGS = [
    {
        id: "song1",
        name: "Čierny baran",
        author: "Iby Maiga",
        year: 2020,
    },
    {
        id: "song2",
        name: "UwU song",
        author: "Some Japanese girl",
        year: 2022,
    },
    {
        id: "song2",
        name: "UwU song",
        author: "Some Japanese girl",
        year: 2022,
    },
    {
        id: "song2",
        name: "UwU song",
        author: "Some Japanese girl",
        year: 2022,
    },
    {
        id: "song2",
        name: "UwU song",
        author: "Some Japanese girl",
        year: 2022,
    },
    {
        id: "song2",
        name: "UwU song",
        author: "Some Japanese girl",
        year: 2022,
    },
    {
        id: "song2",
        name: "UwU song",
        author: "Some Japanese girl",
        year: 2022,
    },
    {
        id: "song1",
        name: "Čierny baran",
        author: "Iby Maiga",
        year: 2020,
    },
    {
        id: "song1",
        name: "Čierny baran",
        author: "Iby Maiga",
        year: 2020,
    },
];

export default function MusicList() {
    const [songsList, setSongsList] = useState(DUMMY_SONGS);

    return (
        <div className="w-[30rem] fixed top-0 left-0 h-screen gradient px-10 py-14 shadow-xl">
            <h1 className="mb-16 text-3xl text-white">
                Poľský <span className="uppercase font-bold">Cringe</span>
            </h1>
            <SongsList songs={songsList} />
        </div>
    );
}
