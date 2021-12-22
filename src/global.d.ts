import "little-state-machine";
import { AudioFeatures } from "./pages/api/audio-features";
import { Track } from "./pages/api/search";

declare module "little-state-machine" {
  interface GlobalState {
    query?: string;
    track?: Track;
    drinkCount: number;
  }
}
