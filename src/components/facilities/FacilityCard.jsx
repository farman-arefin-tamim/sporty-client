"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { MdLocationOn, MdGroups } from "react-icons/md";

export default function FacilityCard({ facility }) {
  const router = useRouter();
  const {
    _id,
    name,
    facility_type,
    location,
    price_per_hour,
    capacity,
    description,
    image,
  } = facility;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-separator bg-background shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          {facility_type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">{name}</h3>

        <ul className="mt-3 space-y-1.5 text-sm text-muted">
          <li className="flex items-center gap-2">
            <MdLocationOn className="h-4 w-4 shrink-0 text-accent" />
            {location}
          </li>
          <li className="flex items-center gap-2">
            <MdGroups className="h-4 w-4 shrink-0 text-accent" />
            Up to {capacity} players
          </li>
        </ul>

        <p className="mt-3 line-clamp-2 text-sm text-muted">{description}</p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <p>
            <span className="text-xl font-bold">৳{price_per_hour}</span>
            <span className="text-sm text-muted"> / hour</span>
          </p>
          <Button onPress={() => router.push(`/facility/${_id}`)}>
            Book Now
          </Button>
        </div>
      </div>
    </article>
  );
}