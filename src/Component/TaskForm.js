import React, { useContext, useState, useEffect } from 'react';
import { Form } from './Form';
const TaskForm = () => {
    const { addData, editItem, edit } = useContext(Form);

    const [title, setTitle] = useState("");
    const handleChange = (e) => {
        setTitle(e.target.value)

    }
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!edit) {
            addData(title);
            setTitle("")
        } else {
            editItem(title, edit.id)
        }
        setTitle("");
    }
    useEffect(() => {
        if (edit) {
            setTitle(edit.title)
        } else {
            setTitle("")
        }
    }, [edit])
    return (
        <form onSubmit={handlesubmit}>
            <input type="text" name="name" value={title} onChange={handleChange} />

            <button type="submit">{edit ? 'Edit Task' : 'Add Task'}</button>
        </form>
    )
}

export default TaskForm;