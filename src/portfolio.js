/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ismail Chaf-i",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "ismail chafi Portfolio",
    type: "website",
    //url: "http://localhost:3000/#/home",
  },
};

//Home Page
const greeting = {
  title: "Ismail ",
  logo_name: "Ismail Chafi",
  nickname: "Chaf-i",
  subTitle:
    "SWIPE ↓ DOWN",
  resumeLink:
    "https://drive.google.com/file/d/1ax-eozp9MnRu0kM5Xxq12b7d499z_kRY/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/liamsi5",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/liamsi5",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/ismail-chaf-i-622b4520b",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5",
  },

  {
    name: "Gmail",
    link: "mailto:ismailchafi66@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  /*{
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },*/
  {
    name: "Instagram",
    link: "https://www.instagram.com/ismailchafi/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        " Endowed with great expertise in statistics and applied mathematics. Able to build algorithms doesn't scare me. several skills in machine learning, Big Data and computer programming, collects, processes, analyzes and makes massive data speak,",
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Rstudio",
          fontAwesomeClassname: "cib:rstudio",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kaggle",
          fontAwesomeClassname: "simple-icons:kaggle",
          style: {
            backgroundColor: "transparent",
            color: "#00FFFF",
          },
        },
        {
          skillName: "Spyder",
          fontAwesomeClassname: "simple-icons:spyderide",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "endowed with a spirit of synthesis, analysis, and a great capacity to solve problems, I am autonomous and resourceful. these skills allow me to build skills and overcome the technical difficulties encountered. ",
        "⚡ Building responsive website front end ",
        "⚡ Developing mobile applications ",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "logos:wordpress",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ flow management and data integration with Talend",
      ],
      softwareSkills: [
        {
          skillName: "Mysql",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Gimp",
          fontAwesomeClassname: "simple-icons:gimp",
          style: {
            color: "#0066b2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },

      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/liamsi5",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/liamsi5",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/liamsi5",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@liamsi5",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/liamsi5",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "polytechnic engineering school",
      subtitle: "Computer Science and Statistics Engineer",
      logo_path: "log2_poly.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - 2024",
      descriptions: [
        "training balanced between computer science, statistics and management, trains engineers capable of meeting these new needs. In the field of IT, the engineer knows how to create, organize, secure company information systems and control the flow of information within them.In the field of statistics, he also knows how to model, exploit, optimize and analyze large data sets."
      ],
      website_link: "https://www.polytech-lille.fr/",
    },
    {
      title: "University of Lille",
      subtitle: "deug mention informatics-mathematics",
      logo_path: "logo1_univ.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - 2021",
      descriptions: [
        "training whose objective is to provide a solid foundation in Computer Science and Mathematics. Disciplinary lessons occupy a large part of the training. At the end of this course, the student has acquired solid knowledge of the digital world in the broad sense, ranging from programming to mathematical modeling and algorithms."
      ],
      website_link: "https://sciences-technologies.univ-lille.fr/mathematiques/formation/licence-mention-informatique-mathematiques",
    },
    {/*#b7126b */
      title: "faculté de sciences technologie a lille 1",
      subtitle: "Computer Science and Statistics Engineer",
      logo_path: "logo1_fac.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - 2020",
      descriptions: [
        "The structure of the SESI portal has been designed to introduce new scientific fields and thus new career prospects of a share and, to confirm the choice of the student in his choices taken in the secondary through specific pathways from the first year of license (Reinforced-Research, bilingual)"
      ],
      website_link: "https://www.univ-lille.fr/formations/fr-00009100",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "TOEIC certifications ",
      subtitle: "- est of english for international communication",
      logo_path: "toeic_logo.png",
      certificate_link:
        "https://www.https://www.etsglobal.org/fr",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "TCF certifications ",
      subtitle: "French knowledge test",
      logo_path: "tcf.jpeg",
      certificate_link:
        "https://www.france-education-international.fr/",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [

        
      ],
    },
    {
      title: "cooperative training course",
      experiences: [
        {
          title: "Pappers ",
          company: "Provider of financial and legal information specializing in the analysis of the financial health of businesses",
          company_url: "https://pappers.fr/",
          logo_path: "Pappers_logo.png",
          duration: "Dec 2022 - Sep 2024  ",
          location: "Paris, France",
          description:
            " I was involved in a range of responsibilities, including the development of a risk assessment algorithm for predicting company failures. I conducted thorough analyses of datasets to extract relevant information, and I also focused on creating visually engaging data presentations to enhance comprehension and analysis. Handling substantial volumes of data and ensuring seamless data flow was an integral part of my role. Additionally, I contributed to the development of specialized algorithms designed to identify similar companies for competitive studies.",
          color: "#0879bf",
        },
        {
          title: "Aml Audit & Solutions",
          company: "Solutions for prospecting & financial and legal information",
          company_url: "https://aml-solutions.fr/",
          logo_path: "aml_logo.jpeg",
          duration: "Sep 2021 - Dec 2022",
          location: "Lille, France",
          description:
            "The development of a predictive tool for enterprise default is a sophisticated approach to averting financial crises by identifying signs of a company's impending fiscal troubles. This tool would use algorithms to analyze market data and economic indicators, providing businesses with early warnings of potential distress. Simultaneously, the role of a programmer tackling diverse and multifunctional tasks is crucial in the tech industry, demanding versatility and a broad skill set. These programmers must be adept in various languages and technologies to meet the unique needs of each project. Their adaptability is key to a team's ability to innovate and respond effectively to the ever-evolving demands of software development.",
          color: "#0879bf",
        },
        {
          title: "babeledge",
          company: "Platform specialized in Artificial Intelligence applied to the dubbing industry.",
          company_url:
            "https://babeledge.com/",
          logo_path: "babel.jpeg",
          duration: "Sep 2021 - Jan 2022",
          location: "Lille, France",
          description:
            "The resolution of dubbing-related challenges through unstructured machine learning involves applying AI techniques to interpret and process non-linear data. This approach allows for the identification and correction of issues within the dubbing process, such as synchronization of speech and emotional tone matching. Unstructured machine learning thrives on large, diverse datasets, learning from the nuances of language and speech to enhance the quality of dubbed content. This technology adapts to the complexities of human language, enabling more accurate and lifelike dubbing for multimedia content. The end goal is to produce dubbing that is so seamless that it feels natural to the viewer, regardless of the original language.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [

        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like  Uber, Facebook, Google, Scikit-learn, Sympy, Python,   etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Course",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me-removebg-preview.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Lille",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/rmrLxTJvFQ7ntxn99",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+33766746033",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
