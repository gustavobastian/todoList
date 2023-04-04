
const projectLocal = function () {
    let title;
    let description;
    let TasksList = [];
    async function addTask(task){
        await this.TasksList.push(task);        
    }
    function getTask(taskId){        
        return TasksList[taskId];
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
    }
    function updateTask(id,newTask){
        this.TasksList[id]=newTask;                
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
        getTask,
        removeTask,
        removeDone,
        updateTask,
        taskDone
    }
}

module.exports=projectLocal;