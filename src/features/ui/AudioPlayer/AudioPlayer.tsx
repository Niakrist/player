import { musicPlayerStore } from "@/app";
import { TrackInfo } from "@/entities";
import { Pause, Play, SkipBack, SkipForward, Volume, Volume1, Volume2 } from "lucide-react";
import styles from "./AudioPlayer.module.css";
import { ProgressBar } from "@/shared/ui";
import { useAudioPlayer } from "@/shared/hooks";

const AudioPlayer = () => {
  const { audioRef, onSeek, changeTrack, togglePlayPause, setVolume } = useAudioPlayer();

  if (!musicPlayerStore.currentTrack) {
    return null;
  }

  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSeek(Number(e.target.value));
  };
  const handleChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className={styles.audioPlayer}>
      <TrackInfo
        title={musicPlayerStore.currentTrack.name}
        images={musicPlayerStore.currentTrack.images}
        subTitle={musicPlayerStore.currentTrack.artist.name}
        track={musicPlayerStore.currentTrack}
      />
      <audio
        ref={audioRef}
        src={musicPlayerStore.currentTrack.file}
        onTimeUpdate={(e) => {
          const currentTime = Math.floor(e.currentTarget.currentTime);

          musicPlayerStore.seek(currentTime);
        }}
        onEnded={() => (musicPlayerStore.isPlaying = false)}
      ></audio>
      <div className={styles.controllWrapper}>
        <div className={styles.wrapperButton}>
          <button onClick={() => changeTrack("prev")}>
            <SkipBack className={styles.iconControl} size={20} />
          </button>
          <button
            className={styles.buttonPlay}
            onClick={() =>
              musicPlayerStore.isPlaying ? togglePlayPause(false) : togglePlayPause(true)
            }
          >
            {musicPlayerStore.isPlaying ? (
              <Pause className={styles.play} size={20} />
            ) : (
              <Play className={styles.play} size={20} />
            )}
          </button>
          <button onClick={() => changeTrack("next")}>
            <SkipForward className={styles.iconControl} size={20} />
          </button>
        </div>
        <ProgressBar
          currentValue={musicPlayerStore.curretnTime}
          maxValue={musicPlayerStore.currentTrack.durations}
          progress={musicPlayerStore.progress}
          onChange={handleChangeTime}
          isShowTime
        />

        <div className={styles.wrapperButtoVolume}>
          {musicPlayerStore.volume === 0 ? (
            <Volume />
          ) : musicPlayerStore.volume > 50 ? (
            <Volume2 />
          ) : (
            <Volume1 />
          )}
          <ProgressBar
            currentValue={musicPlayerStore.volume}
            maxValue={100}
            progress={musicPlayerStore.volume}
            onChange={handleChangeVolume}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
