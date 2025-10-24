/** @format */
"use client";
import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Features() {
  const router = useRouter();
  const features = [
    {
      icon: Cpu,
      image: "https://www.mamastops.com/assets/img/project/cs3.jpg",
      title: "Fuel (Cashless)",
      link: "/products/1",
      description:
        "Access fuel on the go without the hassle of cash transactions. Mamastops enables drivers to refuel seamlessly at partner stations, ensuring smooth journeys and better expense control.",
    },
    {
      icon: Fingerprint,
      image:
        "https://autoturnonline.com/wp-content/uploads/2022/12/page-parking-lot.png",
      title: "Toll and Parking (Cashless)",
      link: "/products/2",
      description:
        "Pay tolls and parking fees digitally, saving drivers time and avoiding delays. With Mamastops, cashless transactions bring convenience, transparency, and faster turnaround at every stop.",
    },
    {
      icon: Pencil,
      image: "https://www.mamastops.com/assets/img/project/cs2.jpg",
      title: "Border Clearance (Cashless)",
      link: "/products/3",
      description:
        "Simplify cross-border logistics with digital payments and streamlined clearance. Mamastops reduces waiting times at checkpoints, helping trucks move across borders faster and more efficiently.",
    },
    {
      icon: Settings2,
      image:
        "https://cdn-ilbkcfl.nitrocdn.com/cwPpNLtOKLpvzEvYUVRbrznvfkzRrxqd/assets/images/optimized/rev-1b73164/trucksup.com/wp-content/uploads/2025/03/IMG_0008_GPS-Fleet-Tracking_-Benefits-Installation-How-does-its-Work_-1024x568.png",
      title: "GPS Tracking",
      link: "/products/4",
      description:
        "Gain real-time visibility into your fleet with advanced GPS tracking. Monitor truck locations, optimise routes, and improve driver safety and delivery reliability.",
    },
    {
      icon: Sparkles,
      image:
        "https://itnation.lu/wp-content/uploads/2022/01/POST_Visus_IoT_1200x628_09.jpeg",
      title: "IoT Sensors",
      link: "/products/5",
      description:
        "Stay ahead with IoT-powered monitoring of vehicle health and cargo conditions. From fuel usage to temperature and load safety, Mamastops helps you manage assets intelligently.",
    },
    {
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=center",
      title: "ERP",
      link: "/products/6",
      description:
        "Integrate all your logistics operations with our ERP solutions. Manage consignments, drivers, and finances in one unified system for improved efficiency and decision-making.",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Let's checkout our all latest services.
          </h2>
          <p>
            Lyra is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <button
                    onClick={() => feature.link && router.push(feature.link)}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
                    disabled={!feature.link}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
