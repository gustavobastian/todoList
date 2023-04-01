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

eval("//generating projects navigation bar\nfunction component(){\n    let contentElement=document.getElementById('projectsColumn') ;\n    contentElement.className=\"projectsColClass\";\n    let title= document.createElement('div'); \n    title.className=\"titleName\"\n    let snippetLocal = document.createTextNode(\"Projects\");\n    title.appendChild(snippetLocal);\n    contentElement.appendChild(title);\n    //dinamic content    \n    let mainContent= document.createElement('div'); \n    mainContent.className=\"projectCard\";\n    let snippetLocal2 = document.createTextNode(\"ToDo List\");    \n    mainContent.appendChild(snippetLocal2);\n    \n    let buttons = document.createElement('div'); \n    buttons.className=\"projectButtons\";\n    let buttonRemoveProject= document.createElement('div'); \n    buttonRemoveProject.className=\"buttonRemoveProject\";\n    let textButtonRemove = document.createTextNode(\"remove\");    \n    buttonRemoveProject.appendChild(textButtonRemove);\n    buttons.appendChild(buttonRemoveProject);\n\n\n    let buttonViewProject= document.createElement('div'); \n    buttonViewProject.className=\"buttonRemoveProject\";\n    let text = document.createTextNode(\"view\");    \n    buttonViewProject.appendChild(text);\n    buttons.appendChild(buttonViewProject);\n\n    mainContent.appendChild(buttons);\n    contentElement.appendChild(mainContent);\n\n    let mainContent2= document.createElement('div'); \n    mainContent2.className=\"projectCard\";\n    let snippetLocal3 = document.createTextNode(\"ToDo List\");    \n    mainContent2.appendChild(snippetLocal3);\n    contentElement.appendChild(mainContent2);\n\n\n    let buttonAddProject= document.createElement('div'); \n    buttonAddProject.className=\"buttonAddProject\";\n    let textButton = document.createTextNode(\"New\");    \n    buttonAddProject.appendChild(textButton);\n    contentElement.appendChild(buttonAddProject);\n    return contentElement;\n}\nmodule.exports= {component};\n\n//# sourceURL=webpack://todolist/./src/projectsModule.js?");

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