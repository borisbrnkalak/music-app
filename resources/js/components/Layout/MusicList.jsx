import React, { useContext } from "react";
import SongsList from "../SongsList";
import AppContext from "../../store/app-context";

export default function MusicList() {
    const { songs } = useContext(AppContext);

    return (
        <div className="w-[30rem] fixed top-0 left-0 h-screen gradient px-10 py-14 shadow-xl">
            <h1 className="mb-16 text-4xl text-white">
                Poľský <span className="uppercase font-bold">Cringe</span>
            </h1>
            <SongsList songs={songs} />
        </div>
    );
}
