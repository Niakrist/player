import { House, Puzzle, RadioTower } from "lucide-react";
import { PagesConfig } from "../config";
import type { IMenuItem } from "../types/menu.type";

export const MENU_ITEMS: IMenuItem[] = [
  {
    icon: House,
    name: "Home",
    link: PagesConfig.HOME,
  },
  {
    icon: Puzzle,
    name: "Discover",
    link: PagesConfig.DISCOVER,
  },
  {
    icon: RadioTower,
    name: "Radio",
    link: PagesConfig.RADIO,
  },
];

export type TMenuItem = (typeof MENU_ITEMS)[number];

export const LIBRARY_MENU_ITEMS = [
  {
    name: "Made For You",
    link: PagesConfig.MADE_FOR_YOU,
  },
  {
    name: "Recently Played",
    link: PagesConfig.RECENTLY_PLAYED,
  },
  {
    name: "Liked Songs",
    link: PagesConfig.LIKED_SONGS,
  },
  // {
  //   name: "Playlist",
  //   link: PagesConfig.PLAYLIST(),
  // },
  {
    name: "Albums",
    link: PagesConfig.ALBUMS(),
  },
  {
    name: "Artists",
    link: PagesConfig.ARTISTS(),
  },
  {
    name: "Podcasts",
    link: PagesConfig.PODCASTS(),
  },
];
