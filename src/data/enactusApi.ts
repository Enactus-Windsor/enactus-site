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
          name: "Karlie Bula",
          role: "Department Lead",
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
          name: "Trevor Kloppenburg ",
          role: "Project Manager",
          department: "100% Fish ",
          linkedin: "https://www.linkedin.com/in/trevor-kloppenburg/",
          image: "",
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
          name: "Ryan Gadoury",
          role: "Founder",
          department: "Crisp Labs",
          linkedin: "https://www.linkedin.com/in/ryan-gadoury-1857b2328/",
          image: "/images/pfp/RyanGadoury.jpg",
        },
        {
          name: "Baran Ghasroddashti",
          role: "Vice President",
          department: "Enterprise Development",
          linkedin:
            "https://www.linkedin.com/in/baran-ghasroddashti-9824a9385/",
          image: "/images/pfp/BaranGhasroddashti.jpg",
        },
        {
          name: "Cameron Balga",
          role: "Vice President",
          department: "Finance",
          linkedin: "https://www.linkedin.com/in/cameron-balga-89b8b92a9/",
          image: "/images/pfp/CameronBalga.jpg",
        },
        {
          name: "Layla Ghanem",
          role: "Vice President",
          department: "Human Resources",
          linkedin: "https://www.linkedin.com/in/layla-ayoub-ghanem-1a3b20346/",
          image: "/images/pfp/LaylaGhanem.jpg",
        },
        {
          name: "Nash Wilkins",
          role: "Co-Project Manager",
          department: "MycoVolt",
          linkedin: "https://www.linkedin.com/in/nash-wilkins/",
          image: "/images/pfp/NashWilkins.jpg",
        },
        {
          name: "Jad El Hajj",
          role: "Co-Project Manager",
          department: "MycoVolt",
          linkedin: "https://www.linkedin.com/in/jad-el-hajj-ab1133287/",
          image: "",
        },
        {
          name: "Anthony Vanier",
          role: "Founder",
          department: "Reedify",
          linkedin: "https://www.linkedin.com/in/anthony-vanier/",
          image: "/images/pfp/AnthonyVanier.jpg",
        },
        {
          name: "Madison Madore",
          role: "Co-Founder",
          department: "Second Rise",
          linkedin: "https://www.linkedin.com/in/madison-madore-9151522aa/",
          image: "/images/pfp/MadisonMadore.jpg",
        },
        {
          name: "Avery Baker",
          role: "Co-Founder",
          department: "Second Rise",
          linkedin: "https://www.linkedin.com/in/avery-baker-763108341/",
          image: "/images/pfp/AveryBaker.jpg",
        },
        {
          name: "Dhruv Sapra",
          role: "Project Manager",
          department: "Second Rise",
          linkedin: "https://www.linkedin.com/in/dhruv-sapra-3890211bb/",
          image: "/images/pfp/DhruvSapra.jpg",
        },
      ],
    },
  ];
}
