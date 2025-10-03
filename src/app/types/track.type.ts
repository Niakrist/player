import type { IArtist } from "./artist.type";

export interface ITrack {
  name: string;
  file: string;
  artist: IArtist;
  durations: number;
}
