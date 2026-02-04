"use client";

import {
  useQuery,
  keepPreviousData,
  // useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

export const useDetail = () => {
  const id = useSearchParams().get("id") ?? "";

  // ? MAIN CONTENT
  const { data: fDetail } = useQuery({
    queryKey: ["keyDetail", id],
    queryFn: async () => {
      const URL = `/api/kumparan-news?key=detail-content&id=${id}`;
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

  // ? FOR YOU
  const { data: fForYouDetail } = useInfiniteQuery({
    queryKey: ["keyForYouDetail", id],
    queryFn: async ({ pageParam = 1 }) => {
      const URL = `/api/kumparan-news?key=detail-for-you&id=${id}&limit=4&page-param=${pageParam}`;
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
    enabled: !!id,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false, // Tidak refetch saat kembali ke aplikasi
    refetchOnMount: false, // "always" => refetch jika stale saja
    retry: false,
  });

  // ? SIDEBAR
  const { data: fSidebarDetail } = useInfiniteQuery({
    queryKey: ["keySidebarDetail", id],
    queryFn: async ({ pageParam = 1 }) => {
      const URL = `/api/kumparan-news?key=detail-sidebar&id=${id}&limit=5&page-param=${pageParam}`;
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
    enabled: !!id,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false, // Tidak refetch saat kembali ke aplikasi
    refetchOnMount: false, // "always" => refetch jika stale saja
    retry: false,
  });

  // * DATA ==============
  const DetailData = useMemo(() => fDetail ?? [], [fDetail]);
  const DetailForYouData = useMemo(
    () => fForYouDetail?.pages.flatMap((page) => page.data) ?? [],
    [fForYouDetail?.pages],
  );
  const DetailSidebarData = useMemo(
    () => fSidebarDetail?.pages.flatMap((page) => page.data) ?? [],
    [fSidebarDetail?.pages],
  );

  return { DetailData, DetailForYouData, DetailSidebarData };
};
