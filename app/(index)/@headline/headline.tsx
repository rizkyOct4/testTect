"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";

const data = [
  {
    title: "Momen Trump Melunak dan Mulai Ajak Iran Berunding",
    link: "https://www.cnnindonesia.com/internasional/20260203102152-139-1323935/momen-trump-melunak-dan-mulai-ajak-iran-berunding",
    contentSnippet:
      "Presiden AS Donald Trump mengatakan pada hari Senin (2/2) bahwa pembicaraan dengan Iran sedang berlangsung di tengah ketegangan yang tinggi.",
    isoDate: "2026-02-03T11:20:11.000Z",
    image: {
      small:
        "https://akcdn.detik.net.id/visual/2026/02/03/thumbnail-video-1770089083604_169.jpeg?w=360&q=90",
      large:
        "https://akcdn.detik.net.id/visual/2026/02/03/thumbnail-video-1770089083604_169.jpeg?w=360&q=100",
    },
  },
  {
    title: "Bocah SD di Ngada NTT Akhiri Hidup, Sempat Tulis Surat untuk Ibu",
    link: "https://www.cnnindonesia.com/nasional/20260203170606-20-1324192/bocah-sd-di-ngada-ntt-akhiri-hidup-sempat-tulis-surat-untuk-ibu",
    contentSnippet:
      "Seorang siswa kelas IV di Ngada ditemukan tewas tergantung disebuah pohon. Penyelidikan mengungkap surat yang diduga ditulisnya sebelum mengakhiri hidup.",
    isoDate: "2026-02-03T11:16:22.000Z",
    image: {
      small:
        "https://akcdn.detik.net.id/visual/2026/02/03/bocah-sd-di-ntt-meninggal-bunuh-diri-1770107515384_169.jpeg?w=360&q=90",
      large:
        "https://akcdn.detik.net.id/visual/2026/02/03/bocah-sd-di-ntt-meninggal-bunuh-diri-1770107515384_169.jpeg?w=360&q=100",
    },
  },
  {
    title: "Hasil BATC 2026: Indonesia Bungkam Myanmar",
    link: "https://www.cnnindonesia.com/olahraga/20260203180928-170-1324211/hasil-batc-2026-indonesia-bungkam-myanmar",
    contentSnippet:
      "Tim Badminton Indonesia tanpa kesulitan berarti mengalahkan Myanmar dalam nomor beregu putra Badminton Asia Team Championship (BATC) 2026.",
    isoDate: "2026-02-03T11:14:40.000Z",
    image: {
      small:
        "https://akcdn.detik.net.id/visual/2026/02/03/prahdiska-bagas-shujiwo-1770117247181_169.jpeg?w=360&q=90",
      large:
        "https://akcdn.detik.net.id/visual/2026/02/03/prahdiska-bagas-shujiwo-1770117247181_169.jpeg?w=360&q=100",
    },
  },
  {
    title: "VIDEO: Lebaran Masih Lama, War Tiket Kereta Mulai Terasa",
    link: "https://www.cnnindonesia.com/tv/20260203171507-400-1324195/video-lebaran-masih-lama-war-tiket-kereta-mulai-terasa",
    contentSnippet:
      "Lebaran masih lama, namun war tiket kereta mulai terasa. Pasalnya, tiket arus mudik kereta api di Daop Surabaya sudah bisa dipesan sejak 25 Januari 2026.",
    isoDate: "2026-02-03T11:13:07.000Z",
    image: {
      small:
        "https://akcdn.detik.net.id/visual/2026/02/03/lebaran-masih-lama-war-tiket-kereta-mulai-terasa-1770114055178_169.png?w=360&q=90",
      large:
        "https://akcdn.detik.net.id/visual/2026/02/03/lebaran-masih-lama-war-tiket-kereta-mulai-terasa-1770114055178_169.png?w=360&q=100",
    },
  },
  {
    title: "Momen Jenazah Istri Hoegeng Tiba di Rumah Duka",
    link: "https://www.cnnindonesia.com/nasional/20260203171313-24-1324193/momen-jenazah-istri-hoegeng-tiba-di-rumah-duka",
    contentSnippet:
      "Jenazah Istri almarhum eks Kapolri Jenderal (Purn) Hoegeng Iman Santoso, Meriyati Hoegeng atau Eyang Meri, tiba di rumah duka di Pesona Khayangan, Kota Depok.",
    isoDate: "2026-02-03T11:07:49.000Z",
    image: {
      small:
        "https://akcdn.detik.net.id/visual/2026/02/03/thumbnail-video-1770113828282_169.jpeg?w=360&q=90",
      large:
        "https://akcdn.detik.net.id/visual/2026/02/03/thumbnail-video-1770113828282_169.jpeg?w=360&q=100",
    },
  },
];

const Headline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDataActive = data[activeIndex];

  const handleAction = useCallback(
    (e: React.SyntheticEvent, actionType: string) => {
      e.preventDefault();
      switch (actionType) {
        case "next": {
          if (activeIndex === 4) {
            return;
          }
          setActiveIndex(activeIndex + 1);
          break;
        }
        case "prev": {
          if (activeIndex === 0) {
            return;
          }
          setActiveIndex(activeIndex - 1);
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
              {isDataActive.title}
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-black">
              {isDataActive.contentSnippet}
            </p>

            <div className="mt-4 text-xs text-gray-500">
              {new Date(isDataActive.isoDate).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </div>

            <Link
              href={isDataActive.link}
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
              src={isDataActive.image.large}
              alt={isDataActive.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* PAGINATION (dummy) */}
      <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-400">
        <button
          className="hover:text-black  text-2xl"
          onClick={(e) => handleAction(e, "prev")}
        >
          ‹
        </button>
        <span className="text-black">{activeIndex + 1}</span>
        <span>{data.length}</span>
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

export default Headline;
