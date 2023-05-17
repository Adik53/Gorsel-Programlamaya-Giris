import React, {useState} from 'react';

const CreateTodo = ({addTodo}) => {
    const [title,stTitle]=useState('')
    return (
        <div className={}>
            <input type='text' onChange={e=> e.key==='Enter'&& addTodo(title)}/>
        </div>
    );
};

export default CreateTodo;