// components/sections/AboutSection.tsx
import type { AboutSectionProps } from "@/types/content";

type Props = {
  content: AboutSectionProps;
};

export default function AboutSection({ content }: Props) {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {content.title}
        </h2>
        <div className="text-lg text-gray-600 leading-relaxed max-w-prose mx-auto [text-wrap:balance]">
          {content.description}
        </div>
      </div>
    </section>
  );
}
