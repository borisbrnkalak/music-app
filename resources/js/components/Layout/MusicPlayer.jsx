import axios from "axios";
import { isEmpty, isNull } from "lodash";
import React, { useState } from "react";
import AddInput from "../AddInput/AddInput";
import RepeatButton from "../RepeatButton";
import ShuffleButton from "../ShuffleButton";
import SmallMusicButton from "../SmallMusicButton";
import SongDurationText from "../SongDurationText";

export default function MusicPlayer() {
    const [isOpened, setIsOpened] = useState(false);
    const [songName, setSongName] = useState("");
    const [songAuthor, setSongAuthor] = useState("");
    const [songYear, setSongYear] = useState("");
    const [songFile, setSongFile] = useState("");
    const [imageFile, setImageFile] = useState("");

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
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    const onShuffle = (e, shuffleMode) => {
        console.log("SHUFFLE", shuffleMode);
    };
    const onRepeat = (e, repeatMode) => {
        console.log("REPEAT", repeatMode);
    };
    const onPrev = () => {
        console.log("PREV");
    };
    const onNext = () => {
        console.log("NEXT");
    };

    return (
        <div className="w-[calc(100%-30rem)] mr-0 ml-auto bg-[#08081E] min-h-screen">
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
            <div className="w-full min-h-screen flex items-center justify-center py-20">
                <div className="w-full max-w-xl">
                    {/* Author image */}
                    <div className="w-5/6 bg-gray-900 h-[30rem] rounded-lg text-white p-4 mx-auto">
                        <img
                            src="https://i.pinimg.com/originals/0a/4d/cb/0a4dcb92fa2d3c601b58d72720d6bec4.jpg"
                            className="w-full h-full object-cover rounded-md shadow-lg shadow-gray-800"
                            alt=""
                        />
                    </div>

                    {/* Line */}
                    <div className="w-full mt-12 relative">
                        <input type="range" className="w-full" />
                        <div className="w-full mt-2 flex items-center justify-between">
                            <SongDurationText value={`0:14`} />
                            <SongDurationText value={`5:20`} />
                        </div>
                    </div>

                    {/* Song Name */}
                    <div className="mt-8 flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-gray-200 text-2xl font-bold">
                                uwu song
                            </h2>
                            <h4 className="text-gray-400 text-lg">
                                Japanese bitch
                            </h4>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="mt-16 flex items-center justify-between">
                        <ShuffleButton onClick={onShuffle} />
                        <div className="flex items-center justify-center">
                            <SmallMusicButton
                                icon={
                                    <i className="fa-solid fa-backward-step"></i>
                                }
                                onClick={onPrev}
                            />
                            <button className="text-6xl text-gray-200 mx-8 hover:text-blue-400 transition duration-300">
                                <i className="fa-solid fa-play"></i>
                            </button>
                            <SmallMusicButton
                                icon={
                                    <i className="fa-solid fa-forward-step"></i>
                                }
                                onClick={onNext}
                            />
                        </div>
                        <RepeatButton onClick={onRepeat} />
                    </div>
                </div>
            </div>
        </div>
    );
}
