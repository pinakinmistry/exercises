function OnLoadFunction() {
	document.taskform.task.focus();
	document.searchform.searchtext.value="";
	
}

function AddToList() {
	tasklist = document.getElementById("list");
	newtask = document.createElement('li');

	checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	newtask.appendChild(checkbox);

	tasktext=document.createTextNode(document.taskform.task.value);
	if (tasktext.length > 100) {
		alert("Task name too long... keep it 100 characters or lesser. Thnx!");
	}
	else {
		newtask.appendChild(tasktext);
		tasklist.appendChild(newtask);
		document.taskform.task.value="";
		document.taskform.task.focus();
		ListStatus();
	}
}

function ListStatus() {
	
	tasklist = document.getElementsByTagName("li");
	currentTime = new Date();
	hours = currentTime.getHours();
	minutes = currentTime.getMinutes();
	seconds = currentTime.getSeconds();
	if (minutes < 10){
		minutes = "0" + minutes;
	}
	if (seconds< 10){
		seconds = "0" + seconds;
	}
	if(hours > 11){
		ampm = " PM";
	} else {
		ampm = " AM";
	}
	timetext = hours + ":" + minutes + ":" + seconds + ampm;
	
	

	text = "<b>To Do Tasks: </b>" + tasklist.length + "<br><b> Last Added at: </b>" + timetext;
	document.getElementById('liststatus').innerHTML=text;
}

function OpenGoogle() {
	text = document.searchform.searchtext.value;
	window.open("https://www.google.com/search?q=" + text);
	document.searchform.searchtext.value="";
}
