import { domCtrl }  from './domCtrl';
import { ToDo } from './../components/ToDo';
import { ToDoList } from './../components/ToDoList';

// Controller to manage all logical aspects of our todo app.
const todoCrtl = (() => {
  // This represents the todo list (ToDoList)
  let toDoList;

  // call this function when starting the web app
	const init = () => {
	   console.log("Hi from init in todoCtrl.js");
     // Check if there is something in local storage
     if (localStorage.toDoList) {
       // Extract todo list array
       const storedToDoArr = JSON.parse(localStorage.getItem('toDoList'));
       // Create new ToDoList object using the array
       toDoList = new ToDoList(storedToDoArr);
     }else {
       // Create new ToDoList object with an empty array, so no todo's yet.
       toDoList = new ToDoList([]);
       // Save the toDoList object to local storage
       toDoList.save();
       attachEventListeners();
     }

     // Call on the dom controller to initialize the page
    console.log(`before domCtrl init`);
    let newDomCtrl = new domCtrl();
    newDomCtrl.init(toDoList.getToDoArray());
    attachEventListeners();
	};

  // Setup all the events for all the buttons on the page
  const attachEventListeners = () => {
    // TODO Finish this
    let newDomCtrl = new domCtrl();
    let newToDoButton = newDomCtrl.getNewToDoButton();
    newToDoButton.addEventListener("click", function(){
      console.log("Button clicked");
			let toDoBody = newDomCtrl.getNewToDoBody();
			let toDoCategory = newDomCtrl.getNewToDoCategory();
			let newTodo = new ToDo(toDoBody, toDoCategory);
			toDoList.addToDo(newTodo);
			toDoList.save();
      attachEventListeners();
		});

    // Attach event listener to every todo delete button
    document.querySelectorAll('.delete_button').forEach(item => {
    item.addEventListener('click', event => {
      console.log(`we are deleting a todo ${item.id}`);
      let item_index = item.id;
      // Use item index to delete todo in the toDoList
      toDoList.delete(item_index);
      toDoList.save();
      attachEventListeners();
    })
  })

} // Closing attachEventListeners function

  // Only expose the init function to the outside world
	return { init };
})();

// Don't forget to export, otherwise we won't be able to import.
export { todoCrtl };
