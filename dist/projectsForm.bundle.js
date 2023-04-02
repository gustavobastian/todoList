/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["projectsForm"],{

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((module) => {

eval("\nfunction componentProject(taskList){\n    \n    let contentElement=document.getElementById('tasksColumn') ;\n    contentElement.innerHTML=\"\";\n    contentElement.className=\"projectsColClass\";\n\n    let formulary=document.createElement('div'); \n    formulary.className=\"formsFormulary\"\n\n    let title= document.createElement('div'); \n    title.className=\"titleName\"\n    let snippetLocal = document.createTextNode(\"New Project Form\");\n    title.appendChild(snippetLocal);    \n    formulary.appendChild(title);\n\n\n    let labelTitle= document.createElement('label');\n    labelTitle.className=\"labelsForms\";\n    labelTitle.HTMLfor=\"inputTitle\";\n    labelTitle.id=\"labelProjectTitle\";\n    labelTitle.innerText=\"Title:\";\n    let inputTitle= document.createElement('input'); \n    inputTitle.id=\"inputTitle\";\n    inputTitle.className=\"inputForms\";\n    formulary.appendChild(labelTitle);\n    formulary.appendChild(inputTitle);\n\n\n\n    let labelDescription= document.createElement('label');\n    labelDescription.className=\"labelsForms\";\n    labelDescription.HTMLfor=\"inputDecription\";\n    labelDescription.id=\"labelProjectDescription\";\n    labelDescription.innerText=\"Description:\";\n    let inputDescription= document.createElement('textarea'); \n    inputDescription.id=\"inputDescription\";\n    inputDescription.className=\"inputForms\";\n    inputDescription.rows=\"50\";\n    inputDescription.cols=\"auto\";\n    formulary.appendChild(labelDescription);\n    formulary.appendChild(inputDescription);\n\n\n    let separation= document.createElement('div'); \n    separation.className=\"separation\"\n    formulary.appendChild(separation);\n\n\n    let buttonsForms=document.createElement('div'); \n    let buttonCancel=document.createElement('button'); \n    buttonsForms.className=\"projectButtons\";\n\n    buttonCancel.id=\"cancelProject\";\n    buttonCancel.innerHTML=\"CANCEL\";\n    let buttonOK=document.createElement('button'); \n    buttonOK.innerHTML = \"ADD\";\n    buttonOK.id=\"okProject\";\n    buttonsForms.appendChild(buttonCancel);\n    buttonsForms.appendChild(buttonOK);\n\n    formulary.appendChild(buttonsForms);\n\n\n    contentElement.appendChild(formulary);\n\n    //adding listeners\n\n    let buttonProjectCancel=document.getElementById(\"cancelProject\");\n    buttonProjectCancel.addEventListener(\"click\",buttonFunction);\n    let buttonProjectOK=document.getElementById(\"okProject\");\n    buttonProjectOK.addEventListener(\"click\",buttonFunction);\n\n    \n    function buttonFunction(x){\n        console.log(x.srcElement.id);\n\n        if(x.srcElement.id==\"cancelProject\"){\n            contentElement.innerHTML=\" \";\n        }\n        else{\n            contentElement.innerHTML=\" \";\n        }\n    }\n\n \n}\n\nmodule.exports= {componentProject};\n\n//# sourceURL=webpack://todolist/./src/projectForm.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectForm.js"));
/******/ }
]);