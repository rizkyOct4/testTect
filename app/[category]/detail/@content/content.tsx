"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { detailContext } from "@/app/context";
import Image from "next/image";

const DetailContent = () => {
  const { DetailData } = useContext(detailContext);
  //   console.log(DetailData)

  return (
    <section className="mx-auto max-w-7xl p-14">
      {DetailData && (
        <div className="flex flex-col gap-10">
          <div className="w-full">
            <h1 className="text-2xl font-bold leading-snug text-black md:text-3xl">
              {DetailData.title}
            </h1>

            <div className="flex items-center gap-4">
              <h1 className="mt-4 text-blue-500">{DetailData.categories}</h1>
              <div className="mt-4 text-xs text-gray-500">
                {new Date(DetailData.isoDate).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>

          <div className="relative h-120 w-full overflow-hidden rounded-2xl ">
            <Image
              src={DetailData?.image?.large}
              alt="#"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-xs text-gray-500">
            {DetailData.creator} / {DetailData.author}
          </h1>
          <p className="text-black">{DetailData.description}</p>
        </div>
      )}
    </section>
  );
};

export default DetailContent;
