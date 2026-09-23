"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { medicines } from "../../../lib/medicines";

export default function MedicineDetailsPage() {
  const { slug } = useParams();

  const medicine = medicines.find((item) => item.id === slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!medicine) {
    return (
      <>
        <SiteHeader />

        <main className="grid min-h-[60vh] place-items-center bg-[#f8f4eb] px-5">
          <div className="text-center">
            <h1 className="serif text-4xl text-[#263d2e]">Product not found</h1>

            <Link
              href="/medicines"
              className="mt-6 inline-block rounded-full bg-[#31513c] px-6 py-3 text-sm font-bold text-white"
            >
              View medicines
            </Link>
          </div>
        </main>

        <SiteFooter />
      </>
    );
  }

  const total = medicine.price * quantity;

  const message = `Hello, I want to order ${medicine.name}.

Pack: ${medicine.pack}
Quantity: ${quantity}
Price: ₹${medicine.price.toLocaleString("en-IN")} each
Total: ₹${total.toLocaleString("en-IN")}

Please confirm availability and order details.`;

  const whatsappUrl = `https://wa.me/917292928700?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <>
      <SiteHeader />

      <main className="bg-[#f8f4eb]">
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Link
              href="/medicines"
              className="text-sm font-semibold text-[#52685a]"
            >
              ← Back to medicines
            </Link>

            <div className="mt-8 grid gap-12 lg:grid-cols-2">
              <div>
                <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#e9e3d3]">
                  <Image
                    src={medicine.images[selectedImage]}
                    alt={medicine.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-8"
                  />

                  {medicine.discount > 0 && (
                    <span className="absolute left-5 top-5 rounded-full bg-[#31513c] px-4 py-2 text-sm font-bold text-white">
                      {medicine.discount}% OFF
                    </span>
                  )}
                </div>

                {medicine.images.length > 1 && (
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                    {medicine.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setSelectedImage(index)}
                        className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#e9e3d3] ${
                          selectedImage === index ? "ring-2 ring-[#31513c]" : ""
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${medicine.name} ${index + 1}`}
                          fill
                          className="object-contain p-2"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold uppercase tracking-widest text-[#8b7355]">
                  {medicine.category}
                </p>

                <h1 className="serif mt-3 text-5xl leading-tight text-[#263d2e] md:text-6xl">
                  {medicine.name}
                </h1>

                <p className="mt-5 text-lg leading-8 text-[#52685a]">
                  {medicine.description}
                </p>

                <div className="mt-7 flex flex-wrap items-end gap-4">
                  <span className="text-3xl font-bold text-[#31513c]">
                    ₹{medicine.price.toLocaleString("en-IN")}
                  </span>

                  {medicine.mrp !== medicine.price && (
                    <>
                      <span className="text-lg text-[#8b8b7b] line-through">
                        ₹{medicine.mrp.toLocaleString("en-IN")}
                      </span>

                      <span className="rounded-full bg-[#e2a483]/20 px-3 py-1 text-sm font-bold text-[#9a5e42]">
                        Save ₹
                        {(medicine.mrp - medicine.price).toLocaleString(
                          "en-IN",
                        )}
                      </span>
                    </>
                  )}
                </div>

                <p className="mt-2 text-sm text-[#647268]">{medicine.pack}</p>

                <div className="mt-8">
                  <p className="text-sm font-bold text-[#263d2e]">Quantity</p>

                  <div className="mt-3 flex w-fit items-center overflow-hidden rounded-full border border-[#31513c]/20 bg-white">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((value) => Math.max(1, value - 1))
                      }
                      className="grid h-11 w-11 place-items-center text-lg transition hover:bg-[#e9e3d3]"
                    >
                      −
                    </button>

                    <span className="w-12 text-center font-bold">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => setQuantity((value) => value + 1)}
                      className="grid h-11 w-11 place-items-center text-lg transition hover:bg-[#e9e3d3]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#e9e3d3] px-5 py-4">
                  <span className="text-sm text-[#52685a]">Total</span>

                  <span className="text-xl font-bold text-[#31513c]">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition hover:opacity-90"
                >
                  <span className="text-lg">◉</span>
                  Order on WhatsApp
                </a>

                {medicine.points?.length > 0 && (
                  <div className="mt-8 rounded-[1.5rem] bg-[#e9e3d3] p-6">
                    <p className="text-sm font-bold uppercase tracking-wider text-[#8b7355]">
                      Product highlights
                    </p>

                    <ul className="mt-4 space-y-3">
                      {medicine.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-[#52685a]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#31513c]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#31513c]/10 py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="eyebrow">Ingredients</p>

                <h2 className="serif mt-3 text-4xl">What's inside.</h2>

                <div className="mt-6 rounded-[2rem] bg-[#e9e3d3] p-6 md:p-8">
                  <p className="text-sm font-bold uppercase tracking-wider text-[#31513c]">
                    Each tablet contains
                  </p>

                  <ul className="mt-5 space-y-3">
                    {medicine.ingredients?.map((ingredient) => (
                      <li
                        key={ingredient}
                        className="flex items-start gap-3 border-b border-[#31513c]/10 pb-3 text-sm leading-6 text-[#52685a] last:border-0 last:pb-0"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#31513c]" />

                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#31513c] p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-wider text-[#e2a483]">
                  How to use
                </p>

                <p className="serif mt-4 text-3xl">{medicine.dosage}</p>

                <p className="mt-5 text-sm leading-6 text-[#d2dfd1]">
                  Please follow the product label and professional guidance
                  where applicable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#31513c]/10 py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="rounded-[2rem] bg-[#e9e3d3] p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#8b7355]">
                Product information
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#52685a]">
                Please read the product label carefully and use the product
                according to the directions provided. For personalised guidance,
                consult a qualified Ayurvedic practitioner.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
