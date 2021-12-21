import { createStore, GlobalState } from "little-state-machine";
import { StateMachineOptions } from "little-state-machine/dist/types";
import { Track } from "../pages/api/search";

export const defaultState: GlobalState = {
  query: null,
  track: null,
  drinkCount: 0,
};

export const options: StateMachineOptions = {
  name: "drunkenness-repeatability-curve",
};

export const initializeStore = () => {
  createStore(defaultState, options);
};

export type DeleteField = (state: GlobalState, payload: {}) => GlobalState;
export type UpdateField<Payload> = (
  state: GlobalState,
  payload: Payload
) => GlobalState;
export interface UpdateQueryPayload {
  query: string;
}
export interface UpdateTrackPayload {
  track: Track;
}
export interface UpdateDrinkCountPayload {
  drinkCount: number;
}

export const updateQuery: UpdateField<UpdateQueryPayload> = (
  state,
  payload
) => ({
  ...state,
  query: payload.query,
});

export const deleteQuery: DeleteField = (state) => ({
  ...state,
  query: null,
});

export const updateTrack: UpdateField<UpdateTrackPayload> = (
  state,
  payload
) => ({
  ...state,
  track: payload.track,
});

export const deleteTrack: DeleteField = (state) => ({
  ...state,
  track: null,
});

export const updateDrinkCount: UpdateField<UpdateDrinkCountPayload> = (
  state,
  payload
) => ({
  ...state,
  drinkCount: payload.drinkCount,
});
