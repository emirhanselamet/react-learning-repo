import React, {useState} from 'react'
import AddTodo from './AddTodo'
const TodoList = () => {
    const [todos,setTodos] = useState([
        { text: 'Fatura',id:1},
        { text: 'Oyun',id:2},
        { text: 'Kod',id:3}
    ]);
const addTodo = (text) => {
    setTodos([
        ...todos,
        { text: text ,id:Math.random()}
    ]);
}
    return(
        <div>
            <ul>
                {
                    todos.map(todo =>{
                        return (
                            <li key={todo.id}>{todo.text}</li>
                        )
                    })
                }
            </ul>
            <AddTodo addTodo={addTodo} />
        </div>
    )
}
export default TodoList