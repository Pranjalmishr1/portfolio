// NAVIGATION ITEM
export const navItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "#about" },
  { id: 3, title: "Projects", url: "/projects" },
  { id: 4, title: "Skills", url: "#skills" },
  { id: 5, title: "Experience", url: "#experience" },
  { id: 6, title: "Contact", url: "#contact" },
];

// HERO ITEM
export const heroItem = {
  id: 1,
  image_url: "/profile.png",

  name: "Hello, I'm Pranjal Mishra",
  designation: "Full Stack Developer",
  experience: "hands-on experience in MERN stack, ML & Automation Testing",
  focus: "MERN Stack | Machine Learning | AWS Cloud",

  contact: {
    title: "Contact me here",
    url: "mailto:24pranjalmishra2005@gmail.com",
  },

  cv: {
    title: "Download Resume",
    url: "/cv.pdf",
  },

  iconOne: {
    title: "GitHub",
    url: "https://github.com/Pranjalmishr1",
  },

  iconTwo: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/1pranjal-mishra",
  },
};

// ABOUT ITEM
export const aboutItem = {
  title: "About Me",

  btnTitle: "Connect on LinkedIn",

  url: "https://linkedin.com/in/1pranjal-mishra",

  description:
    "Final-year B.Tech CSIT student at KIET Group of Institutions with hands-on experience in Full Stack Development, Machine Learning and Automation Testing. AWS Cloud Practitioner certified and passionate about building scalable real-world applications.",
};

// PROJECTS ITEM
export const projectsItem = {
  title: "My Projects",

  url: "/projects",

  btnTitle: "All Projects",

  projects: [
    {
      id: 1,
      title: "KIET MegaMart (College Bazaar)",
      image_url: "/project1.png",

      description:
        "Campus marketplace using MERN stack with JWT authentication and role-based access control.",

      date: new Date(2025, 4, 1),

      projectLink: "https://github.com/Pranjalmishr1/KIET_MEGAMART",

      github: "https://github.com/Pranjalmishr1/KIET_MEGAMART",

      technology: [
        { id: 1, title: "React.js" },
        { id: 2, title: "Node.js" },
        { id: 3, title: "MongoDB" },
        { id: 4, title: "Express.js" },
        { id: 5, title: "JWT" },
      ],
    },

    {
      id: 2,
      title: "AharaSetu Food Ordering Website",

      image_url: "/project2.png",

      description:
        "Full-stack food ordering system with user & admin interface using Node.js, Express and MySQL.",

      date: new Date(2024, 11, 1),

      projectLink: "https://github.com/Pranjalmishr1/AharaSetu_HungryToEat",

      github: "https://github.com/Pranjalmishr1/AharaSetu_HungryToEat",

      technology: [
        { id: 1, title: "Node.js" },
        { id: 2, title: "Express.js" },
        { id: 3, title: "MySQL" },
        { id: 4, title: "Bootstrap" },
      ],
    },

    {
      id: 3,
      title: "Placement Prediction ML Model",

      image_url: "/project3.png",

      description:
        "Machine learning model predicting placement outcomes using Logistic Regression, Random Forest and SVM.",

      date: new Date(2025, 6, 1),

      projectLink: "https://github.com/Pranjalmishr1/Job-Placement_Prediction-ML-Model",

      github: "https://github.com/Pranjalmishr1/Job-Placement_Prediction-ML-Model",

      technology: [
        { id: 1, title: "Python" },
        { id: 2, title: "Scikit-learn" },
        { id: 3, title: "Pandas" },
      ],
    },
  ],
};

// SKILLS ITEM
export const skillsItem = [
  { id: 1, title: "C" },
  { id: 2, title: "C++" },
  { id: 3, title: "Python" },
  { id: 4, title: "Java" },
  { id: 5, title: "React.js" },
  { id: 6, title: "Node.js" },
  { id: 7, title: "MongoDB" },
  { id: 8, title: "MySQL" },
  { id: 9, title: "AWS" },
  { id: 10, title: "Shell Scripting" },
  { id: 11, title: "Scikit-learn" },
  { id: 12, title: "Pandas" },
  { id: 13, title: "Git" },
];

// EXPERIENCE ITEM
export const experienceItem = [
  {
    id: 1,
    company: "ShulaTech Solutions",
    role: "Technical Intern",

    from: 2025,

    to: "",

    description:
      "Developed a full-stack To-Do List App using React, Node.js, Express and MongoDB. Worked with REST APIs and debugging workflows.",

    stack: [
      { id: 1, title: "React.js" },
      { id: 2, title: "Node.js" },
      { id: 3, title: "MongoDB" },
      { id: 4, title: "Express.js" },
    ],
  },
];

// CONTACT ITEM
export const contactItem = {
  title: "Contact Me",

  description:
    "Feel free to reach out for collaboration, internship opportunities or technical discussions.",

  contact_items: [
    {
      id: 1,
      title: "Email Me",
      url: "mailto:24pranjalmishra2005@gmail.com",
    },

    {
      id: 2,
      title: "Call Me",
      url: "tel:+919555716616",
    },

    {
      id: 3,
      title: "LinkedIn",
      url: "https://linkedin.com/in/1pranjal-mishra",
    },
  ],
};

// COPYRIGHT ITEM
export const copyrightItem = {
  name: "Pranjal Mishra",

  url: "https://github.com/Pranjalmishr1",
};