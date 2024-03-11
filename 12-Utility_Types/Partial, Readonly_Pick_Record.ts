interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

const todo1: Readonly<Todo> = {
    title: "Delete inactive users",
    description: "..."
};

function upTodo(arg : Partial<Todo>) : Partial<Todo>
{
    arg.title = 'edited';
    return arg;
}

const todo : Todo = {
    title : "title",
    description : "arg",
}

console.log(upTodo(todo).title)



interface User {
    name: string;
    age: number;
}

const user: Readonly<User> = {
    name: "John",
    age: 30
};