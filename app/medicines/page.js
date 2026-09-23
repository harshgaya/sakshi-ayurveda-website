import MedicineCard from "../../components/MedicineCard";
import { medicines } from "../../lib/medicines";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function MedicinesPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#f8f4eb]">
        <section className="bg-[#e9e3d3] py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="eyebrow">Ayurvedic wellness products</p>

            <h1 className="serif mt-4 max-w-3xl text-5xl leading-tight md:text-7xl">
              Ayurveda for your everyday wellness.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52685a]">
              Explore our collection of Ayurvedic formulations and wellness
              products.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="serif text-3xl">All products</h2>

              <p className="text-sm text-[#647268]">
                {medicines.length} products
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {medicines.map((medicine) => (
                <MedicineCard key={medicine.id} medicine={medicine} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
