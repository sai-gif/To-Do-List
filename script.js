
document.addEventListener('DOMContentLoaded', function () {
   
    const taskInput = document.getElementById('task');
    const priorityInput = document.getElementById('priority'); 
    const addTaskButton = document.getElementById('addTask'); 
    const taskList = document.getElementById('taskList'); 
    
    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value;
        const taskPriority = priorityInput.value;

        
        if (taskText.trim() !== '') {
            
            addTask(taskText, taskPriority);
            taskInput.value = ''; 
        }
    });

    
    function addTask(taskText, taskPriority) {
        const listItem = document.createElement('li'); 

        
        listItem.innerHTML = `
            <span>Priority ${taskPriority} - ${taskText}</span>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(listItem); 

       
        listItem.querySelector('.delete').addEventListener('click', function () {
            taskList.removeChild(listItem); 
        });

      
        const items = Array.from(taskList.children);
        items.sort((a, b) => {
            const priorityA = parseInt(a.querySelector('span').textContent.match(/\d+/)[0]);
            const priorityB = parseInt(b.querySelector('span').textContent.match(/\d+/)[0]);
            return priorityB - priorityA;
        });

    
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

  
        items.forEach((item) => {
            taskList.appendChild(item);
        });
    }
});
