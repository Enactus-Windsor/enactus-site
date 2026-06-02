import type { Metadata } from "next";
import Image from "next/image";
import { Archivo } from "next/font/google";

type Story = {
  outletName: string;
  headline: string;
  publicationDate: string;
  summary: string;
  href: string;
  buttonLabel: string;
  imageSrc: string;
};

const INTRO_TEXT =
  "The impactful work of Enactus Windsor's student leaders and their ventures often garners attention from local and national media. Below are some of the stories highlighting our journey and our commitment to creating a better, more sustainable world through entrepreneurial action.";

const HERO_IMAGE = "/images/news/newsbackground.jpg";

export const metadata: Metadata = {
  title: "In the News",
};

const headlineFont = Archivo({
  subsets: ["latin"],
  weight: ["800"],
});

const stories: Story[] = [
  {
    outletName: "University of Windsor",
    headline: "Green innovation puts Enactus Windsor on national map",
    publicationDate: "April 23, 2026",
    summary:
      "Enactus Windsor achieved top results at the Enactus Canada Central Canada Regional Exposition, becoming the only institution in Central Canada and one of just three nationally to place in all four Impact Challenges. The team earned first-place finishes for 100% Fish, an initiative transforming fish-processing byproducts into sustainable products, and REEDify, which repurposes invasive phragmites into environmentally beneficial products. Following their regional success, both projects will advance to the Enactus Canada National Exposition in Montreal.",
    href: "https://www.uwindsor.ca/news/2026-04-23/green-innovation-puts-enactus-windsor-national-map",
    buttonLabel: "Read More",
    imageSrc: "/images/news/apr24-2026.jpg",
  },
  {
    outletName: "CBC News",
    headline: "These university students are turning fish guts into dog treats",
    publicationDate: "November 24, 2025",
    summary:
      "Enactus Windsor students collaborated with a local fishery and the Great Lakes Institute of Environmental Research to transform Lake Erie fish waste into sustainable dog treats. This interdisciplinary project aims to divert thousands of kilograms of byproduct from landfills while creating a high-quality, eco-friendly product for pet owners.",
    href: "https://www.cbc.ca/news/canada/windsor/university-students-fish-waste-dog-food-9.6990327",
    buttonLabel: "Read More",
    imageSrc: "/images/news/nov24-2025.jpg",
  },
  {
    outletName: "University of Windsor",
    headline: "UWindsor students mentor next generation of entrepreneurs",
    publicationDate: "November 18, 2025",
    summary:
      "Through the Ascent program, Enactus Windsor mentors empower youth in Grades 7 to 12 to launch their own eco-friendly micro-businesses. By bridging the gap in local business education, the initiative has reached over 10,000 participants, fostering financial literacy and sustainable innovation across the Windsor-Essex region.",
    href: "https://www.uwindsor.ca/news/2025-11-12/uwindsor-students-mentor-next-generation-entrepreneurs",
    buttonLabel: "Read More",
    imageSrc: "/images/news/nov18-2025.jpg",
  },
  {
    outletName: "CTV News",
    headline:
      "‘Why not me?’: University students tackle Windsor’s opioid crisis",
    publicationDate: "November 12, 2025",
    summary:
      "Enactus Windsor is addressing the local opioid crisis through Second Rise, a project that combines city-wide naloxone training with a specialized employment program for recovering addicts. By partnering with the House of Sophrosyne and local authorities, the initiative focuses on reducing the stigma surrounding substance use while providing individuals with the practical tools and opportunities needed to re-enter the workforce",
    href: "https://www.ctvnews.ca/windsor/article/why-not-me-university-students-tackle-windsors-opioid-crisis/",
    buttonLabel: "Watch Video",
    imageSrc: "/images/news/nov12-2025.jpg",
  },
  {
    outletName: "University of Windsor",
    headline: "Youth Entrepreneurs Take Over UWindsor Campus for Market Day",
    publicationDate: "November 7, 2025",
    summary:
      "Enactus Windsor’s Ascent program transformed the University of Windsor into a vibrant marketplace where local grade school and high school students sold sustainable, handmade goods to the public. This Market Day event served as the hands-on culmination of an eight-week curriculum designed to provide youth with essential experiential learning in financial literacy and entrepreneurship.",
    href: "https://www.uwindsor.ca/news/2025-11-07/youth-entrepreneurs-take-over-uwindsor-campus-market-day",
    buttonLabel: "Read More",
    imageSrc: "/images/news/nov7-2025.jpg",
  },
  {
    outletName: "University of Windsor",
    headline: "Enactus Windsor earns two awards in regional competition",
    publicationDate: "April 2, 2025",
    summary:
      "Enactus Windsor joined students from across Central Canada in Mississauga to present innovative social, environmental, and entrepreneurial initiatives developed to address community needs. The team earned first runner-up for Youtopia, a student-led educational program that has helped over 600 students develop financial and entrepreneurial skills, and second runner-up for Youthrive, an initiative mentoring students through launching their own micro-businesses. Following their success at regionals, the team will advance to the Enactus Canada National Exposition in May.",
    href: "https://www.uwindsor.ca/dailynews/2025-04-01/enactus-windsor-earns-two-awards-regional-competition",
    buttonLabel: "Read More",
    imageSrc: "/images/news/apr2-2025.jpg",
  },
];

function StoryCard({
  outletName,
  headline,
  publicationDate,
  summary,
  href,
  buttonLabel,
  imageSrc,
}: Story) {
  const isExternal = href.startsWith("http");

  return (
    <article className="flex h-full flex-col bg-white p-4 shadow-md sm:p-5">
      <div className="relative mb-4 h-52 w-full bg-slate-100">
        <Image
          src={imageSrc}
          alt={headline}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
        {outletName}
      </p>
      <h3 className="mt-2 text-xl font-bold leading-tight text-slate-900">
        {headline}
      </h3>
      <p className="mt-2 text-sm font-semibold text-slate-700">
        Publication Date: {publicationDate}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{summary}</p>

      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="mt-6 inline-flex w-fit items-center justify-center bg-[rgba(255,196,0,0.9)] px-6 py-3 text-base font-semibold text-black shadow-sm transition hover:brightness-95"
      >
        {buttonLabel}
      </a>
    </article>
  );
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative isolate flex min-h-[74vh] items-end overflow-hidden sm:min-h-[82vh]">
        <div className="absolute inset-0 -z-10">
          <Image
            src={HERO_IMAGE}
            alt="In the News hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 brightness-[0.82]"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-36 text-center text-white sm:px-6 sm:pb-14 sm:pt-44">
          <h1
            className={`${headlineFont.className} text-5xl font-extrabold leading-none tracking-tight text-[rgba(255,196,0,0.9)] [text-shadow:0_4px_18px_rgba(0,0,0,0.55)] sm:text-6xl md:text-8xl`}
          >
            Projects in the Press
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-white/95 [text-shadow:0_2px_10px_rgba(0,0,0,0.5)] sm:text-lg">
            {INTRO_TEXT}
          </p>
        </div>
      </section>

      <section className="-mt-px bg-[rgba(255,196,0,0.9)] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => (
              <StoryCard
                key={`${story.outletName}-${story.headline}`}
                {...story}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
