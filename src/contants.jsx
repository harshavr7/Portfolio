import IIITKLogo from "./assets/IIITK logo.png"
import RPS from "./assets/RPS.png"
import NS from "./assets/NarayanaS.avif";
import CS from "./assets/CS.webp"

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS"},
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Firebase" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C" },
      { name: "C++"},
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git"},
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Vercel" },
      { name: "Netlify" },
        ],
  },
];

export const projects=[
  {
    id:0,
    title:"IIITK Homepage clone",
    description: "The IIIK Website Clone is a front-end replication of the original IIIK website, developed in my 1st semester using HTML, CSS, and JavaScript.",
    image:IIITKLogo,
    tags:["HTML","CSS","Javascript"],
    github:"https://github.com/harshavr7/IIITK-website-clone"
  },

  {
    id:1,
    title:"Rock Paper Scissors Game",
    description:"A website where users can play Rock-Paper-Scissors against a computer opponent with an interactive and engaging interface.",
    image:RPS,
    tags:["React.js"],
    github:"https://github.com/harshavr7/Rock-Papers-Scissors"
  }
];

export const education=[
  {
    id:0,
    img:IIITKLogo,
    school:"Indian Institute of Information Technology Kottayam.",
    date:"Nov 2022 - May 2026.",
    grade:"5.81 CGPA.",
    desc:"I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE) at the Indian Institute of Information Technology, Kottayam (IIIT Kottayam). I am in my 4th year, gaining both theoretical knowledge and practical experience in areas such as software development, data structures, algorithms, web technologies, and emerging fields like machine learning and cloud computing.",
    degree:"Bachelor of Technology (B.Tech) - CSE (Computer Science)."
  },
  {
    id:1,
    img:NS,
    school:"Narayana Olympiad SCH Sahakar Nagar Bangalore KK.",
    date:"June 2020 - May 2022.",
    grade:"69.4%",
    desc:"I completed my 11th and 12th grade under the CBSE curriculum at Narayana Olympiad School, Sahakarnagar, Bangalore (Karnataka). During this time, I focused on strengthening my foundation in core subjects such as Physics, Chemistry, and Mathematics, while actively preparing for competitive exams like the Joint Entrance Examination (JEE) through the school’s Olympiad and JEE-focused academic program.",
    degree:"CBSE(XII) - PCM with Computer Science."
  },
  {
    id:3,
    img:NS,
    school:"Narayana Olympiad SCH Kasturi Nagar Bangalore KK.",
    date:"April 2018 - March 2020.",
    grade:"52.6%",
    desc:"I completed my 9th and 10th grade under the CBSE curriculum at Narayana Olympiad School, Kasturi Nagar, Bangalore (Karnataka). Alongside my regular academics, I was also introduced to early preparation for competitive exams like the Joint Entrance Examination (JEE), which helped build a strong foundation in Mathematics and Science from an early stage.",
    degree:"CBSE(X) "
  },
  {
    id:4,
    img:CS,
    school:"Chirst Global Residential School Hallehalli KK.",
    date:"June 2010 - March 2018.",
    desc:"I studied from 1st to 8th grade at Christ Global Residential School, Hallehalli, Karnataka. During these formative years, I built a strong academic foundation across all core subjects and actively participated in various co-curricular and extracurricular activities that contributed to my overall development.",
    degree:"Karnataka State Board(1st - 8th)"
  }
];