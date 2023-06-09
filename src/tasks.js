
const task = function (Title,Description,DueDate,Priority,Note) {
    let title=Title;
    let description=Description;
    let dueDate=DueDate;
    let priority=Priority;
    let note=Note;
    let checklist=false;

    const writeNote=function(note){
        this.note=note;
    }
    const setCheckList=function (){
        this.checklist=true;
    }
    const unSetCheckList=function (){
        this.checklist=false;
    }
    const getCheckList=function (){
        return  this.checklist;
    }

    const isValid=function(){
        console.log(this.title)
        console.log(this.description)
        if(this.title==null){            
            return false;}
        return !((this.description==null) || (this.dueDate==null) || (this.priority==null));        
        
    }

    return {
        title,
        description,
        dueDate,
        priority,
        note,
        checklist,
        writeNote,
        setCheckList,
        unSetCheckList,
        isValid,
        getCheckList
    }
}

module.exports=task;
    
