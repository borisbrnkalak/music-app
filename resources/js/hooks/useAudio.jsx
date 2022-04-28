import { useEffect, useRef } from "react";

export default function useAudio(audioURL) {
    const audioRef = useRef(new Audio());

    useEffect(() => {
        audioRef.current.src = audioURL;
        audioRef.current.load();
        audioRef.current.play();
    }, [audioURL]);

    return audioRef.current;
}
