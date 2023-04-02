
function componentProject(taskList){
    
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
    let inputTitle= document.createElement('input'); 
    inputTitle.id="inputTitle";
    inputTitle.className="inputForms";
    formulary.appendChild(labelTitle);
    formulary.appendChild(inputTitle);



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

    
    function buttonFunction(x){
        console.log(x.srcElement.id);

        if(x.srcElement.id=="cancelProject"){
            contentElement.innerHTML=" ";
        }
        else{
            contentElement.innerHTML=" ";
        }
    }

 
}

module.exports= {componentProject};