import axios, { AxiosError } from "axios";
import { useStateMachine } from "little-state-machine";
import useSWR from "swr";
import { AudioFeatures } from "../pages/api/audio-features";

export const useAudioFeatures = () => {
  const { state } = useStateMachine({});
  const { data, error } = useSWR<AudioFeatures, AxiosError>(
    state.track !== undefined
      ? `/api/audio-features?trackId=${state.track.id}`
      : null,
    async (url) => {
      const res = await axios.get<AudioFeatures>(url);

      return res.data;
    }
  );

  return {
    isLoading: !data && !error,
    audioFeatures: data,
    error,
  };
};
