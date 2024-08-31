document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById('Registrar');
    
    addButton.addEventListener('click', addTask);
    
    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Por favor, ingresa una tarea.");
        return;
      }
  
      const taskList = document.getElementById('taskList');
  
      const li = document.createElement('li');
      li.className = 'mb-2'; // Añadido un margen inferior para separación
      li.textContent = taskText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = function () {
        taskList.removeChild(li);
      };
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      taskInput.value = "";
    }
});
