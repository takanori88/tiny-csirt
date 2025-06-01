import jaContent from "@/components/ja/content";
import enContent from "@/components/en/content";
import Homepage from "@/components/sections/homepage";

type Locale = "ja" | "en";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;
  const content = locale === "ja" ? jaContent : enContent;
  return <Homepage content={content} />;
}
