"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const data = [
  {
    id: 1,
    title:
      "Bareskrim Geledah Sekuritas Shinhan di Kasus Dugaan Saham 'Gorengan'",
    link: "https://www.cnnindonesia.com/nasional/20260203183514-12-1324216/bareskrim-geledah-sekuritas-shinhan-di-kasus-dugaan-saham-gorengan",
    contentSnippet:
      "Bareskrim Polri menggeledah kantor Sekuritas Shinhan terkait kasus saham gorengan di Gedung Equity Tower, kawasan Jakarta Selatan, pada Selasa (3/2).",
    isoDate: "2026-02-03T11:39:53.000Z",
    categories: ["Nasional"],
    image: {
      small:
        "https://akcdn.detik.net.id/visual/2026/02/03/bareskrim-geledah-sekuritas-shinhan-di-kasus-manipulasi-saham-pipa-saat-ipo-1770118146558_169.jpeg?w=360&q=90",
      large:
        "https://akcdn.detik.net.id/visual/2026/02/03/bareskrim-geledah-sekuritas-shinhan-di-kasus-manipulasi-saham-pipa-saat-ipo-1770118146558_169.jpeg?w=360&q=100",
    },
  },
  {
    id: 2,
    title: "Airlangga Pede MBG Bisa Kerek Ekonomi RI hingga 8 Persen",
    link: "https://www.cnnindonesia.com/ekonomi/20260203152004-532-1324131/airlangga-pede-mbg-bisa-kerek-ekonomi-ri-hingga-8-persen",
    contentSnippet:
      "Menko Perekonomian Airlangga Hartarto meyakini program Makan Bergizi Gratis berpotensi memberi kontribusi signifikan terhadap pertumbuhan ekonomi nasional.",
    isoDate: "2026-02-03T11:39:23.000Z",
    categories: ["Nasional"],
    image: {
      small:
        "https://akcdn.detik.net.id/visual/2025/12/18/luncurkan-pelatihan-gig-economy-untuk-gen-z-airlangga-siapkan-skema-kur-rp10-triliun-1766044292849_169.png?w=360&q=90",
      large:
        "https://akcdn.detik.net.id/visual/2025/12/18/luncurkan-pelatihan-gig-economy-untuk-gen-z-airlangga-siapkan-skema-kur-rp10-triliun-1766044292849_169.png?w=360&q=100",
    },
  },
  {
    id: 3,
    title:
      "Hasil AFC Futsal 2026: Cukur Afghanistan 6-0, Jepang Lolos Semifinal",
    link: "https://www.cnnindonesia.com/olahraga/20260203175614-142-1324207/hasil-afc-futsal-2026-cukur-afghanistan-6-0-jepang-lolos-semifinal",
    contentSnippet:
      "Timnas futsal Jepang memastikan lolos ke semifinal AFC Futsal 2026 setelah sukses mencukur Afghanistan 6-0 di Jakarta International Velodrome, Selasa (3/2).",
    isoDate: "2026-02-03T11:37:38.000Z",
    categories: ["International"],

    image: {
      small:
        "https://akcdn.detik.net.id/visual/2026/01/28/futsal-jepang-vs-australia-1769598072395_169.jpeg?w=360&q=90",
      large:
        "https://akcdn.detik.net.id/visual/2026/01/28/futsal-jepang-vs-australia-1769598072395_169.jpeg?w=360&q=100",
    },
  },
];

const PopularNews = () => {
  return (
    <section className="mx-auto max-w-7xl px-20 py-8">
      <div className="mb-5 flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-blue-500" />
        <h2 className="text-sm font-semibold text-black">Berita Terpopuler</h2>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        {data.map((i, index) => (
          <Link
            key={i.id}
            href={i.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full gap-4 sm:w-1/2 lg:w-1/3"
          >
            {/* Image + number */}
            <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={i.image.small}
                alt={i.title}
                fill
                className="object-cover"
              />

              {/* number badge */}
              <div className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                {index + 1}
              </div>
            </div>

            {/* Content */}
            <div className="flex min-w-0 flex-col justify-between">
              <h3 className="line-clamp-2 text-sm font-medium text-black group-hover:underline">
                {i.title}
              </h3>

              <div className="mt-1 flex items-center gap-2 text-xs">
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
        ))}
      </div>
    </section>
  );
};

export default memo(PopularNews);
