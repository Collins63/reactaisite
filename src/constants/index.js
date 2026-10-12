import {
  aws,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  csharp,
  disc02,
  discord,
  discordBlack,
  facebook,
  fdmsgatewaylogo,
  figma,
  file02,
  firebase,
  flutter,
  framer,
  hirelane,
  homeSmile,
  instagram,
  mongodb,
  nodejs,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  python,
  raindrop,
  reactjs,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  tallyTap,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#features",
  },
  {
    id: "1",
    title: "Modes",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Education",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Projects",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Components",
    url: "#roadmap",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Hirelane",
    text: "A job search portal that brings employers closer to their potential employees. Job seekers can build profiles and browse openings, while employers can post vacancies and connect directly with candidates. Built with a Flutter mobile front end on a Node.js backend, with Firebase and MongoDB handling authentication and data.",
    date: "May 2026",
    status: "progress",
    imageUrl: hirelane,
    colorful: true,
    languages:[
      flutter,
      nodejs,
      firebase,
      mongodb,
    ]
  },
  {
    id: "1",
    title: "TallyTap",
    text: "A Point of Sale system made for mobile users. It brings the everyday benefits of a POS, such as making sales, tracking stock and reviewing daily takings, straight to a phone or tablet, with optional fiscalization for businesses that need to stay compliant. Built with Flutter and Python.",
    date: "Jan 2025",
    status: "done",
    imageUrl: tallyTap,
    languages:[
      flutter,
      python,
    ]
  },
  {
    id: "2",
    title: "FDMS Gateway",
    text: "Seamless fiscalization on the cloud. The gateway sits between your business software and the tax authority, so you can get fiscalized and stay compliant with local tax requirements without managing the integration yourself. Includes a React dashboard backed by a Node.js API and MongoDB.",
    date: "July 2026",
    status: "done",
    imageUrl: fdmsgatewaylogo,
    languages:[
      reactjs,
      nodejs,
      mongodb
    ]
  },
  // {
  //   id: "3",
  //   title: "Integration with APIs",
  //   text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap4,
  // },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Front-End Development",
    text: "Im capable of developing and deploying backend code for various systems and services"
  },
  {
    id: "1",
    title: "Backend Development",
    text: "Im capable of developing and deploying backend code for various systems and services"
  },
  {
    id: "2",
    title: "API Integration",
    text: "Im capable of developing and deploying backend code for various systems and services"
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Node js",
    icon: nodejs,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Flutter",
    icon: flutter,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Python",
    icon: python,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "c-sharp",
    icon: csharp,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "MongoDb",
    icon: mongodb,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "React Js",
    icon: reactjs,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Firebase",
    icon: firebase,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "AWS",
    icon: aws,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Core software development for web and mobile products",
    price: null,
    features: [
      "Responsive websites and web applications tailored to your needs",
      "Frontend and backend development for essential product features",
      "API integration and support for launching your application",
      "Clean, maintainable code with clear documentation",
      "Basic testing and bug fixing before launch",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Custom software development with AI-powered capabilities",
    price:null,
    features: [
      "Custom web and mobile application development",
      "AI solutions, including LLM integrations and intelligent workflows",
      "Priority support, testing, and ongoing improvements",
      "AI chatbots and automation connected to your existing tools",
      "Secure authentication, databases, and cloud hosting setup",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "End-to-end software, AI, and DevOps for growing teams",
    price: null,
    features: [
      "Scalable custom software and AI solution architecture",
      "DevOps setup for cloud deployment, CI/CD, and infrastructure",
      "Dedicated technical support, monitoring, and optimization",
      "Custom AI model integration, fine-tuning, and data pipelines",
      "Security reviews, backups, and high-availability planning",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
