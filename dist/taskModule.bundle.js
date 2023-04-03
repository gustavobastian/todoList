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

eval("const PubSub = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n\nlet tasks= __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\")\nlet project=__webpack_require__(/*! ./projects.js */ \"./src/projects.js\")\n\n// create a function to subscribe to topics\nlet mySubscriber = function (msg, data) {\n    console.log( msg, data );\n};\n\n\nconst listService = function () {\n    let listService=[];\n    PubSub.subscribe('projectUpdates', mySubscriber);\n    function addProject(project){\n        this.listService.push(project);        \n    }\n\n    function removeProject(id){\n        console.log(\"removing \"+id)\n        if (id<0 || id> listService.length)\n        {\n            console.log(\"error project index out of size!!!\");            \n        }\n        else{\n            let newlistService=[];\n            for(let index=0;index<listService.length;index++){\n                if(id!=index){\n                    newlistService.push(listService[index]);\n                }\n            }\n            this.listService=newlistService;\n        }\n    }\n\n    return {\n        listService,\n        addProject,\n        removeProject\n    };\n}   \n\nmodule.exports=listService;\n\n//# sourceURL=webpack://todolist/./src/listService.js?");

/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let listProjectservice=__webpack_require__(/*! ./listService */ \"./src/listService.js\")\nlet taskListService=listProjectservice();\nlet projectsLocal = __webpack_require__(/*! ./projects */ \"./src/projects.js\")\n\n\n\nfunction componentProject(serviceList, mode, id){        \n    console.log(serviceList)\n    console.log(mode)\n    console.log(id)\n\n    let localTitle=\" \";\n    let localDescription=\" \";\n\n    let contentElement=document.getElementById('tasksColumn') ;\n    contentElement.innerHTML=\"\";\n    contentElement.className=\"projectsColClass\";\n\n    let formulary=document.createElement('div'); \n    formulary.className=\"formsFormulary\"\n\n    let title= document.createElement('div'); \n    title.className=\"titleName\"\n    let snippetLocal = document.createTextNode(\"New Project Form\");\n    title.appendChild(snippetLocal);    \n    formulary.appendChild(title);\n\n\n    let labelTitle= document.createElement('label');\n    labelTitle.className=\"labelsForms\";\n    labelTitle.HTMLfor=\"inputTitle\";\n    labelTitle.id=\"labelProjectTitle\";\n    labelTitle.innerText=\"Title:\";\n    let inputTitle2= document.createElement('input'); \n    inputTitle2.id=\"inputTitle\";\n    inputTitle2.className=\"inputForms\";\n    console.log(serviceList.listService[1])\n    if(mode==1){\n        inputTitle2.value=serviceList.listService[id].title;\n    }\n    formulary.appendChild(labelTitle);\n    formulary.appendChild(inputTitle2);\n\n\n\n    let labelDescription= document.createElement('label');\n    labelDescription.className=\"labelsForms\";\n    labelDescription.HTMLfor=\"inputDecription\";\n    labelDescription.id=\"labelProjectDescription\";\n    labelDescription.innerText=\"Description:\";\n    let inputDescription= document.createElement('textarea'); \n    inputDescription.id=\"inputDescription\";\n    inputDescription.className=\"inputForms\";\n    inputDescription.rows=\"50\";\n    inputDescription.cols=\"auto\";\n    if(mode==1){\n        inputDescription.value=serviceList.listService[id].description;\n    }\n    formulary.appendChild(labelDescription);\n    formulary.appendChild(inputDescription);\n    \n\n    let separation= document.createElement('div'); \n    separation.className=\"separation\"\n    formulary.appendChild(separation);\n\n\n    let buttonsForms=document.createElement('div'); \n    let buttonCancel=document.createElement('button'); \n    buttonsForms.className=\"projectButtons\";\n\n    buttonCancel.id=\"cancelProject\";\n    buttonCancel.innerHTML=\"CANCEL\";\n    let buttonOK=document.createElement('button'); \n    if(mode==0){\n        buttonOK.innerHTML = \"ADD\";\n    }\n    else{\n        buttonOK.innerHTML = \"UPDATE\";\n    }\n    buttonOK.id=\"okProject\";\n    buttonsForms.appendChild(buttonCancel);\n    buttonsForms.appendChild(buttonOK);\n\n    formulary.appendChild(buttonsForms);\n    contentElement.appendChild(formulary);\n    //adding listeners\n    let buttonProjectCancel=document.getElementById(\"cancelProject\");\n    buttonProjectCancel.addEventListener(\"click\",buttonFunction);\n    let buttonProjectOK=document.getElementById(\"okProject\");\n    buttonProjectOK.addEventListener(\"click\",buttonFunction);\n    \n    let inputTitleId=document.getElementById(\"inputTitle\");\n    let inputDescriptionId=document.getElementById(\"inputDescription\");\n\n    inputTitleId.addEventListener(\"change\",textChange);\n    inputDescriptionId.addEventListener(\"change\",textChange);\n\n    function textChange(x){\n        console.log(x);\n        if(x.srcElement.id==\"inputTitle\")\n        {\n            localTitle=x.srcElement.value;\n        }\n        else{\n            localDescription=x.srcElement.value;\n        }\n    }\n\n    \n    function buttonFunction(x){\n        console.log(x.srcElement.id);\n\n        if(x.srcElement.id==\"cancelProject\"){\n            contentElement.innerHTML=\" \";            \n            PubSub.publish('projectUpdates', 'nothing');\n            return (serviceList)\n        }\n        else{\n            console.log(\"sending\");\n            contentElement.innerHTML=\" \";\n            if(mode==0){\n                let newProject=projectsLocal();\n                newProject.title=localTitle;\n                newProject.description=localDescription;\n                serviceList.addProject(newProject);\n            }\n            else{\n                if(localTitle!=\" \"){\n                    serviceList.listService[id].title= localTitle;\n                }\n                if (localDescription!=\" \") {\n                    serviceList.listService[id].description= localDescription;  \n                }    \n                \n            }\n            PubSub.publish('projectUpdates', 'NewProject!');\n            return (serviceList)\n            \n        }\n    }\n \n}\n\nmodule.exports= {componentProject};\n\n//# sourceURL=webpack://todolist/./src/projectForm.js?");

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

