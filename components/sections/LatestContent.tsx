// components/sections/LatestContent.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function LatestContent() {
  return (
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
  );
}
