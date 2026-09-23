import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/gallery-1.jpeg",
    alt: "Ayurvedic treatment - Sirodhara",
  },
  {
    src: "/gallery/gallery-2.jpeg",
    alt: "Ayurvedic treatment",
  },
  {
    src: "/gallery/gallery-3.jpeg",
    alt: "Panchkarma therapy",
  },
  {
    src: "/gallery/gallery-4.jpeg",
    alt: "",
  },
  {
    src: "/gallery/gallery-5.jpeg",
    alt: "Panchkarma Therapy",
  },
];

export default function Gallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">Inside Sakshi Ayurveda</p>

            <h2 className="serif mt-3 text-4xl md:text-5xl">
              A glimpse of our care.
            </h2>
          </div>

          <p className="hidden text-sm text-[#647268] md:block">
            Explore our centre →
          </p>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-5 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative h-[360px] w-[82vw] shrink-0 overflow-hidden rounded-[2rem] sm:w-[320px] md:h-[320px] md:w-auto ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 82vw, (max-width: 1024px) 50vw, 66vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
