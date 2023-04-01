import './style.css';
//import task from './tasks';
let taskMod = require('./tasks')
let projects = require('./projectsModule')
let projectsList = require('./projects')


async function All(){

let list= projectsList();


let task= await taskMod();
task.title="one";
console.log(task)
let task2= await taskMod();
task2.title="two";

await list.addTask(task);
console.log("1")
await console.log(JSON.stringify(list))
await list.addTask(task2);
console.log("2")
await console.log(JSON.stringify(list))
}
All();
function component(){
    let contentElement=document.createElement('div') 
    let navBar= document.createElement('div'); 
    let snippetLocal = document.createTextNode("My Project Monitor");
    navBar.appendChild(snippetLocal);
    navBar.className="header";
    contentElement.appendChild(navBar);
    //dinamic content
    
    let mainContent= document.createElement('div'); 
    mainContent.className="dinamicContent";
    let projects= document.createElement('div'); 
    projects.id="projectsColumn";
    
    
    let tasks= document.createElement('div'); 
    tasks.id="tasksColumn";
    let snippetLocal3 = document.createTextNode("ToDo List222");    
    tasks.appendChild(snippetLocal3);
    mainContent.appendChild(projects);
    mainContent.appendChild(tasks);



    contentElement.appendChild(mainContent);

    //generating footer

    let footerContent=document.createElement('div');
    footerContent.className="textFooter";
    let snippetFooter = document.createTextNode("By Gustavo Bastian (2023)");       
    footerContent.appendChild(snippetFooter);
    contentElement.appendChild(footerContent);


    return contentElement;
}
document.body.appendChild(component());
projects.component();