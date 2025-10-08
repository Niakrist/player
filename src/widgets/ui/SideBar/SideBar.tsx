import { LIBRARY_MENU_ITEMS, MENU_ITEMS } from "@/app/data/menu.data";
import { Menu } from "@/entities";
import styles from "./SideBar.module.css";

import { SidebarPlaylist } from "@/entities/ui";

const SideBar = () => {
  return (
    <aside className={styles.aside}>
      <Menu items={MENU_ITEMS} />
      <hr className={styles.line} />
      <Menu items={LIBRARY_MENU_ITEMS} title="Your Library" />
      <hr className={styles.line} />
      <SidebarPlaylist />
    </aside>
  );
};

export default SideBar;
