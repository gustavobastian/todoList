/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["projectsModule"],{

/***/ "./src/projectsModule.js":
/*!*******************************!*\
  !*** ./src/projectsModule.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nlet projectsLocal = __webpack_require__(/*! ./projects */ \"./src/projects.js\")\nlet projectForm = __webpack_require__(/*! ./projectForm */ \"./src/projectForm.js\")\nlet listProjectservice=__webpack_require__(/*! ./listService */ \"./src/listService.js\")\nlet tasksModule=__webpack_require__(/*! ./tasksModule */ \"./src/tasksModule.js\")\nlet taskList=listProjectservice();\nconst PubSub = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n\n\n//generating projects navigation bar\nfunction component(serviceList){\n    \n    taskList=serviceList;    \n    \n\n    //generating project columns elements\n    let contentElement=document.getElementById('projectsColumn') ;\n    contentElement.innerHTML=\"\";\n    contentElement.className=\"projectsColClass\";\n    let title= document.createElement('div'); \n    title.className=\"titleName\"\n    let snippetLocal = document.createTextNode(\"Projects\");\n    title.appendChild(snippetLocal);\n    contentElement.appendChild(title);\n    \n    //dinamic content    \n    let localIndex=0;\n\n    //generating each project card\n    taskList.listService.forEach(element => {\n        console.log(JSON.stringify(element))\n\n        let mainContent= document.createElement('div'); \n        mainContent.className=\"projectCard\";\n        mainContent.id=\"projectCard_\"+localIndex;\n        let snippetLocal2 = document.createTextNode(\"Title:\" + element.title);    \n        mainContent.appendChild(snippetLocal2);\n        \n        let buttons = document.createElement('div'); \n        buttons.className=\"projectButtons\";\n        let buttonRemoveProject= document.createElement('div'); \n        buttonRemoveProject.className=\"buttonRemoveProject\";\n        buttonRemoveProject.id=\"buttonProjectRemove_\"+localIndex;\n        let textButtonRemove = document.createTextNode(\"Del\");    \n        buttonRemoveProject.appendChild(textButtonRemove);\n        buttons.appendChild(buttonRemoveProject);\n\n        \n        \n        let buttonEditProject= document.createElement('div'); \n        buttonEditProject.className=\"buttonRemoveProject\";\n        buttonEditProject.id=\"buttonProjectEdit_\"+localIndex;\n        let textButtonEdit = document.createTextNode(\"Edit\");    \n        buttonEditProject.appendChild(textButtonEdit);\n        buttons.appendChild(buttonEditProject);\n\n\n        let buttonViewProject= document.createElement('div'); \n        buttonViewProject.className=\"buttonRemoveProject\";\n        buttonViewProject.id=\"buttonProjectView_\"+localIndex;\n        let text = document.createTextNode(\"View\");    \n        buttonViewProject.appendChild(text);\n        buttons.appendChild(buttonViewProject);\n\n        mainContent.appendChild(buttons);\n        contentElement.appendChild(mainContent);\n\n\n        localIndex++;\n    });\n\n    //\"New\" button    \n    let buttonAddProject= document.createElement('div'); \n    buttonAddProject.className=\"buttonAddProject\";\n    let textButton = document.createTextNode(\"New\");    \n    buttonAddProject.id=\"buttonAddProject_\"+0;\n    buttonAddProject.appendChild(textButton);\n    contentElement.appendChild(buttonAddProject);\n\n    //adding event listeners for buttons\n    for (let d=0;d<(taskList.listService.length);d++)\n    {\n        let component1=document.getElementById(\"buttonProjectView_\"+d);\n        let component2=document.getElementById(\"buttonProjectRemove_\"+d);\n        let component3=document.getElementById(\"buttonProjectEdit_\"+d);\n        component1.addEventListener(\"click\",buttonFun);\n        component2.addEventListener(\"click\",buttonFun);\n        component3.addEventListener(\"click\",buttonFun);\n    }\n\n    let component4=document.getElementById(\"buttonAddProject_0\");\n    component4.addEventListener(\"click\",buttonFun);\n\n    function buttonFun(x){\n        console.log(\"clicked\")\n        let localId=x.srcElement.id;\n        let indentification=localId.split(\"_\");\n    \n        if(indentification[0]==\"buttonAddProject\"){\n            addingNewProject();            \n        }\n        else{\n            if(indentification[0]==\"buttonProjectRemove\"){                \n                removeProject(indentification[1]);        \n            }\n            else{\n                if(indentification[0]==\"buttonProjectView\"){\n                    viewProject(indentification[1]);\n                }\n                else{\n                    editingProject(indentification[1]);\n                }\n            }\n        }\n    }\n    //subscribing for refreshing after change\n    PubSub.subscribe('projectUpdates', refresh);\n\n    async function removeProject(id){\n        console.log(\"removing project \"+id)\n        let response=(confirm(\"are you shure?\"));\n        if(response===true){\n            taskList.removeProject(id);            \n            component(taskList);\n            /**cleaning the main block(if the project erased was opened before) */\n            let contentElement=document.getElementById('tasksColumn') ;\n            contentElement.innerHTML=\"\";\n        }\n        \n    }\n\n    function addingNewProject(){\n        console.log(\"adding new project\");       \n        projectForm.componentProject(taskList,0,0);//mode 0 adding new\n    }\n    \n    function editingProject(id){\n        console.log(\"editing project\");       \n        projectForm.componentProject(taskList,1,id);//mode 0 adding new\n    }\n\n    function refresh(){            \n        component(taskList);\n    }\n    \n    function viewProject(id){\n    \n        console.log(\"view project \"+id)\n        tasksModule.componentTasks(taskList,id);\n\n    }\n    \n\n    \n    return contentElement;\n}\n\n\n\nmodule.exports= {component,taskList};\n\n//# sourceURL=webpack://todolist/./src/projectsModule.js?");

