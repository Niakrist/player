import styles from "./TrackInfo.module.css";

interface ITrackInfoProps {
  images?: string;
  title: string;
  subTitle: string;
}

const TrackInfo = ({ images, title, subTitle }: ITrackInfoProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.images} />
      <div>
        <div className={styles.trackName}>{title}</div>
        <div className={styles.trackВuration}>{subTitle}</div>
      </div>
    </div>
  );
};

export default TrackInfo;
