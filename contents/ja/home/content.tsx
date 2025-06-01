import type { HomepageContent } from "@/types/content";

const content: HomepageContent = {
  header: {
    navItems: ["ホーム", "家庭向け", "企業向け", "サポート"],
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
  audience: [
    {
      emoji: "🏠",
      title: "家庭向け",
      description: "家族を守るネットの習慣、始めませんか？",
      commingSoon: true,
      items: [
        { icon: "Users", text: "子どもと学ぶセキュリティ" },
        { icon: "Lock", text: "パスワードと鍵の話" },
        { icon: "Shield", text: "詐欺メール・SMSの見分け方" },
      ],
    },
    {
      emoji: "💼",
      title: "中小企業向け",
      description: "今日からできる、セキュリティの第一歩。",
      commingSoon: true,
      items: [
        { icon: "BookOpen", text: "EDRってなに？" },
        { icon: "Shield", text: "受け入れテストの落とし穴" },
        { icon: "Building2", text: "社内での「情報の棚卸し」実践法" },
      ],
    },
  ],
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
  footer: {
    description: "家庭と中小企業のための\nサイバーセキュリティ情報",
    sections: [
      {
        title: "コンテンツ",
        links: [
          { label: "家庭向け対策", href: "#" },
          { label: "企業向け対策", href: "#" },
        ],
      },
      {
        title: "サポート",
        links: [{ label: "プライバシーポリシー", href: "#" }],
      },
    ],
    copyright: "© 2025 tiny-csirt. All rights reserved.",
  },
};

export default content;
