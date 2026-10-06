import SectionTitle from "@/components/shared/SectionTitle";
import FacilityCard from "@/components/facilities/FacilityCard";
import { mockFacilities } from "../../../public/mockFacilities";

export default function FeaturedFacilities() {
  const facilities = mockFacilities.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        title="Featured Facilities"
        subtitle="Hand-picked turfs, courts and pools that players love booking."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
    </section>
  );
}