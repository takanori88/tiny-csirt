import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 明示的に除外：_next, api, favicon, 静的画像ファイル
  const isExcluded =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.match(/\.(svg|jpg|jpeg|png|webp|gif|ico)$/);

  if (isExcluded) return;

  // すでに /ja or /en がついてたらスキップ
  if (pathname.startsWith("/ja") || pathname.startsWith("/en")) {
    return;
  }

  const locale = req.headers.get("accept-language")?.startsWith("ja")
    ? "ja"
    : "en";

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
