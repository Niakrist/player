import { makeAutoObservable } from "mobx";
import type { ITrack } from "../types/track.type";
import { TRACKS } from "../data/track.data";

class MusicPlayerStore {
  isPlaying: boolean = false;
  currentTrack: ITrack | null = null;
  volume: number = 85;
  curretnTime: number = 0;
  progress: number = 0;
  favorites: ITrack[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  toggleFavorites(track: ITrack) {
    this.favorites = this.favorites.find((favorite) => favorite.name === track.name)
      ? this.favorites.filter((favorite) => favorite.name !== track.name)
      : [...this.favorites, track];
  }

  setTrack(track: ITrack | null) {
    this.currentTrack = track;
    // this.isPlaying = true;
  }

  togglePlayPause(value: boolean) {
    this.isPlaying = value;
  }

  seek(time: number) {
    this.curretnTime = time;
    this.progress = (time / (this.currentTrack?.durations || 1)) * 100;
  }
  setVolume(volume: number) {
    this.volume = volume;
  }
  changeTrack(type: "prev" | "next") {
    if (!this.currentTrack) return;
    const currentIndex = TRACKS.findIndex((track) => track.name === this.currentTrack?.name);

    const nextIndex =
      type === "next"
        ? (currentIndex + 1) % TRACKS.length
        : (currentIndex - 1 + TRACKS.length) % TRACKS.length;
    this.setTrack(TRACKS[nextIndex]);

    this.curretnTime = 0;
    this.progress = 0;
  }
}

export const musicPlayerStore = new MusicPlayerStore();
