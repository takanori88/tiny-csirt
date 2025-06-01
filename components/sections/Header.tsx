"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Shield, Menu } from "lucide-react";
import Link from "next/link";
import type { HeaderContentProps } from "@/types/content";

type Props = {
  content: HeaderContentProps;
};

export default function Header({ content }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Localeをパスから判定
  const currentLocale = pathname.startsWith("/ja") ? "ja" : "en";

  const changeLocale = (locale: string) => {
    const newPath = pathname.replace(/^\/(ja|en)/, `/${locale}`);
    router.push(newPath);
    setIsOpen(false); // メニューを閉じる
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* ロゴ */}
          <Link
            href={`/${currentLocale}`}
            className="flex items-center space-x-2"
          >
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">tiny-csirt</span>
          </Link>

          {/* PC用ナビ */}
          <div className="hidden md:flex items-center space-x-8">
            {content.navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            ))}

            {/* ✅ 言語切替（PC用） */}
            <div className="flex space-x-2 ml-4">
              <button
                onClick={() => changeLocale("ja")}
                className={`text-sm ${
                  currentLocale === "ja"
                    ? "font-bold underline text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {content.languageSwitcher.ja}
              </button>
              <button
                onClick={() => changeLocale("en")}
                className={`text-sm ${
                  currentLocale === "en"
                    ? "font-bold underline text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {content.languageSwitcher.en}
              </button>
            </div>
          </div>

          {/* ハンバーガー */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          {/* コンテナ */}
        </div>
      </div>

      {/* モバイルメニュー（オーバーレイ） */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
          onClick={() => setIsOpen(false)} // 背景をタップで閉じる
        >
          <div
            className="flex flex-col items-center space-y-6 text-center"
            onClick={(e) => e.stopPropagation()} // メニュー内のクリックは伝播防止
          >
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold text-gray-900">
                tiny-csirt
              </span>
            </div>
            {content.navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* 言語切替 */}
            <div className="mt-10 flex space-x-4">
              <button
                onClick={() => changeLocale("ja")}
                className={`text-sm ${
                  currentLocale === "ja"
                    ? "font-bold underline text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {content.languageSwitcher.ja}
              </button>
              <button
                onClick={() => changeLocale("en")}
                className={`text-sm ${
                  currentLocale === "en"
                    ? "font-bold underline text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {content.languageSwitcher.en}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
