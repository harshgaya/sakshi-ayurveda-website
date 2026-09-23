import Image from "next/image";

const heritage = [
  {
    name: "Dhanvantari",
    title: "The Divine Physician",
    image: "/heritage/dhanwantri.jpeg",
    text: "Revered in the Ayurvedic tradition and associated with the Dhanvantari school of surgery.",
  },
  {
    name: "Atreya",
    title: "The Great Physician",
    image: "/heritage/atreya.jpeg",
    text: "Associated with the physician tradition of Ayurveda and the teachings that shaped early classical medicine.",
  },
  {
    name: "Charaka",
    title: "Master of Internal Medicine",
    image: "/heritage/charak.png",
    text: "Associated with the Charaka Samhita, one of Ayurveda's foundational texts on internal medicine.",
  },
  {
    name: "Sushruta",
    title: "Master of Surgery",
    image: "/heritage/sushruta.png",
    text: "Associated with the Sushruta Samhita and the classical surgical tradition of Ayurveda.",
  },
];

export default function AyurvedaHeritage() {
  return (
    <section className="overflow-hidden bg-[#f0e6d5] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The roots of Ayurveda</p>

          <h2 className="serif mt-4 text-4xl leading-tight md:text-5xl">
            Wisdom carried through generations.
          </h2>

          <p className="mt-5 leading-7 text-[#52685a]">
            Ayurveda has been shaped through generations of physicians, scholars
            and classical traditions. Their knowledge continues to inspire the
            practice of Ayurveda today.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {heritage.map((person) => (
            <article
              key={person.name}
              className="group overflow-hidden rounded-[2rem] bg-[#e9e3d3]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1f382a]/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="serif text-2xl">{person.name}</h3>
                  <p className="mt-1 text-sm text-[#e2d8bd]">{person.title}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-6 text-[#52685a]">
                  {person.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-[#31513c]/15 pt-6 text-center">
          <p className="text-sm text-[#647268]">
            Rooted in classical Ayurvedic knowledge, approached with care for
            the individual.
          </p>
        </div>
      </div>
    </section>
  );
}
