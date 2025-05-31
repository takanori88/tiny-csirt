import JaHomepage from "@/components/ja/homepage";
import EnHomepage from "@/components/en/homepage";

export default function Page({ params }: { params: { locale: string } }) {
  switch (params.locale) {
    case "ja":
      return <JaHomepage />;
    case "en":
      return <EnHomepage />;
    default:
      return <EnHomepage />;
  }
}
