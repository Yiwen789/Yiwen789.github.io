// Skills Icons
// import htmlIcon from "./images/html.svg"
// import cssIcon from "./images/css.svg"
// import reactIcon from "./images/react.svg"
// import jsIcon from "./images/javascript.svg"
// import designIcon from "./images/design.svg"
// import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

//project image
// import blogtivityImage from "./images/github.svg";
// import unemploymentDashboardImage from "./images/unemployment-dashboard.png";
// import reactNativeImage from "./images/react-native-logo.jpeg";
// import todoAppImage from "./images/todo-app.png";

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Yiwen",
  headerTagline: [
    //Line 1 For Header
    "Hello World!"
    
  ],
  //   Header Paragraph
  headerParagraph:
    "A first-year MS student in Computer Science at Brandeis University, MA. I'm also an aspiring Full Stack Software Engineer and a part-time tennis lover, swimmer, and climbing enthusiast!",

  //Contact Email
  contactEmail: "luoy8865@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Wonder List", //Project Title - Add Your Project Title Here
      para:
        "A task management web application based on React that supports user authentication and task management functions served by Spring Boot",  tech: //Tech stack
      "React, Spring Boot",
        //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/BOH6Sjf.jpeg",
      //Project URL - Add Your Project Url Here
      url: "https://imgur.com/2cNGJL1",
      githubUrl: "https://github.com/Yiwen789/todo-app",
    },
    {
      title: "Blog-tivity", //Project Title - Add Your Project Title Here
      para:
        "A blogging platform that hosts users' articles and blogging activity. Post and view articles on any topic!", // Add Your Service Type Here
      tech: //Tech stack
      "React, Redux",  //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/DfCCJb9.jpeg",
      //Project URL - Add Your Project Url Here
      url: "https://yiwen789.github.io/blog-tivity/",
      githubUrl: "https://github.com/Yiwen789/blog-tivity",
    },
    {
      title: "Shooting Incident Dashboard", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      tech: //Tech stack
      "Python, JavaScript, Flask, PostgreSQL",
        //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/P6VcUsT.jpeg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Yiwen789/cs257-assignments-Yiwen789",
      githubUrl: "https://github.com/Yiwen789/cs257-assignments-Yiwen789",
    },
    {
      title: "Unemployment Statistics Dashboard", //Project Title - Add Your Project Title Here
      para:
        "Examine unemployment and many more economic metrics with the time series visualizations, map, and tables on this interactive dashboards ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      tech: //Tech stack
      "Python, Plotly.js",
      imageSrc:
        "https://i.imgur.com/p7RHk6V.jpeg",
      //Project URL - Add Your Project Url Here
      url: "https://labor-stats-dashboard.herokuapp.com/",
      githubUrl: "https://github.com/Yiwen789/Labor-Stats-Dashboard",
    },
    {
      title: "React Native Development", //Project Title - Add Your Project Title Here
      para:
        "Coming Soon! Users can input recipes and available goods in the house to automatically generate grocery list", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      tech: //Tech stack
      "React Native, Redux",
      imageSrc:
        "https://i.imgur.com/ntOShGU.jpeg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Yiwen789",
      githubUrl: "https://github.com/Yiwen789",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "👩‍🎓‍ Hi, my name is Yiwen. I'm currently pursuing my Master in Computer Science at Brandeis University in Waltham, MA.",
  aboutParaTwo:
    "💻 I am striving to become a computer scientist with a specialization in machine learning where I can combine my knowledge in computer science and statistics. In the meantime I'm also a full-stack developer focused on building high-quality, thoughtful, and inutitive applications to make technology accesible to everyone!",
  aboutParaThree:
    "🧗‍♀️ I like to spend my free time working on my development projects and following my dream of becoming a computer scientist and engineer. Outside of coding, you can also find me trying to figure out bouldering routes, working out, binge-watching tv show on Disney+, or hanging out with my cat. ",
  aboutImage:
    "https://images.unsplash.com/photo-1520646924857-261be3037bc7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDY4NjcyNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      skill: "JavaScript",
      para:
        "ES6, along with HTML5, CSS, and Bootstrap.js",
    },
    {
      skill: "Java",
      para:
        "ES6, along with HTML5, CSS, and Bootstrap.js",
    },
    {
      skill: "Python",
      para:
        "ES6, along with HTML5, CSS, and Bootstrap.js",
    },
    {
      skill: "Ruby",
      para:
        "ES6, along with HTML5, CSS, and Bootstrap.js",
    },
    {
      skill: "Node.js",
      para:
        "ES6, along with HTML5, CSS, and Bootstrap.js",
    },
    {
      skill: "React.js",
      para:
        "Used React.js along with Redux, Immutable.js, npm ",
    },
    {
      skill: "React Native",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      skill: "PostgreSQL",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      skill: "Spring Boot",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      skill: "Redux",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's connect!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/Yiwen789" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
