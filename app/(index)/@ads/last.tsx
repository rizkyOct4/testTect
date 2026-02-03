"use client";

import React from "react";
import Image from "next/image";

type ImageCard = {
  src: string;
  label: string;
  rotate: string;
};

const images: ImageCard[] = [
  {
    src: "https://img.okezone.com/content/2024/06/06/18/3018019/pm-slovakia-akan-kembali-bekerja-pada-akhir-bulan-ini-usai-ditembak-4-kali-dari-jarak-dekat-KCznm6zYAP.jpg",
    label: "Museum Brawijaya",
    rotate: "-rotate-6",
  },
  {
    src: "https://img.okezone.com/content/2024/06/06/18/3018019/pm-slovakia-akan-kembali-bekerja-pada-akhir-bulan-ini-usai-ditembak-4-kali-dari-jarak-dekat-KCznm6zYAP.jpg",
    label: "Kayutangan",
    rotate: "rotate-3",
  },
  {
    src: "https://img.okezone.com/content/2024/06/06/18/3018019/pm-slovakia-akan-kembali-bekerja-pada-akhir-bulan-ini-usai-ditembak-4-kali-dari-jarak-dekat-KCznm6zYAP.jpg",
    label: "Kebun Binatang",
    rotate: "rotate-6",
  },
];

const Ads = () => {
  return (
    <div className="mx-auto max-w-7xl rounded-2xl bg-[#12c3a3] px-14 py-12 my-10 text-white flex flex-wrap items-center justify-between gap-8 overflow-hidden">
      <div className="flex-1 min-w-70 flex flex-col gap-4">
        <h1 className="text-4xl leading-tight font-bold">
          Petualangan Edukatif bersama <br />
          <span className="font-extrabold">Malang Mbois City Tour!</span>
        </h1>
        <p className="text-base opacity-90">
          Petualangan Edukatif bersama Malang Mbois City Tour!
        </p>
      </div>

      {/* Right Images */}
      <div className="flex-1 min-w-[320px] flex items-center justify-center gap-6 relative">
        {images.map((img, i) => (
          <div
            key={i}
            className={`w-37.5 h-25 bg-white rounded-xl shadow-xl overflow-hidden text-center relative ${img.rotate}`}
            style={{ zIndex: 10 - i }}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
            />
            <div className="py-2 text-xs font-semibold text-gray-700">
              {img.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
