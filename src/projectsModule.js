

let projectsLocal = require('./projects')
let projectForm = require('./projectForm')
let listProjectservice=require('./listService')
let tasksModule=require('./tasksModule')
let taskList=listProjectservice();
const PubSub = require('pubsub-js');


//generating projects navigation bar
function component(serviceList){
    
    taskList=serviceList;    
    

    //generating project columns elements
    let contentElement=document.getElementById('projectsColumn') ;
    contentElement.innerHTML="";
    contentElement.className="projectsColClass";
    let title= document.createElement('div'); 
    title.className="titleName"
    let snippetLocal = document.createTextNode("Projects");
    title.appendChild(snippetLocal);
    contentElement.appendChild(title);
    
    //dinamic content    
    let localIndex=0;

    //generating each project card
    taskList.listService.forEach(element => {
        console.log(JSON.stringify(element))

        let mainContent= document.createElement('div'); 
        mainContent.className="projectCard";
        mainContent.id="projectCard_"+localIndex;
        let snippetLocal2 = document.createTextNode("Title:" + element.title);    
        mainContent.appendChild(snippetLocal2);
        
        let buttons = document.createElement('div'); 
        buttons.className="projectButtons";
        let buttonRemoveProject= document.createElement('div'); 
        buttonRemoveProject.className="buttonRemoveProject";
        buttonRemoveProject.id="buttonProjectRemove_"+localIndex;
        let textButtonRemove = document.createTextNode("Del");    
        buttonRemoveProject.appendChild(textButtonRemove);
        buttons.appendChild(buttonRemoveProject);

        
        
        let buttonEditProject= document.createElement('div'); 
        buttonEditProject.className="buttonRemoveProject";
        buttonEditProject.id="buttonProjectEdit_"+localIndex;
        let textButtonEdit = document.createTextNode("Edit");    
        buttonEditProject.appendChild(textButtonEdit);
        buttons.appendChild(buttonEditProject);


        let buttonViewProject= document.createElement('div'); 
        buttonViewProject.className="buttonRemoveProject";
        buttonViewProject.id="buttonProjectView_"+localIndex;
        let text = document.createTextNode("View");    
        buttonViewProject.appendChild(text);
        buttons.appendChild(buttonViewProject);

        mainContent.appendChild(buttons);
        contentElement.appendChild(mainContent);


        localIndex++;
    });

    //"New" button    
    let buttonAddProject= document.createElement('div'); 
    buttonAddProject.className="buttonAddProject";
    let textButton = document.createTextNode("New");    
    buttonAddProject.id="buttonAddProject_"+0;
    buttonAddProject.appendChild(textButton);
    contentElement.appendChild(buttonAddProject);

    //adding event listeners for buttons
    for (let d=0;d<(taskList.listService.length);d++)
    {
        let component1=document.getElementById("buttonProjectView_"+d);
        let component2=document.getElementById("buttonProjectRemove_"+d);
        let component3=document.getElementById("buttonProjectEdit_"+d);
        component1.addEventListener("click",buttonFun);
        component2.addEventListener("click",buttonFun);
        component3.addEventListener("click",buttonFun);
    }

    let component4=document.getElementById("buttonAddProject_0");
    component4.addEventListener("click",buttonFun);

    function buttonFun(x){
        console.log("clicked")
        let localId=x.srcElement.id;
        let indentification=localId.split("_");
    
        if(indentification[0]=="buttonAddProject"){
            addingNewProject();            
        }
        else{
            if(indentification[0]=="buttonProjectRemove"){
                console.log("here")
                removeProject(indentification[1]);        
            }
            else{
                if(indentification[0]=="buttonProjectView"){
                    viewProject(indentification[1]);
                }
                else{
                    console.log("edit")
                }
            }
        }
    }
    //subscribing for refreshing after change
    PubSub.subscribe('projectUpdates', refresh);

    async function removeProject(id){
        console.log("removing project "+id)
        let response=(confirm("are you shure?"));
        if(response===true){
            taskList.removeProject(id);            
            component(taskList);
        }
        
    }

    function addingNewProject(){
        console.log("adding new project");       
        projectForm.componentProject(taskList);
    }

    function refresh(){            
        component(taskList);
    }
    
    function viewProject(id){
    
        console.log("view project "+id)
        tasksModule.componentTasks(taskList,1);

    }
    

    
    return contentElement;
}



module.exports= {component,taskList};