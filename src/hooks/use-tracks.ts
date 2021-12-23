import { useTimeout } from "@chakra-ui/react";
import { useDebounce } from "@react-hook/debounce";
import axios, { AxiosError } from "axios";
import { useStateMachine } from "little-state-machine";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Track } from "../pages/api/search";

export const useTracks = () => {
  const { state } = useStateMachine({});
  const [debouncedQuery, setDebouncedQuery] = useDebounce<string | undefined>(
    undefined,
    100
  );
  const { data, error } = useSWR<Track[], AxiosError>(
    debouncedQuery && `/api/search?query=${debouncedQuery}`,
    async (url) => {
      const res = await axios.get<Track[]>(url);

      return res.data;
    }
  );

  useEffect(() => {
    setDebouncedQuery(state.query);
  }, [state.query, setDebouncedQuery]);

  return {
    isLoading: !data && !error,
    tracks: data,
    error,
  };
};
