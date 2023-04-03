

let projectsLocal = require('./projects')
let projectForm = require('./projectForm')
let listProjectservice=require('./listService')
let taskList=listProjectservice();
const PubSub = require('pubsub-js');


function componentTasks(serviceList,projectId){        
    
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
        
        let cardTask_1= document.createElement('div');  
        let title_task = document.createTextNode("Task name: "+element.title);
        cardTask_1.className="card_title"
        cardTask_1.appendChild(title_task);    
        cardTask.appendChild(cardTask_1);    

        let cardTask_2= document.createElement('div');  
        let text_task = document.createTextNode("Task description: "+element.description);        
        cardTask_2.appendChild(text_task);   
        cardTask_2.className="card_text"
        cardTask.appendChild(cardTask_2);    
        
        let cardTask_3= document.createElement('div');  
        let ranking_task = document.createTextNode("Task Priority: "+element.priority);        
        cardTask_3.className="card_text"        
        cardTask_3.appendChild(ranking_task);        
        cardTask.appendChild(cardTask_3);       
        
        //buttons
        let button_delete= document.createElement('div');          
        button_delete.id="buttonDelTask_"+index;        
        button_delete.className="taskButton";
        let textDelButton = document.createTextNode("Delete");        
        button_delete.appendChild(textDelButton);   
        let button_edit= document.createElement('div');  
        button_edit.id="buttonEditTask_"+index;
        button_edit.className="taskButton";
        let textEditButton = document.createTextNode("Edit");        
        button_edit.appendChild(textEditButton);   
        cardTask.appendChild(button_delete);  
        cardTask.appendChild(button_edit);  

        //checkdone
        let labelCheckTitle= document.createElement('label');
        labelCheckTitle.className="labelsChecks";
        labelCheckTitle.HTMLfor="check";
        labelCheckTitle.id="labelCheck_"+index;
        labelCheckTitle.innerText="Done:";
    
        let check = document.createElement("input")
        check.type="checkbox";
        check.id="taskCheck_"+index;
        cardTask.appendChild(labelCheckTitle);  
        cardTask.appendChild(check);  

        allTasks.appendChild(cardTask);
        index++;
    });

    contentElement.appendChild(allTasks);
}

module.exports= {componentTasks};