/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projectsModule.js":
/*!*******************************!*\
  !*** ./src/projectsModule.js ***!
  \*******************************/
/***/ ((module) => {

eval("const taskList=[];\n//generating projects navigation bar\nfunction component(taskList){\n    \n    let contentElement=document.getElementById('projectsColumn') ;\n    contentElement.innerHTML=\"\";\n    contentElement.className=\"projectsColClass\";\n    let title= document.createElement('div'); \n    title.className=\"titleName\"\n    let snippetLocal = document.createTextNode(\"Projects\");\n    title.appendChild(snippetLocal);\n    contentElement.appendChild(title);\n    //dinamic content    \n    let localIndex=0;\n    taskList.forEach(element => {\n        console.log(JSON.stringify(element))\n\n        let mainContent= document.createElement('div'); \n        mainContent.className=\"projectCard\";\n        mainContent.id=\"projectCard_\"+localIndex;\n        let snippetLocal2 = document.createTextNode(\"Title:\" + element.title);    \n        mainContent.appendChild(snippetLocal2);\n        \n        let buttons = document.createElement('div'); \n        buttons.className=\"projectButtons\";\n        let buttonRemoveProject= document.createElement('div'); \n        buttonRemoveProject.className=\"buttonRemoveProject\";\n        buttonRemoveProject.id=\"buttonProjectRemove_\"+localIndex;\n        let textButtonRemove = document.createTextNode(\"Del\");    \n        buttonRemoveProject.appendChild(textButtonRemove);\n        buttons.appendChild(buttonRemoveProject);\n\n        \n        \n        let buttonEditProject= document.createElement('div'); \n        buttonEditProject.className=\"buttonRemoveProject\";\n        buttonEditProject.id=\"buttonProjectEdit_\"+localIndex;\n        let textButtonEdit = document.createTextNode(\"Edit\");    \n        buttonEditProject.appendChild(textButtonEdit);\n        buttons.appendChild(buttonEditProject);\n\n\n        let buttonViewProject= document.createElement('div'); \n        buttonViewProject.className=\"buttonRemoveProject\";\n        buttonViewProject.id=\"buttonProjectView_\"+localIndex;\n        let text = document.createTextNode(\"View\");    \n        buttonViewProject.appendChild(text);\n        buttons.appendChild(buttonViewProject);\n\n        mainContent.appendChild(buttons);\n        contentElement.appendChild(mainContent);\n\n\n        localIndex++;\n    });\n\n    \n    \n    let buttonAddProject= document.createElement('div'); \n    buttonAddProject.className=\"buttonAddProject\";\n    let textButton = document.createTextNode(\"New\");    \n    buttonAddProject.id=\"buttonAddProject_\"+0;\n    buttonAddProject.appendChild(textButton);\n    contentElement.appendChild(buttonAddProject);\n    //adding event listeners for buttons\n    for (let d=0;d<(taskList.length);d++)\n    {\n        let component1=document.getElementById(\"buttonProjectView_\"+d);\n        let component2=document.getElementById(\"buttonProjectRemove_\"+d);\n        let component3=document.getElementById(\"buttonProjectEdit_\"+d);\n        component1.addEventListener(\"click\",buttonFun);\n        component2.addEventListener(\"click\",buttonFun);\n        component3.addEventListener(\"click\",buttonFun);\n    }\n\n    let component4=document.getElementById(\"buttonAddProject_0\");\n    component4.addEventListener(\"click\",buttonFun);\n    \n    return contentElement;\n}\n\nfunction buttonFun(x){\n    let localId=x.srcElement.id;\n    let indentification=localId.split(\"_\");\n\n    if(indentification[0]==\"buttonAddProject\"){\n        addingNewProject();\n        return;\n    }\n    else{\n        if(indentification[0]==\"buttonProjectRemove\"){\n            removeProject(indentification[1]);        }\n        else{\n            if(indentification[0]==\"buttonProjectView\"){\n                viewProject(indentification[1]);\n            }\n            else{\n                console.log(\"edit\")\n            }\n        }\n    }\n}\n\nfunction addingNewProject(){\n    console.log(\"adding new project\")\n}\nasync function removeProject(id){\n    console.log(\"removing project \"+id)\n    let response=(confirm(\"are you shure?\"));\n    if(response==true){\n        let newTasklist=[];\n        for(let index=0;index<taskList.length;index++){\n            if(id!=index){\n                newTasklist.push(taskList[i]);\n            }\n        }\n        taskList=newTasklist;\n        component(taskList);\n    }\n    \n}\nfunction viewProject(id){\n\n    console.log(\"view project \"+id)\n}\n\nmodule.exports= {component,taskList};\n\n//# sourceURL=webpack://todolist/./src/projectsModule.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/projectsModule.js");
/******/ 	
/******/ })()
;