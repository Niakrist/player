import type { ITrack } from "./track.type";

export interface IArtist {
  name: string;
  images: string;
  listenersCount: number;
  tracks: ITrack[];
}
