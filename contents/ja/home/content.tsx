import type { HomepageContent } from "@/types/content";

const content: HomepageContent = {
  hero: {
    title: (
      <>
        ちいさなサイバー防衛室 <br className="hidden lg:block" />
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
};

export default content;
