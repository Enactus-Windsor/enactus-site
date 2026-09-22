export type SpotlightAnswer = {
  question: string;
  answer: string[];
};

export type Alumnus = {
  slug: string;
  name: string;
  role: string;
  company: string;
  team: string;
  imageSrc: string;
  bio: string;
  quote: string;
  spotlight: SpotlightAnswer[];
  // Not yet confirmed for these alumni; the UI hides each field when absent.
  year?: string;
  program?: string;
  linkedin?: string;
};

const QUESTIONS = [
  "What are you currently doing professionally?",
  "What role(s) or project(s) were you involved in during your time with Enactus Windsor?",
  "What was your favourite memory or moment from Enactus?",
  "What skills or experiences from Enactus have stayed with you the most since graduating?",
  "Looking back, what did Enactus mean to you personally?",
] as const;

export const alumni: Alumnus[] = [
  {
    slug: "jacob-arcas",
    name: "Jacob Arcas",
    role: "Senior Relationship Manager",
    company: "Export Development Canada",
    team: "Youthrive",
    imageSrc: "/images/alumni/jacob-arcas.jpg",
    bio: "Jacob works in Trade Finance as a Senior Relationship Manager with Export Development Canada (EDC), supporting Canadian businesses with their growth and international expansion strategies. At Enactus Windsor he served as a Youthrive Mentor, VP of Media and Technology, and Co-President, and presented on stage in the final four with the 2015 nationals team. He remains involved through the Enactus Windsor Alumni Advisory Board.",
    quote:
      "It showed me the power of combining business with purpose and creating meaningful impact within the community.",
    spotlight: [
      {
        question: QUESTIONS[0],
        answer: [
          "I currently work in Trade Finance as a Senior Relationship Manager with Export Development Canada (EDC), where I support Canadian businesses with their growth and international expansion strategies. Prior to joining EDC, I spent several years in commercial and business banking, leading teams and helping entrepreneurs access financing and achieve their business goals.",
        ],
      },
      {
        question: QUESTIONS[1],
        answer: [
          "During my time with Enactus Windsor, I served as a Youthrive Mentor, VP of Media and Technology, and Co-President helping lead the organization and support projects. I also had the opportunity to present on stage in the final four with our nationals presentation team in 2015. In recent years, I remain involved through the Enactus Windsor Alumni Advisory Board.",
        ],
      },
      {
        question: QUESTIONS[2],
        answer: [
          "My favourite memories came from preparing for regional and national competitions. There was something special about seeing a team of students work toward a common goal, overcome challenges together, and ultimately present the impact of our projects on a larger stage. The friendships and experiences built during those moments are still some of my strongest university memories, truly wouldn’t be where I am today without those late night practices, and building projects that created real impact.",
        ],
      },
      {
        question: QUESTIONS[3],
        answer: [
          "Enactus helped develop my leadership, communication, and problem-solving skills. It taught me how to work with diverse teams, manage projects, build relationships, and present ideas confidently. These are skills that continue to be valuable in my professional career today.",
        ],
      },
      {
        question: QUESTIONS[4],
        answer: [
          "Enactus was one of the most impactful parts of my university experience. It gave me opportunities to grow as a leader, challenge myself outside the classroom, and build lifelong friendships. More importantly, it showed me the power of combining business with purpose and creating meaningful impact within the community. The lessons and relationships from Enactus continue to influence both my personal and professional life today.",
        ],
      },
    ],
  },
  {
    slug: "kevin-hamilton",
    name: "Kevin Hamilton",
    role: "Senior Relationship Manager",
    company: "TD Commercial Banking",
    team: "CityThrive",
    imageSrc: "/images/alumni/kevin-hamilton.jpg",
    bio: "Kevin is a Senior Relationship Manager in Commercial Banking at TD, working with Canadian companies as they grow and support their communities. At Enactus Windsor he was a CityThrive Mentor, started his own project helping at-risk youth explore entrepreneurship, presented at Regional and National competitions, and travelled to Beijing for the 2014 Enactus World Cup. Today he serves as Board Chair of the Enactus Canada Alumni Advisory Board.",
    quote:
      "Enactus was so formative to me from day one, as it was one of the first places where I felt like you could really control your own outcomes.",
    spotlight: [
      {
        question: QUESTIONS[0],
        answer: [
          "Currently, I’m working in Commercial Banking at TD as a Senior Relationship Manager. This role serves the bank’s up market clients in the region and allows me to work with Canadian companies as they grow and support our communities. I’m lucky to work every day with the best team around to do all that we can to be a strong partner in their success.",
        ],
      },
      {
        question: QUESTIONS[1],
        answer: [
          "I started with Enactus late in my undergrad - not until the end of my 3rd year. Though in that time, I worked as a CityThrive Mentor, supporting individuals on social assistance, before starting my own project working with at-risk youth in our community, providing resources and funding for them to explore entrepreneurship as a viable career option. I was lucky enough to then represent Enactus Windsor as a presenter at competitions, where our teams routinely placed at the Regional and National exhibitions.",
          "After graduation, I’ve enjoyed staying involved in both the Local and National Enactus ecosystem, through my time as a Faculty Advisor with Enactus St. Clair College, an Enactus Windsor Alumni Board member, and Regional/National Competition judge. Currently, I also serve as the Board Chair for the Enactus Canada Alumni Advisory board, serving the 30,000+ Enactus Canada Alumni Coast to Coast. I get to work with people way smarter and more talented than me, and I couldn’t be luckier to try and do a small part to grow this organization and give today’s students the same incredible experience that I had.",
        ],
      },
      {
        question: QUESTIONS[2],
        answer: [
          "Enactus is where I met some of my closest friends, and was introduced to so many people across the globe that shared the same passion and values that I did. Coming from a non-business undergraduate program, I had no idea this type of organization existed, and as soon as I joined, I knew I had found my people. One highlight as a student was travelling to Beijing for the 2014 Enactus World Cup, which brought together thousands of students worldwide, working and competing to make sustainable impact through business creation, while having a lot of fun along the way.",
        ],
      },
      {
        question: QUESTIONS[3],
        answer: [
          "One thing that I’ve found that Enactus prepared you for more than we probably realized at the time, was to actually be prepared when you show up to a meeting, and what that preparation looked like. When you run a project, pitch to investors, or present at competitions, you have to be an expert on the business model, the partnerships, the timelines, the future plans, etc. So it was built into you to dig deeper and make sure you’re as prepped as can be, and because of that, you gained these awesome habits to leave no stone unturned. And with that preparation came confidence that you belong in the room and can be relied upon to do good work. All of this is still a huge part of my day to day, and was especially valuable as a younger professional trying to gain credibility in the space. It’s 100% on you whether you show up prepared.",
        ],
      },
      {
        question: QUESTIONS[4],
        answer: [
          "Enactus was so formative to me from day one, as it was one of the first places where I felt like you could really control your own outcomes. Your success, and therefore your impact on thousands in your community and beyond, was dictated by how hard you worked, how well you worked with people, and how big your vision was. No one could limit what you wanted to create, and you had selfless teammates and friends ready to be there to push you forward and celebrate that success when it arrived. It taught me the culture that I work best in, as well as the habits which guide me still today.",
        ],
      },
    ],
  },
];
