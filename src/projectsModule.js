//generating projects navigation bar
function component(taskList){
    
    let contentElement=document.getElementById('projectsColumn') ;
    contentElement.className="projectsColClass";
    let title= document.createElement('div'); 
    title.className="titleName"
    let snippetLocal = document.createTextNode("Projects");
    title.appendChild(snippetLocal);
    contentElement.appendChild(title);
    //dinamic content    

    taskList.forEach(element => {
        console.log(JSON.stringify(element))

        let mainContent= document.createElement('div'); 
        mainContent.className="projectCard";
        let snippetLocal2 = document.createTextNode("Title:" + element.title);    
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

    });

    
    
    let buttonAddProject= document.createElement('div'); 
    buttonAddProject.className="buttonAddProject";
    let textButton = document.createTextNode("New");    
    buttonAddProject.appendChild(textButton);
    contentElement.appendChild(buttonAddProject);
    return contentElement;
}
module.exports= {component};