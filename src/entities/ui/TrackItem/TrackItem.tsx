import type { ITrack } from "@/app/types/track.type";
import styles from "./TrackItem.module.css";
import { Ellipsis, Heart } from "lucide-react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

interface ITrackItemProps {
  track: ITrack;
}

const TrackItem = ({ track }: ITrackItemProps) => {
  return (
    <div className={styles.track}>
      <div className={styles.wrapper}>
        <div className={styles.images} />
        <div>
          <div className={styles.trackName}>{track.name}</div>
          <div className={styles.trackВuration}>
            {dayjs.unix(track.durations).utc().format("m:ss")}
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button>
          <Heart className={styles.iconHeart} />
        </button>
        <button>
          <Ellipsis className={styles.iconEllipsis} />
        </button>
      </div>
    </div>
  );
};

export default TrackItem;
