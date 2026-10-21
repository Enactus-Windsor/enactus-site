import type { EnactusProject } from "@/types/enactus";

import ascentLogo from "@/assets/projectlogos/ascent.png";
import mycovoltLogo from "@/assets/projectlogos/mycovolt.png";
import reedifyLogo from "@/assets/projectlogos/reedify.png";
import fishLogo from "@/assets/projectlogos/fishLogo.png";
import secRiseLogo from "@/assets/projectlogos/secRiseLogo.jpeg";
import crispLabsLogo from "@/assets/projectlogos/CrispLabs.png";
import sparkLogo from "@/assets/projectlogos/SparkLogo.jpg";

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
          role: "CEO",
          department: "Ascent",
        },
      ],
    },
    {
      name: "Crisp Labs",
      banner: crispLabsLogo,
      departmentLead: "Ryan Gadoury",
      summary:
        "Upcycles rejected produce into business-ready ingredients that reduce food waste and create new value.",
      overview:
        "Crisp Labs is a produce upcycling and ingredient innovation venture focused on turning rejected agricultural produce into secondary products and ingredients. Instead of focusing only on direct-to-consumer snacks, the venture is exploring a B2B ingredient model where produce can be processed into powders, dehydrated ingredients, and other usable materials that can be sold to businesses.",
      members: [
        {
          name: "Ryan Gadoury",
          role: "Founder",
          department: "Crisp Labs",
        },
      ],
    },
    {
      name: "100% Fish",
      banner: fishLogo,
      departmentLead: "Andrew Booth",
      summary:
        "Turns discarded fish parts into sustainable, nutritious dog treats to reduce waste and support eco-friendly practices.",
      overview:
        "100% Fish takes fish parts that go to waste and turns them into healthy, sustainable dog treats. The team’s goal is to reduce landfill waste, support eco-friendly practices, and help dogs live longer, healthier lives with better nutrition.",
      members: [
        {
          name: "Andrew Booth",
          role: "CEO",
          department: "100% Fish",
        },
      ],
    },
    {
      name: "MycoVolt",
      banner: mycovoltLogo,
      departmentLead: "Nash Wilkins",
      summary:
        "Explores mushroom-based, eco-friendly battery alternatives using fungal root structures.",
      overview:
        "MycoVolt explores the potential of mushrooms in the development of sustainable energy solutions. By using the root structure of fungi, the team is researching how organic materials can be used to create eco-friendly batteries. This innovative approach reduces reliance on harmful chemicals and metals and also opens the door for greener, biodegradable alternatives in energy storage.",
      members: [
        { name: "Nash Wilkins", role: "CEO", department: "MycoVolt" },
      ],
    },
    {
      name: "Node3",
      departmentLead: "Lukas Waller",
      summary:
        "Helps greenhouse growers monitor sensor data and control their growing environments through customizable dashboards.",
      overview:
        "Node3 is a greenhouse management system built to store data and control systems throughout a greenhouse. Sensors send readings and receive commands through a database that stores each client's data and commands. A custom dashboard gives each client access to this information, helping growers understand their plants and the environments they grow in. The platform already includes tools for managing greenhouses while keeping a complete record of sensor data.",
      members: [
        { name: "Lukas Waller", role: "Founder", department: "Node3" },
      ],
    },
    {
      name: "REEDify",
      banner: reedifyLogo,
      departmentLead: "Massimo Gualtieri",
      summary:
        "Transforms invasive reeds into useful products while supporting Indigenous communities.",
      overview:
        "REEDify is all about creating impact through resourcefulness and connection. The team turns invasive reed species into useful products like bug repellents and fire logs, reducing environmental harm while supporting Indigenous communities like the Caldwell First Nation. With a focus on sustainability and social responsibility.",
      members: [
        {
          name: "Massimo Gualtieri",
          role: "CEO",
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
        { name: "Avery Baker", role: "Co-Founder", department: "Second Rise" },
        { name: "Madison Madore", role: "Co-Founder", department: "Second Rise" },
      ],
    },
    {
      name: "Spark",
      banner: sparkLogo,
      departmentLead: "Dhruv Sapra",
      summary:
        "Helps student founders build early-stage social ventures through mentorship and hands-on learning.",
      overview:
        "Spark empowers student founders to develop sustainable, community-focused initiatives through venture building, mentorship, and hands-on learning. The program helps transform early-stage ideas into impactful social enterprises that can be adopted and grown by Enactus Windsor teams.",
      members: [
        { name: "Dhruv Sapra", role: "Department Lead", department: "Spark" },
      ],
    },
  ];
}
