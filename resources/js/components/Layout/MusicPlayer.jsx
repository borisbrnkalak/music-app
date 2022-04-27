import React, { useState } from "react";
import AddInput from "../AddInput/AddInput";
import RepeatButton from "../RepeatButton";
import ShuffleButton from "../ShuffleButton";
import SmallMusicButton from "../SmallMusicButton";
import SongDurationText from "../SongDurationText";

export default function MusicPlayer() {
    const [isOpened, setIsOpened] = useState(false);

    const toggleAddShelf = () => {
        setIsOpened(!isOpened);
    };

    const onNameChange = () => {
        console.log("change onNameChange");
    };
    const onAuthorChange = () => {
        console.log("change onAuthorChange");
    };
    const onNumberChange = () => {
        console.log("change onNumberChange");
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
                        isOpened ? "max-h-[10rem]" : ""
                    }`}
                >
                    <div className="py-8">
                        <form action="" className="">
                            <div className="flex justify-evenly">
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
                                <input type="file" />
                                <input type="file" />
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
