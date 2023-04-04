const { taskList } = require("./projectsModule");

const projects = function (Title,Description) {
    let title=Title;
    let description=Description;
    let TasksList = [];
    
    async function addTask(task){
        await this.TasksList.push(task);        
    }
    
    function findIndex(task){
        for (let index=0;index<this.TasksList.size;index++)
            if(task==TasksList[index])
                {return index;}
        
        return -1;        
    }

    function taskDone(id){
        if(this.TasksList[id].getCheckList()==false){
            this.TasksList[id].setCheckList();
        }
        else{
            this.TasksList[id].unSetCheckList();
        }
            
    }

    function removeTask(id){
        let newTask=[];        
        for (let index=0;index<this.TasksList.length;index++){           
            if(id!=index){
                newTask.push(this.TasksList[index])                
            }
        }
        
        this.TasksList=newTask;    
        console.log(this.TasksList);               
    }

    function removeDone(){
        let newTask=[];
        console.log("removing done")                
        for (let index=0;index<this.TasksList.length;index++){           
            if(this.TasksList[index].getCheckList()===false){
                newTask.push(this.TasksList[index])                
            }
        }
        
        this.TasksList=newTask;    
        console.log(this.TasksList);               
    }

    return {
        title,
        description,
        TasksList,
        addTask,
        findIndex,
        removeTask,
        removeDone,
        taskDone
    }
}

module.exports=projects;