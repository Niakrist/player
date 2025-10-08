import type React from "react";
import styles from "./HomePage.module.css";
import { SearchField } from "@/features";
import { Play } from "lucide-react";
import { TRACKS } from "@/app/data/track.data";
import { TrackItem } from "@/entities";
import { useQueryState } from "nuqs";
import { useMemo } from "react";
import { useDebounce } from "@/shared/hooks/useDebounce";

const HomePage = () => {
  const [search, setSearch] = useQueryState("searh");

  const debounceValue = useDebounce(search || "", 1000);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchTracks = useMemo(() => {
    if (!debounceValue) {
      return TRACKS;
    }

    return TRACKS.filter((track) =>
      track.name.toLocaleLowerCase().includes(debounceValue?.toLocaleLowerCase()),
    );
  }, [debounceValue]);

  return (
    <div>
      <div className={styles.wrapper}>
        <SearchField value={search || ""} onSearch={handleSearch} />
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
        {searchTracks.map((track) => (
          <TrackItem key={track.name} track={track} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
