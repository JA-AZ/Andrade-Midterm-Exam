// Task array to store tasks
let tasks = [];
let nextId = 1;

// CREATE: Add a new task
function addTask(name, description) {
    const task = {
        id: nextId++,
        name,
        description
    };
    tasks.push(task);
    console.log(`Task added: ${JSON.stringify(task)}`);
}

// READ: View all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks found.");
    } else {
        console.log("All Tasks:");
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
        });
    }
}

// UPDATE: Update a task by id
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName || task.name;
        task.description = newDescription || task.description;
        console.log(`Task updated: ${JSON.stringify(task)}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// DELETE: Delete a task by id
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task with ID ${id} deleted.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Sample usage
addTask("Pass Exam", "Mag Study");
addTask("Finish project", "Complete the final project");
viewTasks();
updateTask(1, "Mana Exam", "Di mag Study");
deleteTask(2);
viewTasks();
