import { musicPlayerStore } from "@/app";
import styles from "./HomePage.module.css";
import { SearchField } from "@/features";
import { Play } from "lucide-react";
import { TRACKS } from "@/app/data/track.data";
import { TrackItem } from "@/entities";
const HomePage = () => {
  return (
    <>
      <div>
        <div className={styles.wrapper}>
          <SearchField />
          <img className={styles.img} src="./dp.jpg" alt="" />
          <div className={styles.contentWrapper}>
            <div>
              <h1 className={styles.title}>Daft Punk</h1>
              <p className={styles.listeners}>6.8m listeners</p>
            </div>
            <button className={styles.buttonPlay}>
              <Play className={styles.play} size={20} />
            </button>
          </div>
        </div>

        <div>
          {TRACKS.map((track) => (
            <TrackItem key={track.name} track={track} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