/***/ }),

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let listProjectservice=__webpack_require__(/*! ./listService */ \"./src/listService.js\")\nlet taskListService=listProjectservice();\nlet taskMod = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\")\n\n\nfunction componentTaskForm(serviceList,projectId,mode,taskId){    \n    \n    \n    \n    let localtask;\n    if(mode==0){\n        localtask=taskMod();\n       \n    }\n    else{\n        console.log(\"editing task\")\n        console.log(\"projectId \"+projectId)\n        console.log(\"taskId \"+ taskId)\n        \n        let d=JSON.parse(JSON.stringify((serviceList.listService[projectId]).TasksList[taskId]));//.TaskList[taskId])\n        localtask=taskMod();        \n        \n        console.log(d)\n        localtask.description=d.description;\n        localtask.checklist=d.checklist;\n        localtask.dueDate=d.dueDate;\n        localtask.title=d.title;\n        \n    }\n    \n    let contentElement=document.getElementById('tasksColumn') ;\n    contentElement.innerHTML=\" \";\n    let formularyTask=document.createElement('div'); \n    formularyTask.className=\"formsTask\";\n    let title= document.createElement('div'); \n    title.className=\"titleTaskName\"\n    let textTask = document.createTextNode(\"New task\");\n    title.appendChild(textTask);    \n    title.style.cssText=\"background:transparent;display:flex;\";\n    formularyTask.appendChild(title);\n\n    let labelTaskTitle= document.createElement('label');\n    labelTaskTitle.className=\"labelsForms\";\n    labelTaskTitle.HTMLfor=\"inputTaskTitle2\";\n    labelTaskTitle.id=\"labelTaskTitle\";\n    labelTaskTitle.innerText=\"Title:\";\n    let inputTaskTitle2= document.createElement('input'); \n    inputTaskTitle2.id=\"inputTaskTitle\";\n    inputTaskTitle2.className=\"inputForms\";\n    if(mode==1){//if editing default value\n        inputTaskTitle2.value=localtask.title;\n    }\n    formularyTask.appendChild(labelTaskTitle);\n    formularyTask.appendChild(inputTaskTitle2);\n\n\n    let labelTaskDescription= document.createElement('label');\n    labelTaskDescription.className=\"labelsForms\";\n    labelTaskDescription.HTMLfor=\"inputTaskDescription\";\n    labelTaskDescription.id=\"labelTaskDescription\";\n    labelTaskDescription.innerText=\"Description:\";\n    let inputTaskDescription= document.createElement('textarea'); \n    inputTaskDescription.id=\"inputTaskDescription\";\n    inputTaskDescription.required=\"true\";\n    inputTaskDescription.className=\"inputForms\";\n    inputTaskDescription.rows=\"10\";\n    inputTaskDescription.cols=\"auto\";\n    if(mode==1){\n        inputTaskDescription.value=localtask.description;\n    }\n    formularyTask.appendChild(labelTaskDescription);\n    formularyTask.appendChild(inputTaskDescription);\n\n\n    let labelTaskDueDate= document.createElement('label');\n    labelTaskDueDate.className=\"labelsForms\";\n    labelTaskDueDate.HTMLfor=\"labelTaskDueDate\";\n    labelTaskDueDate.id=\"labelTaskDueDate\";\n    labelTaskDueDate.innerText=\"DueDate:\";\n    let inputTaskDueDate= document.createElement('input'); \n    inputTaskDueDate.id=\"inputTaskDueDate\";\n    inputTaskDueDate.type=\"date\";\n    if(mode==1){\n        inputTaskDueDate.value=localtask.dueDate;\n    }\n    formularyTask.appendChild(labelTaskDueDate);\n    formularyTask.appendChild(inputTaskDueDate);\n\n    let labelTaskPriority= document.createElement('label');\n    labelTaskPriority.className=\"labelsForms\";\n    labelTaskPriority.HTMLfor=\"inputTaskPriority\";\n    labelTaskPriority.id=\"labelTaskPriority\";\n    labelTaskPriority.innerText=\"Priority:\";\n\n    let inputTaskPriority= document.createElement('select'); \n    inputTaskPriority.id=\"inputTaskPriority\";    \n    let priorityLow = document.createElement('option'); \n    priorityLow.value=\"low\";\n    priorityLow.text=\"low\";\n    let priorityMedium = document.createElement('option'); \n    priorityMedium.value=\"medium\";\n    priorityMedium.text=\"medium\";\n    let priorityHigh = document.createElement('option'); \n    priorityHigh.value=\"high\";\n    priorityHigh.text=\"high\";\n    \n    if(mode==1){\n        inputTaskPriority.value=localtask.priority;\n    }\n\n\n    inputTaskPriority.appendChild(priorityLow);\n    inputTaskPriority.appendChild(priorityMedium);\n    inputTaskPriority.appendChild(priorityHigh);\n    \n    formularyTask.appendChild(labelTaskPriority);\n    formularyTask.appendChild(inputTaskPriority);\n\n\n\n\n\n\n    let buttonsForms=document.createElement('div'); \n    let buttonCancel=document.createElement('button'); \n    buttonsForms.className=\"taskButtons\";\n\n    buttonCancel.id=\"cancelTask\";\n    buttonCancel.innerHTML=\"CANCEL\";\n    let buttonOK=document.createElement('button'); \n    buttonOK.innerHTML = \"OK\";    \n    buttonOK.id=\"okTask\";\n    buttonsForms.appendChild(buttonCancel);\n    buttonsForms.appendChild(buttonOK);\n\n    formularyTask.appendChild(buttonsForms);\n\n    contentElement.appendChild(formularyTask);\n\n\n    let inputTaskTitleId=document.getElementById(\"inputTaskTitle\");\n    let inputTaskDescriptionId=document.getElementById(\"inputTaskDescription\");\n    //listeners\n\n    let buttonTaskCancel=document.getElementById(\"cancelTask\");\n    buttonTaskCancel.addEventListener(\"click\",buttonFunctionTask);\n    let buttonTaskOK=document.getElementById(\"okTask\");\n    buttonTaskOK.addEventListener(\"click\",buttonFunctionTask);\n    \n\n\n\n    inputTaskTitleId.addEventListener(\"change\",textChange);\n    inputTaskDescriptionId.addEventListener(\"change\",textChange);\n    inputTaskDueDate.addEventListener(\"change\",textChange);\n    inputTaskPriority.addEventListener(\"change\",textChange);\n\n    function textChange(x){\n        console.log(x);\n        if(x.srcElement.id==\"inputTaskTitle\"){            \n            localtask.title=x.srcElement.value;\n        }\n        if(x.srcElement.id==\"inputTaskDescription\"){                \n                localtask.description=x.srcElement.value;\n                }\n        if(x.srcElement.id==\"inputTaskDueDate\"){                \n                localtask.dueDate= x.srcElement.value;\n            }    \n        if(x.srcElement.id==\"inputTaskPriority\"){   \n            console.log(x.srcElement.value)             ;\n            localtask.priority= x.srcElement.value;\n        }        \n        \n    }\n\n\n    function buttonFunctionTask(x){\n        localtask.checklist=false;\n        if(x.srcElement.id==\"cancelTask\"){\n            contentElement.innerHTML=\" \";                        \n            PubSub.publish('taskUpdate', 'NewTask!');            \n        }\n        else{\n            console.log(\"sending\");   \n\n            if(mode==1){   \n                if(localtask.isValid()!=true)             \n                { window.alert(\"some data missing\")\n                    return;\n                }\n                serviceList.updateTask(projectId,taskId,localtask)\n                console.log(\"updating Storage\")\n                serviceList.updateStorage();\n            }\n            else{\n                if(localtask.isValid()!=true)             \n                { window.alert(\"some data missing\")\n                    return;\n                }                \n                console.log(\"updating Storage 2\")\n                serviceList.addTask(projectId,localtask);\n                serviceList.updateStorage();\n            }                      \n            PubSub.publish('taskUpdate', 'NewTask!');\n        }\n    } \n    \n}\n\nmodule.exports= {componentTaskForm};\n\n//# sourceURL=webpack://todolist/./src/taskForm.js?");

