import { makeAutoObservable } from "mobx";

class PlayList {
  playList: { name: string; traks: string[] }[] = JSON.parse(
    localStorage.getItem("playlist") || "[]",
  );

  constructor() {
    makeAutoObservable(this);
  }

  private saveToLocalStorage() {
    localStorage.setItem("playlist", JSON.stringify(this.playList));
  }

  createPlayList(name: string) {
    if (this.playList.find((playLisItem) => playLisItem.name === name)) {
      return;
    }
    this.playList.push({ name, traks: [] });

    this.saveToLocalStorage();
  }

  addToPlaylist(playlistName: string, trackName: string) {
    const currentPlaylist = this.playList.find((item) => item.name === playlistName);

    if (!currentPlaylist || currentPlaylist.traks.includes(trackName)) {
      return;
    }
    currentPlaylist.traks.push(trackName);

    this.saveToLocalStorage();
  }
  removeFromPlaylist(playlistName: string, trackName: string) {
    const currentPlaylist = this.playList.find((item) => item.name === playlistName);
    if (!currentPlaylist || !currentPlaylist.traks.includes(trackName)) {
      return;
    }
    currentPlaylist.traks = currentPlaylist.traks.filter((item) => item !== trackName);

    this.saveToLocalStorage();
  }
}

export const playList = new PlayList();
