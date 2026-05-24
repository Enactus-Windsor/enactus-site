import type { EnactusProject } from "@/types/enactus";

import ascentLogo from "@/assets/projectlogos/ascent.png";
import centsLogo from "@/assets/projectlogos/cents.png";
import mycovoltLogo from "@/assets/projectlogos/mycovolt.png";
import reedifyLogo from "@/assets/projectlogos/reedify.png";
import fishLogo from "@/assets/projectlogos/fishLogo.png";
import secRiseLogo from "@/assets/projectlogos/secRiseLogo.jpeg";

export async function fetchEnactusProjects(): Promise<EnactusProject[]> {
  return [
    {
      name: "Ascent",
      banner: ascentLogo,
      departmentLead: "Karlie Bula",
      summary:
        "Supports students in launching eco-friendly micro-businesses through mentorship and hands-on learning.",
      overview:
        "Ascent builds on the foundation of past youth entrepreneurship initiatives together with the best of Youthrive and Youtopia to support students with real-world business experiences. Through mentorship and hands-on learning, the team helps students start eco-friendly micro-businesses while building financial literacy, leadership skills, and sustainable habits.",
      members: [
        {
          name: "Karlie Bula",
          role: "Department Lead",
          department: "Ascent",
        },
      ],
    },
    {
      name: "CentsAbility",
      banner: centsLogo,
      departmentLead: "Matthew Najem",
      summary:
        "Brings financial literacy directly into transitional housing and community homes across Ontario.",
      overview:
        "CentsAbility is a community-embedded financial literacy initiative that delivers essential money management skills directly into transitional housing and community homes across Ontario. The program empowers individuals of all ages from youth to adults with the tools to take control of their financial futures, right where they live. CentsAbility fosters trust and accessibility while helping underserved communities navigate financial challenges with confidence by meeting them where they are, both physically and financially.",
      members: [
        {
          name: "Matthew Najem",
          role: "Department Lead",
          department: "CentsAbility",
        },
      ],
    },
    {
      name: "100% Fish ",
      banner: fishLogo,
      departmentLead: "Amal Jose",
      summary:
        "Turns discarded fish parts into sustainable, nutritious dog treats to reduce waste and support eco-friendly practices.",
      overview:
        "100% Fish  takes fish parts that go to waste and turns them into healthy, sustainable dog treats. The team’s goal is to reduce landfill waste, support eco-friendly practices, and help dogs live longer, healthier lives with better nutrition.",
      members: [
        {
          name: "Amal Jose",
          role: "Department Lead",
          department: "100% Fish ",
        },
      ],
    },
    {
      name: "MycoVolt",
      banner: mycovoltLogo,
      departmentLead: "Jad El Hajj & Nash Wilkins",
      summary:
        "Explores mushroom-based, eco-friendly battery alternatives using fungal root structures.",
      overview:
        "MycoVolt explores the potential of mushrooms in the development of sustainable energy solutions. By using the root structure of fungi, the team is researching how organic materials can be used to create eco-friendly batteries. This innovative approach reduces reliance on harmful chemicals and metals and also opens the door for greener, biodegradable alternatives in energy storage.",
      members: [
        { name: "Jad El Hajj", role: "Co-Lead", department: "MycoVolt" },
        { name: "Nash Wilkins", role: "Co-Lead", department: "MycoVolt" },
      ],
    },
    {
      name: "REEDify",
      banner: reedifyLogo,
      departmentLead: "Anthony vanier",
      summary:
        "Transforms invasive reeds into useful products while supporting Indigenous communities.",
      overview:
        "REEDify is all about creating impact through resourcefulness and connection. The team turns invasive reed species into useful products like bug repellents and fire logs, reducing environmental harm while supporting Indigenous communities like the Caldwell First Nation. With a focus on sustainability and social responsibility.",
      members: [
        {
          name: "Anthony Vanier",
          role: "Department Lead",
          department: "REEDify",
        },
      ],
    },
    {
      name: "Second Rise",
      banner: secRiseLogo,
      departmentLead: "Avery Baker & Madison Madore",
      summary:
        "Reduces opioid-related overdoses through Narcan distribution and overdose response training.",
      overview:
        "Second Rise works to reduce opioid-related overdoses in Windsor-Essex by distributing Narcan kits and providing overdose response training. The team aims to equip over 200 community members with life-saving skills and expand local preparedness through workshops and outreach. By combining access and education, Second Rise empowers individuals to prevent tragedies and strengthen community safety.",
      members: [
        { name: "Avery Baker", role: "Co-Lead", department: "Second Rise" },
        { name: "Madison Madore", role: "Co-Lead", department: "Second Rise" },
      ],
    },
  ];
}
