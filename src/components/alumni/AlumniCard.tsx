import Image from "next/image";
import type { Alumnus } from "@/data/alumni";

export const SERIF = "font-[Georgia,'Times_New_Roman',serif]";

type AlumniCardProps = {
  alumnus: Alumnus;
  onSelect: () => void;
};

export default function AlumniCard({ alumnus, onSelect }: AlumniCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#ececec] bg-white p-0 text-left shadow-[0_1px_2px_rgba(0,0,0,.03)] transition duration-200 ease-out hover:-translate-y-[3px] hover:border-neutral-900 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-50">
        <Image
          src={alumnus.imageSrc}
          alt={alumnus.name}
          fill
          sizes="(min-width: 1280px) 20vw, (min-width: 640px) 30vw, 90vw"
          className="object-cover"
        />
        {alumnus.year && (
          <span className="absolute left-3 top-3 rounded-full border border-[#ececec] bg-white/90 px-[9px] py-1 text-[11px] font-semibold tracking-[.06em] text-zinc-700">
            &apos;{alumnus.year.slice(2)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-[18px] pb-5 pt-[18px]">
        <p className={`${SERIF} mb-[7px] min-h-[19px] text-[13.5px] font-semibold text-yellow-600`}>
          {alumnus.role} · {alumnus.company}
        </p>
        <h3
          className={`${SERIF} m-0 text-[22px] font-semibold leading-[1.12] tracking-[-0.01em] text-neutral-900`}
        >
          {alumnus.name}
        </h3>
        {alumnus.program && (
          <p className="mt-2 text-[13px] leading-[1.45] text-zinc-500">{alumnus.program}</p>
        )}
        <div className="mt-auto flex items-center gap-[7px] pt-4">
          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
          <span className="text-[12.5px] font-medium text-zinc-600">{alumnus.team}</span>
        </div>
      </div>
    </button>
  );
}
