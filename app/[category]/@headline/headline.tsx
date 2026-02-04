"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useContext, memo } from "react";
import { eachCategoriesContext } from "@/app/context";

const Headline = () => {
  const { HeadlineData } = useContext(eachCategoriesContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const isDataActive = HeadlineData[activeIndex];

  const handleAction = useCallback(
    (e: React.SyntheticEvent, actionType: string) => {
      e.preventDefault();
      switch (actionType) {
        case "next": {
          if (activeIndex === 4) {
            return;
          }
          setActiveIndex((prev) => prev + 1);
          break;
        }
        case "prev": {
          if (activeIndex === 0) {
            return;
          }
          setActiveIndex((prev) => prev - 1);
          break;
        }
      }
    },
    [activeIndex],
  );

  return (
    <section className="mx-auto max-w-7xl p-10">
      {isDataActive && (
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="md:w-1/2">
            <p className="mb-2 text-sm font-semibold text-black">Headline</p>

            <h1 className="text-2xl font-bold leading-snug text-black md:text-3xl">
              {isDataActive?.title}
            </h1>

            <div className="mt-4 text-xs text-gray-500">
              {new Date(isDataActive?.isoDate).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </div>

            <Link
              href={isDataActive?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-400 hover:underline"
            >
              Baca Selengkapnya
              <span>↗</span>
            </Link>
          </div>

          <div className="relative h-55 w-full overflow-hidden rounded-2xl md:h-70 md:w-1/2">
            <Image
              src={isDataActive?.image}
              alt="#"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-400">
        <button
          className="hover:text-black  text-2xl"
          onClick={(e) => handleAction(e, "prev")}
        >
          ‹
        </button>
        <span className="text-black">{activeIndex + 1}</span>
        <span>{HeadlineData.length}</span>
        <button
          className="hover:text-black text-2xl"
          onClick={(e) => handleAction(e, "next")}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default memo(Headline);
