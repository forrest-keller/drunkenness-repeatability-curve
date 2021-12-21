import "little-state-machine";
import { Track } from "./pages/api/search";

declare module "little-state-machine" {
  interface GlobalState {
    query: string | null;
    track: Track | null;
    drinkCount: number | null;
  }
}
