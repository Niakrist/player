import { Play } from "lucide-react";
import styles from "./Lyrics.module.css";
interface ILyricsProps {
  lyrics?: string;
}

const Lyrics = ({}: ILyricsProps) => {
  return (
    <div className={styles.lyrics}>
      <div>[Verse 1]</div>
      <p>It might not be the right time</p>
      <p>I might not be the right one</p>
      <p>But there's something about us I want to say</p>
      <p className={styles.active}>
        <Play className={styles.play} size={10} />
        'Cause there's something between us anyway
      </p>
      <div>[Verse 2]</div>
      <p>I might not be the right one</p>
      <p>It might not be the right time</p>
      <p>But there's something about us I've got to do</p>
      <p>Some kind of secret I will share with you</p>
      <div>[Refrain]</div>
      <p>I need you more than anything in my life</p>
      <p>I want you more than anything in my life</p>
      <p>I'll miss you more than anyone in my life</p>
      <p>I love you more than anyone in my life</p>
    </div>
  );
};

export default Lyrics;
