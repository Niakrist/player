import React, { useState } from "react";
import styles from "./AddToPlaylist.module.css";
import { Ellipsis } from "lucide-react";
import { CustomMenu } from "@/entities/ui";
import { playlistStore } from "@/app/store/playlist-store";
import type { ITrack } from "@/app/types/track.type";
import cn from "classnames";

interface IAddToPlaylistProps {
  track: ITrack;
}

const AddToPlaylist = ({ track }: IAddToPlaylistProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (isAdded: boolean, name: string, trackNamee: string) => {
    isAdded
      ? playlistStore.removeFromPlaylist(name, trackNamee)
      : playlistStore.addToPlaylist(name, trackNamee);
  };

  return (
    <div className={styles.addToPlaylistWrapper}>
      <button onClick={handleOpen}>
        <Ellipsis className={styles.iconEllipsis} />
      </button>
      <CustomMenu isOpen={isOpen}>
        <div className={styles.wrapperPlaylist}>
          {playlistStore.playList.map((playlist) => {
            const isAdded = playlistStore.isTrackInPlayList(playlist.name, track.name);

            return (
              <button
                key={playlist.name}
                onClick={() => handleClick(isAdded, playlist.name, track.name)}
              >
                <span className={cn(styles.item, { [styles.isAdded]: isAdded })}>
                  {playlist.name}
                </span>
              </button>
            );
          })}
        </div>
      </CustomMenu>
    </div>
  );
};

export default AddToPlaylist;
