import { MdSearch, MdEventAvailable, MdCheckCircle } from "react-icons/md";
import SectionTitle from "@/components/shared/SectionTitle";

const steps = [
  {
    Icon: MdSearch,
    title: "Find a facility",
    text: "Browse turfs, courts and pools, then search by name or filter by sport to match your game.",
  },
  {
    Icon: MdEventAvailable,
    title: "Pick a date and slot",
    text: "Choose the day, select an open time slot and set the hours you need. The total price updates instantly.",
  },
  {
    Icon: MdCheckCircle,
    title: "Confirm and play",
    text: "Submit your booking and track it from My Bookings. Plans changed? Cancel with one click.",
  },
];

export default function WorkingSection() {
  return (
    <section className="bg-accent/5 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="How It Works"
          subtitle="Three quick steps from searching to kick-off."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ Icon, title, text }, index) => (
            <div
              key={title}
              className="flex h-full flex-col items-center rounded-2xl border border-separator bg-background p-8 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="h-7 w-7" />
              </div>
              <p className="mt-4 text-sm font-medium text-accent">
                Step {index + 1}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}