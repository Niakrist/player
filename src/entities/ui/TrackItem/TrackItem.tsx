import type { ITrack } from "@/app/types/track.type";
import styles from "./TrackItem.module.css";
import { Ellipsis, Heart } from "lucide-react";
import TrackInfo from "../TrackInfo/TrackInfo";
import { transformDuration } from "@/shared/utils";
import cn from "classnames";
import { favoritesStore } from "@/app/store/favorites-store";
interface ITrackItemProps {
  track: ITrack;
}

const TrackItem = ({ track }: ITrackItemProps) => {
  const handleToggleFavorites = (trackName: string) => {
    favoritesStore.toggleFavorites(trackName);
  };

  const isFavorite = favoritesStore.favoritesName.find((favorite) => favorite === track.name);

  return (
    <div className={styles.track}>
      <TrackInfo
        track={track}
        title={track.name}
        subTitle={transformDuration(track.durations)}
        images={track.images}
      />

      <div className={styles.buttonWrapper}>
        <button onClick={() => handleToggleFavorites(track.name)}>
          <Heart className={cn(styles.iconHeart, { [styles.isFavorite]: isFavorite })} />
        </button>
        <button>
          <Ellipsis className={styles.iconEllipsis} />
        </button>
      </div>
    </div>
  );
};

export default TrackItem;
