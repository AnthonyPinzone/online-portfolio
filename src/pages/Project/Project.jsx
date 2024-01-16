import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../layout';
import ProjectNotFound from './ProjectNotFound';
import useProjects from '../../hooks/useProjects';
import { Hero } from '../../components';

export default function Project() {
    const { projectSlug } = useParams();
    const [project] = useProjects(projectSlug);

    if (!project) {
        return <ProjectNotFound projectSlug={projectSlug} />;
    }

    return (
        <div className="project-page">
            <Hero image={{ src: project.cover }}>
                <h1 className="project-page__title">{project.name}</h1>
                <p className="project-page__desc">{project.description}</p>
            </Hero>

            <Container className="project-page__container">
                {project.features.map((feature, index) => (
                    <section className="project-feature" key={index}>
                        <figure className="project-feature__figure">
                            <img src={feature.image} alt={feature.title} />
                        </figure>
                        <div className="project-feature__content">
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                            <ul className="project-feature__insights">
                                {feature.insights.map((insight, index) => (
                                    <li key={index}>{insight}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                ))}
            </Container>
        </div>
    )
}
