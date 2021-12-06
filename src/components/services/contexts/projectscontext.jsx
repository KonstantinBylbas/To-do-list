import React, { useState } from "react";

export const ProjectsContext = React.createContext(null);

export default function ProjectsContextProvider({ children }) {

    const [contextProjects, setContextProjects] = useState([]);

    return (
        <ProjectsContext.Provider value={{
            contextProjects, setContextProjects
        }} >
            {children}
        </ProjectsContext.Provider>
    );
}