"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useContext } from "react";
import { detailContext } from "@/app/context";

const DetailPopularNews = () => {
  const { DetailSidebarData } = useContext(detailContext);

  return (
    <section className="mx-auto max-w-7xl py-8">
      <div className="mb-5 flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-blue-500" />
        <h2 className="text-sm font-semibold text-black">Berita Terpopuler</h2>
      </div>

      <div className="flex flex-col gap-6 w-[90%]">
        {Array.isArray(DetailSidebarData) &&
          DetailSidebarData.map((i, idx) => {
            const cat = i.categories[0]
              .toLowerCase()
              .replace(/&/g, "dan")
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");
            return (
              <Link
                key={idx}
                href={`/${encodeURIComponent(cat)}/detail?id=${idx}`}
                className="group flex w-full gap-4"
              >
                {/* Image + number */}
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={i.image.small}
                    alt={i.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="w-full mt-1 flex flex-col items-center gap-2 text-xs">
                  <h3 className="line-clamp-2 text-sm font-medium text-black group-hover:underline">
                    {i.title}
                  </h3>
                  <div className="flex gap-4 flex-start">
                    <span className="font-medium text-blue-600">
                      {i.categories}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">
                      {new Date(i.isoDate).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default memo(DetailPopularNews);
