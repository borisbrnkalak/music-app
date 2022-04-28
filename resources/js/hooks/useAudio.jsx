import { isUndefined } from "lodash";
import { useEffect, useRef } from "react";

export default function useAudio(audioURL) {
    const audioRef = useRef(new Audio());
    console.log(audioRef);

    useEffect(() => {
        if (isUndefined(audioURL)) {
            return;
        }
        audioRef.current.src = audioURL;
        audioRef.current.load();
        audioRef.current.play();
    }, [audioURL]);

    return audioRef.current;
}
