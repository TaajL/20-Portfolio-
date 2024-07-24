import  employeetracker from "../img/employeetracker.png";
import codequiz from "../img/codequiz.png";
import forkyeah from "../img/forkyeah.png";
import topictarget from  "../img/topictarget.png";

const applications = [
    {
        title: "Employee Tracker",
        photo: employeetracker,
        deployedLink: "https://drive.google.com/file/d/17BUCT1Iv_cWhMnWBQvxXrL0S7bCJVaix/view",
        githubLink: "https://github.com/TaajL/12-Employee-Tracker"
    },
    {
        title: "Code Quiz",
        photo: codequiz,
        deployedLink: "https://taajl.github.io/04-Code-Quiz/",
        githubLink: "https://github.com/TaajL/04-Code-Quiz" 
    },
    {
        title: "Fork Yeah",
        photo: forkyeah,
        deployedLink: "https://msu-fork-yeah-d9a4d1d2afa6.herokuapp.com/",
        githubLink: "https://github.com/finnlambouris/msu-interactive-full-stack-project_fork-yeah" 
    },
    {
        title: "Topic Target",
        photo: topictarget,
        deployedLink: "https://taajl.github.io/Topic-Target-/",
        githubLink: "https://github.com/TaajL/Topic-Target-", 
    }
];

const ApplicationCard = ({ title, photo, deployedLink, githubLink }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={photo} alt={title} />
            <p>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Link</a>
                <br />
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
            </p>
        </div>
    );
};

export default function Application() {
    return (
      <div>
        {applications.map((application, index) => (
          <ApplicationCard key={index} {...application} />
        ))}
      </div>
    );
  }