/***/ }),

/***/ "./src/tasksModule.js":
/*!****************************!*\
  !*** ./src/tasksModule.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nlet projectsLocal = __webpack_require__(/*! ./projects */ \"./src/projects.js\")\nlet projectForm = __webpack_require__(/*! ./projectForm */ \"./src/projectForm.js\")\nlet listProjectservice=__webpack_require__(/*! ./listService */ \"./src/listService.js\")\nlet taskList=listProjectservice();\nconst PubSub = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n\n\nfunction componentTasks(serviceList,projectId){        \n    \n    let contentElement=document.getElementById('tasksColumn') ;\n    contentElement.innerHTML=\"\";\n    contentElement.className=\"projectsColClass\";\n\n    let allTasks=document.createElement('div'); \n    allTasks.className=\"allTasks\";\n\n    let title= document.createElement('div'); \n    title.className=\"titleName\"\n    let snippetLocal = document.createTextNode(\"Project Tasks\");\n    title.appendChild(snippetLocal);    \n    allTasks.appendChild(title);\n\n    let title2= document.createElement('div'); \n    title2.className=\"titleProjectName\"\n    let snippetLocal2 = document.createTextNode(\"Project: \"+serviceList.listService[projectId].title);\n    title2.appendChild(snippetLocal2);    \n    allTasks.appendChild(title2);\n\n    let description= document.createElement('div'); \n    description.className=\"titleProjectName\"\n    let snippetLocal3 = document.createTextNode(\"Description: \"+serviceList.listService[projectId].description);\n    description.appendChild(snippetLocal3);    \n    allTasks.appendChild(description);\n\n    \n    let index=0;\n    serviceList.listService[projectId].TasksList.forEach(element => {\n        console.log(element);\n        let cardTask= document.createElement('div');         \n        cardTask.className=\"cardTask\"\n        cardTask.id=\"cardTask_\"+index;\n        \n        let cardTask_1= document.createElement('div');  \n        let title_task = document.createTextNode(\"Task name: \"+element.title);\n        cardTask_1.className=\"card_title\"\n        cardTask_1.appendChild(title_task);    \n        cardTask.appendChild(cardTask_1);    \n\n        let cardTask_2= document.createElement('div');  \n        let text_task = document.createTextNode(\"Task description: \"+element.description);        \n        cardTask_2.appendChild(text_task);   \n        cardTask_2.className=\"card_text\"\n        cardTask.appendChild(cardTask_2);    \n        \n        let cardTask_3= document.createElement('div');  \n        let ranking_task = document.createTextNode(\"Task Priority: \"+element.priority);        \n        cardTask_3.className=\"card_text\"        \n        cardTask_3.appendChild(ranking_task);        \n        cardTask.appendChild(cardTask_3);       \n        \n        //buttons\n        let button_delete= document.createElement('div');          \n        button_delete.id=\"buttonDelTask_\"+index;        \n        button_delete.className=\"taskButton\";\n        let textDelButton = document.createTextNode(\"Delete\");        \n        button_delete.appendChild(textDelButton);   \n        let button_edit= document.createElement('div');  \n        button_edit.id=\"buttonEditTask_\"+index;\n        button_edit.className=\"taskButton\";\n        let textEditButton = document.createTextNode(\"Edit\");        \n        button_edit.appendChild(textEditButton);   \n        cardTask.appendChild(button_delete);  \n        cardTask.appendChild(button_edit);  \n\n        //checkdone\n        let labelCheckTitle= document.createElement('label');\n        labelCheckTitle.className=\"labelsChecks\";\n        labelCheckTitle.HTMLfor=\"check\";\n        labelCheckTitle.id=\"labelCheck_\"+index;\n        labelCheckTitle.innerText=\"Done:\";\n    \n        let check = document.createElement(\"input\")\n        check.type=\"checkbox\";\n        check.id=\"taskCheck_\"+index;\n        cardTask.appendChild(labelCheckTitle);  \n        cardTask.appendChild(check);  \n\n        allTasks.appendChild(cardTask);\n        index++;\n    });\n\n    contentElement.appendChild(allTasks);\n}\n\nmodule.exports= {componentTasks};\n\n//# sourceURL=webpack://todolist/./src/tasksModule.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"taskModule": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodolist"] = self["webpackChunktodolist"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/tasksModule.js");
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;