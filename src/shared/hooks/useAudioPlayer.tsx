import { musicPlayerStore } from "@/app";
import { useEffect, useRef } from "react";

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (musicPlayerStore.isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [musicPlayerStore.isPlaying, musicPlayerStore.currentTrack, audioRef.current]);

  const togglePlayPause = (value: boolean) => {
    if (!audioRef.current) return;

    musicPlayerStore.togglePlayPause(value);

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const onSeek = (time: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = time;
    musicPlayerStore.seek(time);
  };

  const changeTrack = (type: "next" | "prev") => {
    musicPlayerStore.changeTrack(type);

    if (audioRef.current && musicPlayerStore.isPlaying) {
      audioRef.current.play();
    }
  };

  const setVolume = (volume: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;
    musicPlayerStore.setVolume(volume);
  };

  return { audioRef, togglePlayPause, onSeek, changeTrack, setVolume };
};
