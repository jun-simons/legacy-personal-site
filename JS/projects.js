const projectsList = [
    {
        title: "Online Typing Trainer",
        date: "1/20/2021",
        description: "A Javascript-based typing trainer with quote and random word modes.",
        link:"https://jun-simons.github.io/"
    },
    {
        title: "Advanced Particle Simulator",
        date: "2/14/2021",
        description: "A Sandbox-style simulator with colission detection, raycasting, procedural generation, and more",
        link:"projects/projectpages/projecttemplate2.html"
    },
    {
        title: "Three.JS Fantasia",
        date: "5/16/2021",
        description: "Fantasy World Generator using Three.JS and low-poly landscape generation. Additionally uses color pallete generation engine.",
        link:"projects/projectpages/projecttemplate2.html"
    },
    {
        title: "Bunger Discord Bot 1.0",
        date: "3/27/2021",
        description: "A Discord Bot with a variety of features, including editing voice channels and creating polls.  It uses a variety of APIs for essential trivia and meme functionality.",
        link:"projects/projectpages/projecttemplate2.html"
    },
    {
        title: "Christmas Countdown Website",
        date: "12/29/2020",
        description: "A simple but fun christmas countdown website I created on the first afternoon of Christmas Break",
        link:"projects/ChristmasCountdown/christmascountdown.html"
    },
    {
        title: "Java Sorting Algorithim Visualizer",
        date: "6/8/2020",
        description: "My AP Computer Science Final Project: a modular sorting algorithim visualizer in Java using a Swing GUI",
        link:"#"
    },
]
const template = document.getElementById("project-template");
const projects = document.getElementById("projects");


let IDnum = 1;


for (x in projectsList) {
    projects.innerHTML += template.innerHTML;
    var projectButton = document.getElementsByClassName("project-button").item(IDnum).children;
    var link = document.getElementsByClassName("project-button").item(IDnum);
    var children = projectButton[0].children;


    children[0].innerText = projectsList[x].title;
    children[1].innerText = projectsList[x].date;
    children[2].innerText = projectsList[x].description;

    link.setAttribute('href', projectsList[x].link);
    IDnum++;
}
