import JaHomepage from "@/components/ja/homepage";
import EnHomepage from "@/components/en/homepage";

type Locale = "ja" | "en";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;
  return locale === "ja" ? <JaHomepage /> : <EnHomepage />;
}
