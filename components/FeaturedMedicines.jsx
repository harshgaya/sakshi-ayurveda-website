import Link from "next/link";
import { medicines } from "../lib/medicines";
import MedicineCard from "./MedicineCard";

export default function FeaturedMedicines() {
  const featured = medicines.filter((medicine) => medicine.featured);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="eyebrow">Ayurvedic wellness products</p>

            <h2 className="serif mt-3 text-4xl md:text-5xl">
              Traditional care, at home.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#52685a]">
              Explore selected Ayurvedic wellness products from Sakshi Ayurveda.
            </p>
          </div>

          <Link
            href="/medicines"
            className="hidden text-sm font-bold underline underline-offset-4 md:block"
          >
            View all products →
          </Link>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-5 [scrollbar-width:thin] md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {featured.map((medicine) => (
            <div
              key={medicine.id}
              className="w-[78vw] shrink-0 sm:w-[320px] md:w-auto"
            >
              <MedicineCard medicine={medicine} />
            </div>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link
            href="/medicines"
            className="inline-block text-sm font-bold underline underline-offset-4"
          >
            View all products →
          </Link>
        </div>
      </div>
    </section>
  );
}
