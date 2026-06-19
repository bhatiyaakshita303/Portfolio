const githubUrl = "https://github.com/your-username";

export const CONTACT = {
  name: "Akshita Bhatiya",
  email: "bhatiyaakshita303@gmail.com",
  github: githubUrl,
  githubHandle: githubUrl.replace(/^https?:\/\//, ""),
  location: "India",
};

export const PROJECTS = [
  {
    id: "fitness-ecomm",
    tag: "01",
    name: "Fitness Ecomm",
    stack: "MERN",
    stackFull: ["MongoDB", "Express.js", "React.js", "Node.js"],
    blurb:
      "Full-stack e-commerce platform for fitness gear with cart, auth and order flow.",
    description:
      "A complete e-commerce application built for the fitness and supplements niche. Customers can browse products, manage a cart, authenticate, and place orders, while the backend handles product, user and order data through a RESTful API connected to MongoDB.",
    features: [
      "User authentication & protected routes",
      "Product catalog with category filtering",
      "Cart & checkout flow",
      "RESTful API built with Express & Node",
      "MongoDB Atlas as the cloud database",
    ],
    github: "https://github.com/bhatiyaakshita303/Fitness_ecomm",
    live: "https://fitness-ecomm-zafn.vercel.app/",
    detailOnly: false,
  },
  {
    id: "blood-donation",
    tag: "02",
    name: "Blood Donation System",
    stack: "MEAN",
    stackFull: ["MongoDB", "Express.js", "Angular", "Node.js"],
    blurb:
      "Platform connecting donors and recipients to streamline blood donation requests.",
    description:
      "A MEAN-stack system designed to bridge the gap between blood donors and people in need. It manages donor records, donation requests, and availability, helping camps and hospitals coordinate faster during emergencies.",
    features: [
      "Donor registration & profile management",
      "Search donors by blood group & location",
      "Request/response workflow for emergencies",
      "Angular front end with Express/Node API",
      "MongoDB for persistent donor & request data",
    ],
    github: "https://github.com/bhatiyaakshita303/blood_donation",
    live: "https://blood-donation-git-main-bhatiyaakshita303s-projects.vercel.app/",
    detailOnly: false,
  },
  {
    id: "lifestyle-health-analysis",
    tag: "03",
    name: "Lifestyle & Health Analysis of Social Media Users",
    stack: "Python",
    stackFull: ["Python", "Pandas", "Data Visualization", "ML basics"],
    blurb:
      "Data analysis project studying how social media habits relate to lifestyle & health.",
    description:
      "An exploratory data analysis & visualization project that studies the relationship between social media usage patterns and the lifestyle/health indicators of users — built using Python's data analysis stack to clean, process and visualize survey-style data.",
    features: [
      "Data cleaning & preprocessing with Pandas",
      "Exploratory data analysis on usage vs. health metrics",
      "Visual charts to surface correlations & trends",
      "Insights on screen-time vs. lifestyle patterns",
      "Written entirely in Python (notebook-driven workflow)",
    ],
    github:
      "https://github.com/bhatiyaakshita303/Lifestyle-Health-Analysis-of-Social-Media-Users",
    live: null,
    detailOnly: true,
  },
];

export const SKILLS = [
  {
    group: "Frontend",
    icon: "Code2",
    items: ["HTML", "CSS", "JavaScript", "React.js", "JavaScript ES6", "HTML5"],
  },
  {
    group: "Backend",
    icon: "Server",
    items: ["Node.js", "Express.js", "REST API Integration", "JWT", "API development", "API testing"],
  },
  {
    group: "Database",
    icon: "Database",
    items: ["MongoDB", "MongoDB Atlas", "SQL", "Mysql"],
  },
  {
    group: "Also working with",
    icon: "Layers",
    items: ["Python", "ASP.NET", "Figma", "Canva"],
  },
];
