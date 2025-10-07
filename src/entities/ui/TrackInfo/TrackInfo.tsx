import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import type { ITrack } from "@/app/types/track.type";
import styles from "./TrackInfo.module.css";
import { musicPlayerStore } from "@/app";
import { Pause, Play } from "lucide-react";
import cn from "classnames";

interface ITrackInfoProps {
  images: string;
  title: string;
  subTitle: string;
  track?: ITrack;
}

const TrackInfo = ({ images, title, subTitle, track }: ITrackInfoProps) => {
  const isActive = musicPlayerStore.currentTrack?.name === track?.name;
  return (
    <div className={styles.wrapper}>
      {track ? (
        <button
          className={styles.buttonTrackInfo}
          onClick={() => {
            if (!isActive) {
              musicPlayerStore.setTrack(track);
              musicPlayerStore.togglePlayPause(true);
              console.log("new track");
            } else if (isActive && musicPlayerStore.isPlaying) {
              console.log("set pause");
              musicPlayerStore.togglePlayPause(false);
            } else if (isActive && !musicPlayerStore.isPlaying) {
              console.log("set play");
              musicPlayerStore.togglePlayPause(true);
            }
          }}
        >
          {isActive && (
            <CircularProgressbar
              strokeWidth={4}
              className={styles.circular}
              styles={{
                trail: { stroke: "#2e3235" },
                path: {
                  stroke: "var(--color-primary)",
                  transition: "stroke-dashoffset 0.5s ease 0s",
                },
              }}
              value={musicPlayerStore.progress}
            />
          )}
          <div className={cn(styles.playPause, { [styles.isActive]: isActive })}>
            {!isActive ? (
              <Play size={30} />
            ) : musicPlayerStore.isPlaying ? (
              <Pause size={30} />
            ) : (
              <Play size={30} />
            )}
          </div>

          <img className={styles.images} src={images} alt={title} />
        </button>
      ) : (
        <img className={styles.images} src={images} alt={title} />
      )}
      <div>
        <div className={styles.trackName}>{title}</div>
        <div className={styles.trackВuration}>{subTitle}</div>
      </div>
    </div>
  );
};

export default TrackInfo;
