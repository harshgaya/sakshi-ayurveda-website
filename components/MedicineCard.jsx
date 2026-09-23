import Image from "next/image";
import Link from "next/link";

export default function MedicineCard({ medicine }) {
  return (
    <Link
      href={`/medicines/${medicine.id}`}
      className="group block overflow-hidden rounded-[2rem] bg-[#f4eee2] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden bg-[#ebe3d2]">
        <Image
          src={medicine.images[0]}
          alt={medicine.name}
          fill
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-5 transition duration-500 group-hover:scale-105"
        />

        {medicine.discount > 0 && (
          <span className="absolute left-4 top-4 rounded-full bg-[#31513c] px-3 py-1.5 text-xs font-bold text-white">
            {medicine.discount}% OFF
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#8b7355]">
          {medicine.category}
        </p>

        <h3 className="serif mt-2 text-2xl text-[#263d2e]">{medicine.name}</h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#647268]">
          {medicine.shortDescription}
        </p>

        <div className="mt-5 flex items-end gap-3">
          <span className="text-xl font-bold text-[#31513c]">
            ₹{medicine.price.toLocaleString("en-IN")}
          </span>

          {medicine.mrp !== medicine.price && (
            <span className="text-sm text-[#8b8b7b] line-through">
              ₹{medicine.mrp.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <div className="mt-5 rounded-full bg-[#31513c] py-3 text-center text-sm font-bold text-white transition group-hover:bg-[#243e2d]">
          View details
        </div>
      </div>
    </Link>
  );
}
