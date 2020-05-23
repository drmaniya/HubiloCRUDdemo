import React, { createContext, useState } from 'react';


export const Form = createContext();
const Provider = (props) => {
    const [tasks, setTasks] = useState([])
    const [edit, setEdit] = useState(null);
    let id = tasks.length + 1;
    const addData = (title, email) => {
        setTasks([...tasks, { title, email, id: id }])
    }
    const removeData = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    const findData = id => {
        const item = tasks.find(task => task.id === id)
        setEdit(item)
    }
    const editItem = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))
        setTasks(newTasks)
        setEdit(null)
    }
    const handleClick = () => {
        setTasks(tasks.filter(li => !li.value));
    };
    const handleChange = (e) => {
        const id = e.target.id;
        setTasks(tasks.map(
            li => (li.id === +id ? {
                ...li,
                value: !li.value
            } : li)
        ))
    }
    return (
        <Form.Provider value={{ tasks, addData, removeData, findData, editItem, edit, handleClick, handleChange }}>
            {props.children}
        </Form.Provider >
    )
}

export default Provider;