import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, BookOpen, Users, Lock, Building2 } from "lucide-react";

export default function AudienceCards() {
  return (
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
  );
}
