export type Language = {
  name: string;
  slug: string;
  tagline: string;
  logo: string;
  description: string;
  website?: string;
  discord?: string;
  github?: string;
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
    github: "https://github.com/sinisterMage/WPlusPlus",
  },
  {
    name: "X3",
    slug: "x3",
    tagline: "The only bug-free zone is your imagination. Good luck.",
    logo: "/logos/x3.png",
    description:
      "An easy to learn language for new developers! Held together by duct tape and prayers. And yes, it runs.",
    website: "https://x3documentation.neocities.org/",
    discord: "https://discord.gg/rtcBjz5xgc",
     github: "https://github.com/XFydro/x3",
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
      "ROS (Ruby on Spaces) simplifies its AST by a lot and pretends arguments and lists dont exist.",
      github: "https://github.com/Backmeet/ruby-on-spaces",
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
  {
    name: "Compact",
    slug: "compact",
    tagline: "Logic stripped to its bare operations.",
    logo: "logos/just-compact.png",
    description: "a minimalist language desgined for logic and idk what else to put xDDD"
  },
  {
    name: "ddeLang",
    slug: "ddelang",
    tagline: "Oh my Diamante",
    logo: "/logos/ddeLang.png",
    description: "A shiny programming language designed for building quick scripts with readable syntax.",
    discord: "https://discord.gg/jrwxVAsQDv",
    github: "https://github.com/ddededodediamante/ddehighlight"
  }
];
