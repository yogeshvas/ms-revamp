/** @format */

import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Cpu,
      image: "https://www.mamastops.com/assets/img/project/cs3.jpg",
      title: "Advanced Processing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      icon: Fingerprint,
      image: "https://www.mamastops.com/assets/img/project/cs1.jpg",
      title: "Secure Authentication",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      icon: Pencil,
      image: "https://www.mamastops.com/assets/img/project/cs2.jpg",
      title: "Content Creation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      icon: Settings2,
      image: "https://www.mamastops.com/assets/img/project/cs3.jpg",
      title: "Smart Configuration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      icon: Sparkles,
      image: "https://www.mamastops.com/assets/img/project/cs3.jpg",
      title: "AI Enhancement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=center",
      title: "Lightning Fast",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
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
                  {/* <div className="absolute top-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
