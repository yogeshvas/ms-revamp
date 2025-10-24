/** @format */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  CreditCard,
  Shield,
  Zap,
  Users,
  Smartphone,
  DollarSign,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import contentData from "@/data/products";

// Icon mapping
const iconMap = {
  CreditCard: CreditCard,
  Shield: Shield,
  Zap: Zap,
  Users: Users,
  Smartphone: Smartphone,
  DollarSign: DollarSign,
};

const DynamicContent = () => {
  const { id } = useParams();

  // Get content based on the product ID, default to product 1 if not found
  const productId = id ? parseInt(id as string) : 1;
  const currentContent =
    contentData[productId as keyof typeof contentData] || contentData[1];

  // Handle case where product doesn't exist
  if (!currentContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <Card className="w-full max-w-md mx-4 border-red-100">
          <CardContent className="pt-6 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Product Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The product you're looking for doesn't exist.
            </p>
            <Link href="/">
              <Button className="bg-red-600 hover:bg-red-700">
                Go Back Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { hero, mainContent, features, howItWorks, benefits, cta } =
    currentContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-red-50 to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-1"
                >
                  Featured Solution
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-red-600 font-medium">
                  {hero.subtitle}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {hero.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  {hero.primaryButton}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-200 text-red-700 hover:bg-red-50"
                >
                  {hero.secondaryButton}
                </Button>
              </div>
            </div>
            {mainContent?.image && (
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-red-100">
                  <Image
                    src={mainContent.image}
                    alt={mainContent.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-50/10 to-transparent" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      {mainContent && (
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Card className="border-red-100">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {mainContent.title}
                    </h2>
                    {mainContent.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-lg text-gray-600 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {mainContent.image && (
                    <div className="relative rounded-xl overflow-hidden border border-red-100">
                      <Image
                        src={mainContent.image}
                        alt={mainContent.imageAlt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Features Section */}
      {features && (
        <section className="py-16 md:py-24 bg-red-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="bg-white text-red-700 hover:bg-red-100 px-4 py-1 mb-4"
              >
                Key Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {features.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {features.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.items.map((feature, index) => {
                const IconComponent =
                  iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <Card
                    key={index}
                    className="border-red-100 hover:border-red-200 transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {IconComponent && (
                          <div className="p-3 bg-red-100 rounded-xl group-hover:bg-red-200 transition-colors">
                            <IconComponent className="h-6 w-6 text-red-600" />
                          </div>
                        )}
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {howItWorks && (
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-1 mb-4"
              >
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {howItWorks.title}
              </h2>
              <p className="text-xl text-gray-600">{howItWorks.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.steps.map((step, index) => (
                <Card
                  key={index}
                  className="border-red-100 text-center hover:border-red-200 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits && (
        <section className="py-16 md:py-24 bg-red-50">
          <div className="mx-auto max-w-7xl px-6">
            <Card className="border-red-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <Badge
                      variant="secondary"
                      className="bg-white text-red-700 hover:bg-red-100 px-4 py-1 mb-4"
                    >
                      Key Benefits
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {benefits.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {benefits.description}
                    </p>
                    <ul className="space-y-4">
                      {benefits.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-lg">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {benefits.image && (
                    <div className="relative min-h-[400px]">
                      <Image
                        src={benefits.image}
                        alt={benefits.imageAlt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-red-50/20 to-transparent" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {cta && (
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Card className="border-red-100">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-1"
                  >
                    Get Started
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {cta.title}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {cta.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold"
                    >
                      {cta.primaryButton}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-red-200 text-red-700 hover:bg-red-50"
                    >
                      {cta.secondaryButton}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
    </div>
  );
};

export default DynamicContent;
