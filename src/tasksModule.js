

let projectsLocal = require('./projects')
let projectForm = require('./projectForm')
let listProjectservice=require('./listService')
let taskList=listProjectservice();
const PubSub = require('pubsub-js');
const listService = require('./listService');
let taskForm = require('./taskForm')



function componentTasks(serviceList,projectId){        

    console.log(serviceList.listService[projectId])
    
    let contentElement=document.getElementById('tasksColumn') ;
    contentElement.innerHTML="";
    contentElement.className="projectsColClass";
    

    let allTasks=document.createElement('div'); 
    allTasks.className="allTasks";

    let taskForms=document.createElement('div'); 
    taskForms.className="taskForm";
    taskForms.id="taskForm";
    allTasks.appendChild(taskForms);

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

    let topButtonsTasks= document.createElement('div');          
    topButtonsTasks.className="topButtonsTasks";

    let buttonNewTask= document.createElement('div');          
    buttonNewTask.id="buttonNewTask";        
    buttonNewTask.className="newButton";
    let textNewTask = document.createTextNode("New");        
    buttonNewTask.appendChild(textNewTask);   
    topButtonsTasks.appendChild(buttonNewTask);

    let clearDone= document.createElement('div');          
    clearDone.id="clearDone";        
    clearDone.className="newButton";
    let textClear = document.createTextNode("Clean");        
    clearDone.appendChild(textClear);   
    topButtonsTasks.appendChild(clearDone);

    allTasks.appendChild(topButtonsTasks);

    serviceList.listService[projectId].TasksList.forEach(element => {        
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
        
        let cardTask_4= document.createElement('div');  
        let dueDate = document.createTextNode("Task dueDate: "+(element.dueDate).slice(0, 10));        
        cardTask_4.className="card_text"        
        cardTask_4.appendChild(dueDate);        
        cardTask.appendChild(cardTask_4);   
        
        let buttonsTasks= document.createElement('div');  
        buttonsTasks.className="buttonsTasks";
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

        buttonsTasks.appendChild(button_delete);  
        buttonsTasks.appendChild(button_edit);  

        //checkdone
        let checkdone= document.createElement('div');  
        checkdone.className="checkdone";
        let labelCheckTitle= document.createElement('label');
        labelCheckTitle.className="labelsChecks";
        labelCheckTitle.HTMLfor="check";
        labelCheckTitle.id="labelCheck_"+index;
        labelCheckTitle.innerText="Done:";
    
        let check = document.createElement("input")
        check.type="checkbox";
        check.id="taskCheck_"+index;

        if(element.checklist===true)
        {
            check.checked=true;
        }

        checkdone.appendChild(labelCheckTitle);  
        checkdone.appendChild(check);  
        buttonsTasks.appendChild(checkdone);  

        cardTask.appendChild(buttonsTasks);  

        allTasks.appendChild(cardTask);
        index++;
    });


    contentElement.appendChild(allTasks);



    ///adding listeners

    //new and clear buttons
    let newTasksButton=document.getElementById("buttonNewTask");
    newTasksButton.addEventListener("click",function(){
        console.log("new tasks")
        taskForm.componentTaskForm(serviceList,projectId);
    });
    let clearButton=document.getElementById("clearDone");
    clearButton.addEventListener("click",function(){
        console.log("clearDone")

        let response=(confirm("are you shure?"));
        if(response===true){
            serviceList.listService[projectId].removeDone();
            componentTasks(serviceList,projectId);    
        }
    });
    
    for (let index2=0;index2<index;index2++)
    {
        let deleteButton=document.getElementById("buttonDelTask_"+index2)
        deleteButton.addEventListener("click",function(){   
            console.log(serviceList.listService[projectId]);

            let response=(confirm("are you shure?"));
            if(response===true){
                serviceList.listService[projectId].removeTask(index2);                     
                refreshTasks();
            }



        });
        
        let editButton=document.getElementById("buttonEditTask_"+index2)
        editButton.addEventListener("click",function(){            
            console.log("edit:" + index2)
        });

        let checkTick=document.getElementById("taskCheck_"+index2)
        checkTick.addEventListener("change",function(){            
            console.log("checked:" + index2)
            serviceList.listService[projectId].taskDone(index2);
        });
        
    }
    //subscribing for refreshing after change
    PubSub.subscribe('taskUpdate', refreshTasks);
   
    function refreshTasks(){                    
        componentTasks(serviceList,projectId)
    } 
    
    
}



module.exports= {componentTasks};