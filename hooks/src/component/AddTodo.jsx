import React, {useState} from 'react';

const AddTodo = ({addTodo}) => {
    const [todo ,setTodo] = useState('')
    const onFormSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    }
    return(
        <form onSubmit={onFormSubmit}>
            <label htmlFor="todo"></label>
            <input type="text" value={todo} id='todo' placeholder="Eklenecek" onChange={(e) => setTodo(e.target.value)} />
            <input type="submit"  />
        </form>
    );
}

export default AddTodo