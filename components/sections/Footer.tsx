// components/sections/Footer.tsx
import { Shield } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
