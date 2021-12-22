import axios, { AxiosError } from "axios";
import { useStateMachine } from "little-state-machine";
import useSWR from "swr";
import { Track } from "../pages/api/search";

export const useTracks = () => {
  const { state } = useStateMachine({});
  const { data, error } = useSWR<Track[], AxiosError>(
    `/api/search?query=${state.query}`,
    async (url) => {
      const res = await axios.get<Track[]>(url);

      return res.data;
    }
  );

  return {
    isLoading: !data && !error,
    tracks: data,
    error,
  };
};
