// src/data/enactusApi.ts
import type { EnactusTeam } from "@/types/enactus";

export async function fetchEnactusTeams(): Promise<EnactusTeam[]> {
  return [
    {
      name: "Executives",
      banner: "/images/test2.svg",
      members: [
        {
          name: "Andrew Booth",
          role: "President",
          department: "",
          linkedin: "https://www.linkedin.com/in/andrewbooth-/",
          image: "/images/pfp/andrewbooth.jpg",
        },
        {
          name: "Matthew Tracey",
          role: "Vice President",
          department: "",
          linkedin: "https://www.linkedin.com/in/matthew-tracey-6792052bb/",
          image: "/images/pfp/MatthewTracey.jpg", //needed
        },
        {
          name: "Helen Yousif",
          role: "Executive Assistant",
          department: "",
          linkedin: "https://www.linkedin.com/in/helen-yousif-061230338/",
          image: "/images/pfp/HelenYousif.jpeg",
        },
        {
          name: "Bella Cope",
          role: "Executive Assistant",
          department: "",
          linkedin: "https://www.linkedin.com/in/bella-cope-939703339/",
          image: "/images/pfp/BellaCope.jpg",
        },
        {
          name: "Karlie Bula",
          role: "Founder",
          department: "Ascent",
          linkedin: "https://www.linkedin.com/in/karlie-bula-4a7332343/",
          image: "/images/pfp/KarlieBula.jpg",
        },
        {
          name: "Matthew Najem",
          role: "Founder",
          department: "CentsAbility",
          linkedin: "https://www.linkedin.com/in/matthew-najem-26137a329/",
          image: "/images/pfp/MatthewNajem.jpg",
        },
        {
          name: "Amal Jose",
          role: "Founder",
          department: "100% Fish ",
          linkedin: "https://www.linkedin.com/in/amalljose/",
          image: "/images/pfp/AmalJose.jpg",
        },
        {
          name: "Anita Jafari",
          role: "Vice President",
          department: "Communications",
          linkedin: "https://www.linkedin.com/in/anahita-jafari222/",
          image: "/images/pfp/AnitaJafari.jpeg",
        },
        {
          name: "Sean Clarke",
          role: "Vice President",
          department: "Corporate Relations",
          linkedin: "https://www.linkedin.com/in/sean-clarke-529294251/",
          image: "/images/pfp/SeanClarke.jpg",
        },
        {
          name: "Jana Abou Hassan",
          role: "Vice President",
          department: "Events and Logistics",
          linkedin: "https://www.linkedin.com/in/jana-abou-hassan-ab19082b9/",
          image: "/images/pfp/Jana.jpg",
        },
        {
          name: "Baran Ghasroddashti",
          role: "Vice President",
          department: "Enterprise Development",
          linkedin:
            "https://www.linkedin.com/in/baran-ghasroddashti-9824a9385/",
          image: "/images/pfp/BaranGhasroddashti.jpg",
        },
        // {
        //   name: "Connor Gombar",
        //   role: "Vice President",
        //   department: "Finance",
        //   linkedin: "https://www.linkedin.com/in/connor-gombar/",
        //   image: "/images/pfp/ConnorGombar.jpg",
        // },
        {
          name: "Evan Bryan",
          role: "Vice President",
          department: "Human Resources",
          linkedin: "https://www.linkedin.com/in/evan-bryan-237b66297/",
          image: "/images/pfp/EvanBryan.jpeg",
        },
        {
          name: "Mujtaba Hammoud",
          role: "Vice President",
          department: "Legal and Compliance",
          linkedin: "https://www.linkedin.com/in/mujtaba-hammoud-9095412a9/",
          image: "/images/pfp/MujtabaHammoud.jpg",
        },
        {
          name: "Avery Baker",
          role: "Vice President ",
          department: "Marketing",
          linkedin: "https://www.linkedin.com/in/avery-baker-763108341/",
          image: "/images/pfp/AveryBaker.jpg",
        },
        {
          name: "Harris Sami",
          role: "Founder",
          department: "Reedify",
          linkedin: "https://www.linkedin.com/in/harris-sami-a75b99355/",
          image: "/images/pfp/HarrisSami.jpg",
        },
        {
          name: "Layla Ayoub Ghanem",
          role: "Founder",
          department: "MyColite",
          linkedin: "https://www.linkedin.com/in/layla-ayoub-ghanem-1a3b20346/",
          image: "/images/pfp/LaylaGhanem.jpg",
        },
        {
          name: "Hilary Quach",
          role: "Founder",
          department: "MycoVolt",
          linkedin: "https://www.linkedin.com/in/hilary-quach/",
          image: "/images/pfp/HillaryQuach.jpg",
        },
        {
          name: "Aneesha Bhullar",
          role: "Co-Founder",
          department: "Second Rise",
          linkedin: "https://www.linkedin.com/in/aneeshabhullar/",
          image: "/images/pfp/AneeshaBhullar.jpg",
        },
        {
          name: "Madison Madore",
          role: "Co-Founder",
          department: "Second Rise",
          linkedin: "https://www.linkedin.com/in/madison-madore-9151522aa/",
          image: "/images/pfp/MadisonMadore.jpg",
        },
      ],
    },
  ];
}
