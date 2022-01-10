import { useDebounce } from "@react-hook/debounce";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Track } from "../pages/api/search";

export const useTracks = (query: string) => {
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
    setDebouncedQuery(query);
  }, [query, setDebouncedQuery]);

  return {
    isLoading: !data && !error,
    tracks: data,
    error,
  };
};
