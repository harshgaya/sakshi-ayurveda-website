import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import TreatmentGrid from "../components/TreatmentGrid";
import VideoTestimonial from "../components/VideoTestimonial";
import ContactCta from "../components/ContactCta";
import {
  siteConfig,
  testimonialVideos,
  therapyGroups,
} from "../lib/siteConfig";
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[#e9e3d3]">
          <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-8 px-5 py-14 md:grid-cols-2 lg:px-8">
            <div className="relative z-10">
              <p className="eyebrow">Bodhgaya • Kerala Panchkarma tradition</p>
              <h1 className="serif mt-4 text-5xl leading-[1.02] md:text-7xl">
                A quieter path
                <br />
                to feeling well.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#496051]">
                Personalised Ayurvedic consultation, Panchkarma therapies and
                body massage at {siteConfig.shortName}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="rounded-full bg-[#31513c] px-6 py-3.5 text-sm font-bold text-white"
                >
                  Call {siteConfig.phoneDisplay}
                </a>
                <a
                  target="_blank"
                  href={siteConfig.mapsUrl}
                  className="rounded-full border border-[#31513c] px-6 py-3.5 text-sm font-bold"
                >
                  Get directions
                </a>
              </div>
              <p className="mt-8 text-sm text-[#52685a]">
                ✦ {siteConfig.doctor} • Personalised care after consultation
              </p>
            </div>
            <div className="relative h-[420px] md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[52%]">
              <Image
                src="/images/ayurveda-hero.png"
                alt="Ayurvedic oil therapy"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#e9e3d3] via-transparent to-transparent" />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">Meet your physician</p>
              <h2 className="serif mt-3 text-4xl md:text-5xl">
                Care with experience and attention.
              </h2>
              <p className="mt-5 leading-7 text-[#52685a]">
                {siteConfig.doctor} offers a considered, individual approach to
                Ayurveda and Panchkarma. Your visit begins with listening—your
                concerns, routine and current needs—before any therapy is
                selected.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block text-sm font-bold underline underline-offset-4"
              >
                About our approach →
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/doctor-consultation.png"
                alt="Ayurvedic consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Care designed around you</p>
              <h2 className="serif mt-3 text-4xl md:text-5xl">
                Therapies with purpose.
              </h2>
            </div>
            <Link
              href="/treatments"
              className="text-sm font-bold underline underline-offset-4"
            >
              View all therapies →
            </Link>
          </div>
          <TreatmentGrid />
        </section>
        <section className="overflow-hidden bg-[#31513c] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="eyebrow !text-[#e2a483]">The Panchkarma journey</p>
              <h2 className="serif mt-4 text-4xl leading-tight">
                Prepare.
                <br />
                Cleanse.
                <br />
                Restore.
              </h2>
              <Link
                href="/panchakarma"
                className="mt-7 inline-block rounded-full border border-white/40 px-5 py-3 text-sm font-bold"
              >
                Explore the full guide →
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                [
                  "01",
                  "Purva Karma",
                  "Preparation practices such as digestive care, oleation and warmth.",
                ],
                [
                  "02",
                  "Pradhana Karma",
                  "A clinician may select appropriate classical therapies.",
                ],
                [
                  "03",
                  "Paschat Karma",
                  "Rest, diet and routine guidance that supports the transition.",
                ],
              ].map(([n, t, d]) => (
                <div key={n} className="border-t border-white/20 pt-5">
                  <p className="text-[#e2a483]">{n}</p>
                  <h3 className="serif mt-4 text-2xl">{t}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#d2dfd1]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="eyebrow">Patient video stories</p>
                <h2 className="serif mt-3 text-4xl">
                  Real journeys, shared gently.
                </h2>
              </div>
              <p className="hidden text-sm text-[#647268] md:block">
                Swipe to explore →
              </p>
            </div>
            <div className="flex snap-x gap-5 overflow-x-auto pb-5 [scrollbar-width:thin]">
              {testimonialVideos.map((testimonial) => (
                <div
                  key={`${testimonial.name}-${testimonial.videoUrl}`}
                  className="w-[72vw] shrink-0 snap-start sm:w-[280px]"
                >
                  <VideoTestimonial
                    name={testimonial.name}
                    condition={testimonial.condition}
                    quote={testimonial.quote}
                    color={testimonial.color}
                    videoUrl={testimonial.videoUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1fr_.9fr] lg:px-8">
          <div className="relative min-h-80 overflow-hidden rounded-[2rem]">
            <Image
              src="/images/herbal-poultices.png"
              alt="Ayurvedic herbs and herbal poultices"
              fill
              className="object-cover"
            />
          </div>
          <div className="rounded-[2rem] bg-[#f0e6d5] p-8 md:p-12">
            <p className="eyebrow">Conditions we support</p>
            <h2 className="serif mt-3 text-4xl">
              A whole-person view of wellbeing.
            </h2>
            <p className="mt-5 leading-7 text-[#52685a]">
              Our consultation-led care commonly supports concerns around pain
              and mobility, sleep and stress, digestion, skin and hair, women’s
              wellness, sinus care and general vitality.
            </p>
            <Link
              className="mt-7 inline-block text-sm font-bold underline underline-offset-4"
              href="/treatments"
            >
              Explore treatment areas →
            </Link>
          </div>
        </section>
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
