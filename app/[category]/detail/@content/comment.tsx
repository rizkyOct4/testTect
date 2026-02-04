"use client";

import { memo } from "react";
import Image from "next/image";

const CommentSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="h-5 w-1 rounded-full bg-blue-600" />
        <h2 className="text-lg font-semibold text-black">Komentar</h2>
      </div>

      {/* Input */}
      <div className="flex gap-3 w-full overflow-hidden">
        <div className="flex gap-3 relative h-10 w-10 rounded-full overflow-hidden">
          <Image
            src="https://akcdn.detik.net.id/visual/2026/02/03/bareskrim-geledah-sekuritas-shinhan-di-kasus-manipulasi-saham-pipa-saat-ipo-1770118146558_169.jpeg?w=360&q=90"
            alt="avatar"
            className="object-cover"
            fill
            priority
          />
        </div>

        <div className="flex-1 space-y-2 text-black">
          <textarea
            placeholder="Apa yang ingin anda tanyakan?"
            className="w-full min-h-22.5 rounded-lg border border-gray-200 p-3 text-sm"
          />

          <div className="flex items-center justify-between">
            <button className="rounded-md bg-blue-600 px-4 py-1.5 text-sm text-white hover:bg-blue-700">
              Kirim
            </button>

            <span className="text-xs text-gray-400">0/50</span>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex gap-3 relative overflow-hidden">
          <div className="flex gap-3 relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src="https://akcdn.detik.net.id/visual/2026/02/03/bareskrim-geledah-sekuritas-shinhan-di-kasus-manipulasi-saham-pipa-saat-ipo-1770118146558_169.jpeg?w=360&q=90"
              alt="avatar"
              className="object-cover"
              fill
              priority
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="font-semibold">
                  UJANG YUSMEIDI S.P., M.Agr.
                </span>
                <span className="text-xs text-gray-400">28 Mar 2024 11:15</span>
              </div>

              <p className="mt-1 text-sm text-gray-700">
                Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ?
                Karena saya mau mendownload ada konfirmasi bahwa TOTP aktivasi
                salah Bagaimana ya solusinya ?
              </p>

              <button className="mt-2 text-sm text-blue-600 hover:underline">
                Balas
              </button>
            </div>
            {/* // ? REPLY */}
            <div className="flex gap-3 relative">
              <div className="flex gap-3 relative h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src="https://akcdn.detik.net.id/visual/2026/02/03/bareskrim-geledah-sekuritas-shinhan-di-kasus-manipulasi-saham-pipa-saat-ipo-1770118146558_169.jpeg?w=360&q=90"
                  alt="avatar"
                  className="object-cover"
                  fill
                  priority
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-semibold">
                    DINA RIKA HARYAWATI, S.Pd
                  </span>
                  <span className="text-xs text-gray-400">
                    28 Mar 2024 11:15
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-700">
                  saya mengunduh sertifikatnya kok juga belum bisa
                </p>

                <button className="mt-2 text-sm text-blue-600 hover:underline">
                  Balas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / pagination */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <span>Item per page</span>
          <select className="rounded border border-gray-300 px-2 py-1 text-sm">
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
          <span>of 200</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-gray-400">&lt;</button>
          <button className="text-blue-600 font-semibold">1</button>
          <button className="text-gray-600">2</button>
          <button className="text-gray-400">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default memo(CommentSection);
