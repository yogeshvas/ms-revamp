/** @format */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import Image from "next/image";

export default function AllProducts() {
  return (
    <section>
      <div className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Transform Your Logistics with Mamastops Solutions
            </h2>
            <p className="text-muted-foreground mt-6">
              Streamline your operations with our innovative logistics tools,
              designed for efficiency, transparency, and cost savings.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <IntegrationCard
              title="GPS Tracking Solution"
              description="Monitor your fleet in real-time with advanced GPS tracking for route optimization, fuel theft prevention, and shipment transparency."
              link="/products/2"
            >
              <Image
                src="https://www.mamastops.com/assets/img/project/1.jpg"
                alt="GPS Tracking"
                width={320}
                height={180}
                className="object-cover rounded-md"
              />
            </IntegrationCard>

            <IntegrationCard
              title="Cashless Fuel Services"
              description="Simplify fuel payments with secure, cashless transactions via the Mamastops Driver app, reducing inefficiencies."
              link="/products/2"
            >
              <Image
                src="https://www.mamastops.com/assets/img/project/6.jpg"
                alt="Cashless Fuel"
                width={320}
                height={180}
                className="object-cover rounded-md"
              />
            </IntegrationCard>

            <IntegrationCard
              title="Logistics ERP System"
              description="Streamline supply chain operations with our integrated ERP solution for end-to-end visibility and automation."
              link="/products/3"
            >
              <Image
                src="https://www.mamastops.com/assets/img/project/7.jpg"
                alt="Logistics ERP"
                width={320}
                height={180}
                className="object-cover rounded-md"
              />
            </IntegrationCard>

            <IntegrationCard
              title="Supply Chain Finance"
              description="Lower financing costs and improve efficiency with technology-based solutions for buyers and sellers."
              link="/products/4"
            >
              <Image
                src="https://www.mamastops.com/assets/img/project/13.jpg"
                alt="Supply Chain Finance"
                width={320}
                height={180}
                className="object-cover rounded-md"
              />
            </IntegrationCard>

            <IntegrationCard
              title="Border Clearence"
              description="Generate electronic proof of delivery and raise invoices instantly for faster, seamless transactions."
              link="/products/4"
            >
              <Image
                src="https://www.mamastops.com/assets/img/project/13.jpg"
                alt="E-POD Invoicing"
                width={320}
                height={180}
                className="object-cover rounded-md"
              />
            </IntegrationCard>

            <IntegrationCard
              title="Visitflows"
              description="Gain comprehensive insights and data analysis on consignee performance to optimize your logistics."
              link="/products/5"
            >
              <Image
                src="https://www.mamastops.com/assets/img/project/13.jpg"
                alt="Consignee Report"
                width={320}
                height={180}
                className="object-cover rounded-md"
              />
            </IntegrationCard>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  title,
  description,
  children,
  link = "https://www.mamastops.com/product.html",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  link?: string;
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="w-full aspect-[16/9]">{children}</div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="gap-1 pr-2 shadow-none"
          >
            <Link href={link}>
              Learn More
              <ChevronRight className="ml-0 !size-3.5 opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
