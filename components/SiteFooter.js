import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";
export default function SiteFooter() {
  return (
    <footer className="bg-[#193629] px-5 py-14 text-[#e9e6d9]">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_.9fr_.8fr]">
        <div>
          <p className="serif text-2xl">{siteConfig.shortName}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#bfcdbd]">
            Thoughtful, personalised Ayurvedic care for a calmer mind, stronger
            body and more balanced life.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold">VISIT & CONNECT</p>
          <a
            className="block text-[#d5dfcb] hover:text-white"
            href={`tel:+91${siteConfig.phone}`}
          >
            {siteConfig.phoneDisplay}
          </a>
          <a
            className="mt-2 block text-[#d5dfcb] hover:text-white"
            href="mailto:sakshi.ayurveda.bodhgaya@gmail.com"
          >
            {siteConfig.email}
          </a>
          <a
            target="_blank"
            className="mt-2 block text-sm text-[#d5dfcb] hover:text-white"
            href={siteConfig.mapsUrl}
          >
            Get directions →
          </a>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold">POLICIES</p>
          <div className="space-y-2 text-sm text-[#d5dfcb]">
            <Link className="block" href="/privacy-policy">
              Privacy policy
            </Link>
            <Link className="block" href="/terms-and-conditions">
              Terms & conditions
            </Link>
            <Link className="block" href="/refund-policy">
              Refund policy
            </Link>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-5 text-xs text-[#9cb09d]">
        © 2026 {siteConfig.shortName}. Care is personalised after consultation.
      </p>
    </footer>
  );
}
