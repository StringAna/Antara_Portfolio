import { awesomebook, tvshowbox, todolist, wdetsummit, guesstheword, tictactoe, mathmagician, metricwebapp, spacetravelers } from '../assets';

const technologies = [
    {
      name: "HTML 5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    },
    {
      name: "CSS 3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" ,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    },
    {
      name: "Ruby",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg",
    },
    {
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux Toolkit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    },
    {
      name: "git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Webpack",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg",
    },
    {
      name: "Npm",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
  ];

const projects = [
  {
    name: "TV Shows Box",
    desc: "TVshows Box is a web application showing multiple TV shows with the help of TVmaze API which contains both mobile and desktop versions. The webapp have 3 interfaces: - A home page, a popup window, and a contact page.",
    tech: ["JavaScript", "TVmaze API"],
    img: tvshowbox,
    source_link: "https://github.com/Rhaegar121/TVshows_Box",
    live_link: "https://rhaegar121.github.io/TVshows_Box/dist/",
  },
  {
    name: "Metrics Webapp",
    desc: "Metrics Webapp is a mobile web application showing the current weather data of the cities using the Openweather API. It has two interfaces - city page and detail page based on the design of Nelson Sakwa on Behance. Built during the Microverse Module 3 React Captone Project.",
    tech: ["React", "Openweather API"],
    img: metricwebapp,
    source_link: "https://github.com/Rhaegar121/Metrics-Webapp",
    live_link: "",
  },
  {
    name: "Space Travelers' Hub",
    desc: "Space Travelers' Hub is a web application that provides commercial and scientific space travel services using the real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions.",
    tech: ["React", "SpaceX API"],
    img: spacetravelers,
    source_link: "https://github.com/Rhaegar121/React-Group-Project",
    live_link: "",
  },
  {
    name: "To Do List",
    desc: "To Do List Project is a tool that helps to organize your day with light and dark theme. It simply lists the things that you need to do and allows you to mark them as complete. Mainly built with javascript in Microverse Module 2.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: todolist,
    source_link: "https://github.com/Rhaegar121/To-Do-list",
    live_link: "https://rhaegar121.github.io/To-Do-list/dist/",
  },
  {
    name: "WDET Summit",
    desc: "This project is the World Economy & Technology summit website based on the design of Cindy Shin in Behance which contains both mobile and desktop versions and consists of two pages (home and about pages). Built with HTML, CSS, and Javascript in Microverse Module 1.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: wdetsummit,
    source_link: "https://github.com/Rhaegar121/WDET-Summit",
    live_link: "https://rhaegar121.github.io/WDET-Summit/",
  },
  {
    name: "Math Magicians",
    desc: "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: 1) Make simple calculations. 2) Read a random math-related quote.",
    tech: ["React"],
    img: mathmagician,
    source_link: "https://github.com/Rhaegar121/Math-Magicians",
    live_link: "https://math-magicians-0dr6.onrender.com/",
  },
  {
    name: "Tic Tac Toe",
    desc: "Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using “X” and the other using “O”. Mainly built with JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: tictactoe,
    source_link: "https://github.com/Rhaegar121/Tic-Tac-Toe",
    live_link: "https://rhaegar121.github.io/Tic-Tac-Toe/",
  },
  {
    name: "Awesome Books",
    desc: "Awesome Books Project is a simple website that displays a list of books and allows you to add and remove books from that list. Mainly built with javascript in Microverse Module 2.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: awesomebook,
    source_link: "https://github.com/Rhaegar121/Awesome-Books-ES6",
    live_link: "https://rhaegar121.github.io/Awesome-Books-ES6/",
  },
  {
    name: "Guess the word",
    desc: "Guess The Word is a fun letter puzzle game where the player have to guess the hidden word using the clues that the game gives. The game ends if the player guesses the correct word or if he chooses the wrong letter 8 times. Mainly built with Javascript.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: guesstheword,
    source_link: "https://github.com/Rhaegar121/Guess-the-word",
    live_link: "https://rhaegar121.github.io/Guess-the-word/",
  },
];

export { technologies, projects };