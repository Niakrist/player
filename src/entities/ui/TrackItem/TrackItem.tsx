import type { ITrack } from "@/app/types/track.type";
import styles from "./TrackItem.module.css";
import { Ellipsis, Heart } from "lucide-react";
import TrackInfo from "../TrackInfo/TrackInfo";
import { transformDuration } from "@/shared/utils";

interface ITrackItemProps {
  track: ITrack;
}

const TrackItem = ({ track }: ITrackItemProps) => {
  return (
    <div className={styles.track}>
      <TrackInfo
        track={track}
        title={track.name}
        subTitle={transformDuration(track.durations)}
        images={track.images}
      />

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
