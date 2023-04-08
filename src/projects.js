
const projectLocal = function () {
    let title;
    let description;
    let TasksList = [];
    async function addTask(task){
        await this.TasksList.push(task);        
    }
    function getTask(taskId){        
        console.log("asking for task")
        return this.TasksList[taskId];
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
        TasksList.forEach(element => {
            if(element.checklist==false)
                newTask.push(element)                
        });
        
        this.TasksList=newTask;    
        console.log(this.TasksList);               
    }

    function createProject(title,description,TaskListP){
        this.title=title;
        this.description=description;
        TaskListP.forEach(element => {
            this.TasksList.push(element)
        });

    }

    function isValid(){
        if(this.title==null || this.title==" " || this.description==null || this.description== " "){
            return false;
        }        
        else{
            return true;
        }
        
    }
    return {
        title,
        description,
        TasksList,
        addTask,        
        getTask,
        isValid,
        removeTask,
        removeDone,
        createProject,
        updateTask,
        taskDone
    }
}

module.exports=projectLocal;