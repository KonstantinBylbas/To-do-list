import './projects.scss';
import { useContext, useState } from 'react';
import Project from './project/project';
import { ProjectsContext } from '../services/contexts/projectscontext';
import Card from '../card/card';

export default function Projects() {

    const { contextProjects, setContextProjects } = useContext(ProjectsContext);

    const [modal, setmodal] = useState(false);

    function search({ target }) {
        contextProjects.map(task => task.name.indexOf(target.value) ? task.show = false : task.show = true);
        setContextProjects([...contextProjects]);
    }

    return (
        <div className="projects">

            <div className={`modal ${modal ? 'modalOpen' : ''}`} data-modal='background' onClick={({ target }) => { if (target.dataset.modal) setmodal(false) }}>
                <div className="content">
                    <Project handlerClick={() => setmodal(false)} />
                </div>
            </div>

            {
                contextProjects && contextProjects.length ?
                    <div className="search content">
                        <input type="text" placeholder='Enter query' onChange={search} />
                    </div>
                    : ''
            }

            <div className="content">
                <svg className='plus' viewBox="0 0 24 24" onClick={() => setmodal(true)}>
                    <path d="M18,10h-4V6c0-1.104-0.896-2-2-2s-2,0.896-2,2l0.071,4H6c-1.104,0-2,0.896-2,2s0.896,2,2,2l4.071-0.071L10,18  c0,1.104,0.896,2,2,2s2-0.896,2-2v-4.071L18,14c1.104,0,2-0.896,2-2S19.104,10,18,10z" />
                </svg>


                {
                    contextProjects && contextProjects.length ? (
                        contextProjects.sort(function (a, b) {
                            if (a.priority > b.priority) {
                                return -1;
                            }
                            if (a.priority < b.priority) {
                                return 1;
                            }
                            return 0;
                        }).sort(function (a, b) {
                            if (a.status > b.status) {
                                return 1;
                            }
                            if (a.status < b.status) {
                                return -1;
                            }
                            return 0;
                        }).map((project) => <Card project={project} />)
                    )
                        : <div className="card addNew" onClick={() => setmodal(true)}>
                            <svg className='plus' viewBox="0 0 24 24">
                                <path d="M18,10h-4V6c0-1.104-0.896-2-2-2s-2,0.896-2,2l0.071,4H6c-1.104,0-2,0.896-2,2s0.896,2,2,2l4.071-0.071L10,18  c0,1.104,0.896,2,2,2s2-0.896,2-2v-4.071L18,14c1.104,0,2-0.896,2-2S19.104,10,18,10z" />
                            </svg>
                            <p>
                                ADD NEW
                            </p>
                        </div>
                }
            </div>
        </div >
    )
}