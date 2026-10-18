import type { EnactusTeam } from "@/types/enactus";

const teamBanner = "/images/test2.svg";

export async function fetchEnactusTeams(): Promise<EnactusTeam[]> {
  return [
    {
      name: "Board of Directors",
      banner: teamBanner,
      members: [
        {
          name: "Kent Walker",
          role: "Faculty Advisor",
          image: "/images/pfp/board_members/Kent_Walker.png",
        },
        {
          name: "Amanda Lim",
          role: "Board Member",
          image: "/images/pfp/board_members/Amanda_Lim.png",
        },
        {
          name: "Jim Marsh",
          role: "Board Member",
          image: "/images/pfp/board_members/Jim_Marsh.png",
        },
        {
          name: "Josianne Marsan",
          role: "Board Member",
          image: "/images/pfp/board_members/Josianne_Marsan.png",
        },
        {
          name: "Kevin Hamilton",
          role: "Board Member",
          image: "/images/pfp/board_members/Kevin_Hamilton.png",
        },
        {
          name: "Paul Schlosser",
          role: "Board Member",
          image: "/images/pfp/board_members/Paul_Schlosser.png",
        },
      ],
    },
    {
      name: "Executive Team",
      banner: teamBanner,
      members: [
        {
          name: "Andrew Booth",
          role: "President",
          linkedin: "https://www.linkedin.com/in/andrewbooth-/",
          image: "/images/pfp/andrewbooth.jpg",
        },
        {
          name: "Matthew Tracey",
          role: "Vice President",
          linkedin: "https://www.linkedin.com/in/matthew-tracey-6792052bb/",
          image: "/images/pfp/MatthewTracey.jpg",
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
          name: "Baran Ghasroddashti",
          role: "Vice President",
          department: "Enterprise Development",
          linkedin: "https://www.linkedin.com/in/baran-ghasroddashti-9824a9385/",
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
          name: "Helen Yousif",
          role: "Executive Assistant",
          linkedin: "https://www.linkedin.com/in/helen-yousif-061230338/",
          image: "/images/pfp/HelenYousif.jpeg",
        },
        {
          name: "Harris Sami",
          role: "Executive Assistant",
          image: "/images/pfp/HarrisSami.jpg",
        },
      ],
    },
    {
      name: "Project Managers",
      banner: teamBanner,
      members: [
        {
          name: "Karlie Bula",
          role: "Project Manager",
          department: "Ascent",
          linkedin: "https://www.linkedin.com/in/karlie-bula-4a7332343/",
          image: "/images/pfp/KarlieBula.jpg",
        },
        {
          name: "Andrew Booth",
          role: "Project Manager",
          department: "100% Fish",
          linkedin: "https://www.linkedin.com/in/andrewbooth-/",
          image: "/images/pfp/andrewbooth.jpg",
        },
        {
          name: "Ryan Gadoury",
          role: "Founder",
          department: "Crisp Labs",
          linkedin: "https://www.linkedin.com/in/ryan-gadoury-1857b2328/",
          image: "/images/pfp/RyanGadoury.jpg",
        },
        {
          name: "Nash Wilkins",
          role: "Project Manager",
          department: "MycoVolt",
          linkedin: "https://www.linkedin.com/in/nash-wilkins/",
          image: "/images/pfp/NashWilkins.jpg",
        },
        {
          name: "Massimo Gualtieri",
          role: "Project Manager",
          department: "REEDify",
          image: "/images/pfp/MassimoGualtieri.jpg",
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
          name: "Lukas Waller",
          role: "Founder",
          department: "Node3",
        },
      ],
    },
    {
      name: "Department Leads",
      banner: teamBanner,
      members: [
        {
          name: "Dhruv Sapra",
          role: "Department Lead",
          department: "Spark",
          linkedin: "https://www.linkedin.com/in/dhruv-sapra-3890211bb/",
          image: "/images/pfp/DhruvSapra.jpg",
        },
      ],
    },
  ];
}
