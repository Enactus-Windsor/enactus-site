// src/data/enactusApi.ts
import type { EnactusTeam } from "@/types/enactus";

export async function fetchEnactusTeams(): Promise<EnactusTeam[]> {
  return [
    {
      name: "Executives",
      banner: "/images/test.jpg",
      members: [
        {
          name: "Landon Hadre",
          role: "Tech Lead",
          department: "Acsent",
          major: "Computer Science",
          linkedin: "https://www.linkedin.com/in/landonhadre",
          image: "/images/pfp/landonhadre.jpg",
        },
      ],
    },
    {
      name: "Whatever else",
      banner: "/images/test.jpg",
      members: [
        {
          name: "Landon Hadre",
          role: "Tech Lead",
          department: "Acsent",
          major: "Computer Science",
          linkedin: "https://www.linkedin.com/in/landonhadre",
          image: "/images/pfp/landonhadre.jpg",
        },
                {
          name: "Landon Hadre",
          role: "Tech Lead",
          department: "Acsent",
          major: "Computer Science",
          linkedin: "https://www.linkedin.com/in/landonhadre",
          image: "/images/pfp/landonhadre.jpg",
        },
                {
          name: "Landon Hadre",
          role: "Tech Lead",
          department: "Acsent",
          major: "Computer Science",
          linkedin: "https://www.linkedin.com/in/landonhadre",
          image: "/images/pfp/landonhadre.jpg",
        },
                {
          name: "Landon Hadre",
          role: "Tech Lead",
          department: "Acsent",
          major: "Computer Science",
          linkedin: "https://www.linkedin.com/in/landonhadre",
          image: "/images/pfp/landonhadre.jpg",
        },
                {
          name: "Landon Hadre",
          role: "Tech Lead",
          department: "Acsent",
          major: "Computer Science",
          linkedin: "https://www.linkedin.com/in/landonhadre",
          image: "/images/pfp/landonhadre.jpg",
        },
      ],
    },
    
  ];
}
