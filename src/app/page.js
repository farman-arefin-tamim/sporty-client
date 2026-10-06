import Hero from "@/components/home/Hero";
import SportCategories from "@/components/home/SportCategories";
import FeaturedFacilities from "@/components/home/FeaturedFacilities";
import WorkingSection from "@/components/home/WorkingSection";


export default function HomePage() {
  return (
    <>
      <Hero />
      <SportCategories />
      <FeaturedFacilities />
      <WorkingSection />
    </>
  );
}