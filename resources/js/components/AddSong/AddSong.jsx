import React, { useState, useContext } from "react";
import axios from "axios";
import { isEmpty, isNull } from "lodash";
import AddInput from "../AddInput/AddInput";
import AppContext from "../../store/app-context";

export default function AddSong() {
    const [isOpened, setIsOpened] = useState(false);
    const [songName, setSongName] = useState("");
    const [songAuthor, setSongAuthor] = useState("");
    const [songYear, setSongYear] = useState(0);
    const [songFile, setSongFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const { songs, setSongs } = useContext(AppContext);

    const toggleAddShelf = () => {
        setIsOpened(!isOpened);
    };

    const onNameChange = (event) => {
        setSongName(event.target.value);
    };
    const onAuthorChange = (event) => {
        setSongAuthor(event.target.value);
    };
    const onNumberChange = (event) => {
        setSongYear(event.target.value);
    };
    const onSongFileChange = (event) => {
        setSongFile(event.target.files[0]);
    };
    const onImageFileChange = (event) => {
        setImageFile(event.target.files[0]);
    };

    const submit = async () => {
        if (isNull(songFile) || isEmpty(songName)) {
            return;
        }

        const fd = new FormData();
        fd.append("name", songName);
        fd.append("author", songAuthor);
        fd.append("year", songYear);
        fd.append("song", songFile);
        fd.append("image", imageFile);

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
                        <div className="flex justify-evenly gap-4 flex-wrap">
                            <AddInput
                                label="Nazov"
                                name="name"
                                onChange={onNameChange}
                            />
                            <AddInput
                                label="Autor"
                                name="name"
                                onChange={onAuthorChange}
                            />
                            <AddInput
                                label="Rok"
                                name="name"
                                type={"number"}
                                onChange={onNumberChange}
                            />
                            <div className="">
                                <label
                                    className="text-gray-400"
                                    htmlFor="song-file"
                                >
                                    Pesnicka:
                                </label>
                                <input
                                    id="song-file"
                                    type="file"
                                    className="bg-gray-900 rounded-md border-none text-gray-200 ml-4 p-2"
                                    onChange={onSongFileChange}
                                    accept="audio/*"
                                />
                            </div>
                            <div className="">
                                <label
                                    className="text-gray-400"
                                    htmlFor="image-file"
                                >
                                    Obrazok:
                                </label>
                                <input
                                    id="image-file"
                                    type="file"
                                    className="bg-gray-900 rounded-md border-none text-gray-200 ml-4 p-2"
                                    onChange={onImageFileChange}
                                    accept="image/*"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-3">
                            <button
                                type="submit"
                                className="rounded-md bg-[#ba10c9] py-3 px-6 text-gray-200 min-w-[10rem] uppercase font-bold text-lg"
                                onClick={submit}
                            >
                                Pridaj
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
