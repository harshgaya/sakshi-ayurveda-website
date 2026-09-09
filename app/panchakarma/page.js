import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PageHero from "../../components/PageHero";
import ContactCta from "../../components/ContactCta";
import { siteConfig, therapyGroups, fiveKarmas } from "../../lib/siteConfig";
const detailed = [
  [
    "Shirodhara",
    "A steady stream of comfortably warm medicated oil over the forehead, selected to support deep rest, mental ease and a settled sleep routine.",
  ],
  [
    "Abhyanga",
    "A full-body warm medicated oil massage traditionally used to nourish skin and muscles, ease stiffness and encourage relaxation.",
  ],
  [
    "Shashtikashali Pinda Sveda",
    "Warm boluses prepared with Shashtika rice, milk and herbs. Traditionally chosen for nourishment, strength, flexibility and recovery.",
  ],
  [
    "Patrapinda Sveda",
    "Warm herbal leaf boluses used with medicated oil in care plans for muscular discomfort, stiffness and joint mobility.",
  ],
  [
    "Kati Basti",
    "A local warm-oil therapy for the lower back, usually selected in personalised plans for back stiffness, sciatica and comfort of movement.",
  ],
  [
    "Janu Basti",
    "A local warm-oil therapy for the knee, used in carefully assessed care plans to support joint comfort and flexibility.",
  ],
  [
    "Nasya Karma",
    "A traditional nose therapy using prescribed medicated oils or drops, with gentle face, head and neck support.",
  ],
  [
    "Netratarpan",
    "A soothing eye-care ritual in which medicated ghee is retained in a dough frame around the eyes under professional guidance.",
  ],
];
export default function Panchakarma() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="The complete Panchkarma guide"
          title="Traditional therapies, thoughtfully personalised."
          text="Panchkarma is a structured Ayurvedic programme. The therapies and their duration are decided only after a consultation with the physician."
        />
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] bg-[#244532] text-white lg:grid-cols-[1fr_1fr]">
            <div className="p-8 md:p-12">
              <p className="eyebrow !text-[#e2a483]">What is Panchkarma?</p>
              <h2 className="serif mt-3 text-4xl leading-tight">
                A guided return to balance.
              </h2>
              <p className="mt-5 leading-7 text-[#d3dfd1]">
                In Ayurveda, Panchkarma is a comprehensive process to help
                address accumulated Ama and support balance between Vata, Pitta
                and Kapha. It is not a single treatment or a quick detox. It is
                a clinical journey that unfolds in three stages.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#244532]"
                >
                  Book a consultation
                </a>
                <a
                  target="_blank"
                  href={siteConfig.mapsUrl}
                  className="rounded-full border border-white/40 px-5 py-3 text-sm font-bold"
                >
                  Visit the centre
                </a>
              </div>
            </div>
            <div className="relative min-h-72">
              <Image
                src="/images/ayurveda-hero.png"
                alt="Shirodhara Ayurveda therapy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#f1eadc] px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="eyebrow">The three stages</p>
              <h2 className="serif mt-3 text-4xl">
                A process that respects your pace.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [
                  "01",
                  "Purva Karma",
                  "Preparation through digestive support, internal and external oleation, massage and gentle warmth.",
                ],
                [
                  "02",
                  "Pradhana Karma",
                  "Your physician selects only the main therapies that are suitable for your constitution and current condition.",
                ],
                [
                  "03",
                  "Paschat Karma",
                  "A restorative phase of rest, diet and practical routine guidance to support the body after therapy.",
                ],
              ].map(([n, t, d]) => (
                <article key={n} className="rounded-3xl bg-white p-7">
                  <p className="text-[#bf7253]">{n}</p>
                  <h3 className="serif mt-4 text-2xl">{t}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#56695b]">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Purva Karma & supportive therapies</p>
            <h2 className="serif mt-3 text-4xl">
              Prepare, soften and nourish.
            </h2>
            <p className="mt-5 leading-7 text-[#52685a]">
              These therapies may be part of preparation or prescribed as
              standalone, personalised care. Selection depends on the
              physician’s assessment.
            </p>
          </div>
          <div className="mt-12 space-y-16">
            {therapyGroups.map((group, i) => (
              <article
                key={group.title}
                className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="eyebrow">{group.eyebrow}</p>
                  <h3 className="serif mt-3 text-4xl">{group.title}</h3>
                  <p className="mt-4 leading-7 text-[#52685a]">{group.intro}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#d7cfbf] px-3 py-2 text-sm text-[#31513c]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[#1f3a2c] px-5 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="eyebrow !text-[#e2a483]">Pradhana Karma</p>
              <h2 className="serif mt-3 text-4xl">
                The five classical therapies.
              </h2>
              <p className="mt-5 leading-7 text-[#d2dfd1]">
                The five karmas are not a menu to self-select. A qualified
                physician determines whether any of these are appropriate and
                how they should be sequenced.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {fiveKarmas.map((item) => (
                <article
                  key={item.name}
                  className="rounded-3xl border border-white/15 p-5"
                >
                  <p className="text-sm text-[#e2a483]">{item.number}</p>
                  <h3 className="serif mt-5 text-2xl">{item.name}</h3>
                  <p className="mt-2 text-sm font-bold text-[#cce0c9]">
                    {item.focus}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#c4d4c5]">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 text-center">
            <p className="eyebrow">A closer look</p>
            <h2 className="serif mt-3 text-4xl">
              Therapies frequently included in care plans.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {detailed.map(([name, text]) => (
              <article
                key={name}
                className="rounded-3xl border border-[#e3daca] bg-white p-6"
              >
                <h3 className="serif text-2xl">{name}</h3>
                <p className="mt-3 leading-7 text-[#56695b]">{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#dbe6cf] p-8 md:p-12">
            <p className="eyebrow">Panchkarma at Sakhshi</p>
            <h2 className="serif mt-3 max-w-xl text-4xl">
              See our centre and therapy environment.
            </h2>
            {siteConfig.panchakarmaVideoUrl ? (
              <video
                controls
                className="mt-7 aspect-video w-full rounded-2xl bg-[#244532]"
                src={siteConfig.panchakarmaVideoUrl}
              />
            ) : (
              <div className="mt-7 grid aspect-video place-items-center rounded-2xl bg-[#31513c] text-center text-white">
                <div>
                  <span className="text-4xl">▶</span>
                  <p className="serif mt-3 text-2xl">Panchkarma centre video</p>
                  <p className="mt-2 text-sm text-[#d6e2d2]">
                    Video URL ready to add in lib/siteConfig.js
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-5 py-12 text-center">
          <p className="rounded-3xl bg-[#f4eadb] p-7 text-sm leading-7 text-[#59675c]">
            Important: The information on this page is educational. Panchkarma
            and related therapies are individualised after clinical assessment.
            They are not a substitute for emergency medical treatment or advice
            from your treating doctor.
          </p>
        </section>
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
