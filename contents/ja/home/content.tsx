import type { HomepageContent } from "@/types/content";

const content: HomepageContent = {
  haeder: {
    navItems: ["ホーム", "家庭向け", "企業向け", "お問い合わせ"],
    languageSwitcher: {
      ja: "日本語",
      en: "English",
    },
  },
  hero: {
    title: (
      <>
        ちいさなサイバー防衛室 <br className="hidden md:block" />
        <span className="text-blue-600">tiny-csirt</span> へようこそ！
      </>
    ),
    subtitle: (
      <>
        家庭でも会社でも。
        <br />
        ちょっとした気づきで、ぐっと安心に。
      </>
    ),
    buttonFamily: "家庭向けの対策を見る",
    buttonBusiness: "中小企業向けの対策を見る",
  },
  about: {
    title: "tiny-csirtってなに？",
    description: (
      <>
        自分たちでなんとかしたい人たちのために。
        <br className="hidden md:block" />
        tiny-csirtは家庭や中小企業でも「じぶんごと」として
        <br className="hidden md:block" />
        セキュリティを考えられるようにするための、
        <br className="hidden md:block" />
        小さな実験室です。
      </>
    ),
  },
};

export default content;
