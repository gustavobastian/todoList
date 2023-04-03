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

/***/ "./src/listService.js":
/*!****************************!*\
  !*** ./src/listService.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let tasks= __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\")\nlet project=__webpack_require__(/*! ./projects.js */ \"./src/projects.js\")\n\nconst listService = function () {\n    let listService=[];\n\n    function addProject(project){\n        this.listService.push(project);\n    }\n\n    function removeProject(id){\n        console.log(\"removing \"+id)\n        if (id<0 || id> listService.length)\n        {\n            console.log(\"error project index out of size!!!\");            \n        }\n        else{\n            let newlistService=[];\n            for(let index=0;index<listService.length;index++){\n                if(id!=index){\n                    newlistService.push(listService[index]);\n                }\n            }\n            this.listService=newlistService;\n        }\n    }\n\n    return {\n        listService,\n        addProject,\n        removeProject\n    };\n}   \n\nmodule.exports=listService;\n\n//# sourceURL=webpack://todolist/./src/listService.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((module) => {

eval("\nconst projects = function (Title,Description) {\n    let title=Title;\n    let description=Description;\n    let TasksList = [];\n    \n    async function addTask(task){\n        await this.TasksList.push(task);\n        console.log(\"here\")        \n    }\n    \n    function findIndex(task){\n        for (let index=0;index<this.TasksList.size;index++)\n            if(task==TasksList[index])\n                {return index;}\n        \n        return -1;        \n    }\n\n    return {\n        title,\n        description,\n        TasksList,\n        addTask,\n        findIndex\n    }\n}\n\nmodule.exports=projects;\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((module) => {

eval("\nconst task = function (Title,Description,DueDate,Priority,Note) {\n    let title=Title;\n    let description=Description;\n    let dueDate=DueDate;\n    let priority=Priority;\n    let note=Note;\n    let checklist=false;\n\n    const writeNote=function(note){\n        this.note=note;\n    }\n    const setCheckList=function (){\n        this.checklist=true;\n    }\n    const unSetCheckList=function (){\n        this.checklist=false;\n    }\n\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        note,\n        checklist,\n        writeNote,\n        setCheckList,\n        unSetCheckList\n    }\n}\n\nmodule.exports=task;\n    \n\n\n//# sourceURL=webpack://todolist/./src/tasks.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/listService.js");
/******/ 	
/******/ })()
;