import type { ITrack } from "../types/track.type";
import { ARTISTS } from "./artist.data";

export const TRACKS: ITrack[] = [
  {
    name: "ATB - Let you go",
    file: "/audio/ATB - Let you go.mp3",
    artist: ARTISTS[0],
    durations: 205,
    images: "/cover/ATB - Let you go.jpg"
  },
  {
    name: "Basto - Again And Again",
    file: "/audio/Basto - Again And Again.mp3",
    artist: ARTISTS[1],
    durations: 222,
    images: "/cover/Basto - Again And Again.jpg"
  },
  {
    name: "Bosson - You Open My Eyes",
    file: "/audio/Bosson - You Open My Eyes.mp3",
    artist: ARTISTS[2],
    durations: 255,
    images: "/cover/Bosson - You Open My Eyes.jpg"
  },
  {
    name: "Danzel - What Is Life",
    file: "/audio/Danzel - What Is Life.mp3",
    artist: ARTISTS[3],
    durations: 218,
    images: "/cover/Danzel - What Is Life.jpg"
  },
  {
    name: "David Vendetta - Unidos Para La Musica",
    file: "/audio/David Vendetta - Unidos Para La Musica.mp3",
    artist: ARTISTS[4],
    durations: 230,
    images: "/cover/David Vendetta - Unidos Para La Musica.jpg"
  },
];
