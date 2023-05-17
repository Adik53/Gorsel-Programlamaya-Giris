import React, {useState} from "react";
import TodoItem from "./TodoItem";

const data = [
    {
        id:'ewrewr',
        title:'midwmiwmiw',
        isCompleted: false,
    },
    {
        id:'ewrewrwqw1',
        title:'fsfsefcsdcsde',
        isCompleted: false,
    },
    {
        id:'ewrewrs2121',
        title:'qeqeqeqeeq',
        isCompleted: false,
    },
]

const Home =() =>{
    const [todos, setTodos] = useState(data)

    const changeTodo= id =>{
        const copy = [...todos]
        const current = copy.find(t=>t.id===id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo= id => {
        setTodos([...todos].filter(t=>t.id!==id))
    }

    return<div className='Home'>
        <h1>saaasas</h1>
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
        ))}
    </div>

}

export default Home