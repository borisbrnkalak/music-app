import React, { useState, useContext } from "react";
import axios from "axios";
import { isNull } from "lodash";
import AddInput from "../AddInput/AddInput";
import AppContext from "../../store/app-context";

export default function AddSong() {
    const [isOpened, setIsOpened] = useState(false);
    const [songFiles, setSongFiles] = useState(null);

    const { songs, setSongs } = useContext(AppContext);

    const toggleAddShelf = () => {
        setIsOpened(!isOpened);
    };

    const onSongFileChange = (event) => {
        setSongFiles(event.target.files);
    };

    const submit = async () => {
        if (isNull(songFiles)) {
            return;
        }

        const fd = new FormData();
        Array.from(songFiles).map((song, counter) => {
            fd.append(`songs[${counter}]`, song);
        });

        try {
            const res = await axios.post(`${location.origin}/api/songs`, fd, {
                headers: {
                    accept: "application/json",
                    "Content-Type": `multipart/form-data`,
                },
            });

            setSongs([res.data.song, ...songs]);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full bg-gray-800 p-4 ">
            <div className="flex justify-end w-full">
                <button
                    onClick={toggleAddShelf}
                    className={`text-2xl text-gray-400 hover:text-gray-200 ${
                        isOpened ? "text-gray-200" : ""
                    }`}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>

            <div
                className={`w-full overflow-hidden max-h-0 transition-all duration-300 ${
                    isOpened ? "max-h-[14rem]" : ""
                }`}
            >
                <div className="py-8">
                    <form
                        action=""
                        className=""
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="flex justify-evenly gap-4 flex-wrap items-center">
                            <div className="">
                                <label
                                    className="text-gray-400"
                                    htmlFor="song-file"
                                >
                                    Pesnicky:
                                </label>
                                <input
                                    id="song-file"
                                    type="file"
                                    className="bg-gray-900 rounded-md border-none text-gray-200 ml-4 p-2"
                                    onChange={onSongFileChange}
                                    accept="audio/*"
                                    multiple={true}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md bg-[#ba10c9] py-3 px-6 text-gray-200 min-w-[10rem] uppercase font-bold text-lg"
                                    onClick={submit}
                                >
                                    Pridaj
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
