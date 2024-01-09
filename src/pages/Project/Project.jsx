import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectNotFound from './ProjectNotFound';
import useProjects from '../../hooks/useProjects';

export default function Project() {
    const { projectSlug } = useParams();
    const [project] = useProjects(projectSlug);

    if (!project) {
        return <ProjectNotFound projectSlug={projectSlug} />;
    }

    console.log(project);

    return (
        <div className="project-page">
            <h1>{project.name}</h1>
            <p>{project.hook}</p>
        </div>
    )
}
