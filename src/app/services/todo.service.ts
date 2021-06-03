export class TodoService {
    todos = JSON.parse(localStorage.getItem("todosAngular") || '{}');
    addTodo(tache: string) {
        this.todos.push(
            {
                tache,
            }
        )
        this.storeIt()
    }
    removeTodo(id: number) {
        this.todos.splice(id, 1)
        this.storeIt()
    }
    changeTodo(id: number, newTask: string) {
        this.todos[id].tache = newTask;
        this.storeIt()
    }
    deleteAllTodo() {
        this.todos = [];
        this.storeIt();
    }
    storeIt() {
        return localStorage.setItem("todosAngular", JSON.stringify(this.todos))
    }
};

