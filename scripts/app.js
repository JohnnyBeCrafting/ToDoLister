/*************************************
PROJECT: TO-DO LIST VANILLA JS
AUTHOR: JOHNNY GARCES
INSPIRED BY: TREEHOUSE INTERACTIVE JS
**************************************/

//create all elements
var addButton = document.getElementById('add_button');
var addTaskInput = document.getElementById('add_task');
var taskInput = document.getElementById('add_task');
var completeTasksContainer = document.getElementById('complete-list');
var incompleteTasksContainer = document.getElementById('incomplete-list'); 
var incompleteCounterContainer = document.getElementById('incomplete-counter');
var completeCounterContainer = document.getElementById('complete-counter');

var bindCounterEvents = function(taskContainer, counterHandler){
	
		//counter child element in incomplete-counter decrements by one
		//counter child element in complete-counter increments by one
	//else if user clicks on markTaskIncomplete button
		//counter child element in complete-counter decrements by one
		//counter child element in incomplete-counter increments by one
}

var incrementCounter = function(taskContainer, counterContainer){
	var counter = 0;
	for(var i = 0; i < taskContainer.children.length; i++){
		counter++;
		console.log(counter);
	}
	counterContainer.innerHTML = 'There are ' + counter + ' items left to complete'; 
}

var decrementCounter = function(taskContainer, counterContainer){
	var counter = 0;
	for(var i = 0; i < taskContainer.children.length; i++){
		counter--;
		console.log(counter);
	}
	counterContainer.innerHTML = 'There are ' + counter + ' items left to complete'; 	
}

//when user clicks on addTask
	//counter child element in incomplete-counter increments by one

//when user clicks on markTaskComplete
	//bindCounterEvents

//when user clicks on markTaskIncomplete
	//bindCounterEvents

//when user clicks on delete on incomplete-counter or complete-counter
	//counter child elements decrements by one

var newListElement = function(newTaskText){
	var listItem = document.createElement('li');
	//input with type checkbox
	var checkBoxInput = document.createElement('input');
	//input with type text
	var textInput = document.createElement('input');
	//label with text from #add_task
	var label = document.createElement('label');
	//edit button with class "button_edit"
	var newEditButton = document.createElement('button');
	//delete button with class "button_delete"
	var newDeleteButton = document.createElement('button');
	//each elemeent needs to be modified and appended

	listItem.appendChild(checkBoxInput);
	listItem.appendChild(textInput);
	listItem.appendChild(label);
	listItem.appendChild(newEditButton);
	listItem.appendChild(newDeleteButton);

	checkBoxInput.type = 'checkbox';
	textInput.type = 'text';
	newEditButton.innerText = 'Edit';
	label.innerText = newTaskText;
	newDeleteButton.innerText = 'Delete';
	newDeleteButton.className = 'delete';
	newEditButton.className = 'edit';

	return listItem;
}
//Add an existing task
var addTask = function(){
	console.log('add task');
	var listItem = newListElement(taskInput.value);
	incompleteTasksContainer.appendChild(listItem);
	bindEvents(listItem, markCompletedTask);
	taskInput.value = '';
	incrementCounter(incompleteTasksContainer, incompleteCounterContainer);
}


//Complete a task
var markCompletedTask = function(){
	console.log('task completed');
	//when checkbox clicked in incomplete-list, create existing task in complete-list
	var listItem = this.parentNode;
	completeTasksContainer.appendChild(listItem);
	bindEvents(listItem, markIncompleteTask);
	
}

//Mark existing task as incomplete
var markIncompleteTask = function(){
	console.log('this task is incomplete');
	//when checkbox clicked in complete-list, create existing task in incomplete-list
	var listItem = this.parentNode;
	incompleteTasksContainer.appendChild(listItem);
	bindEvents(listItem, markCompletedTask);
	
}

//Edit existing task
var editTask = function(){
	console.log('edit task');
	//when edit button is clicked, toggle between editmode class.
	//label display in .editmode is none. 
	var listItem = this.parentNode;
	var editInput = listItem.querySelector('input[type=text]');
	var labelText = listItem.querySelector('label');
	var editClass = listItem.classList.contains('editmode');

	//if editMode is true
	if(editClass){
		labelText.innerText = editInput.value;
	}else{
		editInput.value = labelText.innerText;
	}
	listItem.classList.toggle('editmode');
}

//Delete task
var deleteTask = function(){
	console.log('delete task');
	//when delete button is pressed, remove existing list item
	var listItem = this.parentNode;
	var tasksContainers = listItem.parentNode;
	tasksContainers.removeChild(listItem);
	decrementCounter(incompleteTasksContainer, incompleteCounterContainer);
}

var bindEvents = function(listItem, checkBoxHandler){
	console.log('testing the bind events on all list item children');
//FOR LIST ITEM'S CHILDREN IN EITHER CONTAINER (complete-list or incomplete-list):
	var editButton = listItem.querySelector('button.edit');
	var deleteButton = listItem.querySelector('button.delete');
	var checkBox = listItem.querySelector('input[type=checkbox]');	
	//editTask to edit button
	editButton.onclick = editTask;
	//deleteTask to delete button
	deleteButton.onclick = deleteTask;
	//checkBoxHandler to both checkboxes
	checkBox.onchange = checkBoxHandler; 
}

//Wire up all functions to incomplete-list ul
	//list item's children need the following eventhandler:
		//bindEvents to list item's children (task incomplete)
		for(var i = 0; i < incompleteTasksContainer.children.length; i++){
			bindEvents(incompleteTasksContainer.children[i], markCompletedTask);
		}
		

//Wire up all functions to complete-list ul

	//list item's children need the following event-handler:
		////bindEvents to list item's children (task completed) 
		for(var i = 0; i < completeTasksContainer.children.length; i++){
			bindEvents(completeTasksContainer.children[i], markIncompleteTask);
		}
//click handlers go here
addButton.onclick = addTask;
addTaskInput.onkeydown = function(event){
	if(event.keyCode == 13){
	 	addTask();
	}
}

