import './style.css';
//import task from './tasks';
let taskMod = require('./tasks')
let projects = require('./projectsModule')
let projectsList = require('./projects')


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




/*****generating some project to pass to project module */

/**
 * generating project list 1
 */

async function All(){
    let list= projectsList();
    list.title="Project 1";
    list.description="A lot to do";
    let task= await taskMod();
    task.title="one";
    let task2= await taskMod();
    task2.title="two";
    await list.addTask(task);
    await list.addTask(task2);    
    
    return list;
    }
/**
 * generating project list 2
 */
async function All2(){
    let list= projectsList();
    list.title="Project 2";
    list.description="few things to do";
    let task= await taskMod();
    task.title="three";    
    let task2= await taskMod();
    task2.title="four";
    await list.addTask(task);    
    await list.addTask(task2);    
    return list;
    }



async function sum(){
let projectLocalList=[];
let project1= await All();
let project2= await All2();
await projectLocalList.push(project1);
await projectLocalList.push(project2);
projects.component(projectLocalList);
return projectLocalList;
}

let localist=sum();
