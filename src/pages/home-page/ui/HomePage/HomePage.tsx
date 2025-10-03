import { musicPlayerStore } from "@/app";
import styles from "./HomePage.module.css";
import { SearchField } from "@/features";
import { Play } from "lucide-react";
const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <SearchField />
      <div className={styles.imgWrapper}>
        <img className={styles.img} src="./dp.jpg" alt="" />
      </div>
      <div className={styles.contentWrapper}>
        <div>
          <h1 className={styles.title}>Daft Punk</h1>
          <p className={styles.listeners}>6.8m listeners</p>
        </div>
        <button className={styles.buttonPlay}>
          <Play className={styles.play} size={16} />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
