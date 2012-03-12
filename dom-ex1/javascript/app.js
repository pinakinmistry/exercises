function AddToList() {
	tasklist = document.getElementById("list");
	newtask = document.createElement('li');
	tasktext=document.createTextNode(document.taskform.task.value);
	newtask.appendChild(tasktext);
	tasklist.appendChild(newtask);
	document.taskform.task.value="";
	document.taskform.task.focus();
}

function OnLoadFunction() {
	document.taskform.task.focus();
}