/***/ }),

/***/ "./src/tasksModule.js":
/*!****************************!*\
  !*** ./src/tasksModule.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nlet projectsLocal = __webpack_require__(/*! ./projects */ \"./src/projects.js\")\nlet projectForm = __webpack_require__(/*! ./projectForm */ \"./src/projectForm.js\")\nlet listProjectservice=__webpack_require__(/*! ./listService */ \"./src/listService.js\")\nlet taskList=listProjectservice();\nconst PubSub = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\nconst listService = __webpack_require__(/*! ./listService */ \"./src/listService.js\");\nlet taskForm = __webpack_require__(/*! ./taskForm */ \"./src/taskForm.js\")\n\n\n\nfunction componentTasks(serviceList,projectId){        \n\n    console.log(serviceList.listService[projectId])\n    \n    let contentElement=document.getElementById('tasksColumn') ;\n    contentElement.innerHTML=\"\";\n    contentElement.className=\"projectsColClass\";\n    \n\n    let allTasks=document.createElement('div'); \n    allTasks.className=\"allTasks\";\n\n    let taskForms=document.createElement('div'); \n    taskForms.className=\"taskForm\";\n    taskForms.id=\"taskForm\";\n    allTasks.appendChild(taskForms);\n\n    let title= document.createElement('div'); \n    title.className=\"titleName\"\n    let snippetLocal = document.createTextNode(\"Project Tasks\");\n    title.appendChild(snippetLocal);    \n    allTasks.appendChild(title);\n\n    let title2= document.createElement('div'); \n    title2.className=\"titleProjectName\"\n    let snippetLocal2 = document.createTextNode(\"Project: \"+serviceList.listService[projectId].title);\n    title2.appendChild(snippetLocal2);    \n    allTasks.appendChild(title2);\n\n    let description= document.createElement('div'); \n    description.className=\"titleProjectName\"\n    let snippetLocal3 = document.createTextNode(\"Description: \"+serviceList.listService[projectId].description);\n    description.appendChild(snippetLocal3);    \n    allTasks.appendChild(description);\n\n    \n    let index=0;\n\n    let topButtonsTasks= document.createElement('div');          \n    topButtonsTasks.className=\"topButtonsTasks\";\n\n    let buttonNewTask= document.createElement('div');          \n    buttonNewTask.id=\"buttonNewTask\";        \n    buttonNewTask.className=\"newButton\";\n    let textNewTask = document.createTextNode(\"New\");        \n    buttonNewTask.appendChild(textNewTask);   \n    topButtonsTasks.appendChild(buttonNewTask);\n\n    let clearDone= document.createElement('div');          \n    clearDone.id=\"clearDone\";        \n    clearDone.className=\"newButton\";\n    let textClear = document.createTextNode(\"Clean\");        \n    clearDone.appendChild(textClear);   \n    topButtonsTasks.appendChild(clearDone);\n\n    allTasks.appendChild(topButtonsTasks);\n\n    serviceList.listService[projectId].TasksList.forEach(element => {        \n        let cardTask= document.createElement('div');         \n        cardTask.className=\"cardTask\"\n        cardTask.id=\"cardTask_\"+index;\n        \n        let cardTask_1= document.createElement('div');  \n        let title_task = document.createTextNode(\"Task name: \"+element.title);\n        cardTask_1.className=\"card_title\"\n        cardTask_1.appendChild(title_task);    \n        cardTask.appendChild(cardTask_1);    \n\n        let cardTask_2= document.createElement('div');  \n        let text_task = document.createTextNode(\"Task description: \"+element.description);        \n        cardTask_2.appendChild(text_task);   \n        cardTask_2.className=\"card_text\"\n        cardTask.appendChild(cardTask_2);    \n        \n        let cardTask_3= document.createElement('div');  \n        let ranking_task = document.createTextNode(\"Task Priority: \"+element.priority);        \n        cardTask_3.className=\"card_text\"        \n        cardTask_3.appendChild(ranking_task);        \n        cardTask.appendChild(cardTask_3);   \n        \n        let cardTask_4= document.createElement('div');  \n        let dueDate = document.createTextNode(\"Task dueDate: \"+(element.dueDate).slice(0, 10));        \n        cardTask_4.className=\"card_text\"        \n        cardTask_4.appendChild(dueDate);        \n        cardTask.appendChild(cardTask_4);   \n        \n        let buttonsTasks= document.createElement('div');  \n        buttonsTasks.className=\"buttonsTasks\";\n        //buttons\n        let button_delete= document.createElement('div');          \n        button_delete.id=\"buttonDelTask_\"+index;        \n        button_delete.className=\"taskButton\";\n        let textDelButton = document.createTextNode(\"Delete\");        \n        button_delete.appendChild(textDelButton);   \n        let button_edit= document.createElement('div');  \n        button_edit.id=\"buttonEditTask_\"+index;\n        button_edit.className=\"taskButton\";\n        let textEditButton = document.createTextNode(\"Edit\");        \n        button_edit.appendChild(textEditButton);   \n\n        buttonsTasks.appendChild(button_delete);  \n        buttonsTasks.appendChild(button_edit);  \n\n        //checkdone\n        let checkdone= document.createElement('div');  \n        checkdone.className=\"checkdone\";\n        let labelCheckTitle= document.createElement('label');\n        labelCheckTitle.className=\"labelsChecks\";\n        labelCheckTitle.HTMLfor=\"check\";\n        labelCheckTitle.id=\"labelCheck_\"+index;\n        labelCheckTitle.innerText=\"Done:\";\n    \n        let check = document.createElement(\"input\")\n        check.type=\"checkbox\";\n        check.id=\"taskCheck_\"+index;\n\n        if(element.checklist===true)\n        {\n            check.checked=true;\n        }\n\n        checkdone.appendChild(labelCheckTitle);  \n        checkdone.appendChild(check);  \n        buttonsTasks.appendChild(checkdone);  \n\n        cardTask.appendChild(buttonsTasks);  \n\n        allTasks.appendChild(cardTask);\n        index++;\n    });\n\n\n    contentElement.appendChild(allTasks);\n\n\n\n    ///adding listeners\n\n    //new and clear buttons\n    let newTasksButton=document.getElementById(\"buttonNewTask\");\n    newTasksButton.addEventListener(\"click\",function(){\n        console.log(\"new tasks\")\n        taskForm.componentTaskForm(serviceList,projectId,0,0);\n    });\n    let clearButton=document.getElementById(\"clearDone\");\n    clearButton.addEventListener(\"click\",function(){\n        console.log(\"clearDone\")\n\n        let response=(confirm(\"are you shure?\"));\n        if(response===true){\n            serviceList.removeDone(projectId);\n            componentTasks(serviceList,projectId);    \n        }\n    });\n    \n    for (let index2=0;index2<index;index2++)\n    {\n        let deleteButton=document.getElementById(\"buttonDelTask_\"+index2)\n        deleteButton.addEventListener(\"click\",function(){   \n            console.log(serviceList.listService[projectId]);\n\n            let response=(confirm(\"are you shure?\"));\n            if(response===true){\n                serviceList.removeTask(projectId,index2);                     \n                refreshTasks();\n            }\n\n\n\n        });\n        \n        let editButton=document.getElementById(\"buttonEditTask_\"+index2)\n        editButton.addEventListener(\"click\",function(){            \n            console.log(\"edit:\" + index2)\n            taskForm.componentTaskForm(serviceList,projectId,1,index2);\n        });\n\n        let checkTick=document.getElementById(\"taskCheck_\"+index2)\n        checkTick.addEventListener(\"change\",function(){            \n            console.log(\"checked:\" + index2)\n            console.log(\"value=\"+checkTick.checked)            \n            serviceList.listService[projectId].TasksList[index2].checklist=checkTick.checked;\n            serviceList.updateStorage();\n        });\n        \n    }\n    //subscribing for refreshing after change\n    PubSub.subscribe('taskUpdate', refreshTasks);\n   \n    function refreshTasks(){                    \n        componentTasks(serviceList,projectId)\n    } \n    \n    \n}\n\n\n\nmodule.exports= {componentTasks};\n\n//# sourceURL=webpack://todolist/./src/tasksModule.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["projectsForm","projects"], () => (__webpack_exec__("./src/projectsModule.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);