import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  valorem,
  atlas,
  agency,
  roblox,
  duckpin,
  threejs,
  solidity,
  python,
  ethers,
  web3,
  vercel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "JavaScript / TypeScript",
    icon: backend,
  },
  {
    title: "Node / Express",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "vercel",
    icon: vercel,
  },
  {
    name: "ethers",
    icon: ethers,
  },
  {
    name: "web3",
    icon: web3,
  },
];

const experiences = [
  {
    title: "Lead Solidity Developer",
    company_name: "AdValorem Foundation",
    icon: valorem,
    iconBg: "#D3D3D3",
    date: "Feburary 2022 - June 2022",
    points: [
      "Led blockchain development as the project lead, overseeing the entire lifecycle of smart contract development.",
      "Utilized the Hardhat framework to design, craft, and thoroughly test the NFT marketplace smart contract.",
      "Aimed to facilitate the adoption of NFTs in customer loyalty programs for small businesses.",
      "Successfully deployed the tested smart contract to the Polygon mainnet, ensuring operational readiness.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Atlas CORP",
    icon: atlas,
    iconBg: "#FFFFFF",
    date: "Jun 2022 - Nov 2023",
    points: [
      "As a full-stack developer at Atlas Corp, I play a pivotal role in production support, troubleshooting issues, fixing bugs, and implementing enhancements based on client feedback, ensuring optimal performance and user satisfaction.",
      "Contributed to the delivery of applications for high-profile clients like USGA, Bulova, NFL, Decentraland, MillerLite, DAZN, Jägermeister, demonstrating technical versatility to meet diverse client needs with a broad tech stack.",
      "Comprehensive technical skill set covers decentralized application development using Solidity, front-end engineering with React/Next.js, TypeScript, JavaScript, Tailwind CSS for design, and Framer Motion for sophisticated animations.",
      "Proficient in hosting and managing applications using Vercel for high performance, with additional expertise in DigitalOcean cloud services, enhancing the team's capability to deliver scalable and resilient cloud-based solutions. Additionally, adept at leveraging AI and ChatGPT technologies for streamlined troubleshooting and innovation, ensuring a competitive edge in technology adaptation and productivity.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Agency Portfolio",
    description:
      "Built for Atlas CORP, this app harnesses Next.js for SSR and SEO benefits, TypeScript for type-safe code, Tailwind CSS for adaptive UI, Framer Motion for engaging animations, Vercel for hosting, and with HubSpot integration for seamless email marketing capture, delivering a robust and interactive experience that's as performant as it is visually appealing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: agency,
    source_code_link: "https://atlas-corp-website.vercel.app/",
  },
  {
    name: "Duckpin Bowling",
    description:
      "The Detroit Duckpin Bowling site, crafted for a local bowling outfit, was built using React, TypeScript, and Tailwind CSS. The integration of the react-spring library lends a fluid, animated touch to the interface, enabling a lively user engagement as they explore what the venue has to offer.",

    tags: [
      {
        name: "gatsbyjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: duckpin,
    source_code_link: "https://detroitduckpin.com",
  },
  {
    name: "Roblox x Web3",
    description:
      "A Next.js platform where users link their Roblox accounts to Ethereum wallets, enabling devs to create token-gated experiences in Roblox. Built with TypeScript, Tailwind CSS, and Framer Motion, it features HubSpot integration for marketing engagement and hosted on Vercel.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: roblox,
    source_code_link: "https://roblox-x-web3.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
