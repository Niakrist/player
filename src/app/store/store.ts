import { makeAutoObservable } from "mobx";

class MusicPlayerStore {
  isPlaying: boolean = false;
  currentTrack: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  play(track: string) {
    this.currentTrack = track;
    this.isPlaying = this.isPlaying === true ? false : true;
    console.log(`Playing track: ${track}`);
  }
}

export const musicPlayerStore = new MusicPlayerStore();
