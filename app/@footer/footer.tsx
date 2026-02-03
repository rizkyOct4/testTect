"use client";

import Link from "next/link";
import { memo } from "react";

const telusuri = [
  "Beranda",
  "Kesehatan",
  "Otomotif",
  "Politik",
  "Olahraga",
  "Nasional",
  "Internasional",
];

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Brand */}
          <div className="md:w-1/4">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
                <span className="text-lg font-bold">◎</span>
              </div>
              <span className="text-lg font-semibold">Berita Kini</span>
            </div>

            <p className="text-sm text-slate-400">
              © 2023 Berita Kini. All Rights Reserved.
            </p>

            <div className="mt-6">
              <p className="mb-3 text-sm font-medium">Ikuti Kami</p>

              <div className="flex items-center gap-3">
                {/* icons... tetap sama */}
              </div>
            </div>
          </div>

          {/* Telusuri */}
          <div className="md:w-1/4">
            <h3 className="mb-4 text-sm font-semibold text-white">Telusuri</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {telusuri.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan */}
          <div className="md:w-1/4">
            <h3 className="mb-4 text-sm font-semibold text-white">Bantuan</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {["Kontak Kami", "Laporan Pembajakan", "Kebijakan"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="md:w-1/4">
            <h3 className="mb-4 text-sm font-semibold text-white">
              Berlangganan Berita Terbaru
            </h3>

            <form className="flex overflow-hidden rounded-md bg-white">
              <input
                type="email"
                placeholder="Masukan email"
                className="flex-1 px-3 py-2 text-sm text-slate-800 outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-blue-600 px-3 text-white hover:bg-blue-500"
              >
                ➤
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default memo(Footer)