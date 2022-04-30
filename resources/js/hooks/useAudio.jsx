import { isUndefined } from "lodash";
import { useContext, useEffect, useRef } from "react";
import AppContext from "../store/app-context";

export default function useAudio(audioURL) {
    const { isPlaying, setIsPlaying } = useContext(AppContext);

    const audioRef = useRef(new Audio());
    console.log(audioRef);

    useEffect(() => {
        if (isUndefined(audioURL)) {
            return;
        }
        audioRef.current.src = audioURL;
        audioRef.current.load();
        audioRef.current.play();
        console.log("Hraaam");

        setIsPlaying(true);
    }, [audioURL]);

    return audioRef.current;
}
