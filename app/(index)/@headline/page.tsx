import Headline from "./headline";
import { getQueryClient } from "@/app/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const page = async () => {
  const queryClient = getQueryClient();
  const key = ["keyHeadline"];
  await queryClient.prefetchInfiniteQuery({
    queryKey: key,
    queryFn: async ({ pageParam = 1 }) => {
      const res = await fetch(
        "https://berita-indo-api-next.vercel.app/api/cnn-news/",
      );

      const output = await res.json();
      const total = output.total;

      const limit = 5;
      const offset = (pageParam - 1) * limit;

      const data = output.data.slice(offset, offset + limit);
      const hasMore = offset + limit < Number(output.data.length);

      return { data, hasMore, total };
    },
    initialPageParam: 1,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Headline />
    </HydrationBoundary>
  );
};

export default page;
