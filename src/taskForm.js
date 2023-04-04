let listProjectservice=require('./listService')
let taskListService=listProjectservice();
let projectsLocal = require('./projects')
let taskMod = require('./tasks')


function componentTaskForm(serviceList,projectId){        
    
    let localTitle;
    let localDescription;

    let contentElement=document.getElementById('taskForm') ;
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
    /*console.log(serviceList.listService[1])*/
    /*if(mode==1){
        inputTitle2.value=serviceList.listService[id].title;
    }*/
    formularyTask.appendChild(labelTaskTitle);
    formularyTask.appendChild(inputTaskTitle2);


    let labelTaskDescription= document.createElement('label');
    labelTaskDescription.className="labelsForms";
    labelTaskDescription.HTMLfor="inputTaskDescription";
    labelTaskDescription.id="labelTaskDescription";
    labelTaskDescription.innerText="Description:";
    let inputTaskDescription= document.createElement('textarea'); 
    inputTaskDescription.id="inputTaskDescription";
    inputTaskDescription.className="inputForms";
    inputTaskDescription.rows="10";
    inputTaskDescription.cols="auto";
   /* if(mode==1){
        inputDescription.value=serviceList.listService[id].description;
    }*/
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
    
    formularyTask.appendChild(labelTaskDueDate);
    formularyTask.appendChild(inputTaskDueDate);

    let buttonsForms=document.createElement('div'); 
    let buttonCancel=document.createElement('button'); 
    buttonsForms.className="taskButtons";

    buttonCancel.id="cancelTask";
    buttonCancel.innerHTML="CANCEL";
    let buttonOK=document.createElement('button'); 
    buttonOK.innerHTML = "OK";
    /*if(mode==0){
        buttonOK.innerHTML = "ADD";
    }
    else{
        buttonOK.innerHTML = "UPDATE";
    }*/
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

    function textChange(x){
        console.log(x);
        if(x.srcElement.id=="inputTaskTitle")
        {
            localTitle=x.srcElement.value;
        }
        else{
            localDescription=x.srcElement.value;
        }
    }


    function buttonFunctionTask(x){
        console.log(x.srcElement.id);
        let localtask=taskMod();
        localtask.title="seven";
        localtask.priority="high"
        localtask.dueDate= new Date().toISOString();
        localtask.description="Organize the notes."
        localtask.checklist=false;

        if(x.srcElement.id=="cancelTask"){
            contentElement.innerHTML=" ";                        
            return 
        }
        else{
            console.log("sending");   

            serviceList.listService[projectId].addTask(localtask);
            let contentElementLocal=document.getElementById('taskForm');
            contentElementLocal.innerHTML=" ";
            
        }
    } 
}

module.exports= {componentTaskForm};