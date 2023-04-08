const PubSub = require('pubsub-js');

let taskMod= require('./tasks.js')
let project=require('./projects.js')

// create a function to subscribe to topics
let mySubscriber = function (msg, data) {
    console.log( msg, data );
};


const listService = function () {
    let listService=new Array;
    let nProjects=0;
    PubSub.subscribe('projectUpdates', mySubscriber);

    restoreFromLocalStorage();

    function restoreFromLocalStorage(){
      if (!localStorage.getItem("listService")) {        
        localStorage.setItem("listService",listService)           
      } else {
        let localList=(localStorage.getItem("listService"));
        console.log(JSON.parse(localList))
        listService=[];
        (JSON.parse(localList)).forEach(element => {
            listService.push(element)
            nProjects++;
        });        
      }
    }  

    async function updateStorage(){
        let newlistService=[];
            for(let index=0;index<listService.length;index++){                
                    newlistService.push(listService[index]);                
            }
        localStorage.removeItem("listService");
        this.listService=newlistService;
        localStorage.setItem("listService",JSON.stringify(newlistService) );
    }

    function addProject(projectP){
        console.log("project:"+JSON.stringify(projectP))
        let localProject=project();
        localProject.title=projectP.title;
        localProject.description=projectP.description;
        this.listService.push(localProject);        
        localStorage.setItem("listService",JSON.stringify(listService) )
        nProjects++;
    }

    async function removeProject(id){
        console.log("removing "+id)
        if (id<0 || id> listService.length)
        {
            console.log("error project index out of size!!!");            
        }
        else{
            let newlistService=[];
            for(let index=0;index<listService.length;index++){
                if(id!=index){
                    newlistService.push(listService[index]);
                }
            }
            nProjects--;
            localStorage.removeItem("listService");
            this.listService=newlistService;
            localStorage.setItem("listService",JSON.stringify(newlistService) );
        }
    }

    function getProject(id){
        return this.listService[id];
    }

    async function updateTask(projectId,taskId,localtask){
        let localProject=project();
        localProject.createProject(this.listService[projectId].title,this.listService[projectId].description,this.listService[projectId].TasksList);
        localProject.updateTask(taskId,localtask);
        console.log(JSON.stringify(localProject));
        this.listService[projectId]=localProject;
        await updateStorage();
        return;
    }

    async function addTask(projectId,localtask){
        let localProject=project();
        localProject.createProject(this.listService[projectId].title,this.listService[projectId].description,this.listService[projectId].TasksList);
        localProject.addTask(localtask);
        console.log(JSON.stringify(localProject));
        this.listService[projectId]=localProject;
        await updateStorage();
        return;
    }

    function removeTask(projectId,taskId){
        let localProject=project();
        localProject.createProject(this.listService[projectId].title,this.listService[projectId].description,this.listService[projectId].TasksList);
        localProject.removeTask(taskId);
        this.listService[projectId]=localProject;
        updateStorage();
        return ;
    }

    function removeDone(projectId){
        let localProject=project();
        localProject.createProject(this.listService[projectId].title,this.listService[projectId].description,this.listService[projectId].TasksList);
        localProject.removeDone();
        this.listService[projectId]=localProject;
        updateStorage();
        return ;
    }

    return {
        listService,
        nProjects,        
        addProject, 
        getProject,
        removeTask,
        removeDone,
        addTask,
        updateTask,
        updateStorage,       
        removeProject
    };
}   

module.exports=listService;