/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Cpu } from "lucide-react";

const About = () => {
  return (
    <div className="bg-background min-h-screen mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-40">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <Image
            src="/logo-white.png"
            width={80}
            height={80}
            alt="Mamastops Logo"
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            About Mamastops
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto ">
            We are a passionate team at Mamastops, delivering innovative
            logistics solutions to empower businesses worldwide.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
            Our Story
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2010, Mamastops has evolved from a vision to a global
                leader in logistics technology. We specialize in end-to-end
                solutions, including tracking, ERP, supply chain financing, and
                cashless services, all accessible through a single platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                With a presence in over 20 countries, we serve clients from
                startups to Fortune 500 companies, integrating state-of-the-art
                APIs to streamline operations and drive innovation.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="size-4 text-primary" />
                    <h3 className="text-sm font-medium">Fast</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Rapid deployment of logistics solutions.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="size-4 text-primary" />
                    <h3 className="text-sm font-medium">Powerful</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Robust platform for all your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="border-border/50 rounded-2xl border border-dotted p-2 shadow-lg">
                <Image
                  src="https://www.mamastops.com/assets/img/about/gl4.jpg"
                  alt="Mamastops Office"
                  width={600}
                  height={400}
                  className="rounded-[12px] w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Our Mission
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            At Mamastops, our mission is to empower businesses by providing
            innovative, reliable, and sustainable logistics solutions. We aim to
            create a positive global impact through collaboration and
            excellence.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="hover:bg-muted/50 rounded-2xl border p-6 text-center transition-colors">
              <Image
                src="https://media.licdn.com/dms/image/v2/C4D03AQGudLGag68zig/profile-displayphoto-shrink_800_800/0/1516588103467?e=1755129600&v=beta&t=ATbMpmLtgRD5ktD5bPilYzPdGSD7bxzg_5ebOZkRxmw"
                alt="Hanumant Lal Shukla"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Hanumant Lal Shukla</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
              <p className="text-muted-foreground text-sm mt-2">
                Hanumant leads Mamastops with a vision for global logistics
                innovation.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="hover:bg-muted/50 rounded-2xl border p-6 text-center transition-colors">
              <Image
                src="https://via.placeholder.com/150"
                alt="Jane Smith"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-muted-foreground">CTO</p>
              <p className="text-muted-foreground text-sm mt-2">
                Jane drives our technical strategy with cutting-edge solutions.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="hover:bg-muted/50 rounded-2xl border p-6 text-center transition-colors">
              <Image
                src="https://via.placeholder.com/150"
                alt="Emily Johnson"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Emily Johnson</h3>
              <p className="text-muted-foreground">Head of Operations</p>
              <p className="text-muted-foreground text-sm mt-2">
                Emily ensures seamless operations and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Join Our Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Ready to transform your logistics with Mamastops? Get in touch today
            and let’s build the future together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-background text-primary font-semibold py-3 px-6 rounded-lg hover:bg-muted transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
