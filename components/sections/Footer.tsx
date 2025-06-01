// components/sections/Footer.tsx
import { Shield } from "lucide-react";
import type { FooterContentProps } from "@/types/content";

type Props = {
  content: FooterContentProps;
};

export default function Footer({ content }: Props) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">tiny-csirt</span>
            </div>
            <p className="text-gray-400 whitespace-pre-line">
              {content.description}
            </p>
          </div>
          {content.sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
