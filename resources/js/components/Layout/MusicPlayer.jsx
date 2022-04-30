import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import AddSong from "../AddSong";
import RepeatButton from "../RepeatButton";
import ShuffleButton from "../ShuffleButton";
import SmallMusicButton from "../SmallMusicButton";
import SongDurationText from "../SongDurationText";
import AppContext from "../../store/app-context";
import { isNaN, isNull, isUndefined } from "lodash";
import useAudio from "../../hooks/useAudio";
import * as mm from "music-metadata-browser";

const defaultImageUrl =
    "https://i.pinimg.com/originals/0a/4d/cb/0a4dcb92fa2d3c601b58d72720d6bec4.jpg";

export default function MusicPlayer() {
    const {
        songs,
        activeSongIndex,
        setActiveSongIndex,
        isPlaying,
        setIsPlaying,
    } = useContext(AppContext);
    const [trackProgress, setTrackProgress] = useState(0);
    const [activeSong, setActiveSong] = useState({});

    const imageRef = useRef(null);
    const interval = useRef(null);

    const audio = useAudio(activeSong?.audio?.url);

    const onShuffle = (e, shuffleMode) => {
        console.log("SHUFFLE", shuffleMode);
    };

    const onRepeat = (e, repeatMode) => {
        audio.loop = repeatMode;
    };

    const onPrev = () => {
        if (activeSongIndex === 0) {
            setActiveSongIndex(songs.length - 1);
        } else {
            setActiveSongIndex(activeSongIndex - 1);
        }
    };

    const onNext = () => {
        if (activeSongIndex < songs.length - 1) {
            setActiveSongIndex(activeSongIndex + 1);
        } else {
            setActiveSongIndex(0);
        }
    };

    const onPlayButtonClick = () => {
        audio.paused ? audio.play() : audio.pause();
        audio.paused ? setIsPlaying(false) : setIsPlaying(true);
    };

    const onMusicBarChange = (e) => {
        if (isUndefined(audio.duration)) {
            return;
        }
        clearInterval(interval.current);
        audio.currentTime = e.target.value;
        setTrackProgress(e.target.value);
        startInterval();
    };

    const getDurationStringFromSeconds = useCallback(
        (seconds) =>
            !isUndefined(seconds)
                ? new Date(seconds * 1000).toISOString().slice(14, 19)
                : "00:00",
        []
    );

    useEffect(() => {
        setActiveSong(songs[activeSongIndex]);

        startInterval();
    }, [songs, activeSongIndex]);

    const startInterval = () => {
        clearInterval(interval.current);

        interval.current = setInterval(() => {
            if (audio.ended) {
                onNext();
            } else {
                setTrackProgress(audio.currentTime);
            }
        }, 1000);
    };

    useEffect(() => {
        async function fetchBla() {
            try {
                if (isUndefined(activeSong?.audio?.url)) {
                    return;
                }
                const metadata = await mm.fetchFromUrl(activeSong.audio.url);
                const cover = mm.selectCover(metadata.common.picture); // pick the cover image
                if (!isNull(cover)) {
                    imageRef.current.src = `data:${
                        cover.format
                    };base64,${cover.data.toString("base64")}`;
                } else {
                    imageRef.current.src = defaultImageUrl;
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchBla();
    }, [activeSong]);

    return (
        <div className="w-[calc(100%-30rem)] mr-0 ml-auto bg-[#08081E] min-h-screen">
            <AddSong />
            <div className="w-full min-h-screen flex items-center justify-center py-20">
                <div className="w-full max-w-xl">
                    {/* Author image */}
                    <div className="w-5/6 bg-gray-900 h-[30rem] rounded-lg text-white p-4 mx-auto">
                        <img
                            src={defaultImageUrl}
                            className="w-full h-full object-cover rounded-md shadow-lg shadow-gray-800"
                            alt=""
                            ref={imageRef}
                        />
                    </div>

                    {/* Line */}
                    <div className="w-full mt-12 relative">
                        <input
                            type="range"
                            className="w-full cursor-pointer"
                            min={0}
                            max={audio?.duration}
                            value={trackProgress}
                            onChange={onMusicBarChange}
                        />
                        <div className="w-full mt-2 flex items-center justify-between">
                            <SongDurationText
                                value={getDurationStringFromSeconds(
                                    trackProgress
                                )}
                            />
                            <SongDurationText
                                value={getDurationStringFromSeconds(
                                    isNaN(audio?.duration) ? 0 : audio?.duration
                                )}
                            />
                        </div>
                    </div>

                    {/* Song Name */}
                    <div className="mt-8 flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-gray-200 text-2xl font-bold">
                                {activeSong?.name}
                            </h2>
                            <h4 className="text-gray-400 text-lg">
                                {activeSong?.author ? activeSong.author : ""}
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
                            <button
                                className="text-6xl text-gray-200 mx-8 hover:text-blue-400 transition duration-300"
                                onClick={onPlayButtonClick}
                            >
                                {" "}
                                {isPlaying ? (
                                    <i className="fa-solid fa-pause"></i>
                                ) : (
                                    <i className="fa-solid fa-play"></i>
                                )}
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
