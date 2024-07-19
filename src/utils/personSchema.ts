import type { Person } from "schema-dts";

export const personSchema: Person = {
  "@type": "Person",
  name: "Nirjan Khadka",
  url: "https://nirjan.dev/about",
  knowsAbout: [
    "web development",
    "web design",
    "web accessibility",
    "web performance",
    "web optimization",
    "web development tools",
    "web performance optimization",
    "web accessibility",
    "web development",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Golang",
    "Vue.js",
    "Svelte.js",
    "Astro.js",
    "Node.js",
    "SQL",
  ],

  image: "https://nirjan.dev/images/profile.png",
  email: "webdev.nk@gmail.com",
  sameAs: [
    "https://github.com/nirjan-dev",
    "https://twitter.com/nirjan_dev",
    "https://linkedin.com/in/nirjankhadka",
  ],
  gender: "male",
  jobTitle: "Software Developer",
  description:
    "I make websites and apps that are fast, user friendly, accessible and secure. I work with Typescript, HTML & CSS, Vue, Svelte, Node.js and Golang.",
};
