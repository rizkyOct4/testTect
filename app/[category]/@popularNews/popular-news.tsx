"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, memo } from "react";
import { eachCategoriesContext } from "@/app/context";

const PopularNews = () => {
  const { PopularNewsData } = useContext(eachCategoriesContext);

  return (
    <section className="mx-auto max-w-7xl px-20 py-8">
      <div className="mb-5 flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-blue-500" />
        <h2 className="text-sm font-semibold text-black">Berita Terpopuler</h2>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        {Array.isArray(PopularNewsData) &&
          PopularNewsData.map((i, idx) => (
            <Link
              key={idx}
              href={i.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full gap-4 sm:w-1/2 lg:w-1/3"
            >
              {/* Image + number */}
              <div className="relative h-20 w-28 shrink-0 rounded-lg">
                <Image
                  src={i.image}
                  alt={i.title}
                  fill
                  className="object-cover"
                />

                {/* number badge */}
                <div className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                  {idx + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-col justify-between">
                <h3 className="line-clamp-2 text-sm font-medium text-black group-hover:underline">
                  {i.title}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-xs">
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
          ))}
      </div>
    </section>
  );
};

export default memo(PopularNews);
