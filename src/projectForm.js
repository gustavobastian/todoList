let listProjectservice=require('./listService')
let taskListService=listProjectservice();
let projectsLocal = require('./projects')



function componentProject(serviceList){        

    let localTitle=" ";
    let localDescription=" ";

    let contentElement=document.getElementById('tasksColumn') ;
    contentElement.innerHTML="";
    contentElement.className="projectsColClass";

    let formulary=document.createElement('div'); 
    formulary.className="formsFormulary"

    let title= document.createElement('div'); 
    title.className="titleName"
    let snippetLocal = document.createTextNode("New Project Form");
    title.appendChild(snippetLocal);    
    formulary.appendChild(title);


    let labelTitle= document.createElement('label');
    labelTitle.className="labelsForms";
    labelTitle.HTMLfor="inputTitle";
    labelTitle.id="labelProjectTitle";
    labelTitle.innerText="Title:";
    let inputTitle2= document.createElement('input'); 
    inputTitle2.id="inputTitle";
    inputTitle2.className="inputForms";
    formulary.appendChild(labelTitle);
    formulary.appendChild(inputTitle2);



    let labelDescription= document.createElement('label');
    labelDescription.className="labelsForms";
    labelDescription.HTMLfor="inputDecription";
    labelDescription.id="labelProjectDescription";
    labelDescription.innerText="Description:";
    let inputDescription= document.createElement('textarea'); 
    inputDescription.id="inputDescription";
    inputDescription.className="inputForms";
    inputDescription.rows="50";
    inputDescription.cols="auto";
    formulary.appendChild(labelDescription);
    formulary.appendChild(inputDescription);
    

    let separation= document.createElement('div'); 
    separation.className="separation"
    formulary.appendChild(separation);


    let buttonsForms=document.createElement('div'); 
    let buttonCancel=document.createElement('button'); 
    buttonsForms.className="projectButtons";

    buttonCancel.id="cancelProject";
    buttonCancel.innerHTML="CANCEL";
    let buttonOK=document.createElement('button'); 
    buttonOK.innerHTML = "ADD";
    buttonOK.id="okProject";
    buttonsForms.appendChild(buttonCancel);
    buttonsForms.appendChild(buttonOK);

    formulary.appendChild(buttonsForms);
    contentElement.appendChild(formulary);
    //adding listeners
    let buttonProjectCancel=document.getElementById("cancelProject");
    buttonProjectCancel.addEventListener("click",buttonFunction);
    let buttonProjectOK=document.getElementById("okProject");
    buttonProjectOK.addEventListener("click",buttonFunction);
    
    let inputTitleId=document.getElementById("inputTitle");
    let inputDescriptionId=document.getElementById("inputDescription");

    inputTitleId.addEventListener("change",textChange);
    inputDescriptionId.addEventListener("change",textChange);

    function textChange(x){
        console.log(x);
        if(x.srcElement.id=="inputTitle")
        {
            localTitle=x.srcElement.value;
        }
        else{
            localDescription=x.srcElement.value;
        }
    }

    
    function buttonFunction(x){
        console.log(x.srcElement.id);

        if(x.srcElement.id=="cancelProject"){
            contentElement.innerHTML=" ";            
            PubSub.publish('projectUpdates', 'nothing');
            return (serviceList)
        }
        else{
            console.log("sending");
            contentElement.innerHTML=" ";
            let newProject=projectsLocal();
            newProject.title=localTitle;
            newProject.description=localDescription;
            serviceList.addProject(newProject);
            PubSub.publish('projectUpdates', 'NewProject!');
            return (serviceList)
            
        }
    }
 
}

module.exports= {componentProject};