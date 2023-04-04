
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
        getCheckList
    }
}

module.exports=task;
    
