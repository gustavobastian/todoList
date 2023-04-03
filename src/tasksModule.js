

let projectsLocal = require('./projects')
let projectForm = require('./projectForm')
let listProjectservice=require('./listService')
let taskList=listProjectservice();
const PubSub = require('pubsub-js');


function componentTasks(serviceList,projectId){        


    let localTitle;
    let localDescription;
    
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

    
    let index=0;
    serviceList.listService[projectId].TasksList.forEach(element => {
        console.log(element);
        let cardTask= document.createElement('div');         
        cardTask.className="cardTask"
        cardTask.id="cardTask_"+index;
        let snippetLocal4 = document.createTextNode("Task name: "+element.title);
        cardTask.appendChild(snippetLocal4);    
        allTasks.appendChild(cardTask);
        index++;
    });

    contentElement.appendChild(allTasks);
}

module.exports= {componentTasks};