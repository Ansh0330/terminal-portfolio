import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        `I am a full-stack web developer and engineering student at DTU,
focused on building scalable, production-ready web applications.
My core strengths include Next.js, MERN stack, REST APIs, and
problem-solving with strong DSA fundamentals.`,
    },

    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `
Languages:
- C, C++, Python, JavaScript (ES6+), TypeScript

Frontend:
- React.js, Next.js, HTML5, CSS3, Tailwind CSS, Radix UI

Backend:
- Node.js, Express.js
- Authentication (JWT, OAuth, NextAuth)

Databases:
- MongoDB, PostgreSQL, Redis
- ORM: Prisma, Mongoose

DevOps & Cloud:
- AWS, Docker, Linux, Vercel

Tools:
- Git, Postman, VS Code, Figma
`,
    },

    projects: {
      description: "View featured projects",
      usage: "projects",
      fn: () => `
1. StudyNotion (EdTech Platform)
   - MERN + Razorpay + Cloudinary
   - Secure JWT + OTP auth, role-based access
   - Instructor analytics & dashboards (Chart.js)

2. True Feedback
   - Next.js + TypeScript + NextAuth
   - Anonymous feedback with AI-powered prompts (Gemini AI)
   - Dark/light mode, mobile-first UI

3. Droply (Cloud Storage App)
   - Next.js + ImageKit + Clerk
   - 1K+ file uploads, folders, starring, trash
   - Optimized media delivery with 99.9% uptime
`,
    },

    experience: {
      description: "Display work experience",
      usage: "experience",
      fn: () => `
Full Stack Developer Intern @ AZ Softwares (Jul 2025 – Sep 2025)
- Built responsive UIs using React.js
- Developed REST APIs with Node.js & Express.js
- Designed MongoDB & MySQL schemas
- Collaborated in Agile sprints, code reviews, and deployments
`,
    },

    education: {
      description: "View education details",
      usage: "education",
      fn: () => `
Delhi Technological University (DTU)
B.Tech Mechanical Engineering (Minor in IT)
2023 – 2027 | CGPA: 8.48 (till 4th semester)

CBSE Class XII: 94.8%
CBSE Class X: 89%
`,
    },

    achievements: {
      description: "View achievements & problem-solving",
      usage: "achievements",
      fn: () => `
- Solved 150+ DSA problems on LeetCode
- Strong command over OOP & algorithmic thinking
- School topper in Class XII
`,
    },

    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `
Email   : meanshbhardwaj@gmail.com
Phone   : +91 82871 23927
Location: India (Open to Remote)
`,
    },

    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/<your-github-username>", "_blank");
        return "Opening GitHub profile...";
      },
    },

    linkedin: {
      description: "Open LinkedIn profile",
      usage: "linkedin",
      fn: () => {
        window.open(
          "https://linkedin.com/in/<your-linkedin-username>",
          "_blank",
        );
        return "Opening LinkedIn profile...";
      },
    },

    resume: {
      description: "Download resume",
      usage: "resume",
      fn: () => "Resume download started...",
    },

    status: {
      description: "Current availability",
      usage: "status",
      fn: () => `
Status : Open to Internships & SDE-1 Roles
Focus  : Full-Stack Development, Scalable Systems
`,
    },

    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`;

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"anshkotnala:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
