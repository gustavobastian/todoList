

let projectsLocal = require('./projects')
let projectForm = require('./projectForm')
let listProjectservice=require('./listService')
let taskList=listProjectservice();
const PubSub = require('pubsub-js');


function componentTasks(serviceList,projectId){        


    let localTitle;
    let localDescription;
    console.log(serviceList)
    console.log(projectId)
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

    let title2= document.createElement('div'); 
    title2.className="titleProjectName"
    let snippetLocal2 = document.createTextNode("Project: "+serviceList.listService[projectId].title);
    title2.appendChild(snippetLocal2);    
    allTasks.appendChild(title2);

    let description= document.createElement('div'); 
    description.className="titleProjectName"
    let snippetLocal3 = document.createTextNode("Description: "+serviceList.listService[projectId].description);
    description.appendChild(snippetLocal3);    
    allTasks.appendChild(description);

    

    serviceList.listService[projectId].TasksList.forEach(element => {
        console.log(element)
    });

    contentElement.appendChild(allTasks);
}

module.exports= {componentTasks};