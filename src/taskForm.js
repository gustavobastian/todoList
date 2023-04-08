let listProjectservice=require('./listService')
let taskListService=listProjectservice();
let taskMod = require('./tasks')


function componentTaskForm(serviceList,projectId,mode,taskId){        
    let localtask;
    if(mode==0){
        localtask=taskMod();
    }
    else{
        localtask=serviceList.listService[projectId].getTask(taskId);
    }
    
    let contentElement=document.getElementById('tasksColumn') ;
    contentElement.innerHTML=" ";
    let formularyTask=document.createElement('div'); 
    formularyTask.className="formsTask";
    let title= document.createElement('div'); 
    title.className="titleTaskName"
    let textTask = document.createTextNode("New task");
    title.appendChild(textTask);    
    title.style.cssText="background:transparent;display:flex;";
    formularyTask.appendChild(title);

    let labelTaskTitle= document.createElement('label');
    labelTaskTitle.className="labelsForms";
    labelTaskTitle.HTMLfor="inputTaskTitle2";
    labelTaskTitle.id="labelTaskTitle";
    labelTaskTitle.innerText="Title:";
    let inputTaskTitle2= document.createElement('input'); 
    inputTaskTitle2.id="inputTaskTitle";
    inputTaskTitle2.className="inputForms";
    if(mode==1){//if editing default value
        inputTaskTitle2.value=localtask.title;
    }
    formularyTask.appendChild(labelTaskTitle);
    formularyTask.appendChild(inputTaskTitle2);


    let labelTaskDescription= document.createElement('label');
    labelTaskDescription.className="labelsForms";
    labelTaskDescription.HTMLfor="inputTaskDescription";
    labelTaskDescription.id="labelTaskDescription";
    labelTaskDescription.innerText="Description:";
    let inputTaskDescription= document.createElement('textarea'); 
    inputTaskDescription.id="inputTaskDescription";
    inputTaskDescription.required="true";
    inputTaskDescription.className="inputForms";
    inputTaskDescription.rows="10";
    inputTaskDescription.cols="auto";
    if(mode==1){
        inputTaskDescription.value=localtask.description;
    }
    formularyTask.appendChild(labelTaskDescription);
    formularyTask.appendChild(inputTaskDescription);


    let labelTaskDueDate= document.createElement('label');
    labelTaskDueDate.className="labelsForms";
    labelTaskDueDate.HTMLfor="labelTaskDueDate";
    labelTaskDueDate.id="labelTaskDueDate";
    labelTaskDueDate.innerText="DueDate:";
    let inputTaskDueDate= document.createElement('input'); 
    inputTaskDueDate.id="inputTaskDueDate";
    inputTaskDueDate.type="date";
    if(mode==1){
        inputTaskDueDate.value=localtask.dueDate;
    }
    formularyTask.appendChild(labelTaskDueDate);
    formularyTask.appendChild(inputTaskDueDate);

    let labelTaskPriority= document.createElement('label');
    labelTaskPriority.className="labelsForms";
    labelTaskPriority.HTMLfor="inputTaskPriority";
    labelTaskPriority.id="labelTaskPriority";
    labelTaskPriority.innerText="Priority:";

    let inputTaskPriority= document.createElement('select'); 
    inputTaskPriority.id="inputTaskPriority";    
    let priorityLow = document.createElement('option'); 
    priorityLow.value="low";
    priorityLow.text="low";
    let priorityMedium = document.createElement('option'); 
    priorityMedium.value="medium";
    priorityMedium.text="medium";
    let priorityHigh = document.createElement('option'); 
    priorityHigh.value="high";
    priorityHigh.text="high";
    
    if(mode==1){
        inputTaskPriority.value=localtask.priority;
    }


    inputTaskPriority.appendChild(priorityLow);
    inputTaskPriority.appendChild(priorityMedium);
    inputTaskPriority.appendChild(priorityHigh);
    
    formularyTask.appendChild(labelTaskPriority);
    formularyTask.appendChild(inputTaskPriority);






    let buttonsForms=document.createElement('div'); 
    let buttonCancel=document.createElement('button'); 
    buttonsForms.className="taskButtons";

    buttonCancel.id="cancelTask";
    buttonCancel.innerHTML="CANCEL";
    let buttonOK=document.createElement('button'); 
    buttonOK.innerHTML = "OK";    
    buttonOK.id="okTask";
    buttonsForms.appendChild(buttonCancel);
    buttonsForms.appendChild(buttonOK);

    formularyTask.appendChild(buttonsForms);

    contentElement.appendChild(formularyTask);


    let inputTaskTitleId=document.getElementById("inputTaskTitle");
    let inputTaskDescriptionId=document.getElementById("inputTaskDescription");
    //listeners

    let buttonTaskCancel=document.getElementById("cancelTask");
    buttonTaskCancel.addEventListener("click",buttonFunctionTask);
    let buttonTaskOK=document.getElementById("okTask");
    buttonTaskOK.addEventListener("click",buttonFunctionTask);
    



    inputTaskTitleId.addEventListener("change",textChange);
    inputTaskDescriptionId.addEventListener("change",textChange);
    inputTaskDueDate.addEventListener("change",textChange);
    inputTaskPriority.addEventListener("change",textChange);

    function textChange(x){
        console.log(x);
        if(x.srcElement.id=="inputTaskTitle"){            
            localtask.title=x.srcElement.value;
        }
        if(x.srcElement.id=="inputTaskDescription"){                
                localtask.description=x.srcElement.value;
                }
        if(x.srcElement.id=="inputTaskDueDate"){                
                localtask.dueDate= x.srcElement.value;
            }    
        if(x.srcElement.id=="inputTaskPriority"){   
            console.log(x.srcElement.value)             ;
            localtask.priority= x.srcElement.value;
        }        
        
    }


    function buttonFunctionTask(x){
        localtask.checklist=false;
        if(x.srcElement.id=="cancelTask"){
            contentElement.innerHTML=" ";                        
            PubSub.publish('taskUpdate', 'NewTask!');            
        }
        else{
            console.log("sending");   

            if(mode==1){   
                if(localtask.isValid()!=true)             
                { window.alert("some data missing")
                    return;
                }
                serviceList.listService[projectId].updateTask(taskId,localtask)
            }
            else{
                if(localtask.isValid()!=true)             
                { window.alert("some data missing")
                    return;
                }                
                serviceList.listService[projectId].addTask(localtask);
            }                      
            PubSub.publish('taskUpdate', 'NewTask!');
        }
    } 
    
}

module.exports= {componentTaskForm};