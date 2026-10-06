"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Players on a floodlit football turf"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Book Your Game. Own The Pitch.
          </h1>
          <p className="mt-5 text-lg text-white/85">
            Find football turfs, badminton courts, swimming lanes and tennis
            courts near you, check open time slots and reserve your spot in
            under a minute.
          </p>
          <div className="mt-8">
            <Button onPress={() => router.push("/facilities")}>
              Explore Facilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}