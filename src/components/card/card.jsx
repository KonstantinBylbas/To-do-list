import { useContext } from 'react';
import { ProjectsContext } from '../services/contexts/projectscontext';
import './card.scss';

export default function Card({ project: { name, body, tasktime, publishtime, id, status, show, priority } }) {

    const { contextProjects, setContextProjects } = useContext(ProjectsContext);

    function deleteTask(id) {
        contextProjects.splice(contextProjects.indexOf(contextProjects.find(task => task.id == id)), 1);
        setContextProjects([...contextProjects]);
    }

    function done(id) {
        contextProjects.map(task => task.id == id ? task.status = true : '');
        setContextProjects([...contextProjects]);
    }

    return (
        <div className={`card cardProject ${show ? '' : 'hidden'} ${status ? 'done' : ''} `}>
            <h2>
                {name}
            </h2>
            <h4>
                {body}
            </h4>
            <div className='leftbottom'>
                {
                    <p className='priority'>
                        {
                            priority == 0 ? 'Default prority' : (priority == 1 ? 'Middle priority' : 'High priority')
                        }
                    </p>
                }
                {
                    status ? '' :
                        <p className='timeTask'>
                            До окончания: {tasktime}ч.
                        </p>
                }
            </div>
            <span className='timePublish'>
                {publishtime}
            </span>

            <div className="btns">
                {
                    !status ? <button onClick={() => done(id)}>Done</button> : ''
                }
                <button onClick={() => deleteTask(id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}