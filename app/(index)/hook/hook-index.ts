"use client";

import {
  useQuery,
  keepPreviousData,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";

export const useIndex = () => {
  const {
    data: fRecomendation,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["keyRecomendation"],
    queryFn: async ({ pageParam = 1 }) => {
      const URL = `/api/kumparan-news?limit=8&page-param=${pageParam}`;
      const { data } = await axios.get(URL);
      return data;
    },

    // ? ketika melakukan fetchNextPage maka akan memanggil queryFn kembali
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.hasMore ? allPages.length + 1 : undefined;
    },
    staleTime: 1000 * 60 * 3,
    gcTime: 1000 * 60 * 60,
    initialPageParam: 1,
    // enabled: !!currentPath,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false, // Tidak refetch saat kembali ke aplikasi
    refetchOnMount: false, // "always" => refetch jika stale saja
    retry: false,
  });

  const RecomendationData = useMemo(
    () => fRecomendation?.pages.flatMap((page) => page.data) ?? [],
    [fRecomendation?.pages],
  );
  const RecomendationSectionData = useMemo(
    () => fRecomendation?.pageParams?.length ?? 0,
    [fRecomendation?.pageParams?.length],
  );
  const RecomendationTotalData = useMemo(
    () => fRecomendation?.pages.flatMap((page) => page.total) ?? 0,
    [fRecomendation?.pages],
  );
  // console.log(RecomendationTotalData);

  return {
    RecomendationData,
    RecomendationSectionData,
    RecomendationTotalData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
