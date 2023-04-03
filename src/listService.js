let tasks= require('./tasks.js')
let project=require('./projects.js')

const listService = function () {
    let listService=[];

    function addProject(project){
        this.listService.push(project);
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