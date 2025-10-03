import { Search } from "lucide-react";
import styles from "./SearchField.module.css";

const SearchField = () => {
  return (
    <label className={styles.searchWrapper}>
      <Search className={styles.searchIcon} />
      <input
        type="search"
        placeholder="Search for songs, artists, etc..."
        className={styles.searchInput}
      />
    </label>
  );
};

export default SearchField;
