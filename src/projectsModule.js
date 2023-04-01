//generating projects navigation bar
function component(){
    let contentElement=document.getElementById('projectsColumn') ;
    contentElement.className="projectsColClass";
    let title= document.createElement('div'); 
    title.className="titleName"
    let snippetLocal = document.createTextNode("Projects");
    title.appendChild(snippetLocal);
    contentElement.appendChild(title);
    //dinamic content    
    let mainContent= document.createElement('div'); 
    mainContent.className="projectCard";
    let snippetLocal2 = document.createTextNode("ToDo List");    
    mainContent.appendChild(snippetLocal2);
    
    let buttons = document.createElement('div'); 
    buttons.className="projectButtons";
    let buttonRemoveProject= document.createElement('div'); 
    buttonRemoveProject.className="buttonRemoveProject";
    let textButtonRemove = document.createTextNode("remove");    
    buttonRemoveProject.appendChild(textButtonRemove);
    buttons.appendChild(buttonRemoveProject);


    let buttonViewProject= document.createElement('div'); 
    buttonViewProject.className="buttonRemoveProject";
    let text = document.createTextNode("view");    
    buttonViewProject.appendChild(text);
    buttons.appendChild(buttonViewProject);

    mainContent.appendChild(buttons);
    contentElement.appendChild(mainContent);

    let mainContent2= document.createElement('div'); 
    mainContent2.className="projectCard";
    let snippetLocal3 = document.createTextNode("ToDo List");    
    mainContent2.appendChild(snippetLocal3);
    contentElement.appendChild(mainContent2);


    let buttonAddProject= document.createElement('div'); 
    buttonAddProject.className="buttonAddProject";
    let textButton = document.createTextNode("New");    
    buttonAddProject.appendChild(textButton);
    contentElement.appendChild(buttonAddProject);
    return contentElement;
}
module.exports= {component};