import type { IArtist } from "./artist.type";

export interface ITrack {
  name: string;
  file: string;
  images: string;
  artist: IArtist;
  durations: number;
}
