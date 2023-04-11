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

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk\n * License: MIT - http://mrgnrdrck.mit-license.org\n *\n * https://github.com/mroderick/PubSubJS\n */\n\n(function (root, factory){\n    'use strict';\n\n    var PubSub = {};\n\n    if (root.PubSub) {\n        PubSub = root.PubSub;\n        console.warn(\"PubSub already loaded, using existing version\");\n    } else {\n        root.PubSub = PubSub;\n        factory(PubSub);\n    }\n    // CommonJS and Node.js module support\n    if (true){\n        if (module !== undefined && module.exports) {\n            exports = module.exports = PubSub; // Node.js specific `module.exports`\n        }\n        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec\n        module.exports = exports = PubSub; // CommonJS\n    }\n    // AMD support\n    /* eslint-disable no-undef */\n    else {}\n\n}(( typeof window === 'object' && window ) || this, function (PubSub){\n    'use strict';\n\n    var messages = {},\n        lastUid = -1,\n        ALL_SUBSCRIBING_MSG = '*';\n\n    function hasKeys(obj){\n        var key;\n\n        for (key in obj){\n            if ( Object.prototype.hasOwnProperty.call(obj, key) ){\n                return true;\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns a function that throws the passed exception, for use as argument for setTimeout\n     * @alias throwException\n     * @function\n     * @param { Object } ex An Error object\n     */\n    function throwException( ex ){\n        return function reThrowException(){\n            throw ex;\n        };\n    }\n\n    function callSubscriberWithDelayedExceptions( subscriber, message, data ){\n        try {\n            subscriber( message, data );\n        } catch( ex ){\n            setTimeout( throwException( ex ), 0);\n        }\n    }\n\n    function callSubscriberWithImmediateExceptions( subscriber, message, data ){\n        subscriber( message, data );\n    }\n\n    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){\n        var subscribers = messages[matchedMessage],\n            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,\n            s;\n\n        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {\n            return;\n        }\n\n        for (s in subscribers){\n            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){\n                callSubscriber( subscribers[s], originalMessage, data );\n            }\n        }\n    }\n\n    function createDeliveryFunction( message, data, immediateExceptions ){\n        return function deliverNamespaced(){\n            var topic = String( message ),\n                position = topic.lastIndexOf( '.' );\n\n            // deliver the message as it is now\n            deliverMessage(message, message, data, immediateExceptions);\n\n            // trim the hierarchy and deliver message to each level\n            while( position !== -1 ){\n                topic = topic.substr( 0, position );\n                position = topic.lastIndexOf('.');\n                deliverMessage( message, topic, data, immediateExceptions );\n            }\n\n            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);\n        };\n    }\n\n    function hasDirectSubscribersFor( message ) {\n        var topic = String( message ),\n            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));\n\n        return found;\n    }\n\n    function messageHasSubscribers( message ){\n        var topic = String( message ),\n            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),\n            position = topic.lastIndexOf( '.' );\n\n        while ( !found && position !== -1 ){\n            topic = topic.substr( 0, position );\n            position = topic.lastIndexOf( '.' );\n            found = hasDirectSubscribersFor(topic);\n        }\n\n        return found;\n    }\n\n    function publish( message, data, sync, immediateExceptions ){\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        var deliver = createDeliveryFunction( message, data, immediateExceptions ),\n            hasSubscribers = messageHasSubscribers( message );\n\n        if ( !hasSubscribers ){\n            return false;\n        }\n\n        if ( sync === true ){\n            deliver();\n        } else {\n            setTimeout( deliver, 0 );\n        }\n        return true;\n    }\n\n    /**\n     * Publishes the message, passing the data to it's subscribers\n     * @function\n     * @alias publish\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publish = function( message, data ){\n        return publish( message, data, false, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Publishes the message synchronously, passing the data to it's subscribers\n     * @function\n     * @alias publishSync\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publishSync = function( message, data ){\n        return publish( message, data, true, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe\n     * @function\n     * @alias subscribe\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { String }\n     */\n    PubSub.subscribe = function( message, func ){\n        if ( typeof func !== 'function'){\n            return false;\n        }\n\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        // message is not registered yet\n        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){\n            messages[message] = {};\n        }\n\n        // forcing token as String, to allow for future expansions without breaking usage\n        // and allow for easy use as key names for the 'messages' object\n        var token = 'uid_' + String(++lastUid);\n        messages[message][token] = func;\n\n        // return token for unsubscribing\n        return token;\n    };\n\n    PubSub.subscribeAll = function( func ){\n        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);\n    };\n\n    /**\n     * Subscribes the passed function to the passed message once\n     * @function\n     * @alias subscribeOnce\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { PubSub }\n     */\n    PubSub.subscribeOnce = function( message, func ){\n        var token = PubSub.subscribe( message, function(){\n            // before func apply, unsubscribe message\n            PubSub.unsubscribe( token );\n            func.apply( this, arguments );\n        });\n        return PubSub;\n    };\n\n    /**\n     * Clears all subscriptions\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     */\n    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){\n        messages = {};\n    };\n\n    /**\n     * Clear subscriptions by the topic\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     * @return { int }\n     */\n    PubSub.clearSubscriptions = function clearSubscriptions(topic){\n        var m;\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                delete messages[m];\n            }\n        }\n    };\n\n    /**\n       Count subscriptions by the topic\n     * @function\n     * @public\n     * @alias countSubscriptions\n     * @return { Array }\n    */\n    PubSub.countSubscriptions = function countSubscriptions(topic){\n        var m;\n        // eslint-disable-next-line no-unused-vars\n        var token;\n        var count = 0;\n        for (m in messages) {\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {\n                for (token in messages[m]) {\n                    count++;\n                }\n                break;\n            }\n        }\n        return count;\n    };\n\n\n    /**\n       Gets subscriptions by the topic\n     * @function\n     * @public\n     * @alias getSubscriptions\n    */\n    PubSub.getSubscriptions = function getSubscriptions(topic){\n        var m;\n        var list = [];\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                list.push(m);\n            }\n        }\n        return list;\n    };\n\n    /**\n     * Removes subscriptions\n     *\n     * - When passed a token, removes a specific subscription.\n     *\n\t * - When passed a function, removes all subscriptions for that function\n     *\n\t * - When passed a topic, removes all subscriptions for that topic (hierarchy)\n     * @function\n     * @public\n     * @alias subscribeOnce\n     * @param { String | Function } value A token, function or topic to unsubscribe from\n     * @example // Unsubscribing with a token\n     * var token = PubSub.subscribe('mytopic', myFunc);\n     * PubSub.unsubscribe(token);\n     * @example // Unsubscribing with a function\n     * PubSub.unsubscribe(myFunc);\n     * @example // Unsubscribing from a topic\n     * PubSub.unsubscribe('mytopic');\n     */\n    PubSub.unsubscribe = function(value){\n        var descendantTopicExists = function(topic) {\n                var m;\n                for ( m in messages ){\n                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){\n                        // a descendant of the topic exists:\n                        return true;\n                    }\n                }\n\n                return false;\n            },\n            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),\n            isToken    = !isTopic && typeof value === 'string',\n            isFunction = typeof value === 'function',\n            result = false,\n            m, message, t;\n\n        if (isTopic){\n            PubSub.clearSubscriptions(value);\n            return;\n        }\n\n        for ( m in messages ){\n            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){\n                message = messages[m];\n\n                if ( isToken && message[value] ){\n                    delete message[value];\n                    result = value;\n                    // tokens are unique, so we can just stop here\n                    break;\n                }\n\n                if (isFunction) {\n                    for ( t in message ){\n                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){\n                            delete message[t];\n                            result = true;\n                        }\n                    }\n                }\n            }\n        }\n\n        return result;\n    };\n}));\n\n\n//# sourceURL=webpack://todolist/./node_modules/pubsub-js/src/pubsub.js?");

