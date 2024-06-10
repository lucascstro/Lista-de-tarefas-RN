import { PropTypes } from 'prop-types';
import TaskItem from '../taskItem/TaskItem';
import TaskNewItem from '../taskNewItem/TaskNewItem';

import './TaskList.css';

function Tasklist({ title, tipo, tasks, remove, addTask, updateTask }) {
    return (
        <div className='tasklist'>
            <div className='title'>
                {title}
            </div>
            <TaskNewItem onAddTask={addTask} tipo={tipo} />
            <hr></hr>
            <div className='content'>
                {
                    tasks.map((task) => {
                        return <div key={task.id}>
                            <TaskItem tipo={tipo} task={task} remove={remove} updateTask={updateTask} />
                        </div>
                    })
                }
            </div>
        </div>
    );
}

Tasklist.propTypes = {
    title: PropTypes.string,
    tasks: PropTypes.array
}

export default Tasklist;