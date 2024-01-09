import React from 'react';
import { Link } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';
import { Container } from '../../layout';
import { SkillIcon } from '../';
import { BsArrowUpRight } from 'react-icons/bs';
import './Projects.scss';

export function Projects() {
  const projects = useProjects();
  if (!projects) return null;

  return (
    <section id="projects" className="projects">
      <Container className="projects__container">
        <h2 className="projects__title">What I&apos;ve Worked On</h2>
        <ul className="projects__gallery">
          {projects?.map(
            ({ name, hook, skills, cover, slug }) => (
              <li className="projects__gallery-card" key={name}>
                <figure className="projects__gallery-figure">
                  <img
                    className="projects__gallery-img"
                    src={cover}
                    alt=""
                  />
                </figure>
                <div className="projects__gallery-card-details">
                  <h3 className="projects__gallery-card-title">{name}</h3>
                  <p className="projects__gallery-card-description">
                    {hook}
                  </p>
                  <footer className="projects__gallery-card-footer">
                    <div className="projects__gallery-card-skills">
                      {skills.featured?.map((skill) => (
                        <SkillIcon
                          className="projects__gallery-card-skill"
                          key={skill}
                          skill={skill}
                        />
                      ))}
                    </div>
                    <Link className="projects__gallery-card-link" to={`/projects/${slug}`}>
                      View Project <BsArrowUpRight />
                    </Link>
                  </footer>
                </div>
              </li>
            ),
          )}
        </ul>
      </Container>
    </section>
  );
}
