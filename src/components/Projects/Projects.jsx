import React from 'react';
import { DataContext } from '../../common/contexts';
import { Container } from '../../layout';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoJquery,
  BiLogoReact,
  BiLogoSass,
  BiLogoTypescript,
} from 'react-icons/bi';
import { BsArrowUpRight } from 'react-icons/bs';
import './Projects.scss';

export function Projects() {
  const data = React.useContext(DataContext);
  if (!data) return null;

  return (
    <section className="projects">
      <Container className="projects__container">
        <h2 className="projects__title">What I've Worked On</h2>
        <ul className="projects__gallery">
          {data.projects?.map(
            ({ name, description, skills, featuredImage, url }) => (
              <li className="projects__gallery-card" key={name}>
                <figure className="projects__gallery-figure">
                  <img
                    className="projects__gallery-img"
                    src={featuredImage}
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
                      {skills.includes('html') && (
                        <AiFillHtml5
                          title="HTML"
                          fill="var(--html-logo-color)"
                        />
                      )}
                      {skills.includes('css') && (
                        <BiLogoCss3 title="CSS" fill="var(--css-logo-color)" />
                      )}
                      {skills.includes('sass') && (
                        <BiLogoSass
                          title="Sass"
                          fill="var(--sass-logo-color)"
                        />
                      )}
                      {skills.includes('javascript') && (
                        <BiLogoJavascript
                          title="Javascript"
                          fill="var(--javascript-logo-color)"
                        />
                      )}
                      {skills.includes('jquery') && (
                        <BiLogoJquery
                          title="jQuery"
                          fill="var(--jquery-logo-color)"
                        />
                      )}
                      {skills.includes('react') ||
                        (skills.includes('react native') && (
                          <BiLogoReact
                            title="React"
                            fill="var(--react-logo-color)"
                          />
                        ))}
                      {skills.includes('typescript') && (
                        <BiLogoTypescript
                          title="Typescript"
                          fill="var(--typescript-logo-color)"
                        />
                      )}
                    </div>
                    <a className="projects__gallery-card-link" href={url}>
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
