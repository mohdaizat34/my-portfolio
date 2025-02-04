export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I value flexibility and open communication, always adapting to client needs.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Step by step",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech lover driven by a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "I'm Always Eager to Improve.",
    description: "What Makes Me Tick is...",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Reach Out & Say Hi! 👋 ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Malaysia Weather Forecast",
    des: "View real-time 7-day weather forecasts by selecting State, Recreation Centre, District, Town, or Division.",
    img: "./weather.png",
    iconLists: ["./react.png", "./next.svg", "./tail.svg"],
    link: "https://malaysia-weather.up.railway.app/",
  },
  {
    id: 2,
    title: "Vue Job Listing",
    des: "A job listing app with CRUD function to showcase front end fetching data from an API and displaying it in a user-friendly interface.",
    img: "./vueproject.png",
    iconLists: ["./vue.svg", "./tail.svg"],
    link: "https://vue-jobs-list.netlify.app/",
  },
  {
    id: 3,
    title: "To-Do App",
    des: "Built with Angular,this To-Do app allows you to manage tasks effortlessly by adding, updating, deleting, and sorting them.",
    img: "./todo.jpeg",
    iconLists: ["./angular_gradient.png", "./ts.svg", "./bootstrap.png"],
    link: "https://github.com/mohdaizat34/todo-app",
  },

  {
    id: 4,
    title: "AeroGrow AR",
    des: "AeroGrow AR is an augmented reality project built with Unity and Vuforia, guiding users through the aeroponics farming setup with step-by-step animations and an AI chat assistant.",
    img: "./ar.png",
    iconLists: [
      "./unity.png",
      "./blender.png",
      "./vuforia.png",
      "./c4.svg",
      "./inworld.png",
    ],
    link: "https://www.youtube.com/watch?v=mNRIBQM2RFw&ab_channel=PrintPsyche",
  },
  {
    id: 5,
    title: "Club Management System",
    des: "Built a web-based CRUD application for managing club memberships and events using the Laravel framework. The system supports role-based access control for different types of users (admins, members).",
    img: "./laravel-project.png",
    iconLists: ["./laravel.svg", "./php.png", "./mysql.png"],
    link: "https://github.com/mohdaizat34/club-management",
  },
];

export const testimonials = [
  {
    quote: "fast delivery understood what i sent had no complaints.",
    name: "notstormi",
    title: "Fiverr user",
  },
  {
    quote:
      "Somehow understood my vague instructions and delivered exactly what I needed. Impressive work—definitely recommend!",
    name: "A confused friend",
    title: "Happy Customer",
  },
  {
    quote:
      "Interpreted my chaotic instructions like a mind reader and delivered perfectly. Professional, fast, and slightly magical.",
    name: "Eden",
    title: "Just a user from Danganronpa Garrys Mod",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "./cloud.svg",
    nameImg: "./cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "./app.svg",
    nameImg: "./appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "./host.svg",
    nameImg: "./hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "./s.svg",
    nameImg: "./streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "./dock.svg",
    nameImg: "./dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Junior Software Developer",
    desc: "Assisted in deploying software via IIS, developing an email scheduler in C#, creating TSDs, and extracting data for monthly graph reports from TOAD for Oracle.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    desc: "Learned Angular to build dynamic web apps, developed a report generator, followed UI wireframes, and integrated Swagger APIs for data fetching.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp3.svg",
  },
  {
    id: 3,
    title: "Freelance Lua Developer",
    desc: "Developed game mods using Lua to create custom mechanics, built features like a rounds system and management system, and designed intuitive UIs for seamless interaction.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/mohdaizat34",
  },
  {
    id: 2,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/muhammad-aizat-817901209/",
  },
];
