import React, { useState } from 'react';

function Todo({ todo, deleteHandler, updateHandler }) {

    const [isEditing, setIsEditing] = useState(false); 
    const [updatedTodo, setUpdatedTodo] = useState({ id: todo.id, message: todo.message }); 

    const updateTodoState = e => {
        setUpdatedTodo({
            id: todo.id,
            message: e.target.value,
        })
    }

    const updateAndReset = (input, e) => {
        e.preventDefault();

        updateHandler(input);
        setIsEditing(false);
    }
 
    return (
        <div>
            {isEditing ?
                <form onSubmit={e => updateAndReset(updatedTodo, e)}>
                    <input type='text' defaultValue={todo.message} onChange={updateTodoState} />
                </form>
                :
                <p onDoubleClick={() => setIsEditing(true)}>{todo.message}</p>
            }
            <button onClick={() => deleteHandler(todo.id)}>X</button>
            
        </div>
    );
};

export default Todo;
