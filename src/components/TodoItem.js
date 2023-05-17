import React from "react";
import Check from "./Check";
import {BsTrash} from "react-icons/bs";

const TodoItem = ({ todo, changeTodo }) => {
    return (
        <div className='Item' onClick={() => changeTodo(todo.id)}>
            <Check isCompleted={todo.isCompleted} />
            <span className={todo.isCompleted ? 'line-through' : ''}>{todo.title}</span>
            <BsTrash className='Trash'/>
        </div>
    );
};

export default TodoItem;
