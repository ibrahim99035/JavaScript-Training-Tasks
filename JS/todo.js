document.addEventListener('DOMContentLoaded', displayTasks);

function displayTasks(){
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = createTaskListItem(task);
        taskListElement.appendChild(li);
    });
}

function createTaskListItem(task){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');
    removeButton.onclick = () => removeTask(task);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editTask(task);

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(removeButton);

    return li;
}

function addTask(){
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();   
    
    if (task !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskInput.value = '';
        displayTasks();
    }
}

function removeTask(task){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    displayTasks();
}

function editTask(task){
    const newTask = prompt("Edit task:", task);
    if (newTask !== null) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const index = tasks.indexOf(task);
        if (index !== -1) {
            tasks[index] = newTask.trim();
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
        }
    }
}

function clearAllTasks() {
    const confirmClear = confirm('Are you sure you want to clear all tasks?');
    if (confirmClear) {
        localStorage.removeItem('tasks');
        displayTasks();
    }
}