import React from 'react';
import { DataContext } from '../../common/contexts';
import { Container } from '../../layout';
import { SkillIcon } from '../';
import './Experience.scss';

export function Experience() {
  const data = React.useContext(DataContext);
  if (!data) return null;

  return (
    <section id="experience" className="experience">
      <Container className="experience__container">
        <header className="experience__header">
          <h2 className="experience__title">Where I&apos;ve Been</h2>
        </header>
        <div className="experience__timeline" tabIndex={-1}>
          {data.experience?.map(
            ({
              company,
              position,
              startDate,
              endDate,
              description,
              skills,
            }) => (
              <article
                className="experience__timeline-article"
                key={`${company}-${position}-${startDate}`}
                tabIndex={0}
              >
                <header className="experience__timeline-header">
                  <h3 className="experience__timeline-company">{company}</h3>
                  <h4 className="experience__timeline-position">{position}</h4>
                  <span className="experience__timeline-date">
                    {startDate} - {endDate}
                  </span>
                </header>
                <div className="experience__timeline-content">
                  <p className="experience__timeline-description">
                    {description}
                  </p>
                  <div className="experience__timeline-skills">
                    <h6>Skill Development</h6>
                    {skills.map((skill) => (
                      <SkillIcon
                        className="experience__timeline-skill"
                        key={skill}
                        skill={skill}
                      />
                    ))}
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
