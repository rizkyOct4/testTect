import { getQueryClient } from "@/app/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import DetailContent from "./content";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) => {
  const id = (await searchParams)?.id;
  const queryClient = getQueryClient();
  const key = ["keyDetail", id];

  await queryClient.prefetchQuery({
    queryKey: key,
    queryFn: async () => {
      const res = await fetch(
        "https://berita-indo-api-next.vercel.app/api/kumparan-news/",
      );

      const output = await res.json();
      if (id) {
        const item = output?.data?.[id];
        return item 
      }
    },
  });

  return (
    <>
      {id && (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <DetailContent />
        </HydrationBoundary>
      )}
    </>
  );
};

export default page;
