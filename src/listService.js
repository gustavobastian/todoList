const PubSub = require('pubsub-js');

let tasks= require('./tasks.js')
let project=require('./projects.js')

// create a function to subscribe to topics
let mySubscriber = function (msg, data) {
    console.log( msg, data );
};


const listService = function () {
    let listService=[];
    PubSub.subscribe('projectUpdates', mySubscriber);

    

    if (!localStorage.getItem("listService")) {
        localStorage.setItem("listService","") 
      } else {
        let localList=JSON.parse(localStorage.getItem("listService"));
        console.log(localList)
        localList.forEach(element => {
            listService.push(localList)
        });
        
      }

    function addProject(project){
        this.listService.push(project);        
        localStorage.setItem("listService",JSON.stringify(listService) )
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
        addProject,
        removeProject
    };
}   

module.exports=listService;