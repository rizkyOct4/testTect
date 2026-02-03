"use client";

import {
  useQuery,
  keepPreviousData,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

export const useDetail = () => {
  const id = useSearchParams().get("id") ?? "";
  const { data: fDetail } = useQuery({
    queryKey: ["keyDetail", id],
    queryFn: async () => {
      const URL = `/api/kumparan-news?id=${id}`;
      const { data } = await axios.get(URL);
      return data;
    },
    staleTime: 1000 * 60 * 3,
    gcTime: 1000 * 60 * 60,
    enabled: !!id,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false, // Tidak refetch saat kembali ke aplikasi
    refetchOnMount: false, // "always" => refetch jika stale saja
    retry: false,
  });

  const DetailData = useMemo(() => fDetail ?? [], [fDetail]);

  return { DetailData };
};
