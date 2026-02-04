"use client";

import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import type { CategoryType } from "@/app/(index)/context/context";

export const useEachCategories = (categoryActive: CategoryType) => {
  const { category: categoryPath } =
    useParams<{ category: string | undefined }>() ?? "";

  // ? HEADLINE
  const { data: fHeadline } = useInfiniteQuery({
    queryKey: [`keyHeadline${categoryPath}`],
    queryFn: async ({ pageParam = 1 }) => {
      const URL = `/${categoryPath}/api/antara-news/${categoryPath}?key=headline${categoryPath}&limit=5&page-param=${pageParam}`;
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
    enabled:
      !!categoryPath && categoryPath === categoryActive && categoryPath !== "",
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false, // Tidak refetch saat kembali ke aplikasi
    refetchOnMount: false, // "always" => refetch jika stale saja
    retry: false,
  });

  // ? POPULAR NEWS
  const { data: fPopularNews } = useInfiniteQuery({
    queryKey: [`keyPopularNews${categoryPath}`],
    queryFn: async ({ pageParam = 1 }) => {
      const URL = `/${categoryPath}/api/antara-news/${categoryPath}?key=popular-news-${categoryPath}&limit=3&page-param=${pageParam}`;
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
    enabled:
      !!categoryPath && categoryPath === categoryActive && categoryPath !== "",
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false, // Tidak refetch saat kembali ke aplikasi
    refetchOnMount: false, // "always" => refetch jika stale saja
    retry: false,
  });

  // ? RECOMENDATION
  const {
    data: fRecomendation,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [`keyRecomendation${categoryPath}`],
    queryFn: async ({ pageParam = 1 }) => {
      const URL = `/${categoryPath}/api/antara-news/${categoryPath}?key=recomendation-news-${categoryPath}&limit=8&page-param=${pageParam}`;
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
    enabled:
      !!categoryPath && categoryPath === categoryActive && categoryPath !== "",
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false, // Tidak refetch saat kembali ke aplikasi
    refetchOnMount: false, // "always" => refetch jika stale saja
    retry: false,
  });

  //* DATA =================
  const HeadlineData = useMemo(
    () => fHeadline?.pages.flatMap((page) => page.data) ?? [],
    [fHeadline?.pages],
  );
  const HeadlineTotalData = useMemo(
    () => fHeadline?.pages.flatMap((page) => page.total) ?? 0,
    [fHeadline?.pages],
  );
  const PopularNewsData = useMemo(
    () => fPopularNews?.pages.flatMap((page) => page.data) ?? [],
    [fPopularNews?.pages],
  );
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
    HeadlineData,
    HeadlineTotalData,
    PopularNewsData,
    RecomendationData,
    RecomendationSectionData,
    RecomendationTotalData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
