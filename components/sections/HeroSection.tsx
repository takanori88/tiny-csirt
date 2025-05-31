// components/sections/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { Home, Building2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
          ちいさなサイバー防衛室 <br className="hidden lg:block" />
          <span className="text-blue-600">tiny-csirt</span> へようこそ！
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          家庭でも会社でも。
          <br />
          ちょっとした気づきで、ぐっと安心に。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            <Home className="mr-2 h-5 w-5" />
            家庭向けの対策を見る
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
          >
            <Building2 className="mr-2 h-5 w-5" />
            中小企業向けの対策を見る
          </Button>
        </div>
      </div>
    </section>
  );
}
