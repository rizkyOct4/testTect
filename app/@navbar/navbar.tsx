"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { indexContext } from "../context";

const categories = [
  { label: "Beranda", slug: "beranda" },
  { label: "Terkini", slug: "terkini" },
  { label: "Nasional", slug: "nasional" },
  { label: "Internasional", slug: "internasional" },
  { label: "Ekonomi", slug: "ekonomi" },
  { label: "Olahraga", slug: "olahraga" },
  { label: "Teknologi", slug: "tekno" },
  { label: "Hiburan", slug: "hiburan" },
  { label: "Gaya Hidup", slug: "lifestyle" },
];

const Navbar = () => {
  const { setCategoryActive } = useContext(indexContext);
  const router = useRouter();
  const [isActive, setIsActive] = useState("beranda");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-15 w-full">
      <div className="h-full bg-white backdrop-blur border-b border-black/10">
        <nav className="mx-auto h-full max-w-7xl px-4">
          <div className="flex h-full items-center justify-between gap-6">
            <h1 className="shrink-0 text-base font-semibold text-black">
              Berita Kini
            </h1>

            <ul className="flex h-full items-center gap-5 overflow-x-auto scrollbar-none">
              {categories.map((item) => {
                const active = item.slug === isActive;

                return (
                  <li key={item.slug} className="shrink-0">
                    <button
                      onClick={() => {
                        setIsActive(item.slug);
                        if (item.slug === "beranda") {
                          setCategoryActive("");
                          router.push(`/`);
                        } else if (
                          item.slug === "nasional" ||
                          item.slug === "internasional"
                        ) {
                          return;
                        } else {
                          setCategoryActive(item.slug);
                          router.push(`/${item.slug}`);
                        }
                      }}
                      className={`text-sm font-medium transition ${
                        active
                          ? "text-blue-600"
                          : "text-black/80 hover:text-black"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
