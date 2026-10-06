import Link from "next/link";
import {
  MdSportsSoccer,
  MdSportsTennis,
  MdSportsCricket,
  MdSportsBasketball,
  MdPool,
} from "react-icons/md";
import { GiShuttlecock } from "react-icons/gi";
import SectionTitle from "@/components/shared/SectionTitle";

const categories = [
  { name: "Football", Icon: MdSportsSoccer },
  { name: "Badminton", Icon: GiShuttlecock },
  { name: "Swimming", Icon: MdPool },
  { name: "Tennis", Icon: MdSportsTennis },
  { name: "Cricket", Icon: MdSportsCricket },
  { name: "Basketball", Icon: MdSportsBasketball },
];

export default function SportCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        title="Popular Sports"
        subtitle="Pick your game and see every venue available for it."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map(({ name, Icon }) => (
          <Link
            key={name}
            href={`/facilities?type=${name}`}
            className="flex flex-col items-center gap-3 rounded-2xl border border-separator p-6 transition hover:border-accent hover:shadow-md"
          >
            <Icon className="h-9 w-9 text-accent" />
            <span className="font-medium">{name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}