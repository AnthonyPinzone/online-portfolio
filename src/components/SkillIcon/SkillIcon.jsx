import PropTypes from 'prop-types';
import getSkillDetails from '../../helpers/getSkillDetails';
import './SkillIcon.scss';

export function SkillIcon({ skill, ...rest }) {
  const skillDetails = getSkillDetails(skill);

  return skillDetails ? (
    <figure className={`skill-icon ${rest.className}`} tabIndex={0}>
      {skillDetails.icon && <skillDetails.icon {...skillDetails.props} />}
      <figcaption>{skillDetails.title}</figcaption>
    </figure>
  ) : null;
}

SkillIcon.propTypes = {
  skill: PropTypes.string,
};
