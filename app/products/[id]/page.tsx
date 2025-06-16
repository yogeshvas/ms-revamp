/** @format */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  CreditCard,
  Shield,
  Zap,
  Users,
  Smartphone,
  DollarSign,
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link href="/products/1">
            <Button>
              View Available Products
              <ChevronRight className="ml-2 size-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Product Navigation */}

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h1 className="text-balance text-3xl font-semibold md:text-4xl">
              {currentContent.hero.title}
            </h1>
            <p className="text-muted-foreground mt-6">
              {currentContent.hero.subtitle}
            </p>
            <p className="text-muted-foreground mt-4 max-w-4xl mx-auto">
              {currentContent.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                {currentContent.hero.primaryButton}
                <ChevronRight className="ml-2 size-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                {currentContent.hero.secondaryButton}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                {currentContent.mainContent.title}
              </h2>
              {currentContent.mainContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground mt-6 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative">
              <Image
                src={currentContent.mainContent.image}
                alt={currentContent.mainContent.imageAlt}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              {currentContent.features.title}
            </h2>
            <p className="text-muted-foreground mt-4">
              {currentContent.features.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentContent.features.items.map((feature, index) => {
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap];
              return (
                <FeatureCard
                  key={index}
                  icon={<IconComponent className="size-8 text-primary" />}
                  title={feature.title}
                  description={feature.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              {currentContent.howItWorks.title}
            </h2>
            <p className="text-muted-foreground mt-4">
              {currentContent.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {currentContent.howItWorks.steps.map((step, index) => (
              <StepCard
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={currentContent.benefits.image}
                alt={currentContent.benefits.imageAlt}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                {currentContent.benefits.title}
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                {currentContent.benefits.description}
              </p>
              <ul className="mt-6 space-y-4">
                {currentContent.benefits.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 size-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            {currentContent.cta.title}
          </h2>
          <p className="text-muted-foreground mt-4">
            {currentContent.cta.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              {currentContent.cta.primaryButton}
              <ChevronRight className="ml-2 size-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              {currentContent.cta.secondaryButton}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="p-6 h-full">
      <CardContent className="p-0">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const StepCard = ({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
        {step}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default DynamicContent;
