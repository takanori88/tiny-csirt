import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Home, Building2, BookOpen, Users, Lock } from "lucide-react";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                tiny-csirt
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                ホーム
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                家庭向け
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                企業向け
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                お問い合わせ
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ちいさなサイバー防衛室、
            <br />
            <span className="text-blue-600">tiny-csirt</span> へようこそ！
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            家庭でも、会社でも。ちょっとした気づきで、ぐっと安心に。
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

      {/* Audience Sections */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 家庭向け Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">🏠</div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  家庭向け
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  家族を守るネットの習慣、始めませんか？
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      子どもと学ぶセキュリティ
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">パスワードと鍵の話</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      詐欺メール・SMSの見分け方
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 中小企業向け Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">💼</div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  中小企業向け
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  高価な製品より、まず「知ること」から。
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">EDRってなに？</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      受け入れテストの落とし穴
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Building2 className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      社内での「情報の棚卸し」実践法
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            最新コンテンツ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Content Card 1 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="栗栖のの防御策"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  栗栖のの防御策
                </h3>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  #セキュリティ基礎
                </span>
              </CardContent>
            </Card>

            {/* Content Card 2 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="軍の可読範"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  軍の可読範
                </h3>
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                  #軍の可読範
                </span>
              </CardContent>
            </Card>

            {/* Content Card 3 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="EDRあるある"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  EDRあるある
                </h3>
                <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                  #EDRあるある
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            tiny-csirtってなに？
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            自分たちでなんとかしたい人たちのために。tiny-csirtは、家庭や中小企業でも「じぶんごと」としてセキュリティを考えられるようにするための、ちいさな実験室です。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">tiny-csirt</span>
              </div>
              <p className="text-gray-400">
                家庭と中小企業のための
                <br />
                サイバーセキュリティ情報
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">コンテンツ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    家庭向け対策
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    企業向け対策
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    最新記事
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">サポート</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    よくある質問
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    プライバシーポリシー
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 tiny-csirt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
