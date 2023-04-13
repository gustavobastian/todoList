import './style.css';


let taskMod = require('./tasks')
let projects = require('./projectsModule')
let projectsLocal = require('./projects')
let listProjectservice = require('./listService')

function component(){
    

    let contentElement=document.createElement('div') 
    let navBar= document.createElement('div'); 
    let snippetLocal = document.createTextNode("My ToDo List");
    navBar.appendChild(snippetLocal);
    navBar.className="header";
    contentElement.appendChild(navBar);
    
    //dinamic content
    
    let mainContent= document.createElement('div'); 
    mainContent.className="dinamicContent";
    let projects= document.createElement('div'); 
    projects.id="projectsColumn";
    mainContent.appendChild(projects);
    
    
    let tasks= document.createElement('div'); 
    tasks.id="tasksColumn";
    
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

//global list of projects

let localProjectList=listProjectservice();



/*****generating some project to pass to project module */




/**
 * generating project list 1
 */

async function All(){
    let list= projectsLocal();
    list.title="Project 1";
    list.description="A lot to do";    
    let task=  taskMod();
    task.title="one";
    task.priority="high"
    task.dueDate= new Date().toISOString();
    task.description="Organize the notes."
    task.checklist=false;

    let task2= taskMod();
    task2.title="two";
    task2.priority="low";
    task2.dueDate=new Date().toISOString();
    task2.description="Remove old tasks."
    task2.checklist=true;
    list.addTask(task);
    list.addTask(task2);    
    
    return list;
    }
async function GeneratingFirstListOfProjects(){
    
    
    if((localProjectList).nProjects==0){
        let project1= await All();    
        localProjectList.addProject(project1); 
    }
    projects.component(localProjectList);
    return localProjectList;
}

let localist=GeneratingFirstListOfProjects();
