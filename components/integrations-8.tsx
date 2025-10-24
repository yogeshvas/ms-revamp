/** @format */

import {
  Gemini,
  Replit,
  GooglePaLM,
  MagicUI,
  VSCodium,
  MediaWiki,
} from "@/components/logos";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function IntegrationsSection() {
  return (
    <section>
      <div className="bg-background  py-24 md:py-32">
        <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
          <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
            <div className="space-y-6">
              <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
                We Provide a Reliable Services
              </h2>
              <p className="text-muted-foreground">
                We are a one-stop shop that encompasses all logistics needs from
                end to end, including tracking, ERP, supply chain financing, and
                cashless services, all accessible through a single login. Our
                services are integrated with state-of-the-art APIs, eliminating
                the need for clients to deal with multiple vendors and providing
                them with the critical services required for efficient
                operations.
              </p>
              {/* <Button variant="outline" size="sm" asChild>
                <Link href="#">Get Started</Link>
              </Button> */}
            </div>

            <div className="mt-auto grid grid-cols-[auto_1fr] gap-3">
              <div className="bg-background flex aspect-square items-center justify-center ">
                <Image
                  src={"/ceo.jpeg"}
                  className="border rounded-full object-cover"
                  width={80}
                  height={80}
                  alt={"logo"}
                />
              </div>
              <blockquote>
                <p>
                  Our dreams die not because of our lack of potential, but our
                  lack of action despite it.
                </p>
                <div className="mt-2 flex gap-2 text-sm">
                  <cite>Hanumant Lal Shukla</cite>
                  <p className="text-muted-foreground">Founder, Mamastops</p>
                </div>
              </blockquote>
            </div>
          </div>

          <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
            <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
              {/* <div className="grid grid-cols-2 gap-2">
                <Integration
                  icon={<Gemini />}
                  name="Gemini"
                  description="The AI model that powers Google's search engine."
                />
                <Integration
                  icon={<Replit />}
                  name="Replit"
                  description="The AI model that powers Google's search engine."
                />
                <Integration
                  icon={<GooglePaLM />}
                  name="GooglePaLM"
                  description="The AI model that powers Google's search engine."
                />
                <Integration
                  icon={<MagicUI />}
                  name="MagicUI"
                  description="The AI model that powers Google's search engine."
                />
                <Integration
                  icon={<VSCodium />}
                  name="VSCodium"
                  description="The AI model that powers Google's search engine."
                />
                <Integration
                  icon={<MediaWiki />}
                  name="MediaWiki"
                  description="The AI model that powers Google's search engine."
                />
              </div> */}
              <Image
                src="https://www.mamastops.com/assets/img/about/gl4.jpg"
                alt="Integrations"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Integration = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
      <div className="flex size-fit items-center justify-center">{icon}</div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm md:line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};
