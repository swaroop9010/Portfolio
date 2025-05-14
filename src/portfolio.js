/* Change this file to customize your portfolio */

const greeting = {
  username: "Sai Swaroop Tunuguntla",
  title: "Hi, I'm Sai Swaroop",
  subTitle:
    "Detail-oriented Data Science graduate student with experience in predictive analytics, time series forecasting, and building scalable ETL systems. Passionate about turning data into insights.",
  resumeLink:
    "https://github.com/swaroop9010", // You can upload resume to GitHub or external PDF link
  githubProfile: "https://github.com/swaroop9010",
};

const socialMediaLinks = {
  github: "https://github.com/swaroop9010",
  linkedin: "https://www.linkedin.com/in/saiswaroop2002",
  gmail: "ssusa2023@gmail.com",
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "I build intelligent systems, forecast trends, and automate data flows for decision-making.",
  skills: [
    "⚡ Build time series and machine learning models for forecasting and predictions",
    "⚡ Automate ETL pipelines using Spark and Airflow",
    "⚡ Develop interactive dashboards using Power BI and Tableau",
    "⚡ Perform exploratory data analysis and data wrangling",
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "logos:python" },
    { skillName: "SQL", fontAwesomeClassname: "logos:mysql" },
    { skillName: "Apache Spark", fontAwesomeClassname: "logos:apache-spark" },
    { skillName: "Airflow", fontAwesomeClassname: "simple-icons:apacheairflow" },
    { skillName: "AWS", fontAwesomeClassname: "logos:aws" },
    { skillName: "Azure", fontAwesomeClassname: "logos:microsoft-azure" },
    { skillName: "Tableau", fontAwesomeClassname: "logos:tableau" },
    { skillName: "Power BI", fontAwesomeClassname: "logos:powerbi" },
    { skillName: "Git", fontAwesomeClassname: "logos:git" },
  ],
};

const educationInfo = {
  schools: [
    {
      schoolName: "Kent State University, USA",
      subHeader: "Master of Technology in Data Science",
      duration: "2023 - 2025",
    },
    {
      schoolName: "Parul University, India",
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2019 - 2023",
    },
  ],
};

const workExperiences = {
  experience: [
    {
      role: "Software Engineer – Network & IT Support",
      company: "Parul University",
      date: "June 2021 – Mar 2022",
      desc: "Developed forecasting models to predict student attendance trends using ARIMA and Prophet. Integrated Google Sheets for real-time stakeholder access and visualized predictive outcomes.",
    },
    {
      role: "Web Developer",
      company: "Matrix Bytes",
      date: "Apr 2022 – Sep 2022",
      desc: "Built dynamic websites with WordPress and embedded dashboards. Integrated APIs and implemented site performance analytics.",
    },
  ],
};

const projects = {
  data: [
    {
      title: "Predictive Sales Analysis",
      description:
        "Compared ARIMA and LSTM models to forecast sales and customer behavior. Built Power BI dashboards for business decision-making.",
      url: "https://github.com/swaroop9010",
    },
    {
      title: "ETL Pipeline with Spark",
      description:
        "Ingested multi-source data into PostgreSQL using Spark. Automated transformation using Apache Airflow and anomaly detection models.",
      url: "https://github.com/swaroop9010",
    },
    {
      title: "Wildfire Forecast Dashboard",
      description:
        "Predicted wildfire spread using regression and historical data. Visualized dynamic risk zones using Tableau.",
      url: "https://github.com/swaroop9010",
    },
    {
      title: "Cloud-based Face Recognition System",
      description:
        "Built a real-time face detection and recognition attendance system using Google Cloud and Sheets.",
      url: "https://github.com/swaroop9010",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Engineering with Apache Spark",
      subtitle: "Coursera",
    },
    {
      title: "Predictive Analytics & Machine Learning",
      subtitle: "Coursera",
    },
    {
      title: "Data Analytics with Python",
      subtitle: "Coursera",
    },
    {
      title: "Web Scraping with Python",
      subtitle: "Udemy",
    },
    {
      title: "Cloud Computing",
      subtitle: "Azure",
    },
  ],
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Let's connect and collaborate!",
  email_address: "ssusa2023@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  projects,
  certifications,
  contactInfo,
};
