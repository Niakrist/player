import { Search } from "lucide-react";
import styles from "./SearchField.module.css";

interface ISearchFieldProps {
  value: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField = ({ value, onSearch }: ISearchFieldProps) => {
  return (
    <label className={styles.searchWrapper}>
      <Search className={styles.searchIcon} />
      <input
        value={value}
        onChange={onSearch}
        type="search"
        placeholder="Search for songs, artists, etc..."
        className={styles.searchInput}
      />
    </label>
  );
};

export default SearchField;
