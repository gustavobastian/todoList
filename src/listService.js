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

    function addProject(project){
        console.log("project:"+JSON.stringify(project))
        this.listService.push(project);        
        localStorage.setItem("listService",JSON.stringify(listService) )
        nProjects++;
    }

    function removeProject(id){
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
            this.listService=newlistService;
        }
    }


    return {
        listService,
        nProjects,        
        addProject,        
        removeProject
    };
}   

module.exports=listService;