import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ cat: string }> },
) {
  const cat = (await params)?.cat;
  const key = req.nextUrl.searchParams.get("key") as string;
  const limit = Number(req.nextUrl.searchParams.get("limit") ?? "");
  const pageParam = Number(req.nextUrl.searchParams.get("page-param") ?? "");
  const offset = Number((pageParam - 1) * limit);

  switch (key) {
    case `headline${cat}`: {
      const res = await fetch(
        `https://berita-indo-api-next.vercel.app/api/antara-news/${cat}`,
      );
      const json = await res.json();
      const hasMore = offset + limit < Number(json.data.length);
      const data = json.data.slice(offset, offset + limit);
      const total = json.total;
      return NextResponse.json({ data, hasMore, total });
    }
    case `popular-news-${cat}`: {
      const res = await fetch(
        `https://berita-indo-api-next.vercel.app/api/antara-news/${cat}`,
      );
      const json = await res.json();
      const hasMore = offset + limit < Number(json.data.length);
      const data = json.data.slice(offset, offset + limit);
      const total = json.total;
      return NextResponse.json({ data, hasMore, total });
    }
    // case `recomendation-news-${cat}`: {
    //   const res = await fetch(
    //     `https://berita-indo-api-next.vercel.app/api/antara-news/${cat}`,
    //   );
    //   const json = await res.json();
    //   const hasMore = offset + limit < Number(json.data.length);
    //   const data = json.data.slice(offset, offset + limit);
    //   const total = json.total;
    //   return NextResponse.json({ data, hasMore, total });
    // }
  }
}