/***/ }),

/***/ "./src/listService.js":
/*!****************************!*\
  !*** ./src/listService.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PubSub = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n\nlet taskMod= __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\")\nlet project=__webpack_require__(/*! ./projects.js */ \"./src/projects.js\")\n\n// create a function to subscribe to topics\nlet mySubscriber = function (msg, data) {\n    console.log( msg, data );\n};\n\n\nconst listService = function () {\n    let listService=new Array;\n    let nProjects=0;\n    PubSub.subscribe('projectUpdates', mySubscriber);\n\n    restoreFromLocalStorage();\n\n    function restoreFromLocalStorage(){\n      if (!localStorage.getItem(\"listService\")) {        \n        localStorage.setItem(\"listService\",listService)           \n      } else {\n        let localList=(localStorage.getItem(\"listService\"));\n        console.log(JSON.parse(localList))\n        listService=[];\n        (JSON.parse(localList)).forEach(element => {\n            listService.push(element)\n            nProjects++;\n        });        \n      }\n    }  \n\n    async function updateStorage(){\n        let newlistService=[];            \n            listService.forEach(element => {\n                newlistService.push(element);\n            });\n        localStorage.removeItem(\"listService\");\n        this.listService=newlistService;\n        localStorage.setItem(\"listService\",JSON.stringify(newlistService) );\n    }\n\n    function addProject(projectP){\n        console.log(\"project:\"+JSON.stringify(projectP))\n        let localProject=project();\n        localProject.title=projectP.title;\n        localProject.description=projectP.description;\n        this.listService.push(localProject);        \n        localStorage.setItem(\"listService\",JSON.stringify(listService) )\n        nProjects++;\n    }\n\n    async function removeProject(id){\n        console.log(\"removing \"+id)\n        if (id<0 || id> listService.length)\n        {\n            console.log(\"error project index out of size!!!\");            \n        }\n        else{\n            let newlistService=[];\n            for(let index=0;index<listService.length;index++){\n                if(id!=index){\n                    newlistService.push(listService[index]);\n                }\n            }\n            nProjects--;\n            localStorage.removeItem(\"listService\");\n            this.listService=newlistService;\n            localStorage.setItem(\"listService\",JSON.stringify(newlistService) );\n        }\n    }\n\n    function getProject(id){\n        return this.listService[id];\n    }\n\n    function updateTask(projectId,taskId,localtask){\n        let localProject=project();\n        localProject.createProject(this.listService[projectId].title,this.listService[projectId].description,this.listService[projectId].TasksList);\n        localProject.updateTask(taskId,localtask);\n        console.log(JSON.stringify(localProject));\n        this.listService[projectId]=localProject;\n        updateStorage();\n     \n    }\n\n    function addTask(projectId,localtask){\n        let localProject=project();\n        localProject.createProject(this.listService[projectId].title,this.listService[projectId].description,this.listService[projectId].TasksList);\n        localProject.addTask(localtask);\n        console.log(JSON.stringify(localProject.TasksList))\n        this.listService[projectId]=localProject;\n        updateStorage();        \n    }\n\n    function removeTask(projectId,taskId){\n        let localProject=project();\n        localProject.createProject(this.listService[projectId].title,this.listService[projectId].description,this.listService[projectId].TasksList);\n        localProject.removeTask(taskId);\n        console.log(JSON.stringify(localProject.TasksList))\n        this.listService[projectId]=localProject;\n        updateStorage();        \n    }\n\n    function removeDone(projectId){\n        let localProject=project();\n        localProject.createProject(this.listService[projectId].title,this.listService[projectId].description,this.listService[projectId].TasksList);\n        localProject.removeDone();\n        console.log(JSON.stringify(localProject.TasksList))\n        this.listService[projectId]=localProject;\n        updateStorage();        \n    }\n\n    return {\n        listService,\n        nProjects,        \n        addProject, \n        getProject,\n        removeTask,\n        removeDone,\n        addTask,\n        updateTask,\n        updateStorage,       \n        removeProject\n    };\n}   \n\nmodule.exports=listService;\n\n//# sourceURL=webpack://todolist/./src/listService.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((module) => {

