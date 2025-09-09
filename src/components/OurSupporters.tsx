import Image, { StaticImageData } from "next/image";

interface OurSupportersProps {
  supporters: (string | StaticImageData)[];
}

export default function OurSupporters({ supporters }: OurSupportersProps) {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 pb-10">
        {supporters.map((supporter, i) => {
          const src = typeof supporter === "string" ? supporter : supporter.src;
          return (
            <div key={i} className="w-48 flex items-center justify-center">
              <Image
                src={src}
                alt={`Supporter ${i + 1}`}
                width={192}
                height={0}
                className="w-48 h-auto object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
