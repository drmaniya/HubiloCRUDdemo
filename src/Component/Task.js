import React, { useContext } from 'react';
import { Form } from './Form';
const Task = ({ task }) => {
    // console.log("data", task.id)
    const { removeData, findData, handleChange } = useContext(Form);
    return (
        <>
            <span>{task.title}</span>
            <input type="checkbox"
                id={task.id}
                checked={task.value}
                onChange={handleChange} />
            <button onClick={() => removeData(task.id)}>Delete</button>
            <button onClick={() => findData(task.id)}>Edit</button>
            <br />
        </>
    )
}

export default Task;