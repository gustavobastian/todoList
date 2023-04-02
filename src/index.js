import './style.css';
import PubSub from 'pubsub-js'


let taskMod = require('./tasks')
let projects = require('./projectsModule')
let projectsLocal = require('./projects')



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
    let task2= taskMod();
    task2.title="two";
    list.addTask(task);
    list.addTask(task2);    
    
    return list;
    }
/**
 * generating project list 2
 */
async function All2(){
    let list= projectsLocal();
    list.title="Project 2";
    list.description="few things to do";
    let task= taskMod();
    task.title="three";    
    let task2= taskMod();
    task2.title="four";
    list.addTask(task);    
    list.addTask(task2);    
    return list;
    }



async function sum(){
let projectLocalList=[];
let project1= await All();
let project2= await All2();
projectLocalList.push(project1);
projectLocalList.push(project2);
projects.component(projectLocalList);
return projectLocalList;
}

let localist=sum();
/*

// create a function to subscribe to topics
let mySubscriber = function (msg, data) {
    console.log( msg, data );
};

// add the function to the list of subscribers for a particular topic
// we're keeping the returned token, in order to be able to unsubscribe
// from the topic later on
let token = PubSub.subscribe('MY TOPIC', mySubscriber);
*/