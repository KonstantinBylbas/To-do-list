import { useContext } from 'react';
import { ProjectsContext } from '../../services/contexts/projectscontext';
import './project.scss';

export default function Project({ handlerClick }) {

    const { contextProjects, setContextProjects } = useContext(ProjectsContext);

    function addTask(event) {
        event.preventDefault();

        let currTime = new Date().toLocaleTimeString();

        setContextProjects([...contextProjects, { id: contextProjects.length + 1, name: event.target.elements[0].value, body: event.target.elements[1].value, tasktime: event.target.elements[2].value, publishtime: currTime, status: false, priority: event.target.elements[3].value, show: true }]);
    }

    return (
        <form className="project" onSubmit={addTask}>
            <h2>
                Задача
            </h2>
            <input type="text" required />
            <br /><br />
            <h2>
                Комментарий
            </h2>
            <textarea cols="30" rows="7"></textarea>
            <br /><br />
            <h2>
                Срок выполнения (ч.)
            </h2>
            <input type="number" min={0} max={23} onInput={({ target }) => { if (target.value.length > 2) target.value = target.value.slice(0, 2) }} required />
            <h2>
                Приоритет задачи
            </h2>
            <select name="priority" id="priority">
                <option value="0">Default</option>
                <option value="1">Middle</option>
                <option value="2">High</option>
            </select>
            <br /><br />
            <button onClick={handlerClick}>
                Сохранить
            </button>
        </form>
    )
}