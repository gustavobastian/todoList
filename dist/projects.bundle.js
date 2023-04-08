/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["projects"],{

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((module) => {

eval("\nconst projectLocal = function () {\n    let title;\n    let description;\n    let TasksList = [];\n    async function addTask(task){\n        await this.TasksList.push(task);        \n    }\n    function getTask(taskId){        \n        console.log(\"asking for task\")\n        return this.TasksList[taskId];\n    }\n    function taskDone(id){\n        if(this.TasksList[id].getCheckList()==false){\n            this.TasksList[id].setCheckList();\n        }\n        else{\n            this.TasksList[id].unSetCheckList();\n        }\n            \n    }\n    function removeTask(id){\n        let newTask=[];        \n        for (let index=0;index<this.TasksList.length;index++){           \n            if(id!=index){\n                newTask.push(this.TasksList[index])                \n            }\n        }\n        this.TasksList=newTask;    \n    }\n    function updateTask(id,newTask){\n        this.TasksList[id]=newTask;                \n    }\n    function removeDone(){\n        let newTask=[];\n        console.log(\"removing done\")                \n        TasksList.forEach(element => {\n            if(element.checklist==false)\n                newTask.push(element)                \n        });\n        \n        this.TasksList=newTask;    \n        console.log(this.TasksList);               \n    }\n\n    function createProject(title,description,TaskListP){\n        this.title=title;\n        this.description=description;\n        TaskListP.forEach(element => {\n            this.TasksList.push(element)\n        });\n\n    }\n\n    function isValid(){\n        if(this.title==null || this.title==\" \" || this.description==null || this.description== \" \"){\n            return false;\n        }        \n        else{\n            return true;\n        }\n        \n    }\n    return {\n        title,\n        description,\n        TasksList,\n        addTask,        \n        getTask,\n        isValid,\n        removeTask,\n        removeDone,\n        createProject,\n        updateTask,\n        taskDone\n    }\n}\n\nmodule.exports=projectLocal;\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projects.js"));
/******/ }
]);