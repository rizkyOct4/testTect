import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
) {
  const key = req.nextUrl.searchParams.get("key") as string;
  const limit = Number(req.nextUrl.searchParams.get("limit") ?? "");
  const pageParam = Number(req.nextUrl.searchParams.get("page-param") ?? "");
  const offset = Number((pageParam - 1) * limit);

  switch (key) {
    case "headline": {
      const res = await fetch(
        "https://berita-indo-api-next.vercel.app/api/cnn-news/",
      );
      const json = await res.json();
      const hasMore = offset + limit < Number(json.data.length);
      const data = json.data.slice(offset, offset + limit);
      const total = json.total;
      return NextResponse.json({ data, hasMore, total });
    }
    case "popular-news": {
      const res = await fetch(
        "https://berita-indo-api-next.vercel.app/api/cnn-news/",
      );
      const json = await res.json();
      const hasMore = offset + limit < Number(json.data.length);
      const data = json.data.slice(offset, offset + limit);
      const total = json.total;
      return NextResponse.json({ data, hasMore, total });
    }
    case "detail-sidebar": {
      const res = await fetch(
        "https://berita-indo-api-next.vercel.app/api/cnn-news/",
      );
      const json = await res.json();
      const hasMore = offset + limit < Number(json.data.length);
      const data = json.data.slice(offset, offset + limit);
      const total = json.total;
      return NextResponse.json({ data, hasMore, total });
    }
    default: {
      const res = await fetch(
        "https://berita-indo-api-next.vercel.app/api/cnn-news/",
      );
      const json = await res.json();
      const hasMore = offset + limit < Number(json.data.length);
      const data = json.data.slice(offset, offset + limit);
      const total = json.total;
      return NextResponse.json({ data, hasMore, total });
    }
  }
}
