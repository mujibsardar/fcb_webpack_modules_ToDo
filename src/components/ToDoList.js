import { domCtrl }  from './../controllers/domCtrl';

// Hold all the todo objects
export class ToDoList{
  constructor(list){
    this.toDoArray = list; // array
  }

  getToDoArray(){
    return this.toDoArray;
  }

  setToDoArray(toDoArray){
    this.toDoArray = toDoArray;
  }

  // Adding a todo element to the this list
  addToDo(todo){
    this.toDoArray.push(todo);
  }

  delete(index){
    this.toDoArray.splice(index, 1);
  }

  // Save the toDoList array to local storage
  save(){
    console.log(`before localStorage`);
    let arr = this.getToDoArray();
    localStorage.setItem('toDoList', JSON.stringify(this.getToDoArray()));
    // TODO Refresh the dom because we just did an update
    console.log(`before refreshToDoList`);
    let newDomCtrl = new domCtrl();
    newDomCtrl.refreshToDoList(this.getToDoArray());
  }
}
