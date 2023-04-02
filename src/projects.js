
const projects = function (Title,Description) {
    let title=Title;
    let description=Description;
    let TasksList = [];
    
    async function addTask(task){
        await this.TasksList.push(task);
        console.log("here")        
    }
    
    function findIndex(task){
        for (let index=0;index<this.TasksList.size;index++)
            if(task==TasksList[index])
                {return index;}
        
        return -1;        
    }

    return {
        title,
        description,
        TasksList,
        addTask,
        findIndex
    }
}

module.exports=projects;