// app/page.tsx
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const acceptLanguage = (await headers()).get("accept-language");

  // 優先言語を判定（日本語含んでたら `/ja` に）
  const lang = acceptLanguage?.includes("ja") ? "ja" : "en";
  console.log("Redirecting to language:", lang);

  redirect(`/${lang}`);
}
