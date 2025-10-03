import { Lyrics } from "@/shared/ui";
import styles from "./RightSideBar.module.css";

const RightSideBar = () => {
  return (
    <aside className={styles.aside}>
      <Lyrics />
    </aside>
  );
};

export default RightSideBar;
