import './style.css';
let task = require('./tasks')


function component(){
    let contentElement=document.createElement('div') 
    let navBar= document.createElement('div'); 
    let snippetLocal = document.createTextNode("ToDo List");
    navBar.appendChild(snippetLocal);
    contentElement.appendChild(navBar);
    return contentElement;
}
document.body.appendChild(component());