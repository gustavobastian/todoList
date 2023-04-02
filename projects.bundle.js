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

eval("\nconst projects = function (Title,Description) {\n    let title=Title;\n    let description=Description;\n    let TasksList = [];\n    \n    async function addTask(task){\n        await this.TasksList.push(task);\n        console.log(\"here\")        \n    }\n    \n    function findIndex(task){\n        for (let index=0;index<this.TasksList.size;index++)\n            if(task==TasksList[index])\n                {return index;}\n        \n        return -1;        \n    }\n\n    return {\n        title,\n        description,\n        TasksList,\n        addTask,\n        findIndex\n    }\n}\n\nmodule.exports=projects;\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projects.js"));
/******/ }
]);