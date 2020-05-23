import React, { useContext } from 'react';
import { Form } from './Form';
import Task from './Task';
const List = () => {
    const { tasks, handleClick } = useContext(Form);
    // console.log("data", tasks)
    return (
        <>
            {
                tasks.map(task => (

                    <Task task={task} key={task.id} data={task.value} />
                ))
            }
            <button onClick={handleClick}>Delete</button>
        </>
    )
}

export default List;