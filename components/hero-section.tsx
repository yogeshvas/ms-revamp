/** @format */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Header } from "./header";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/truck-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl  tracking-tight mb-6 leading-tight">
            Your One-Stop Solution for Logistics Excellence
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 opacity-90">
            Streamline your logistics business with our innovative solutions.
          </p>
          <Button
            onClick={() => router.push("/products")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
