import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  backgroundImage: string | StaticImageData; // Accepts URL or imported image
  logo?: string | StaticImageData;
  title: string;
  description: string;
}

export default function ProjectCard({ backgroundImage, logo, title, description }: ProjectCardProps) {
  // Convert imported image object (StaticImageData) to string if needed
  const bgSrc = typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src;
  const logoSrc = typeof logo === "string" ? logo : logo?.src;

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
  <div className="relative z-10 p-6 py-9 flex flex-col md:flex-row md:items-center">
        
        {/* Left side: Logo */}
        {logoSrc && (
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <Image src={logoSrc} alt={title} width={120} height={120} />
          </div>
        )}

        {/* Right side: Text */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
