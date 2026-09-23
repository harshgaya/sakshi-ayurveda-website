"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "../lib/siteConfig";

const links = [
  ["Home", "/"],
  ["Treatments", "/treatments"],
  ["Medicines", "/medicines"],
  ["About", "/about"],
  ["Testimonials", "/testimonials"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7dfd0] bg-[#fbf8f1]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e4d8b6] text-xl">
            🍃
          </span>

          <span>
            <b className="serif block text-lg leading-none">
              {siteConfig.shortName}
            </b>

            <small className="tracking-[.18em] text-[9px] text-[#4b6e52]">
              HEAL • RESTORE • THRIVE
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#31513c] md:flex">
          {links.map(([name, href]) => (
            <Link key={name} href={href} className="hover:text-[#bf7253]">
              {name}
            </Link>
          ))}

          <a
            href={`tel:+91${siteConfig.phone}`}
            className="rounded-full bg-[#31513c] px-5 py-3 text-white hover:bg-[#bf7253]"
          >
            Book a consultation
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
          aria-label="Menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#e7dfd0] bg-[#fbf8f1] px-5 pb-5 md:hidden">
          {links.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[#31513c]"
            >
              {name}
            </Link>
          ))}

          <a
            href={`tel:+91${siteConfig.phone}`}
            className="mt-2 block rounded-full bg-[#31513c] px-5 py-3 text-center text-white"
          >
            Book a consultation
          </a>
        </nav>
      )}
    </header>
  );
}
