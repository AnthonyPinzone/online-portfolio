import React from 'react';
import { DataContext } from '../../common/contexts';
import { Container } from '../../layout';
import { SkillIcon } from '../';
import { BsArrowUpRight } from 'react-icons/bs';
import './Projects.scss';

export function Projects() {
  const data = React.useContext(DataContext);
  if (!data) return null;

  return (
    <section id="projects" className="projects">
      <Container className="projects__container">
        <h2 className="projects__title">What I&apos;ve Worked On</h2>
        <ul className="projects__gallery">
          {data.projects?.map(
            ({ name, description, skills, cover, slug }) => (
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
                    {description}
                  </p>
                  <footer className="projects__gallery-card-footer">
                    <div className="projects__gallery-card-skills">
                      {skills.map((skill) => (
                        <SkillIcon
                          className="projects__gallery-card-skill"
                          key={skill}
                          skill={skill}
                        />
                      ))}
                    </div>
                    <a className="projects__gallery-card-link" href={`/projects/${slug}`}>
                      View Project <BsArrowUpRight />
                    </a>
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
