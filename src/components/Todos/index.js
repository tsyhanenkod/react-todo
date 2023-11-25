import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const initialState = [
    { id: 1, message: 'Walk the dog' },
    { id: 2, message: 'Read the book' },
    { id: 3, message: 'Take a shower' },
];

function Todos() {
    const [todoList, setTodoList ] = useState(initialState);
    console.log('app.js', todoList);

    return (
        <div>
            <TodoForm todos={todoList} setTodos={setTodoList} />
            <TodoList todos={todoList} />
        </div>
    );
}

export default Todos;