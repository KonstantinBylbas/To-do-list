import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ProjectsContextProvider from './components/services/contexts/projectscontext';

ReactDOM.render(
    <ProjectsContextProvider>
        <App />
    </ProjectsContextProvider>,
    document.getElementById('root')
);