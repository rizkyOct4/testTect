"use client";

import { indexContext } from "@/app/context";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, memo, useContext } from "react";

const RecomendationNews = () => {
  const {
    RecomendationData,
    RecomendationSectionData,
    RecomendationTotalData,
    fetchNextPage,
    hasNextPage,
  } = useContext(indexContext);
  const [isDataActive, setIsDataActive] = useState(0);

  const handleAction = useCallback(
    (e: React.SyntheticEvent, actionType: string) => {
      e.preventDefault();
      switch (actionType) {
        case "next":
          if (hasNextPage) fetchNextPage();
          setIsDataActive(isDataActive + 1);
          break;
      }
    },
    [fetchNextPage, hasNextPage, isDataActive],
  );

  return (
    <section className="mx-auto max-w-7xl px-20 py-6">
      <div className="mb-5 flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-blue-500" />
        <h2 className="text-sm font-semibold text-black">
          Rekomendasi untuk anda
        </h2>
      </div>
      <div className="flex flex-wrap gap-6">
        {Array.isArray(RecomendationData) &&
          RecomendationData.map((i: any, idx: number) => {
            const cat = i.categories[0]
              .toLowerCase()
              .replace(/&/g, "dan")
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");

            return (
              <Link
                key={idx}
                href={`/${encodeURIComponent(cat)}/detail?id=${idx}`}
                className="
              group
              w-full
              sm:basis-[calc(50%-12px)]
              lg:basis-[calc(25%-18px)]
            "
              >
                <article className="flex h-full flex-col">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                    <Image
                      src={i.image.small}
                      alt={i.title}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-3 flex flex-1 flex-col">
                    <h3 className="line-clamp-2 text-sm font-medium text-black group-hover:underline">
                      {i.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-xs">
                      <span className="font-medium text-blue-600">
                        {i.categories}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{i.isoDate}</span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
      </div>

      <div className="mt-20 flex items-center justify-between gap-2 text-sm">
        <div>
          <p className="text-black">
            Showing {RecomendationSectionData} of{" "}
            {Math.ceil(RecomendationTotalData / 8)}
            result
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm">
          <p className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white">
            {RecomendationSectionData}
          </p>

          {/* <button className="text-gray-500 hover:text-black">2</button>
          <span className="px-1 text-gray-400">…</span>
          <button className="text-gray-500 hover:text-black">8</button>
          <button className="text-gray-500 hover:text-black">9</button> */}

          <button
            className="text-gray-400 hover:text-black"
            onClick={(e) => handleAction(e, "next")}
          >
            Next &rsaquo;
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(RecomendationNews);
