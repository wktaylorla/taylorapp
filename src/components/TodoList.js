import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoS }) => {
    return (
        <div>{todoS.map( (todo) => (
            <TodoItem todo = {todo} key={todo.id}/>
            )
        )}
        </div>
    )
}

export default TodoList;