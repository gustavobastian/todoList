import './style.css';
let task = require('./tasks')


function component(){
    let contentElement=document.createElement('div') 
    let navBar= document.createElement('div'); 
    let snippetLocal = document.createTextNode("ToDo List");
    navBar.appendChild(snippetLocal);
    navBar.className="header";
    contentElement.appendChild(navBar);
    //dinamic content
    
    let mainContent= document.createElement('div'); 
    let snippetLocal2 = document.createTextNode("ToDo List");
    mainContent.className="dinamicContent";
    mainContent.appendChild(snippetLocal2);
    contentElement.appendChild(mainContent);

    //generating footer

    let footerContent=document.createElement('div');
    footerContent.className="textFooter";
    let snippetFooter = document.createTextNode("By Gustavo Bastian (2023)");       
    footerContent.appendChild(snippetFooter);
    contentElement.appendChild(footerContent);


    return contentElement;
}
document.body.appendChild(component());