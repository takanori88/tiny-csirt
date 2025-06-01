// components/sections/AudienceCards.tsx
import type { AudienceContentProps } from "@/types/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, BookOpen, Users, Lock, Building2 } from "lucide-react";

const iconMap = {
  Users,
  Lock,
  Shield,
  BookOpen,
  Building2,
};

type Props = {
  content: AudienceContentProps;
};

export default function AudienceCards({ content }: Props) {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {content.map((card, i) => (
            <Card
              key={i}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{card.emoji}</div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {card.title}
                </CardTitle>
                <p className="text-gray-600 mt-2">{card.description}</p>
              </CardHeader>
              <CardContent>
                {card.commingSoon ? (
                  <div className="text-center text-sm text-gray-500 py-4">
                    Coming soon...
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {card.items.map((item, j) => {
                      const Icon = iconMap[item.icon];
                      return (
                        <li key={j} className="flex items-start">
                          <Icon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
