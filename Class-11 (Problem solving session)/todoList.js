// Goal: Build a basic To-Do list using objects and arrays (no UI).
// Each To-Do item should be an object:
// {
//   task: "Buy groceries",
//   isCompleted: false
// }

// Features to Implement:
//     addTask(task): Adds a new task.
//     removeTask(task): Removes a task.
//     markComplete(task): Marks a task as completed.
//     listTasks(): Lists all tasks, showing completed ones differently.

function createTodoList() {
    let tasks = [];

    function addTask(task) {
        let todo1 = {
            task: task,
            isCompleted: false,
        };

        tasks.push(todo1);
    }

    function removeTask(task) {
        // for (let task of tasks) {
        //     if (tasks.task == task) {
        //         tasks.task.pop();
        //     }
        // }

        let index = tasks.findIndex(t => t.task === task);
        if (index !== -1) {
            tasks.splice(index, 1);
        }
    }

    function markComplete(task) {
        for (let t of tasks) {
            if (t.task === task) {
                t.isCompleted = true;
            }
        }

        // let index = tasks.findIndex(task => task.task === task);
        // tasks[index].isCompleted = true

        // let index = tasks.findIndex(t=>t.task === task)
        // tasks[index].isCompleted = true
    }

function listTasks() {
    console.log(tasks);
}

    return {
        addTask,
        removeTask,
        markComplete,
        listTasks,
    };
}

const todo = createTodoList();
todo.addTask("Buy groceries");
todo.addTask("Do laundry");
todo.addTask("Clean room");
todo.listTasks();
console.log("-----");
todo.markComplete("Buy groceries");
todo.listTasks();
console.log("-----");
todo.removeTask("Do laundry");
todo.listTasks();
