export type Language = {
  name: string;
  slug: string;
  tagline: string;
  logo: string;
  description: string;
  website?: string;
  discord?: string;
};

export const languages: Language[] = [
  {
    name: "W++",
    slug: "wpp",
    tagline: "A chaotic Python-style scripting language for .NET",
    logo: "/logos/wpp.png",
    description:
      "W++ is a chaotic scripting language for .NET built for memes, revenge, and everything in between. Powered by sloths.",
    website: "https://wplusplus.org",
    discord: "https://discord.gg/a37hQPPDrp",
  },
  {
    name: "X3",
    slug: "x3",
    tagline: "No Clue lol",
    logo: "/logos/x3.png",
    description:
      "X3 is an experimental hybrid language — maybe functional, maybe imperative, definitely mysterious.",
    website: "https://x3documentation.neocities.org/",
    discord: "https://discord.gg/rtcBjz5xgc",
  },
  {
    name: "Ranger",
    slug: "ranger",
    tagline: "No clue either",
    logo: "/logos/ranger.png",
    description:
      "Ranger is a high-level language that does weird stuff with ASTs. We think. Ask its creator.",
  },
  {
    name: "ROS",
    slug: "ros",
    tagline: "at least we are not managing memory",
    logo: "/logos/ros.webp",
    description:
      "ROS (Reactive Object Script) simplifies async patterns and pretends memory management doesn’t exist.",
  },
  {
    name: "Citron",
    slug: "citron",
    tagline: "Scripting like a pro in turbowarp",
    logo: "/logos/citron.png",
    description:
      "Citron lets you code like a Scratch wizard but with grown-up power. It’s citrusy and chaotic.",
    website: "https://scratch.mit.edu/projects/1202695164",
    discord: "https://discord.gg/gY9JMQYBg7",
  },
  {
    name: "indX",
    slug: "indx",
    tagline: "idk",
    logo: "/logos/indx.png",
    description:
      "indX is a minimalist experiment with indexes. Nobody knows what it really does, but it’s probably cool.",
    discord: "https://discord.gg/YJ3KTSfMHf",
  },
];
