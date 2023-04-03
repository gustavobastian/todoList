

let projectsLocal = require('./projects')
let projectForm = require('./projectForm')
let listProjectservice=require('./listService')
let taskList=listProjectservice();
const PubSub = require('pubsub-js');


function componentTasks(serviceList){        

    let localTitle=" ";
    let localDescription=" ";

    let contentElement=document.getElementById('tasksColumn') ;
    contentElement.innerHTML="";
    contentElement.className="projectsColClass";

    let allTasks=document.createElement('div'); 
    allTasks.className="allTasks";

    let title= document.createElement('div'); 
    title.className="titleName"
    let snippetLocal = document.createTextNode("Project Tasks");
    title.appendChild(snippetLocal);    
    allTasks.appendChild(title);
    contentElement.appendChild(allTasks);
}

module.exports= {componentTasks};