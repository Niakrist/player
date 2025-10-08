import styles from "./SidebarPlaylist.module.css";
import Menu from "../Menu/Menu";
import { Plus } from "lucide-react";
import CustomMenu from "../CustomMenu/CustomMenu";
import { PagesConfig } from "@/app/config";
import { playlistStore } from "@/app/store/playlist-store";
import React, { useState } from "react";

const SidebarPlaylist = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAdd = () => {
    playlistStore.createPlayList(value.trim());
    setValue((prev) => (prev = ""));
    setIsOpen((prev) => (prev = false));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      handleAdd();
    }
  };

  return (
    <Menu
      items={playlistStore.playList.map((item) => {
        return {
          name: item.name,
          link: PagesConfig.PLAYLIST(item.name),
        };
      })}
      title="PlayLists"
    >
      <div className={styles.customMenuWrapper}>
        <button onClick={handleOpen} className={styles.buttonOpenCustomMenu}>
          <Plus size={20} /> <span className={styles.textButton}>New playlist</span>
        </button>

        <CustomMenu isOpen={isOpen}>
          <input
            autoFocus
            className={styles.inputNamePlaylist}
            type="text"
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e)}
            value={value}
            placeholder="Playlist anme"
          />
          <button onClick={handleAdd} className={styles.buttonAddPlaylist}>
            Add
          </button>
        </CustomMenu>
      </div>
    </Menu>
  );
};

export default SidebarPlaylist;
