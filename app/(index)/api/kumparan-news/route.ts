import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = Number(req.nextUrl.searchParams.get("id"));

  if (id) {
    const res = await fetch(
      "https://berita-indo-api-next.vercel.app/api/kumparan-news/",
    );

    const output = await res.json();
    const item = output?.data?.[id];
    return NextResponse.json(item);
  } else {
    const limit = Number(req.nextUrl.searchParams.get("limit"));
    const pageParam = Number(req.nextUrl.searchParams.get("page-param"));
    const offset = (pageParam - 1) * limit;

    const res = await fetch(
      "https://berita-indo-api-next.vercel.app/api/kumparan-news/",
    );
    const json = await res.json();

    const hasMore = offset + limit < Number(json.data.length);
    const data = json.data.slice(offset, offset + limit);
    const total = json.total;

    return NextResponse.json({ data, hasMore, total });
  }
}
