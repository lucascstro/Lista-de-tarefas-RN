import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

import './TaskItem.css';

function TaskItem({ task, remove, updateTask }) {

    const stateTasks = [
        { id: 1, state: "Pendente" },
        { id: 2, state: "Fazendo" },
        { id: 3, state: "Concluida" }
    ]

    const onRemove = () => {
        remove(task.id);
    }

    const onTitleUpdate = (event) => {
        updateTask(task.id, event.target.value, task.state);
    }

    const onStateUpdate = (event) => {
        updateTask(task.id, task.title, Number(event.target.value));
    }

    return (
        <div className='cardTask'>
            <h1 className='lblTask'>Tarefa</h1>
            <input defaultValue={task.title} className='txtTask' onChange={onTitleUpdate} />
            <br />
            <h1 className='lblTask'>Status</h1>
            <select className='selectStatusTask' value={task.state} onChange={onStateUpdate}>
                {
                    stateTasks.map((state) => {
                        return <option value={state.id} key={state.id}>{state.state}</option>
                    })
                }
            </select>

            <button className='buttonDeletar' onClick={onRemove}>
                <FaRegTrashAlt color="red" fontSize="1em" >

                </FaRegTrashAlt>
            </button>
        </div >
    );
}

export default TaskItem;