eval("\nconst projectLocal = function () {\n    let title;\n    let description;\n    let TasksList = [];\n    async function addTask(task){\n        await this.TasksList.push(task);        \n    }\n    function getTask(taskId){        \n        console.log(\"asking for task\")\n        return this.TasksList[taskId];\n    }\n    function taskDone(id){\n        if(this.TasksList[id].getCheckList()==false){\n            this.TasksList[id].setCheckList();\n        }\n        else{\n            this.TasksList[id].unSetCheckList();\n        }\n            \n    }\n    function removeTask(id){\n        let newTask=[];        \n        for (let index=0;index<this.TasksList.length;index++){           \n            if(id!=index){\n                newTask.push(this.TasksList[index])                \n            }\n        }\n        this.TasksList=newTask;    \n    }\n    function updateTask(id,newTask){\n        this.TasksList[id]=newTask;                \n    }\n    function removeDone(){\n        let newTask=[];\n        console.log(\"removing done\")                \n        TasksList.forEach(element => {\n            if(element.checklist==false)\n                newTask.push(element)                \n        });\n        \n        this.TasksList=newTask;    \n        console.log(this.TasksList);               \n    }\n\n    function createProject(title,description,TaskListP){\n        this.title=title;\n        this.description=description;\n        TaskListP.forEach(element => {\n            this.TasksList.push(element)\n        });\n\n    }\n\n    function isValid(){\n        if(this.title==null || this.title==\" \" || this.description==null || this.description== \" \"){\n            return false;\n        }        \n        else{\n            return true;\n        }\n        \n    }\n    return {\n        title,\n        description,\n        TasksList,\n        addTask,        \n        getTask,\n        isValid,\n        removeTask,\n        removeDone,\n        createProject,\n        updateTask,\n        taskDone\n    }\n}\n\nmodule.exports=projectLocal;\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ }),

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let listProjectservice=__webpack_require__(/*! ./listService */ \"./src/listService.js\")\nlet taskListService=listProjectservice();\nlet taskMod = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\")\n\n\nfunction componentTaskForm(serviceList,projectId,mode,taskId){    \n    \n    let localtask;\n    if(mode==0){\n        localtask=taskMod();\n       \n    }\n    else{\n        console.log(\"editing task\")\n        console.log(\"projectId \"+projectId)\n        console.log(\"taskId \"+ taskId)\n        \n        let d=JSON.parse(JSON.stringify((serviceList.listService[projectId]).TasksList[taskId]));//.TaskList[taskId])\n        localtask=taskMod();        \n        \n        console.log(d)\n        localtask.description=d.description;\n        localtask.checklist=d.checklist;\n        localtask.dueDate=d.dueDate;\n        localtask.title=d.title;\n        \n    }\n    \n    let contentElement=document.getElementById('tasksColumn') ;\n    contentElement.innerHTML=\" \";\n    let formularyTask=document.createElement('div'); \n    formularyTask.className=\"formsTask\";\n    let title= document.createElement('div'); \n    title.className=\"titleTaskName\"\n    let textTask = document.createTextNode(\"New task\");\n    title.appendChild(textTask);    \n    title.style.cssText=\"background:transparent;display:flex;\";\n    formularyTask.appendChild(title);\n\n    let labelTaskTitle= document.createElement('label');\n    labelTaskTitle.className=\"labelsForms\";\n    labelTaskTitle.HTMLfor=\"inputTaskTitle2\";\n    labelTaskTitle.id=\"labelTaskTitle\";\n    labelTaskTitle.innerText=\"Title:\";\n    let inputTaskTitle2= document.createElement('input'); \n    inputTaskTitle2.id=\"inputTaskTitle\";\n    inputTaskTitle2.className=\"inputForms\";\n    if(mode==1){//if editing default value\n        inputTaskTitle2.value=localtask.title;\n    }\n    formularyTask.appendChild(labelTaskTitle);\n    formularyTask.appendChild(inputTaskTitle2);\n\n\n    let labelTaskDescription= document.createElement('label');\n    labelTaskDescription.className=\"labelsForms\";\n    labelTaskDescription.HTMLfor=\"inputTaskDescription\";\n    labelTaskDescription.id=\"labelTaskDescription\";\n    labelTaskDescription.innerText=\"Description:\";\n    let inputTaskDescription= document.createElement('textarea'); \n    inputTaskDescription.id=\"inputTaskDescription\";\n    inputTaskDescription.required=\"true\";\n    inputTaskDescription.className=\"inputForms\";\n    inputTaskDescription.rows=\"10\";\n    inputTaskDescription.cols=\"auto\";\n    if(mode==1){\n        inputTaskDescription.value=localtask.description;\n    }\n    formularyTask.appendChild(labelTaskDescription);\n    formularyTask.appendChild(inputTaskDescription);\n\n\n    let labelTaskDueDate= document.createElement('label');\n    labelTaskDueDate.className=\"labelsForms\";\n    labelTaskDueDate.HTMLfor=\"labelTaskDueDate\";\n    labelTaskDueDate.id=\"labelTaskDueDate\";\n    labelTaskDueDate.innerText=\"DueDate:\";\n    let inputTaskDueDate= document.createElement('input'); \n    inputTaskDueDate.id=\"inputTaskDueDate\";\n    inputTaskDueDate.type=\"date\";\n    if(mode==1){\n        inputTaskDueDate.value=localtask.dueDate;\n    }\n    formularyTask.appendChild(labelTaskDueDate);\n    formularyTask.appendChild(inputTaskDueDate);\n\n    let labelTaskPriority= document.createElement('label');\n    labelTaskPriority.className=\"labelsForms\";\n    labelTaskPriority.HTMLfor=\"inputTaskPriority\";\n    labelTaskPriority.id=\"labelTaskPriority\";\n    labelTaskPriority.innerText=\"Priority:\";\n\n    let inputTaskPriority= document.createElement('select'); \n    inputTaskPriority.id=\"inputTaskPriority\";    \n    let priorityLow = document.createElement('option'); \n    priorityLow.value=\"low\";\n    priorityLow.text=\"low\";\n    let priorityMedium = document.createElement('option'); \n    priorityMedium.value=\"medium\";\n    priorityMedium.text=\"medium\";\n    let priorityHigh = document.createElement('option'); \n    priorityHigh.value=\"high\";\n    priorityHigh.text=\"high\";\n    \n    if(mode==1){\n        inputTaskPriority.value=localtask.priority;\n    }\n\n\n    inputTaskPriority.appendChild(priorityLow);\n    inputTaskPriority.appendChild(priorityMedium);\n    inputTaskPriority.appendChild(priorityHigh);\n    \n    formularyTask.appendChild(labelTaskPriority);\n    formularyTask.appendChild(inputTaskPriority);\n\n    let buttonsForms=document.createElement('div'); \n    let buttonCancel=document.createElement('button'); \n    buttonsForms.className=\"taskButtons\";\n\n    buttonCancel.id=\"cancelTask\";\n    buttonCancel.innerHTML=\"CANCEL\";\n    let buttonOK=document.createElement('button'); \n    buttonOK.innerHTML = \"OK\";    \n    buttonOK.id=\"okTask\";\n    buttonsForms.appendChild(buttonCancel);\n    buttonsForms.appendChild(buttonOK);\n\n    formularyTask.appendChild(buttonsForms);\n\n    contentElement.appendChild(formularyTask);\n\n\n    let inputTaskTitleId=document.getElementById(\"inputTaskTitle\");\n    let inputTaskDescriptionId=document.getElementById(\"inputTaskDescription\");\n    //listeners\n\n    let buttonTaskCancel=document.getElementById(\"cancelTask\");\n    buttonTaskCancel.addEventListener(\"click\",buttonFunctionTask);\n    let buttonTaskOK=document.getElementById(\"okTask\");\n    buttonTaskOK.addEventListener(\"click\",buttonFunctionTask);\n    \n\n\n\n    inputTaskTitleId.addEventListener(\"change\",textChange);\n    inputTaskDescriptionId.addEventListener(\"change\",textChange);\n    inputTaskDueDate.addEventListener(\"change\",textChange);\n    inputTaskPriority.addEventListener(\"change\",textChange);\n\n    function textChange(x){\n        console.log(x);\n        if(x.srcElement.id==\"inputTaskTitle\"){            \n            localtask.title=x.srcElement.value;\n        }\n        if(x.srcElement.id==\"inputTaskDescription\"){                \n                localtask.description=x.srcElement.value;\n                }\n        if(x.srcElement.id==\"inputTaskDueDate\"){                \n                localtask.dueDate= x.srcElement.value;\n            }    \n        if(x.srcElement.id==\"inputTaskPriority\"){   \n            console.log(x.srcElement.value)             ;\n            localtask.priority= x.srcElement.value;\n        }        \n        \n    }\n\n\n    function buttonFunctionTask(x){\n        localtask.checklist=false;\n        if(x.srcElement.id==\"cancelTask\"){\n            contentElement.innerHTML=\" \";                        \n            PubSub.publish('taskUpdate', 'NewTask!');            \n        }\n        else{\n            console.log(\"sending\");   \n\n            if(mode==1){   \n                if(localtask.isValid()!=true)             \n                { window.alert(\"some data missing\")\n                    return;\n                }\n                serviceList.updateTask(projectId,taskId,localtask)\n                console.log(\"updating Storage\")\n                \n            }\n            else{\n                if(localtask.isValid()!=true)             \n                { window.alert(\"some data missing\")\n                    return;\n                }                \n                console.log(\"updating Storage 2\")\n                serviceList.addTask(projectId,localtask);\n                \n            }                      \n            PubSub.publish('taskUpdate', 'NewTask!');\n        }\n    } \n    \n}\n\nmodule.exports= {componentTaskForm};\n\n//# sourceURL=webpack://todolist/./src/taskForm.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((module) => {

eval("\nconst task = function (Title,Description,DueDate,Priority,Note) {\n    let title=Title;\n    let description=Description;\n    let dueDate=DueDate;\n    let priority=Priority;\n    let note=Note;\n    let checklist=false;\n\n    const writeNote=function(note){\n        this.note=note;\n    }\n    const setCheckList=function (){\n        this.checklist=true;\n    }\n    const unSetCheckList=function (){\n        this.checklist=false;\n    }\n    const getCheckList=function (){\n        return  this.checklist;\n    }\n\n    const isValid=function(){\n        console.log(this.title)\n        console.log(this.description)\n        if(this.title==null){            \n            return false;}\n        return !((this.description==null) || (this.dueDate==null) || (this.priority==null));        \n        \n    }\n\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        note,\n        checklist,\n        writeNote,\n        setCheckList,\n        unSetCheckList,\n        isValid,\n        getCheckList\n    }\n}\n\nmodule.exports=task;\n    \n\n\n//# sourceURL=webpack://todolist/./src/tasks.js?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/taskForm.js");
/******/ 	
/******/ })()
;