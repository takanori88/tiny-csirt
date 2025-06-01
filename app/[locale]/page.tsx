import jaContent from "@/contents/ja/home/content";
import enContent from "@/contents/en/home/content";
import Homepage from "@/components/sections/Homepage";

type Locale = "ja" | "en";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;
  const content = locale === "ja" ? jaContent : enContent;
  return <Homepage content={content} />;
}
