import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import './TaskNewItem.css';

function TaskNewItem({ onAddTask, tipo }) {

    const [titleTask, setTitleTask] = useState('');

    const onChangeTitle = (title) => {
        setTitleTask(title);
    };

    const addTask = () => {
        onAddTask(titleTask, tipo);
        setTitleTask('');
    }

    return (
        <div className='container'>
            <h1 className='txtTitle'>Tarefa: </h1>
            <input className='txtTask' value={titleTask} onChange={e => onChangeTitle(e.target.value)} />
            <button onClick={addTask}><FaPlus></FaPlus></button>
        </div>
    );
}

export default TaskNewItem;